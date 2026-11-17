/**
 * Lightweight motion layer for the landing page.
 *
 * Authoring is done with data attributes in the markup; the animating itself is CSS (see the
 * "Motion" block in layouts/Layout.astro). Everything here is a no-op for people who prefer
 * reduced motion: the CSS never hides anything in that case, and the JS exits early.
 *
 *   data-reveal[="fade|left|right|scale"]  fade/slide in when scrolled into view (--i = stagger index)
 *   data-split                             headline is split into words that rise out of a mask
 *   data-wipe[="right"]                    clip-path wipe (images)
 *   data-count                             number counts up from 0 ("150+" keeps its suffix)
 *   data-parallax="0.08"                   element drifts relative to scroll (negative = faster)
 *   data-parallax-scroll="0.08"            same, but driven by absolute scroll (hero)
 *   data-parallax-img                      inner image of a clipped frame, scaled up so it can drift
 *   data-tilt                              subtle pointer tilt (fine pointers only)
 *   data-follow                            child .open-mark leans toward the cursor
 */

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const root = document.documentElement;

/* ---------- helpers ---------- */

function splitWords(el: HTMLElement) {
  if (el.dataset.splitDone) return;
  let index = 0;

  const walk = (node: Node) => {
    Array.from(node.childNodes).forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE) {
        const parts = (child.textContent ?? "").split(/(\s+)/);
        const frag = document.createDocumentFragment();
        parts.forEach((part) => {
          if (part === "") return;
          if (/^\s+$/.test(part)) {
            frag.append(document.createTextNode(" "));
            return;
          }
          const outer = document.createElement("span");
          outer.className = "w";
          const inner = document.createElement("span");
          inner.className = "w-in";
          inner.style.setProperty("--wi", String(index++));
          inner.textContent = part;
          outer.append(inner);
          frag.append(outer);
        });
        child.replaceWith(frag);
      } else if (child.nodeType === Node.ELEMENT_NODE && (child as HTMLElement).tagName !== "BR") {
        walk(child);
      }
    });
  };

  walk(el);
  el.dataset.splitDone = "true";
  el.classList.add("is-split");
}

function countUp(el: HTMLElement) {
  const text = el.textContent ?? "";
  const match = text.match(/^(\D*)(\d+(?:[.,]\d+)?)(.*)$/);
  if (!match) return;
  const [, prefix, numeric, suffix] = match;
  const target = parseFloat(numeric.replace(",", "."));
  const decimals = numeric.includes(".") || numeric.includes(",") ? 1 : 0;
  const duration = 1400;
  const start = performance.now();

  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 4);
    el.textContent = `${prefix}${(target * eased).toFixed(decimals)}${suffix}`;
    if (t < 1) requestAnimationFrame(tick);
  };
  el.textContent = `${prefix}${(0).toFixed(decimals)}${suffix}`;
  requestAnimationFrame(tick);
}

/* ---------- scroll progress + nav state (also fine with reduced motion) ---------- */

function initScrollProgress() {
  let ticking = false;
  const update = () => {
    const max = root.scrollHeight - window.innerHeight;
    const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    root.style.setProperty("--scroll-progress", p.toFixed(4));
    ticking = false;
  };
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true },
  );
  update();
}

function initNavActive() {
  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(".navbar-link[href^='#']"));
  if (!links.length) return;

  const map = new Map<Element, HTMLAnchorElement>();
  links.forEach((link) => {
    const target = document.querySelector(link.getAttribute("href") ?? "");
    if (target) map.set(target, link);
  });

  const visible = new Set<Element>();
  const setActive = () => {
    // The visible section closest to the top of the viewport wins.
    let best: Element | null = null;
    let bestTop = Infinity;
    visible.forEach((el) => {
      const top = Math.abs(el.getBoundingClientRect().top);
      if (top < bestTop) {
        bestTop = top;
        best = el;
      }
    });
    links.forEach((l) => l.classList.toggle("is-active", !!best && map.get(best) === l));
  };

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
      setActive();
    },
    { rootMargin: "-35% 0px -55% 0px" },
  );
  map.forEach((_, section) => io.observe(section));
}

/* ---------- reveal / split / wipe / count ---------- */

function initReveals() {
  const targets = Array.from(
    document.querySelectorAll<HTMLElement>("[data-reveal], [data-split], [data-wipe], [data-count]"),
  );

  targets.forEach((el) => {
    if (el.hasAttribute("data-split")) splitWords(el);
  });

  if (reduceMotion) {
    targets.forEach((el) => el.classList.add("is-in"));
    return;
  }

  // Elements hidden with clip-path (data-wipe) count as "not visible" to IntersectionObserver,
  // so they would never fire. Observe their parent instead and reveal the element from there.
  const watched = new Map<Element, HTMLElement[]>();
  targets.forEach((el) => {
    const host = el.hasAttribute("data-wipe") ? (el.parentElement ?? el) : el;
    watched.set(host, [...(watched.get(host) ?? []), el]);
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        (watched.get(entry.target) ?? []).forEach((el) => {
          el.classList.add("is-in");
          if (el.hasAttribute("data-count")) countUp(el);
        });
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -6% 0px" },
  );
  watched.forEach((_, host) => io.observe(host));
}

/* ---------- parallax ---------- */

function initParallax() {
  if (reduceMotion) return;

  const scale = window.innerWidth < 700 ? 0.5 : 1;
  const items = Array.from(
    document.querySelectorAll<HTMLElement>("[data-parallax], [data-parallax-scroll], [data-parallax-img]"),
  ).map((el) => ({
    el,
    speed: parseFloat(el.dataset.parallax ?? el.dataset.parallaxScroll ?? el.dataset.parallaxImg ?? "0.08") || 0.08,
    mode: el.hasAttribute("data-parallax-scroll") ? "scroll" : "view",
    host: el.hasAttribute("data-parallax-img") ? (el.parentElement as HTMLElement) : el,
    visible: false,
  }));
  if (!items.length) return;

  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        const item = items.find((i) => i.host === e.target);
        if (item) item.visible = e.isIntersecting;
      }),
    { rootMargin: "20% 0px 20% 0px" },
  );
  items.forEach((i) => io.observe(i.host));

  let ticking = false;
  const update = () => {
    const vh = window.innerHeight;
    items.forEach((item) => {
      if (!item.visible && item.mode !== "scroll") return;
      let y: number;
      if (item.mode === "scroll") {
        y = Math.min(window.scrollY, vh) * item.speed;
      } else {
        const rect = item.host.getBoundingClientRect();
        const offset = Math.max(-vh, Math.min(vh, rect.top + rect.height / 2 - vh / 2));
        y = -offset * item.speed;
      }
      item.el.style.setProperty("--py", `${(y * scale).toFixed(1)}px`);
    });
    ticking = false;
  };
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true },
  );
  window.addEventListener("resize", update, { passive: true });
  update();
}

/* ---------- pointer effects (desktop only) ---------- */

function initPointer() {
  if (reduceMotion || !finePointer) return;

  document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((el) => {
    const max = 4; // degrees
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--ry", `${(px * max * 2).toFixed(2)}deg`);
      el.style.setProperty("--rx", `${(-py * max * 2).toFixed(2)}deg`);
    });
    el.addEventListener("pointerleave", () => {
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
    });
  });

  document.querySelectorAll<HTMLElement>("[data-follow]").forEach((host) => {
    const mark = host.querySelector<HTMLElement>(".open-mark");
    if (!mark) return;
    host.addEventListener("pointermove", (e) => {
      const r = host.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      mark.style.setProperty("--mx", `${(px * 90).toFixed(1)}px`);
      mark.style.setProperty("--my", `${(py * 50).toFixed(1)}px`);
    });
    host.addEventListener("pointerleave", () => {
      mark.style.setProperty("--mx", "0px");
      mark.style.setProperty("--my", "0px");
    });
  });
}

/* ---------- boot ---------- */

function boot() {
  initScrollProgress();
  initNavActive();
  initReveals();
  initParallax();
  initPointer();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot, { once: true });
} else {
  boot();
}
