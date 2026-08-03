// // "use client";

// // import { useMemo, useState } from "react";
// // import { projects } from "@/lib/data";

// // const WIDTH = 720;
// // const HEIGHT = 420;

// // export default function NeuralGraph() {
// //   const [active, setActive] = useState<string | null>(null);

// //   const techNodes = useMemo(() => {
// //     const unique = Array.from(new Set(projects.flatMap((p) => p.stack)));
// //     const radius = 170;
// //     return unique.map((name, i) => {
// //       const angle = (i / unique.length) * Math.PI * 2;
// //       return {
// //         name,
// //         x: WIDTH / 2 + radius * Math.cos(angle),
// //         y: HEIGHT / 2 + radius * Math.sin(angle) * 0.75,
// //       };
// //     });
// //   }, []);

// //   const projectNodes = useMemo(() => {
// //     const radius = 70;
// //     return projects.map((p, i) => {
// //       const angle = (i / projects.length) * Math.PI * 2 - Math.PI / 2;
// //       return {
// //         ...p,
// //         x: WIDTH / 2 + radius * Math.cos(angle),
// //         y: HEIGHT / 2 + radius * Math.sin(angle),
// //       };
// //     });
// //   }, []);

// //   const activeProject = projectNodes.find((p) => p.id === active);

// //   return (
// //     <section id="graph" style={styles.section}>
// //       <div style={styles.tag}>// Explore</div>
// //       <h2 style={styles.h2}>The Neural Graph</h2>
// //       <p style={styles.sub}>
// //         Every project and every tool, in one connected map. Click a project
// //         node to isolate exactly the tech stack behind it.
// //       </p>

// //       <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} style={styles.svg}>
// //         {techNodes.map((t) => {
// //           const connected = activeProject ? activeProject.stack.includes(t.name) : true;
// //           return activeProject ? (
// //             connected ? (
// //               <line
// //                 key={t.name}
// //                 x1={activeProject.x}
// //                 y1={activeProject.y}
// //                 x2={t.x}
// //                 y2={t.y}
// //                 stroke="var(--ink)"
// //                 strokeWidth={1.5}
// //               />
// //             ) : null
// //           ) : null;
// //         })}

// //         {techNodes.map((t) => {
// //           const dim = activeProject ? !activeProject.stack.includes(t.name) : false;
// //           return (
// //             <g key={t.name} opacity={dim ? 0.25 : 1}>
// //               <circle cx={t.x} cy={t.y} r={5} fill="var(--ink)" />
// //               <text
// //                 x={t.x}
// //                 y={t.y - 10}
// //                 textAnchor="middle"
// //                 fontSize={9}
// //                 fill="var(--ink)"
// //                 fontFamily="var(--font-body)"
// //               >
// //                 {t.name}
// //               </text>
// //             </g>
// //           );
// //         })}

// //         {projectNodes.map((p) => (
// //           <g
// //             key={p.id}
// //             onClick={() => setActive(active === p.id ? null : p.id)}
// //             style={{ cursor: "pointer" }}
// //           >
// //             <rect
// //               x={p.x - 42}
// //               y={p.y - 18}
// //               width={84}
// //               height={36}
// //               fill="var(--surface)"
// //               stroke={active === p.id ? `var(${p.color})` : "var(--ink)"}
// //               strokeWidth={active === p.id ? 4 : 2.5}
// //             />
// //             <text
// //               x={p.x}
// //               y={p.y + 4}
// //               textAnchor="middle"
// //               fontSize={10}
// //               fontWeight={700}
// //               fill="var(--ink)"
// //               fontFamily="var(--font-body)"
// //             >
// //               {p.title}
// //             </text>
// //           </g>
// //         ))}
// //       </svg>

// //       <div style={styles.hint}>
// //         Click a project square to isolate its stack · click again to clear
// //       </div>
// //     </section>
// //   );
// // }

// // const styles: Record<string, React.CSSProperties> = {
// //   section: {
// //     padding: "56px 32px",
// //     borderTop: "3px solid var(--ink)",
// //   },
// //   tag: { fontSize: 12, letterSpacing: 2, opacity: 0.65, marginBottom: 8 },
// //   h2: {
// //     fontFamily: "var(--font-display)",
// //     fontSize: 36,
// //     margin: "0 0 8px",
// //   },
// //   sub: { fontSize: 13, opacity: 0.7, maxWidth: 620, marginBottom: 20 },
// //   svg: {
// //     width: "100%",
// //     maxWidth: 720,
// //     height: "auto",
// //     border: "3px solid var(--ink)",
// //     background: "var(--surface)",
// //   },
// //   hint: { fontSize: 11, opacity: 0.55, marginTop: 12 },
// // };

// "use client";

// import { useMemo, useState } from "react";
// import { projects } from "@/lib/data";

// const WIDTH = 720;
// const HEIGHT = 420;

// export default function NeuralGraph() {
//   const [active, setActive] = useState<string | null>(null);

//   const techNodes = useMemo(() => {
//     const unique = Array.from(new Set(projects.flatMap((p) => p.stack)));
//     const radius = 170;
//     return unique.map((name, i) => {
//       const angle = (i / unique.length) * Math.PI * 2;
//       return {
//         name,
//         x: WIDTH / 2 + radius * Math.cos(angle),
//         y: HEIGHT / 2 + radius * Math.sin(angle) * 0.75,
//       };
//     });
//   }, []);

//   const projectNodes = useMemo(() => {
//     const radius = 70;
//     return projects.map((p, i) => {
//       const angle = (i / projects.length) * Math.PI * 2 - Math.PI / 2;
//       return {
//         ...p,
//         x: WIDTH / 2 + radius * Math.cos(angle),
//         y: HEIGHT / 2 + radius * Math.sin(angle),
//       };
//     });
//   }, []);

//   const activeProject = projectNodes.find((p) => p.id === active);

//   return (
//     <section id="graph" style={styles.section}>
//       <div style={styles.tag}>// Explore</div>
//       <h2 style={styles.h2}>The Neural Graph</h2>
//       <p style={styles.sub}>
//         Every project and every tool, in one connected map. Click a project
//         node to isolate exactly the tech stack behind it.
//       </p>

//       <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} style={styles.svg}>
//         {techNodes.map((t) => {
//           const connected = activeProject ? activeProject.stack.includes(t.name) : true;
//           return activeProject ? (
//             connected ? (
//               <line
//                 key={t.name}
//                 x1={activeProject.x}
//                 y1={activeProject.y}
//                 x2={t.x}
//                 y2={t.y}
//                 stroke="var(--ink)"
//                 strokeWidth={1.5}
//               />
//             ) : null
//           ) : null;
//         })}

//         {techNodes.map((t) => {
//           const dim = activeProject ? !activeProject.stack.includes(t.name) : false;
//           return (
//             <g key={t.name} opacity={dim ? 0.25 : 1}>
//               <circle cx={t.x} cy={t.y} r={5} fill="var(--ink)" />
//               <text
//                 x={t.x}
//                 y={t.y - 10}
//                 textAnchor="middle"
//                 fontSize={9}
//                 fill="var(--ink)"
//                 fontFamily="var(--font-body)"
//               >
//                 {t.name}
//               </text>
//             </g>
//           );
//         })}

//         {projectNodes.map((p) => (
//           <g
//             key={p.id}
//             onClick={() => setActive(active === p.id ? null : p.id)}
//             style={{ cursor: "pointer" }}
//           >
//             <rect
//               x={p.x - 42}
//               y={p.y - 18}
//               width={84}
//               height={36}
//               fill="var(--surface)"
//               stroke={active === p.id ? `var(${p.color})` : "var(--ink)"}
//               strokeWidth={active === p.id ? 4 : 2.5}
//             />
//             <text
//               x={p.x}
//               y={p.y + 4}
//               textAnchor="middle"
//               fontSize={10}
//               fontWeight={700}
//               fill="var(--ink)"
//               fontFamily="var(--font-body)"
//             >
//               {p.title}
//             </text>
//           </g>
//         ))}
//       </svg>

//       <div style={styles.hint}>
//         Click a project square to isolate its stack · click again to clear
//       </div>
//     </section>
//   );
// }

// const styles: Record<string, React.CSSProperties> = {
//   section: {
//     padding: "56px 32px",
//     borderTop: "3px solid var(--ink)",
//   },
//   tag: { fontSize: 12, letterSpacing: 2, opacity: 0.65, marginBottom: 8 },
//   h2: {
//     fontFamily: "var(--font-display)",
//     fontSize: 36,
//     margin: "0 0 8px",
//   },
//   sub: { fontSize: 13, opacity: 0.7, maxWidth: 620, marginBottom: 20 },
//   svg: {
//     width: "100%",
//     maxWidth: 720,
//     height: "auto",
//     border: "3px solid var(--ink)",
//     background: "var(--surface)",
//   },
//   hint: { fontSize: 11, opacity: 0.55, marginTop: 12 },
// };















"use client";

import { useEffect, useRef } from "react";
import { projects as projectData } from "@/lib/data";

interface Point {
  x: number;
  y: number;
}

interface DriftParams {
  cx: number;
  cy: number;
  ampX: number;
  ampY: number;
  freqX: number;
  freqY: number;
  phaseX: number;
  phaseY: number;
}

interface SwayRec {
  el: SVGPathElement;
  getP1: () => Point;
  getP2: () => Point;
  amp: number;
  freq: number;
  phase: number;
}

export default function NeuralGraph() {
  const stageRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const legendRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stageRefEl = stageRef.current;
    const svgRefEl = svgRef.current;
    const legendRefEl = legendRef.current;
    if (!stageRefEl || !svgRefEl || !legendRefEl) return;

    // re-bind to explicitly non-null types so nested closures below never
    // need to re-check — avoids null-check errors regardless of TS version
    const stage: HTMLDivElement = stageRefEl;
    const svg: SVGSVGElement = svgRefEl;
    const legend: HTMLDivElement = legendRefEl;

    // guard against React StrictMode double-invoke in dev
    while (stage.firstChild) stage.removeChild(stage.firstChild);
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    while (legend.firstChild) legend.removeChild(legend.firstChild);

    // map our shared project data -> the shape graph.js expects
    const projects = projectData.map((p) => ({
      id: p.id,
      label: p.title,
      color: `var(${p.color})`,
      tech: p.stack,
    }));

    const techSet = Array.from(new Set(projects.flatMap((p) => p.tech)));

    const W = 1136;
    const H = 640;
    const cx = W / 2;
    const cy = H / 2;

    const projR = 150;
    const projPts: Record<string, Point> = {};
    projects.forEach((p, i) => {
      const a = ((2 * Math.PI) / projects.length) * i - Math.PI / 2;
      projPts[p.id] = { x: cx + projR * Math.cos(a), y: cy + projR * Math.sin(a) };
    });

    const techPts: Record<string, Point> = {};
    techSet.forEach((t, i) => {
      const usedBy = projects.filter((p) => p.tech.includes(t)).map((p) => p.id);
      let avgA = 0;
      let n = 0;
      usedBy.forEach((pid) => {
        const idx = projects.findIndex((p) => p.id === pid);
        avgA += ((2 * Math.PI) / projects.length) * idx - Math.PI / 2;
        n++;
      });
      avgA = n ? avgA / n : ((2 * Math.PI) / techSet.length) * i;
      const jitter = (i % 3) * 0.14 - 0.14;
      const r = 300 + (i % 2) * 20;
      techPts[t] = { x: cx + r * Math.cos(avgA + jitter), y: cy + r * Math.sin(avgA + jitter) * 0.82 };
    });

    svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
    svg.setAttribute("preserveAspectRatio", "none");

    const projLivePos: Record<string, Point> = {};
    projects.forEach((p) => {
      projLivePos[p.id] = { x: projPts[p.id].x, y: projPts[p.id].y };
    });

    const swayPaths: SwayRec[] = [];

    function makeEdgePath(getP1: () => Point, getP2: () => Point, extraClass: string | null) {
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.classList.add("edge");
      if (extraClass) path.classList.add(extraClass);
      const rec: SwayRec = {
        el: path,
        getP1,
        getP2,
        amp: 4 + Math.random() * 6,
        freq: 0.55 + Math.random() * 0.6,
        phase: Math.random() * Math.PI * 2,
      };
      swayPaths.push(rec);
      svg.appendChild(path);
      return path;
    }

    function updateSway(t: number) {
      swayPaths.forEach((r) => {
        const p1 = r.getP1();
        const p2 = r.getP2();
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const len = Math.sqrt(dx * dx + dy * dy) || 1;
        const nx = -dy / len;
        const ny = dx / len;
        const offset = r.amp * Math.sin(t * r.freq + r.phase);
        const midX = (p1.x + p2.x) / 2 + nx * offset;
        const midY = (p1.y + p2.y) / 2 + ny * offset;
        r.el.setAttribute("d", `M ${p1.x} ${p1.y} Q ${midX} ${midY} ${p2.x} ${p2.y}`);
      });
    }

    const centerGetter = (): Point => ({ x: cx, y: cy });

    projects.forEach((p) => {
      const path = makeEdgePath(centerGetter, () => projLivePos[p.id], "center-edge");
      path.dataset.proj = p.id;
    });
    projects.forEach((p) => {
      p.tech.forEach((t) => {
        const path = makeEdgePath(() => projLivePos[p.id], () => techPts[t], null);
        path.dataset.proj = p.id;
        path.dataset.tech = t;
      });
    });

    let motionPaused = false;
    let rafId = 0;
    function swayLoop(ts: number) {
      const t = ts / 1000;
      if (!motionPaused) {
        updateDrift(t);
        updateSway(t);
      }
      rafId = requestAnimationFrame(swayLoop);
    }
    rafId = requestAnimationFrame(swayLoop);

    const centerEl = document.createElement("div");
    centerEl.className = "gnode center";
    centerEl.style.left = (cx / W) * 100 + "%";
    centerEl.style.top = (cy / H) * 100 + "%";
    centerEl.innerHTML = `<div class="dot"></div><div class="lbl">Arvind</div>`;
    stage.appendChild(centerEl);

    const projEls: Record<string, HTMLDivElement> = {};
    const driftParams: Record<string, DriftParams> = {};
    projects.forEach((p) => {
      const el = document.createElement("div");
      el.className = "gnode project";
      el.style.setProperty("--proj-color", p.color);
      el.style.left = (projPts[p.id].x / W) * 100 + "%";
      el.style.top = (projPts[p.id].y / H) * 100 + "%";
      el.innerHTML = `<div class="dot"></div><div class="lbl">${p.label}</div>`;
      el.addEventListener("click", () => toggleProject(p.id));
      stage.appendChild(el);
      projEls[p.id] = el;

      driftParams[p.id] = {
        cx: projPts[p.id].x,
        cy: projPts[p.id].y,
        ampX: 35 + Math.random() * 15,
        ampY: 25 + Math.random() * 15,
        freqX: 0.05 + Math.random() * 0.04,
        freqY: 0.045 + Math.random() * 0.04,
        phaseX: Math.random() * Math.PI * 2,
        phaseY: Math.random() * Math.PI * 2,
      };
    });

    function updateDrift(t: number) {
      projects.forEach((p) => {
        const d = driftParams[p.id];
        const x = d.cx + d.ampX * Math.sin(t * d.freqX + d.phaseX);
        const y = d.cy + d.ampY * Math.sin(t * d.freqY + d.phaseY);
        projLivePos[p.id] = { x, y };
        const el = projEls[p.id];
        el.style.left = (x / W) * 100 + "%";
        el.style.top = (y / H) * 100 + "%";
      });
    }

    const techEls: Record<string, HTMLDivElement> = {};
    techSet.forEach((t) => {
      const el = document.createElement("div");
      el.className = "gnode tech";
      el.style.left = (techPts[t].x / W) * 100 + "%";
      el.style.top = (techPts[t].y / H) * 100 + "%";
      el.innerHTML = `<div class="dot"></div><div class="lbl">${t}</div>`;
      stage.appendChild(el);
      techEls[t] = el;
    });

    projects.forEach((p) => {
      const chip = document.createElement("button");
      chip.className = "item";
      chip.dataset.proj = p.id;
      chip.innerHTML = `<span class="sw" style="background:${p.color}"></span>${p.label}`;
      chip.addEventListener("click", () => toggleProject(p.id));
      legend.appendChild(chip);
    });

    let activeProj: string | null = null;
    function toggleProject(id: string) {
      activeProj = activeProj === id ? null : id;
      motionPaused = !!activeProj;
      render();
    }

    function render() {
      const lines = svg!.querySelectorAll("path.edge");
      if (!activeProj) {
        lines.forEach((l) => {
          const el = l as SVGPathElement;
          const isCenter = el.classList.contains("center-edge");
          el.style.opacity = isCenter ? "0.6" : "0";
          el.style.stroke = "var(--ink)";
          el.style.strokeWidth = isCenter ? "2" : "1.5";
        });
        Object.values(projEls).forEach((el) => el.classList.remove("dim", "active"));
        Object.values(techEls).forEach((el) => el.classList.remove("dim", "active"));
        legend!.querySelectorAll(".item").forEach((c) => c.classList.remove("active"));
        return;
      }
      const proj = projects.find((p) => p.id === activeProj)!;
      lines.forEach((l) => {
        const el = l as SVGPathElement;
        const isRelated = el.dataset.proj === activeProj;
        if (isRelated) {
          el.style.opacity = "1";
          el.style.stroke = proj.color;
          el.style.strokeWidth = "2.5";
        } else {
          el.style.opacity = "0";
        }
      });
      Object.entries(projEls).forEach(([id, el]) => {
        el.classList.toggle("dim", id !== activeProj);
        el.classList.toggle("active", id === activeProj);
      });
      Object.entries(techEls).forEach(([t, el]) => {
        const related = proj.tech.includes(t);
        el.classList.toggle("dim", !related);
        el.classList.toggle("active", related);
        if (related) el.style.setProperty("--proj-color", proj.color);
      });
      legend!.querySelectorAll(".item").forEach((c) => {
        c.classList.toggle("active", (c as HTMLElement).dataset.proj === activeProj);
      });
    }
    render();

    function onStageClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (!target.closest(".gnode")) {
        activeProj = null;
        motionPaused = false;
        render();
      }
    }
    stage.addEventListener("click", onStageClick);

    return () => {
      cancelAnimationFrame(rafId);
      stage.removeEventListener("click", onStageClick);
    };
  }, []);

  return (
    <section id="graph" style={styles.section}>
      <div style={styles.tag}>// Explore</div>
      <h2 style={styles.h2}>The Neural Graph</h2>
      <p style={styles.sub}>
        Every project and every tool I use, in one connected map. Click a
        project to isolate exactly the tech stack behind it.
      </p>

      <div className="graph-stage" ref={stageRef} style={{ marginTop: 24 }}>
        <svg className="graphsvg" ref={svgRef} />
      </div>

      <div className="legend" ref={legendRef} />

      <div style={styles.hint}>
        Click a project square (or a legend chip) to isolate its stack ·
        click again to clear
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    padding: "56px 32px",
    borderTop: "3px solid var(--ink)",
  },
  tag: { fontSize: 12, letterSpacing: 2, opacity: 0.65, marginBottom: 8 },
  h2: {
    fontFamily: "var(--font-display)",
    fontSize: 36,
    margin: "0 0 8px",
  },
  sub: { fontSize: 13, opacity: 0.7, maxWidth: 620, marginBottom: 8 },
  hint: { fontSize: 11, opacity: 0.55, marginTop: 12 },
};
