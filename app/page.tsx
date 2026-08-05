// "use client";

// import { useEffect, useState } from "react";
// import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";
// import NeuralGraph from "@/components/NeuralGraph";
// import ProjectsCarousel from "@/components/ProjectsCarousel";
// import EngineeringJudgment from "@/components/EngineeringJudgment";
// import SkillsGrid from "@/components/SkillsGrid";
// import ContactDrawer from "@/components/ContactDrawer";
// import Footer from "@/components/Footer";

// export default function Home() {
//   const [contactOpen, setContactOpen] = useState(false);
//   const [theme, setTheme] = useState<"light" | "dark">("light");

//   useEffect(() => {
//     document.documentElement.setAttribute("data-theme", theme);
//   }, [theme]);

//   return (
//     <>
//       <Navbar
//         theme={theme}
//         onToggleTheme={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
//         onContactClick={() => setContactOpen(true)}
//       />

//       <main>
//         <Hero />
//         <NeuralGraph />
//         <ProjectsCarousel />
//         <SkillsGrid />
//         <EngineeringJudgment />
//       </main>

//       <Footer />

//       <button
//         onClick={() => setContactOpen(true)}
//         className="brutal"
//         style={styles.cornerTag}
//         aria-label="Open contact form"
//       >
//         [ Contact ]
//       </button>

//       <ContactDrawer open={contactOpen} onClose={() => setContactOpen(false)} />
//     </>
//   );
// }

// const styles: Record<string, React.CSSProperties> = {
//   cornerTag: {
//     position: "fixed",
//     bottom: 24,
//     right: 24,
//     padding: "12px 18px",
//     fontSize: 12,
//     letterSpacing: 1.5,
//     color: "var(--ink)",
//     zIndex: 40,
//   },
// };






// "use client";

// import { useEffect, useState } from "react";
// import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";
// import NeuralGraph from "@/components/NeuralGraph";
// import ProjectsCarousel from "@/components/ProjectsCarousel";
// import EngineeringJudgment from "@/components/EngineeringJudgment";
// import SkillsGrid from "@/components/SkillsGrid";
// import ContactDrawer from "@/components/ContactDrawer";
// import Footer from "@/components/Footer";
// import ResponsiveScaler from "@/components/ResponsiveScaler";

// export default function Home() {
//   const [contactOpen, setContactOpen] = useState(false);
//   const [theme, setTheme] = useState<"light" | "dark">("light");

//   useEffect(() => {
//     document.documentElement.setAttribute("data-theme", theme);
//   }, [theme]);

//   return (
//     <>
//       {/* Navbar stays OUTSIDE the scaler — it's fixed/sticky, and CSS
//           transforms on an ancestor break position:fixed children. */}
//       <Navbar
//         theme={theme}
//         onToggleTheme={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
//         onContactClick={() => setContactOpen(true)}
//       />

//       <ResponsiveScaler>
//         <main>
//           <Hero />
//           <NeuralGraph />
//           <ProjectsCarousel />
//           <SkillsGrid />
//           <EngineeringJudgment />
//         </main>

//         <Footer />
//       </ResponsiveScaler>

//       {/* Same reason — corner button and drawer are fixed-position,
//           so they live outside the scaled wrapper too. */}
//       <button
//         onClick={() => setContactOpen(true)}
//         className="brutal"
//         style={styles.cornerTag}
//         aria-label="Open contact form"
//       >
//         [ Contact ]
//       </button>

//       <ContactDrawer open={contactOpen} onClose={() => setContactOpen(false)} />
//     </>
//   );
// }

// const styles: Record<string, React.CSSProperties> = {
//   cornerTag: {
//     position: "fixed",
//     bottom: 24,
//     right: 24,
//     padding: "12px 18px",
//     fontSize: 12,
//     letterSpacing: 1.5,
//     color: "var(--ink)",
//     zIndex: 40,
//   },
// };









"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NeuralGraph from "@/components/NeuralGraph";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import EngineeringJudgment from "@/components/EngineeringJudgment";
import SkillsGrid from "@/components/SkillsGrid";
import ContactDrawer from "@/components/ContactDrawer";
import Footer from "@/components/Footer";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <Navbar
        theme={theme}
        onToggleTheme={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
        onContactClick={() => setContactOpen(true)}
      />

      <main>
        <Hero />
        <NeuralGraph />
        <ProjectsCarousel />
        <SkillsGrid />
        <EngineeringJudgment />
      </main>

      <Footer onContactClick={() => setContactOpen(true)} />

      <button
        onClick={() => setContactOpen(true)}
        className="brutal corner-tag"
        style={styles.cornerTag}
        aria-label="Open contact form"
      >
        [ Contact ]
      </button>

      <ContactDrawer open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  cornerTag: {
    position: "fixed",
    bottom: 24,
    right: 24,
    padding: "12px 18px",
    fontSize: 12,
    letterSpacing: 1.5,
    color: "var(--ink)",
    zIndex: 40,
  },
};