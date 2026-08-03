export interface Project {
  id: string;
  tag: string;
  title: string;
  description: string;
  stack: string[];
  codeUrl: string;
  demoUrl?: string;
  demoLabel?: string;
  color: string; // CSS var name, e.g. "--p1"
}

export const projects: Project[] = [
  {
    id: "agentsec",
    tag: "Security",
    title: "AgentSec",
    description:
      "AI agent security platform — static and runtime scanning, adversarial attack testing, and continuous evaluation, backed by a majority-vote verification system so findings are never a single AI's guess.",
    stack: ["FastAPI", "MongoDB", "PostgreSQL", "Next.js", "Groq", "JWT"],
    codeUrl: "https://github.com/arvindkumar-ship-it/AgentSec",
    demoUrl: "https://agent-sec-teal.vercel.app/",
    color: "--p1",
  },
  {
    id: "raahgir",
    tag: "Travel Intelligence",
    title: "Raahgir AI",
    description:
      "Multi-agent travel planning pipeline — real-time weather, places, currency, and search data fused into a day-by-day itinerary, with graceful fallback on every external dependency.",
    stack: ["FastAPI", "LangGraph", "Groq", "Next.js", "Tavily"],
    codeUrl: "https://github.com/arvindkumar-ship-it/Raahgir",
    color: "--p2",
  },
  {
    id: "careflow",
    tag: "Healthcare",
    title: "CareFlow",
    description:
      "AI-assisted clinical dashboard — extracts medication, test, and vital-sign orders from doctors' notes with an extraction prompt explicitly built to prevent invented medical information.",
    stack: ["FastAPI", "MongoDB", "Groq", "Next.js", "shadcn/ui"],
    codeUrl: "https://github.com/arvindkumar-ship-it/Careflow",
    demoUrl: "https://frontend-8lrz98nrr-arvindkumar197g-4537s-projects.vercel.app/",
    demoLabel: "Demo",
    color: "--p3",
  },
  {
    id: "anvesh",
    tag: "Developer Tooling",
    title: "Anvesh",
    description:
      "10-agent pipeline that reads API documentation and produces working, pre-hardened client code — tested against real-world failure modes, with a live event-driven dashboard showing each step as it runs.",
    stack: ["LiteLLM", "LangChain", "ChromaDB", "FastAPI", "Socket.IO"],
    codeUrl: "https://github.com/arvindkumar-ship-it/Anvesh",
    color: "--p4",
  },
];

export const coreStack = [
  "Python",
  "FastAPI",
  "Next.js",
  "MongoDB",
  "LangGraph",
  "Groq",
];

export const tools = [
  "LiteLLM",
  "ChromaDB",
  "PostgreSQL",
  "XGBoost",
  "Docker",
  "NetworkX",
  "Socket.IO",
  "JWT + bcrypt",
  "Razorpay",
  "SQLAlchemy + Alembic",
  "Motor",
  "HuggingFace",
  "BeautifulSoup + PyMuPDF",
  "Faker",
  "WeasyPrint + Jinja2",
  "Sentry",
  "Tavily",
  "shadcn/ui",
  "OpenWeatherMap + Foursquare",
  "Render + Vercel",
];

export const achievements = [
  {
    badge: "TOP 20%",
    title: "Intl Quant Championship 2025",
    detail: "Global quantitative research competition",
  },
  {
    badge: "GOLD LEVEL",
    title: "WorldQuant BRAIN",
    detail: "Research Consultant — designing & testing alphas",
  },
  {
    badge: "COMPLETED",
    title: "Summer Analytics",
    detail: "Applied data science program",
  },
  {
    badge: "FINALIST",
    title: "Strategy Storm — IIT Guwahati",
    detail: "Global Finalist, Case Competition",
  },
  {
    badge: "FINALIST",
    title: "Investomania — IIT Hyderabad",
    detail: "Case Competition Finalist",
  },
  {
    badge: "TOP 10",
    title: "Case Crackers — Delhi University",
    detail: "Among top 10 Nationally",
  },
  {
    badge: "1st RUNNER-UP",
    title: "Hackwarts — RKGIT",
    detail: "2nd position, team LazyCoders",
  },
];

export const socials = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/arvindkumar7977" },
  { label: "GitHub", url: "https://github.com/arvindkumar-ship-it" },
  {
    label: "Resume",
    url: "https://drive.google.com/file/d/1OMO-qRosjFVFrsxISYBTKGp1TBcY9Su5/view?usp=sharing",
  },
  { label: "Email", url: "mailto:arvindkumar.acad@gmail.com" },
];


export interface JudgmentItem {
  title: string;
  detail: string;
}

export const engineeringJudgment: JudgmentItem[] = [
  {
    title: "Fail-closed, not fail-open",
    detail:
      "Runtime agent shielding blocks on uncertainty by default (AgentSec) — caught and reversed an earlier fail-open bug.",
  },
  {
    title: "Judge reliability under uncertainty",
    detail:
      "Anvesh's single-LLM-judge adversarial testing evolved into AgentSec's 3-signal majority-vote verifier (dual-temp LLM + deterministic heuristic).",
  },
  {
    title: "Graceful degradation as a design principle",
    detail:
      "Raahgir's 4 external API integrations each degrade independently to realistic defaults — the pipeline can't 500 at the data-fetch stage.",
  },
  {
    title: "Documented bug-fix reasoning",
    detail:
      "CareFlow's multi-order truncation bug — fixed by raising token budget AND adding an explicit anti-summarization instruction, not just one or the other.",
  },
];

export const securityPractices: JudgmentItem[] = [
  {
    title: "Fail-closed defaults",
    detail: "Uncertain agent actions are blocked, not allowed, by default.",
  },
  {
    title: "Constant-time comparison",
    detail: "Razorpay webhook signatures verified with constant-time HMAC-SHA256 comparison.",
  },
  {
    title: "Race-condition-safe quotas",
    detail: "Postgres row-locking via a single UPDATE-with-WHERE-clause instead of check-then-increment.",
  },
  {
    title: "AST-based static scanning",
    detail: "Code analysis walks the AST rather than pattern-matching with regex.",
  },
  {
    title: ".env leak, caught and fixed",
    detail: "A real leak across 2 repos — now a standing pre-commit habit, not just a one-off fix.",
  },
];