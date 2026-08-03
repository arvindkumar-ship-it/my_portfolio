"use client";

import { achievements, coreStack, tools } from "@/lib/data";

export default function SkillsGrid() {
  return (
    <>
      <section id="achievements" style={styles.section}>
        <div style={styles.tag}>// Achievements</div>
        <h2 style={styles.h2}>Wins & Recognition</h2>

        <div style={styles.achGrid}>
          {achievements.map((a) => (
            <div key={a.title} className="brutal" style={styles.achCard}>
              <div style={styles.badge}>{a.badge}</div>
              <div style={styles.achTitle}>{a.title}</div>
              <div style={styles.achDetail}>{a.detail}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" style={styles.section}>
        <div style={styles.tag}>// Snapshot</div>
        <h2 style={styles.h2}>Stack & Tools</h2>

        <div style={styles.grid}>
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
    </>
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
  achGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: 16,
  },
  achCard: { padding: 16 },
  badge: {
    display: "inline-block",
    border: "2px solid var(--ink)",
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: 1.5,
    padding: "4px 10px",
    marginBottom: 12,
  },
  achTitle: { fontSize: 13, fontWeight: 700, marginBottom: 6 },
  achDetail: { fontSize: 10.5, lineHeight: 1.5, opacity: 0.65 },
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
