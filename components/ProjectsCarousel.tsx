// "use client";

// import { useState } from "react";
// import { projects } from "@/lib/data";

// export default function ProjectsCarousel() {
//   const [index, setIndex] = useState(0);
//   const total = projects.length;

//   const goPrev = () => setIndex((i) => (i - 1 + total) % total);
//   const goNext = () => setIndex((i) => (i + 1) % total);

//   const offsetOf = (i: number) => {
//     let diff = i - index;
//     if (diff > total / 2) diff -= total;
//     if (diff < -total / 2) diff += total;
//     return diff;
//   };

//   return (
//     <section id="work" style={styles.section}>
//       <div style={styles.tag}>// Projects</div>
//       <h2 style={styles.h2}>Selected Work</h2>

//       <div style={styles.wrapper}>
//         <button aria-label="Previous project" onClick={goPrev} className="brutal" style={styles.arrow}>
//           ‹
//         </button>

//         <div style={styles.stage}>
//           {projects.map((p, i) => {
//             const offset = offsetOf(i);
//             if (Math.abs(offset) > 3) return null;

//             const abs = Math.abs(offset);
//             const translateX = offset * 250;
//             const scale = 1 - abs * 0.08;
//             const opacity = abs === 0 ? 1 : Math.max(0.15, 0.55 - abs * 0.15);
//             const zIndex = total - abs;

//             return (
//               <div
//                 key={p.id}
//                 style={{
//                   ...styles.card,
//                   borderColor: `var(${p.color})`,
//                   transform: `translateX(-50%) translateX(${translateX}px) scale(${scale})`,
//                   opacity,
//                   zIndex,
//                   pointerEvents: abs === 0 ? "auto" : "none",
//                 }}
//               >
//                 <div style={{ ...styles.tagPill, background: `var(${p.color})` }}>{p.tag}</div>
//                 <h3 style={styles.title}>{p.title}</h3>
//                 <p style={styles.desc}>{p.description}</p>

//                 <div style={styles.stackRow}>
//                   {p.stack.map((s) => (
//                     <span key={s} style={styles.stackTag}>
//                       {s}
//                     </span>
//                   ))}
//                 </div>

//                 <div style={styles.ctaRow}>
//                   <a
//                     href={p.codeUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="brutal"
//                     style={styles.ctaBtn}
//                   >
//                     Code
//                   </a>
//                   {p.demoUrl ? (
//                     <a
//                       href={p.demoUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="brutal"
//                       style={styles.ctaBtn}
//                     >
//                       {p.demoLabel ?? "Demo"}
//                     </a>
//                   ) : (
//                     <span style={styles.ctaDisabled}>Demo [placeholder]</span>
//                   )}
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         <button aria-label="Next project" onClick={goNext} className="brutal" style={styles.arrow}>
//           ›
//         </button>
//       </div>

//       <div style={styles.status}>
//         {index + 1} / {total} · click the arrows to navigate
//       </div>
//     </section>
//   );
// }

// const styles: Record<string, React.CSSProperties> = {
//   section: {
//     padding: "56px 32px",
//     borderTop: "3px solid var(--ink)",
//     overflow: "hidden",
//   },
//   tag: { fontSize: 12, letterSpacing: 2, opacity: 0.65, marginBottom: 8 },
//   h2: {
//     fontFamily: "var(--font-display)",
//     fontSize: 36,
//     margin: "0 0 32px",
//   },
//   wrapper: {
//     position: "relative",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   stage: {
//     position: "relative",
//     height: 440,
//     width: "100%",
//     maxWidth: 900,
//   },
//   card: {
//     position: "absolute",
//     left: "50%",
//     top: 0,
//     width: 320,
//     background: "var(--surface)",
//     border: "3px solid var(--ink)",
//     boxShadow: "8px 8px 0 var(--ink)",
//     transition: "transform 0.45s cubic-bezier(.22,1,.36,1), opacity 0.45s ease",
//     display: "flex",
//     flexDirection: "column",
//     padding: 20,
//   },
//   tagPill: {
//     display: "inline-block",
//     color: "#fff",
//     fontSize: 10,
//     letterSpacing: 1,
//     padding: "4px 10px",
//     marginBottom: 14,
//     alignSelf: "flex-start",
//   },
//   title: { margin: "0 0 10px", fontSize: 22, fontFamily: "var(--font-display)", letterSpacing: 1 },
//   desc: { fontSize: 12.5, lineHeight: 1.6, opacity: 0.8, marginBottom: 16, flex: 1 },
//   stackRow: { display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 },
//   stackTag: {
//     border: "2px solid var(--line)",
//     padding: "3px 8px",
//     fontSize: 10,
//     fontWeight: 700,
//   },
//   ctaRow: { display: "flex", gap: 10 },
//   ctaBtn: {
//     flex: 1,
//     textAlign: "center",
//     padding: "10px 0",
//     fontSize: 12,
//     fontWeight: 700,
//     letterSpacing: 1,
//     color: "var(--ink)",
//     textDecoration: "none",
//   },
//   ctaDisabled: {
//     flex: 1,
//     textAlign: "center",
//     padding: "10px 0",
//     fontSize: 11,
//     opacity: 0.4,
//     border: "3px dashed var(--line)",
//   },
//   arrow: {
//     width: 48,
//     height: 48,
//     fontSize: 26,
//     fontWeight: 700,
//     color: "var(--ink)",
//     zIndex: 50,
//   },
//   status: {
//     textAlign: "center",
//     fontSize: 11,
//     opacity: 0.55,
//     marginTop: 20,
//   },
// };






"use client";

import { useState } from "react";
import { projects } from "@/lib/data";

function ProjectCardBody({ p }: { p: (typeof projects)[number] }) {
  return (
    <>
      <div style={{ ...styles.tagPill, background: `var(${p.color})` }}>{p.tag}</div>
      <h3 style={styles.title}>{p.title}</h3>
      <p style={styles.desc}>{p.description}</p>

      <div style={styles.stackRow}>
        {p.stack.map((s) => (
          <span key={s} style={styles.stackTag}>
            {s}
          </span>
        ))}
      </div>

      <div style={styles.ctaRow}>
        <a href={p.codeUrl} target="_blank" rel="noopener noreferrer" className="brutal" style={styles.ctaBtn}>
          Code
        </a>
        {p.demoUrl ? (
          <a href={p.demoUrl} target="_blank" rel="noopener noreferrer" className="brutal" style={styles.ctaBtn}>
            {p.demoLabel ?? "Demo"}
          </a>
        ) : (
          <span style={styles.ctaDisabled}>Demo [placeholder]</span>
        )}
      </div>
    </>
  );
}

export default function ProjectsCarousel() {
  const [index, setIndex] = useState(0);
  const total = projects.length;

  const goPrev = () => setIndex((i) => (i - 1 + total) % total);
  const goNext = () => setIndex((i) => (i + 1) % total);

  const offsetOf = (i: number) => {
    let diff = i - index;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <section id="work" style={styles.section}>
      <div style={styles.tag}>// Projects</div>
      <h2 style={styles.h2}>Selected Work</h2>

      {/* DESKTOP — 3D carousel, unchanged */}
      <div className="carousel-desktop" style={styles.wrapper}>
        <button aria-label="Previous project" onClick={goPrev} className="brutal" style={styles.arrow}>
          ‹
        </button>

        <div style={styles.stage}>
          {projects.map((p, i) => {
            const offset = offsetOf(i);
            if (Math.abs(offset) > 3) return null;

            const abs = Math.abs(offset);
            const translateX = offset * 250;
            const scale = 1 - abs * 0.08;
            const opacity = abs === 0 ? 1 : Math.max(0.15, 0.55 - abs * 0.15);
            const zIndex = total - abs;

            return (
              <div
                key={p.id}
                style={{
                  ...styles.card,
                  borderColor: `var(${p.color})`,
                  transform: `translateX(-50%) translateX(${translateX}px) scale(${scale})`,
                  opacity,
                  zIndex,
                  pointerEvents: abs === 0 ? "auto" : "none",
                }}
              >
                <ProjectCardBody p={p} />
              </div>
            );
          })}
        </div>

        <button aria-label="Next project" onClick={goNext} className="brutal" style={styles.arrow}>
          ›
        </button>
      </div>

      <div className="carousel-desktop" style={styles.status}>
        {index + 1} / {total} · click the arrows to navigate
      </div>

      {/* MOBILE — native swipe, scroll-snap, no absolute positioning */}
      <div className="carousel-mobile">
        {projects.map((p) => (
          <div
            key={p.id}
            className="m-card"
            style={{
              ...styles.mobileCard,
              borderColor: `var(${p.color})`,
            }}
          >
            <ProjectCardBody p={p} />
          </div>
        ))}
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    padding: "56px 32px",
    borderTop: "3px solid var(--ink)",
    overflow: "hidden",
  },
  tag: { fontSize: 12, letterSpacing: 2, opacity: 0.65, marginBottom: 8 },
  h2: {
    fontFamily: "var(--font-display)",
    fontSize: 36,
    margin: "0 0 32px",
  },
  wrapper: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  stage: {
    position: "relative",
    height: 440,
    width: "100%",
    maxWidth: 900,
  },
  card: {
    position: "absolute",
    left: "50%",
    top: 0,
    width: 320,
    background: "var(--surface)",
    border: "3px solid var(--ink)",
    boxShadow: "8px 8px 0 var(--ink)",
    transition: "transform 0.45s cubic-bezier(.22,1,.36,1), opacity 0.45s ease",
    display: "flex",
    flexDirection: "column",
    padding: 20,
  },
  mobileCard: {
    background: "var(--surface)",
    border: "3px solid var(--ink)",
    boxShadow: "6px 6px 0 var(--ink)",
    display: "flex",
    flexDirection: "column",
    padding: 18,
    minHeight: 340,
  },
  tagPill: {
    display: "inline-block",
    color: "#fff",
    fontSize: 10,
    letterSpacing: 1,
    padding: "4px 10px",
    marginBottom: 14,
    alignSelf: "flex-start",
  },
  title: { margin: "0 0 10px", fontSize: 22, fontFamily: "var(--font-display)", letterSpacing: 1 },
  desc: { fontSize: 12.5, lineHeight: 1.6, opacity: 0.8, marginBottom: 16, flex: 1 },
  stackRow: { display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 },
  stackTag: {
    border: "2px solid var(--line)",
    padding: "3px 8px",
    fontSize: 10,
    fontWeight: 700,
  },
  ctaRow: { display: "flex", gap: 10 },
  ctaBtn: {
    flex: 1,
    textAlign: "center",
    padding: "10px 0",
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: 1,
    color: "var(--ink)",
    textDecoration: "none",
  },
  ctaDisabled: {
    flex: 1,
    textAlign: "center",
    padding: "10px 0",
    fontSize: 11,
    opacity: 0.4,
    border: "3px dashed var(--line)",
  },
  arrow: {
    width: 48,
    height: 48,
    fontSize: 26,
    fontWeight: 700,
    color: "var(--ink)",
    zIndex: 50,
  },
  status: {
    textAlign: "center",
    fontSize: 11,
    opacity: 0.55,
    marginTop: 20,
  },
};