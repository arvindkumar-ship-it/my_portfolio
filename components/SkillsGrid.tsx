"use client";

import { achievements, coreStack, tools } from "@/lib/data";

export default function SkillsGrid() {
  return (
    <section id="skills" style={styles.section}>
      <div style={styles.tag}>// Snapshot</div>
      <h2 style={styles.h2}>Achievements · Stack · Tools</h2>

      <div style={styles.grid}>
        <div style={styles.box}>
          <h4 style={styles.boxTitle}>Achievements</h4>
          <ul style={styles.list}>
            {achievements.map((a) => (
              <li key={a.label} style={styles.listItem}>
                <span>{a.label}</span>
                <span style={styles.placeholder}>{a.value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div style={styles.box}>
          <h4 style={styles.boxTitle}>Core stack</h4>
          <div style={styles.tileGrid}>
            {coreStack.map((t) => (
              <div key={t} className="brutal" style={styles.tile}>
                {t}
              </div>
            ))}
          </div>
        </div>

        <div style={styles.box}>
          <h4 style={styles.boxTitle}>Tools</h4>
          <div style={styles.tileGrid}>
            {tools.map((t) => (
              <div key={t} className="brutal" style={styles.tile}>
                {t}
              </div>
            ))}
          </div>
        </div>
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
    margin: "0 0 32px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 20,
  },
  box: {
    border: "3px solid var(--ink)",
    padding: 20,
    background: "var(--surface)",
  },
  boxTitle: {
    margin: "0 0 16px",
    fontSize: 14,
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },
  list: { listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 },
  listItem: { display: "flex", flexDirection: "column", gap: 4, fontSize: 12 },
  placeholder: { opacity: 0.45, fontSize: 10.5 },
  tileGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 10,
  },
  tile: {
    padding: "10px 8px",
    textAlign: "center",
    fontSize: 11,
    fontWeight: 700,
  },
};
