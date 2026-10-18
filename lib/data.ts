export interface Metric {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  category: string; // drives the filter chips; a new string creates a new category
  title: string;
  summary: string; // one line: what it is and who it is for
  built: string[]; // implementation points
  impact: string[]; // why it matters / what it changed
  metrics: Metric[]; // only measured or countable facts
  industryUse: string[]; // where this can be used directly
  stack: string[];
  codeUrl: string;
  demoUrl?: string;
  color: string; // CSS var, e.g. "--p1"
}

// To add a project: copy one entry and change the fields.
// Prefer measured numbers in `metrics` (latency, accuracy, test count, users, cost).
export const projects: Project[] = [
  {
    id: "agentsec",
    category: "AI Security",
    title: "AgentSec",
    summary:
      "Security platform that scans LLM agents for vulnerabilities before release and blocks unsafe actions at runtime.",
    built: [
      "Static scanner that walks the code AST instead of regex matching",
      "Runtime shield that blocks an agent action by default when the verdict is uncertain (fail-closed)",
      "Adversarial attack suite with continuous re-evaluation",
      "Verifier where 3 signals vote on each finding: LLM judge at two temperatures plus a deterministic heuristic",
      "Razorpay billing with constant-time HMAC-SHA256 webhook verification",
      "Postgres quota enforcement with a single UPDATE-with-WHERE, so concurrent requests cannot overshoot the limit",
    ],
    impact: [
      "A finding is never one model's guess; it needs agreement across independent signals",
      "Found and reversed a fail-open bug in the early runtime shield",
      "Replaced the single-LLM judge from Anvesh after its verdicts proved unreliable",
    ],
    metrics: [
      { value: "3", label: "signals vote on every finding" },
      { value: "2", label: "scan modes: static and runtime" },
    ],
    industryUse: [
      "Pre-release security review of tool-using LLM agents",
      "Runtime guardrail for agents with access to internal APIs or data",
      "CI check that blocks a deploy on high-severity agent findings",
    ],
    stack: ["FastAPI", "MongoDB", "PostgreSQL", "Next.js", "Groq", "JWT"],
    codeUrl: "https://github.com/arvindkumar-ship-it/AgentSec",
    demoUrl: "https://agent-sec-teal.vercel.app/",
    color: "--p1",
  },
  {
    id: "anvesh",
    category: "Developer Tooling",
    title: "Anvesh",
    summary:
      "Pipeline that reads API documentation and generates a working client, already tested against common failure modes.",
    built: [
      "10 specialised agents: doc parsing, client generation, adversarial testing and more",
      "Documentation indexed in ChromaDB so each agent retrieves only the relevant API sections",
      "Model routing through LiteLLM, so the LLM provider can be swapped without code changes",
      "Live dashboard over Socket.IO showing each agent step as it runs",
    ],
    impact: [
      "Generated clients are hardened (timeouts, bad responses, errors) before the developer sees them",
      "Its single-LLM judge limitation led to the 3-signal verifier built in AgentSec",
    ],
    metrics: [{ value: "10", label: "agents in one pipeline" }],
    industryUse: [
      "SDK and client generation for API-first companies",
      "Faster integration for teams consuming poorly documented third-party APIs",
    ],
    stack: ["LiteLLM", "LangChain", "ChromaDB", "FastAPI", "Socket.IO"],
    codeUrl: "https://github.com/arvindkumar-ship-it/Anvesh",
    color: "--p4",
  },
  {
    id: "raahgir",
    category: "Multi-Agent Systems",
    title: "Raahgir AI",
    summary:
      "Travel planner that combines live weather, places, currency and web data into a day-by-day itinerary.",
    built: [
      "LangGraph pipeline of cooperating agents on a FastAPI backend",
      "4 external data sources (weather, places, currency, search), each with its own fallback to realistic defaults",
      "Itinerary generation grounded in the fetched data, served to a Next.js frontend",
    ],
    impact: [
      "One failing third-party API degrades that part of the plan; it does not crash the request",
    ],
    metrics: [{ value: "4", label: "external APIs, each failing independently" }],
    industryUse: [
      "Itinerary generation for travel and booking platforms",
      "Any pipeline that merges several third-party APIs where partial data is acceptable",
    ],
    stack: ["FastAPI", "LangGraph", "Groq", "Next.js", "Tavily"],
    codeUrl: "https://github.com/arvindkumar-ship-it/Raahgir",
    color: "--p2",
  },
  {
    id: "careflow",
    category: "Healthcare AI",
    title: "CareFlow",
    summary:
      "Clinical dashboard that turns a doctor's free-text notes into structured medication, test and vital-sign orders.",
    built: [
      "Extraction prompt that forbids adding any medical detail not present in the note",
      "Fixed a bug where multi-order notes were truncated: raised the token budget and added an explicit instruction not to summarise",
      "FastAPI and MongoDB backend with a Next.js and shadcn/ui dashboard",
    ],
    impact: [
      "Removes manual re-typing of orders from notes",
      "Missing information stays missing instead of being invented",
    ],
    metrics: [{ value: "3", label: "order types: medication, test, vitals" }],
    industryUse: [
      "Note-to-order digitisation in clinics and hospitals",
      "Reducing data-entry load for nursing and front-desk staff",
    ],
    stack: ["FastAPI", "MongoDB", "Groq", "Next.js", "shadcn/ui"],
    codeUrl: "https://github.com/arvindkumar-ship-it/Careflow",
    demoUrl: "https://frontend-8lrz98nrr-arvindkumar197g-4537s-projects.vercel.app/",
    color: "--p3",
  },
];

export const skillGroups = [
  { title: "Backend", items: ["Python", "FastAPI", "SQLAlchemy + Alembic", "Motor", "JWT + bcrypt", "Socket.IO"] },
  { title: "AI & Agents", items: ["LangGraph", "LangChain", "LiteLLM", "Groq", "ChromaDB", "HuggingFace", "Tavily"] },
  { title: "Data", items: ["MongoDB", "PostgreSQL", "XGBoost", "NetworkX"] },
  { title: "Frontend & Deploy", items: ["Next.js", "shadcn/ui", "Docker", "Render", "Vercel"] },
];

// Ordered by weight
export const achievements = [
  { badge: "GOLD LEVEL", title: "WorldQuant BRAIN", detail: "Research Consultant: designing and testing alphas" },
  { badge: "TOP 20%", title: "Intl Quant Championship 2025", detail: "Global quantitative research competition" },
  { badge: "FINALIST", title: "Strategy Storm, IIT Guwahati", detail: "Global finalist, case competition" },
  { badge: "FINALIST", title: "Investomania, IIT Hyderabad", detail: "Case competition finalist" },
  { badge: "TOP 10", title: "Case Crackers, Delhi University", detail: "Top 10 nationally" },
  { badge: "RUNNER-UP", title: "Hackwarts, RKGIT", detail: "2nd position, team LazyCoders" },
  { badge: "COMPLETED", title: "Summer Analytics", detail: "Applied data science program" },
];

export const socials = [
  { label: "GitHub", url: "https://github.com/arvindkumar-ship-it" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/arvindkumar7977" },
  {
    label: "Resume",
    url: "https://drive.google.com/file/d/1OMO-qRosjFVFrsxISYBTKGp1TBcY9Su5/view?usp=sharing",
  },
  { label: "Email", url: "mailto:arvindkumar.acad@gmail.com" },
];
