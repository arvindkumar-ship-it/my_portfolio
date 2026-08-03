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
];

export const achievements = [
  { label: "International Quant Championship 2025", value: "Top 20%" },
  {
    label: "WorldQuant BRAIN",
    value: "Gold level · Research Consultant — designing & testing alphas",
  },
  { label: "Summer Analytics", value: "Completed" },
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
