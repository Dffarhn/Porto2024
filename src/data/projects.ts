export type ProjectCategory = "featured" | "series";
export type ProjectTag = "Web" | "Backend" | "AI" | "Mobile" | "Research";
export type ProjectStatus = "shipped" | "wip";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface CoffeeSite {
  number: string;
  name: string;
  url?: string;
  img?: string;
  description: string;
  highlights: string[];
}

export interface Project {
  slug: string;
  /** Used by the filter chips on the landing page and /projects. */
  tags?: ProjectTag[];
  /** Shown as a large row on the landing page. Everything else is a compact card. */
  spotlight?: boolean;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  status: ProjectStatus;
  initials: string;
  accent: string;
  client?: string;
  role?: string;
  shortDescription: string;
  description: string;
  features: string[];
  techStack: string[];
  impact?: string;
  img?: string;
  links?: ProjectLink[];
  coffeeSites?: CoffeeSite[];
  bonusProjects?: CoffeeSite[];
  direction?: string;
}

export const projects: Project[] = [
  {
    slug: "imuii",
    tags: ["Web","Backend"],
    spotlight: true,
    title: "IMUII",
    subtitle: "End-to-End Automation Platform",
    category: "featured",
    status: "shipped",
    initials: "IM",
    accent: "96, 165, 250",
    role: "Founder & Technical Architect",
    shortDescription:
      "Automation platform I built from scratch. It manages 45+ active projects with an 82% deployment success rate.",
    description:
      "IMUII is an automation platform I built from scratch as Founder & Technical Architect. It automates the project lifecycle — initialize from CLI, import from GitHub, or generate a site with AI — then connects every project to monitoring, logs, and deployments in production.",
    features: [
      "Automated CI/CD",
      "One-command project initialization",
      "Real-time monitoring",
      "GitHub & environment provisioning",
    ],
    techStack: ["Golang", "Docker", "PostgreSQL", "Redis"],
    impact: "Used across dozens of active projects • ~19% lower CPU usage in production",
    img: "/project/imuii.webp",
    links: [{ label: "Visit IMUII", href: "https://imuii.id/" }],
  },
  {
    slug: "hermes",
    tags: ["AI","Backend"],
    title: "Hermes @ IMUII",
    subtitle: "AI Agent on IMUII",
    category: "featured",
    status: "shipped",
    initials: "HE",
    accent: "167, 139, 250",
    role: "Implementation & Integration",
    client: "IMUII",
    shortDescription:
      "Hermes agent implemented on IMUII — operable from the dashboard UI and Discord, not only the CLI.",
    description:
      "I explored Hermes and implemented it on IMUII so the platform can be operated through a persistent AI agent. The agent is reachable from the IMUII UI and from Discord, turning deployment and operations workflows into conversations instead of only dashboard clicks or CLI commands.",
    features: [
      "Hermes agent running on IMUII",
      "Dashboard UI access",
      "Discord as an operations channel",
      "Conversational workflows on top of the automation platform",
    ],
    techStack: ["Hermes Agent", "Discord", "IMUII", "Golang"],
    impact: "IMUII can be operated from UI and Discord, not only from CLI.",
    img: "/project/hermesimuii.webp",
    links: [{ label: "Open IMUII", href: "https://imuii.id/" }],
  },
  {
    slug: "it-centrum-finance",
    tags: ["Web","Backend"],
    title: "IT Centrum Finance",
    subtitle: "Financial Management System",
    category: "featured",
    status: "shipped",
    initials: "IC",
    accent: "52, 211, 153",
    role: "Full Stack Developer",
    client: "IT Centrum UII",
    shortDescription:
      "Finance app for IT Centrum UII: journals, RKAT, chart of accounts, and related financial modules.",
    description:
      "A financial management application requested by IT Centrum Universitas Islam Indonesia. The system supports day-to-day finance operations — recording journals, managing RKAT (annual work and budget plans), maintaining the chart of accounts (COA), and other modules needed by the unit.",
    features: [
      "Journal entries",
      "RKAT (annual work & budget plan)",
      "Chart of Accounts (COA)",
      "Related financial modules for IT Centrum operations",
    ],
    techStack: [],
    impact: "Built as an internal finance system for IT Centrum UII.",
    img: "/project/itcentrum.webp",
  },
  {
    slug: "uii-tanda-mata",
    tags: ["Web"],
    title: "UII Tanda Mata",
    subtitle: "Live Web Platform",
    category: "featured",
    status: "shipped",
    initials: "TM",
    accent: "251, 191, 36",
    role: "Full Stack Developer",
    client: "UII",
    shortDescription:
      "Web platform for UII Tanda Mata, live in production at uiitandamata.com.",
    description:
      "UII Tanda Mata is a production web platform I built and shipped. It is live at uiitandamata.com and serves as the public-facing site for the product.",
    features: [
      "Production website for UII Tanda Mata",
      "Public-facing experience at uiitandamata.com",
    ],
    techStack: [],
    img: "/project/uiitandamata.webp",
    links: [{ label: "Visit site", href: "https://uiitandamata.com" }],
  },
  {
    slug: "halalmate",
    tags: ["AI","Mobile","Backend"],
    spotlight: true,
    title: "HalalMate",
    subtitle: "AI-Powered Mobile App",
    category: "featured",
    status: "shipped",
    initials: "HM",
    accent: "45, 212, 191",
    role: "Backend & AI Pipeline",
    shortDescription:
      "AI-powered mobile app that helps Muslim travelers verify halal food automatically using OCR and OpenAI.",
    description:
      "HalalMate is an AI-powered mobile app that helps Muslim travelers verify halal food automatically. I built the backend services and AI pipeline using OCR and OpenAI. The project later received a Silver Medal at INDES 2025 (Malaysia) and a Best Paper award at Automata 2025.",
    features: [
      "AI-powered halal verification",
      "OCR for food label scanning",
      "Google Maps integration",
    ],
    techStack: ["Golang", "Flutter", "OpenAI API", "OCR", "Google Maps API"],
    impact: "93% classification accuracy • 100% recall • Silver Medal, INDES 2025",
    img: "/project/halalmate.webp",
  },
  {
    slug: "keepup",
    tags: ["Backend","AI","Research"],
    title: "KeepUp",
    subtitle: "Mental Health Research System",
    category: "featured",
    status: "shipped",
    initials: "KU",
    accent: "244, 114, 182",
    role: "Backend Engineer",
    client: "Universitas Islam Indonesia",
    shortDescription:
      "Backend system for mental health research at UII — auth, RBAC, and automated report generation.",
    description:
      "Backend system for mental health research at Universitas Islam Indonesia. It handles secure authentication, role-based access control, and automated report generation so researchers can run a more reliable study pipeline.",
    features: [
      "Secure authentication & RBAC",
      "Automated report generation (PDF & Excel)",
      "AI-powered report interpretation",
    ],
    techStack: ["NestJS", "PostgreSQL", "Redis", "OpenAI API"],
    impact: "A secure, automated research pipeline for mental health studies",
    img: "/project/keepup.webp",
  },
  {
    slug: "santrihub",
    tags: ["Web", "Mobile"],
    title: "SantriHub",
    subtitle: "Pesantren Attendance Platform",
    category: "featured",
    status: "shipped",
    initials: "SH",
    accent: "34, 197, 94",
    role: "Solo Full Stack Developer",
    shortDescription:
      "Platform that simplifies santri attendance with per-session barcode scanning and memorization logs, for admins, staff, and guardians.",
    description:
      "SantriHub is a management platform for Islamic boarding schools (pesantren) that makes santri attendance easier. Staff open a session, scan student barcodes, and record present, excused, or absent, while each Murajaah session also keeps a memorization (hafalan) entry. I built it solo as a full stack developer: the admin web panel and the mobile app used by staff and guardians.",
    features: [
      "Per-session attendance with barcode scanning",
      "Memorization (hafalan) progress history",
      "Printable barcode cards and PDF/Excel reports",
      "Role-based access for admin, staff, and guardians",
    ],
    techStack: ["Next.js", "Flutter"],
    img: "/project/santrihub.webp",
    links: [{ label: "Visit SantriHub", href: "https://santrihub-teal.vercel.app/" }],
  },
  {
    slug: "ahlan",
    tags: ["Web", "AI", "Backend"],
    title: "AHLAN",
    subtitle: "Chatbot with Hermes Integration",
    category: "featured",
    status: "shipped",
    initials: "AH",
    accent: "56, 189, 248",
    role: "Solo Full Stack Developer",
    shortDescription:
      "Chatbot platform for pesantren admissions, answering from the school's own documents over WhatsApp and Telegram, integrated with Hermes.",
    description:
      "AHLAN makes building and running chatbots easier by integrating Hermes. Pesantren upload their brochures, fees, and rules, and the bot answers prospective guardians on WhatsApp and Telegram, citing the source document. Staff manage conversations from a central dashboard and follow up on questions the bot could not answer. I built the whole platform solo.",
    features: [
      "Hermes agent integration",
      "WhatsApp and Telegram channels",
      "Knowledge base from uploaded documents, with cited sources",
      "Dashboard inbox and log of unanswered questions",
    ],
    techStack: ["Golang", "Next.js", "Hermes Agent"],
    img: "/project/ahlan.webp",
    links: [{ label: "Visit AHLAN", href: "https://ahlanapp.cloud/" }],
  },
  {
    slug: "future-doctor-tryout",
    tags: ["Web", "AI"],
    title: "Future Doctor Tryout",
    subtitle: "Tryout & Live Class System",
    category: "featured",
    status: "shipped",
    initials: "FD",
    accent: "239, 68, 68",
    role: "Solo Full Stack Developer",
    client: "Future Doctor Indonesia",
    shortDescription:
      "Tryout system for Future Doctor Indonesia with Hermes as an assistant and a live class feature.",
    description:
      "A tryout system built for Future Doctor Indonesia, a learning partner for medical students and doctors. It integrates Hermes as a learning assistant and includes a live class feature. I built it solo as a full stack developer.",
    features: [
      "Tryout system for medical exam preparation",
      "Hermes as an in-app assistant",
      "Live class feature",
    ],
    techStack: ["PHP", "Hermes Agent"],
    img: "/project/futuredoctor.webp",
    links: [{ label: "Visit site", href: "https://tryout.futuredoctorindonesia.com/" }],
  },
  {
    slug: "mibebi",
    spotlight: true,
    tags: ["Web", "Mobile"],
    title: "Mibebi",
    subtitle: "Integrated Cashier (POS) App",
    category: "featured",
    status: "shipped",
    initials: "MB",
    accent: "249, 115, 22",
    role: "Co-Founder",
    shortDescription:
      "Cashier app for F&B and small businesses with many integrated features, including an owner dashboard.",
    description:
      "Mibebi is a cashier (POS) application for cafes, restaurants, and culinary small businesses in Yogyakarta, packed with integrated features such as QR ordering, automatic daily reports, and an owner dashboard for revenue, best sellers, and busy hours. I co-founded it and work on the product across mobile and web.",
    features: [
      "Daily transactions and QR ordering",
      "Automatic daily reports",
      "Owner dashboard: revenue, best sellers, busy hours",
    ],
    techStack: ["Flutter", "Next.js"],
    img: "/project/mibebi.webp",
    links: [{ label: "Visit Mibebi", href: "https://www.mibebi.com/" }],
  },
  {
    slug: "1-coffee-1-web",
    title: "1 Coffee 1 Web",
    subtitle: "Design series in progress",
    category: "series",
    status: "wip",
    initials: "1C",
    accent: "245, 158, 11",
    role: "Designer & Builder",
    shortDescription:
      "One landing page per coffee shop — each design follows the character, story, and unique selling proposition of that place.",
    description:
      "An experiment in making one landing page for every coffee shop, with a design approach that follows the character, story, and unique selling proposition of each place. 1 Coffee 1 Web is not about reprinting the same template. Each site asks: if this coffee shop's character became a website, how would it feel?",
    features: [
      "One landing page per coffee shop, each with its own visual language",
      "Storytelling, typography, layout, and interaction tailored per brand",
    ],
    techStack: ["Landing pages", "Brand storytelling", "Custom visual language"],
    impact: "16 coffee shop sites, each with its own visual language.",
    img: "/project/1coffe1web/udmitra.webp",
    direction:
      "1 Coffee 1 Web is not just rebuilding coffee shop websites. Every project tries to answer one question: if this coffee shop's character were translated into a website, how would it feel? That is why each project has a different visual language, typography, storytelling, layout, and interaction.",
    coffeeSites: [
      {
        number: "01",
        name: "AFTR Coffee Sagan",
        url: "https://aftr-coffee-sagan.d-raihan2004.chatgpt.site",
        img: "/project/1coffe1web/aftr.webp",
        description:
          "Landing page for AFTR Coffee Sagan with an urban, modern tone that fits a 24-hour coffee shop. The site positions AFTR as a place to work, hang out, or pause — at any hour of the day.",
        highlights: ["24 Hours", "Work From Cafe", "Urban Lifestyle"],
      },
      {
        number: "02",
        name: "First Lap × Java Grind Works",
        url: "https://first-lap-coffee.d-raihan2004.chatgpt.site",
        img: "/project/1coffe1web/firstlap.webp",
        description:
          "A site structured around a full-day journey: FIRST LAP → MID LAP → LAST LAP. The concept frames First Lap as a place that can accompany guests from morning coffee to a late hangout. Collaboration with Java Grind Works also reinforces the coffee craftsmanship side of the brand.",
        highlights: ["Coffee for Every Part of Your Day", "Community", "Industrial"],
      },
      {
        number: "03",
        name: "Tetra Coffee / Tetra Sagan",
        url: "https://tetra-coffee-sagan.d-raihan2004.chatgpt.site",
        img: "/project/1coffe1web/tetra.webp",
        description:
          "A landing page exploring Tetra Coffee's visual identity with an editorial, modern approach. The design leans premium and uses space, coffee, and atmosphere as the main storytelling devices.",
        highlights: ["Modern Coffee Culture", "Editorial", "Visual Experience"],
      },
      {
        number: "04",
        name: "Saorsa Kopi / Saorsa HQ",
        url: "https://saorsa-headquarters.d-raihan2004.chatgpt.site/",
        img: "/project/1coffe1web/saorsa.webp",
        description:
          "Saorsa is designed as a coffee shop with a strong identity and a more intimate atmosphere. The site leans on visuals, space, typography, and the feeling of actually being there.",
        highlights: ["Atmospheric", "Community", "Coffee Experience"],
      },
      {
        number: "05",
        name: "Bura Bura HQ",
        url: "https://bura-bura-headquarters.d-raihan2004.chatgpt.site",
        img: "/project/1coffe1web/burabura.webp",
        description:
          "Bura Bura HQ is positioned not just as a coffee shop, but as “The Working Headquarters.” The landing page lifts their HQ character — from production and training to signature products like Dirty Latte, distilled milk, and no-added-sugar drinks.",
        highlights: ["The Working Headquarters", "24 Hours", "Coffee Production", "No Added Sugar"],
      },
      {
        number: "06",
        name: "UD Djaya Coffee — Jakal",
        url: "https://ud-djaya-coffee-jakal.d-raihan2004.chatgpt.site",
        img: "/project/1coffe1web/uddjaya.webp",
        description:
          "A retro, community-oriented site with the identity “Berdjaya Bersama.” The landing page highlights the Jakal branch — including the WFC/silent room, community activity, events, and the distinctive UD Djaya atmosphere.",
        highlights: ["Berdjaya Bersama", "Retro", "Community", "WFC"],
      },
      {
        number: "07",
        name: "UD Mitra",
        url: "https://ud-mitra-jogja.d-raihan2004.chatgpt.site",
        img: "/project/1coffe1web/udmitra.webp",
        description:
          "A site built around a simple idea: “KETEMU DI MITRA.” UD Mitra is shown as a meeting point for coffee, friendship, conversation, and whatever happens after. The communication concept carries the tagline: Coffee. People. Whatever happens after.",
        highlights: ["Ketemu di Mitra", "People", "Community", "Everyday Coffee"],
      },
      {
        number: "08",
        name: "Copenhagen Jakal",
        url: "https://copenhagen-jakal.d-raihan2004.chatgpt.site/",
        img: "/project/1coffe1web/copenhagen.webp",
        description:
          "A Nordic-calm, tropical-warm cafe on Jakal KM.9, told through the headline “Nordic tropical, all day.” The page moves through three moods — morning focus, golden-hour sunset, and after-dark talk — across indoor, outdoor, and rooftop spaces.",
        highlights: ["Nordic", "Tropical", "Rooftop", "Golden Hour"],
      },
      {
        number: "09",
        name: "Ivy Coffee",
        url: "https://ivy-coffee-sunset.d-raihan2004.chatgpt.site/",
        img: "/project/1coffe1web/ivy.webp",
        description:
          "A landing page for Ivy in Condongcatur, built on the line “Work through the day. Stay for the sunset.” A dark green and amber palette, serif headlines, and a golden-hour photo of the rice-field-side terrace carry two moods: quiet indoor focus and sunset outdoor.",
        highlights: ["Golden Hour", "Rice Field View", "Quiet Indoor", "Sunset Outdoor"],
      },
      {
        number: "10",
        name: "Punk Ala Rich",
        url: "https://punk-ala-rich.d-raihan2004.chatgpt.site/",
        img: "/project/1coffe1web/punkalarich.webp",
        description:
          "A horror-comedy coffee concept rooted in Jogja local lore: “Datang untuk kopi. Pulang membawa cerita.” The site presents three chapters, its own roastery, and a weton-based brew finder, with a moody, ritual look of red and purple light against industrial concrete.",
        highlights: ["Local Lore", "Own Roastery", "Weton Brew", "Horror Comedy"],
      },
      {
        number: "11",
        name: "TAMA Specialty Coffee",
        url: "https://tama-specialty-coffee.d-raihan2004.chatgpt.site/",
        img: "/project/1coffe1web/tama.webp",
        description:
          "A calm, minimal landing page for a Godean specialty coffee shop with Japanese-style comfort food. The story is built around “Specialty coffee for slow, focused moments” and a space that lets guests stay.",
        highlights: ["Farm to Cup", "Room to Stay", "Japanese Comfort", "Slow Focus"],
      },
      {
        number: "12",
        name: "Stereos Coffee",
        url: "https://stereos-coffee.d-raihan2004.chatgpt.site/",
        img: "/project/1coffe1web/stereos.webp",
        description:
          "A music-and-coffee concept built on the line “Tune into good frequencies.” The page uses a listening corner and a “Stereos Radio” now-playing bar to turn a familiar place into one set to a better rhythm.",
        highlights: ["Good Frequencies", "Warm Wood", "Focus Mode", "Community Nights"],
      },
      {
        number: "13",
        name: "SUHKA Coffee Ground",
        url: "https://suhka-coffee-ground.d-raihan2004.chatgpt.site/",
        img: "/project/1coffe1web/suhka.webp",
        description:
          "A 24-hour coffee space in Monjali, organized around the time of day: Pagi, Siang, Malam, and Larut. The tagline “Ngopi kapan pun ritmemu mulai” frames it as a warm place to focus, catch up, or pause.",
        highlights: ["Open 24 Hours", "Warm Space", "Focus or Hangout", "Time-of-Day Rhythm"],
      },
      {
        number: "14",
        name: "Agoge Active Basecamp",
        url: "https://agoge-active-basecamp.d-raihan2004.chatgpt.site/",
        img: "/project/1coffe1web/agoge.webp",
        description:
          "A sports-community cafe positioned as “Basecamp-nya Jogja yang aktif.” The site is built around Move, Refuel, Belong, with a community agenda for social runs and rides alongside specialty coffee and comfort food.",
        highlights: ["Move", "Refuel", "Belong", "Basecamp"],
      },
      {
        number: "15",
        name: "Warkop Kamidi",
        url: "https://warkop-kamidi.d-raihan2004.chatgpt.site/",
        img: "/project/1coffe1web/kamidi.webp",
        description:
          "A retro, local warkop that runs all day: “Bubur pagi, kopi sore, makan tengah malam.” The page is organized as a timeline from morning to the small hours, with a menu that follows the hour.",
        highlights: ["Sepanjang Hari", "Warkop Retro", "24 Jam", "Hero Sehari-hari"],
      },
      {
        number: "16",
        name: "Mahliga Coffee & Space",
        url: "https://mahliga-coffee-space.d-raihan2004.chatgpt.site/",
        img: "/project/1coffe1web/mahliga.webp",
        description:
          "A 24-hour coffee shop that doubles as a workspace and meeting spot, with the line “Your corner. Any hour.” The page speaks to students and remote workers with warm night imagery, an after-dark feature, and “no last call.”",
        highlights: ["24 Hours", "Workspace", "Late Night", "Cozy"],
      },
    ],
  },
];

// Display order of the 1 Coffee 1 Web sites, most recommended first. The first three become the
// landing page preview, so they are picked to look different from each other. Entries are matched by
// the `number` written in the data above (its original id) and renumbered 01.. after sorting, so new
// sites can be appended with the next free number and then slotted into this list.
const coffeeOrder = [
  "07", // UD Mitra
  "05", // Bura Bura HQ
  "10", // Punk Ala Rich
  "06", // UD Djaya
  "15", // Warkop Kamidi
  "04", // Saorsa
  "09", // Ivy
  "08", // Copenhagen Jakal
  "16", // Mahliga
  "12", // Stereos
  "13", // SUHKA
  "11", // TAMA
  "02", // First Lap
  "14", // Agoge
  "03", // Tetra
  "01", // AFTR
];
const coffeeRank = (id: string) => {
  const i = coffeeOrder.indexOf(id);
  return i === -1 ? coffeeOrder.length : i;
};
for (const project of projects) {
  if (!project.coffeeSites) continue;
  project.coffeeSites = [...project.coffeeSites]
    .sort((a, b) => coffeeRank(a.number) - coffeeRank(b.number))
    .map((site, index) => ({ ...site, number: String(index + 1).padStart(2, "0") }));
}

// Display order on the landing page. Slugs not listed here keep their array order, after the listed ones.
const featuredOrder = [
  "imuii",
  "mibebi",
  "halalmate",
  "ahlan",
  "santrihub",
  "hermes",
  "future-doctor-tryout",
  "keepup",
  "it-centrum-finance",
  "uii-tanda-mata",
];
const rank = (slug: string) => {
  const i = featuredOrder.indexOf(slug);
  return i === -1 ? featuredOrder.length : i;
};

export const featuredProjects = projects
  .filter((project) => project.category === "featured")
  .sort((a, b) => rank(a.slug) - rank(b.slug));
export const spotlightProjects = featuredProjects.filter((project) => project.spotlight);
export const moreProjects = featuredProjects.filter((project) => !project.spotlight);
export const allTags: ProjectTag[] = Array.from(
  new Set(featuredProjects.flatMap((project) => project.tags ?? [])),
);
export const seriesProjects = projects.filter((project) => project.category === "series");

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
