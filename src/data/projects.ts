export type ProjectCategory = "featured" | "series";
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
    img: "/project/imuii.png",
    links: [{ label: "Visit IMUII", href: "https://imuii.id/" }],
  },
  {
    slug: "hermes",
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
    img: "/project/hermesimuii.png",
    links: [{ label: "Open IMUII", href: "https://imuii.id/" }],
  },
  {
    slug: "it-centrum-finance",
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
    img: "/project/itcentrum.png",
  },
  {
    slug: "uii-tanda-mata",
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
    img: "/project/uiitandamata.png",
    links: [{ label: "Visit site", href: "https://uiitandamata.com" }],
  },
  {
    slug: "halalmate",
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
    img: "/project/halalmate.png",
  },
  {
    slug: "keepup",
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
    img: "/project/keepup.png",
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
      "7 coffee shop landing pages, each with its own visual language",
      "Storytelling, typography, layout, and interaction tailored per brand",
    ],
    techStack: ["Landing pages", "Brand storytelling", "Custom visual language"],
    impact: "7 coffee shop sites, each with its own visual language.",
    img: "/project/1coffe1web/aftr.png",
    direction:
      "1 Coffee 1 Web is not just rebuilding coffee shop websites. Every project tries to answer one question: if this coffee shop's character were translated into a website, how would it feel? That is why each project has a different visual language, typography, storytelling, layout, and interaction.",
    coffeeSites: [
      {
        number: "01",
        name: "AFTR Coffee Sagan",
        url: "https://aftr-coffee-sagan.d-raihan2004.chatgpt.site",
        img: "/project/1coffe1web/aftr.png",
        description:
          "Landing page for AFTR Coffee Sagan with an urban, modern tone that fits a 24-hour coffee shop. The site positions AFTR as a place to work, hang out, or pause — at any hour of the day.",
        highlights: ["24 Hours", "Work From Cafe", "Urban Lifestyle"],
      },
      {
        number: "02",
        name: "First Lap × Java Grind Works",
        url: "https://first-lap-coffee.d-raihan2004.chatgpt.site",
        img: "/project/1coffe1web/firstlap.png",
        description:
          "A site structured around a full-day journey: FIRST LAP → MID LAP → LAST LAP. The concept frames First Lap as a place that can accompany guests from morning coffee to a late hangout. Collaboration with Java Grind Works also reinforces the coffee craftsmanship side of the brand.",
        highlights: ["Coffee for Every Part of Your Day", "Community", "Industrial"],
      },
      {
        number: "03",
        name: "Tetra Coffee / Tetra Sagan",
        url: "https://tetra-coffee-sagan.d-raihan2004.chatgpt.site",
        img: "/project/1coffe1web/tetra.png",
        description:
          "A landing page exploring Tetra Coffee's visual identity with an editorial, modern approach. The design leans premium and uses space, coffee, and atmosphere as the main storytelling devices.",
        highlights: ["Modern Coffee Culture", "Editorial", "Visual Experience"],
      },
      {
        number: "04",
        name: "Saorsa Kopi / Saorsa HQ",
        url: "https://saorsa-headquarters.d-raihan2004.chatgpt.site/",
        img: "/project/1coffe1web/saorsa.png",
        description:
          "Saorsa is designed as a coffee shop with a strong identity and a more intimate atmosphere. The site leans on visuals, space, typography, and the feeling of actually being there.",
        highlights: ["Atmospheric", "Community", "Coffee Experience"],
      },
      {
        number: "05",
        name: "Bura Bura HQ",
        url: "https://bura-bura-headquarters.d-raihan2004.chatgpt.site",
        img: "/project/1coffe1web/burabura.png",
        description:
          "Bura Bura HQ is positioned not just as a coffee shop, but as “The Working Headquarters.” The landing page lifts their HQ character — from production and training to signature products like Dirty Latte, distilled milk, and no-added-sugar drinks.",
        highlights: ["The Working Headquarters", "24 Hours", "Coffee Production", "No Added Sugar"],
      },
      {
        number: "06",
        name: "UD Djaya Coffee — Jakal",
        url: "https://ud-djaya-coffee-jakal.d-raihan2004.chatgpt.site",
        img: "/project/1coffe1web/uddjaya.png",
        description:
          "A retro, community-oriented site with the identity “Berdjaya Bersama.” The landing page highlights the Jakal branch — including the WFC/silent room, community activity, events, and the distinctive UD Djaya atmosphere.",
        highlights: ["Berdjaya Bersama", "Retro", "Community", "WFC"],
      },
      {
        number: "07",
        name: "UD Mitra",
        url: "https://ud-mitra-jogja.d-raihan2004.chatgpt.site",
        img: "/project/1coffe1web/udmitra.png",
        description:
          "A site built around a simple idea: “KETEMU DI MITRA.” UD Mitra is shown as a meeting point for coffee, friendship, conversation, and whatever happens after. The communication concept carries the tagline: Coffee. People. Whatever happens after.",
        highlights: ["Ketemu di Mitra", "People", "Community", "Everyday Coffee"],
      },
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.category === "featured");
export const seriesProjects = projects.filter((project) => project.category === "series");

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
