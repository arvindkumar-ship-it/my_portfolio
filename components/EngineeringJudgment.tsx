"use client";

import { engineeringJudgment, securityPractices, JudgmentItem } from "@/lib/data";

function JudgmentList({ items }: { items: JudgmentItem[] }) {
  return (
    <div style={styles.list}>
      {items.map((item) => (
        <div key={item.title} className="brutal" style={styles.item}>
          <div style={styles.itemTitle}>{item.title}</div>
          <div style={styles.itemDetail}>{item.detail}</div>
        </div>
      ))}
    </div>
  );
}

export default function EngineeringJudgment() {
  return (
    <section id="judgment" style={styles.section}>
      <div style={styles.tag}>// Engineering Judgment</div>
      <h2 style={styles.h2}>What Actually Went Wrong (and how it got fixed)</h2>

      <div style={styles.grid}>
        <div style={styles.box}>
          <h4 style={styles.boxTitle}>Systems Thinking</h4>
          <JudgmentList items={engineeringJudgment} />
        </div>

        <div style={styles.box}>
          <h4 style={styles.boxTitle}>Security Practices</h4>
          <JudgmentList items={securityPractices} />
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
    fontSize: 32,
    margin: "0 0 32px",
    maxWidth: 700,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
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
  list: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  item: { padding: 14 },
  itemTitle: { fontSize: 12.5, fontWeight: 700, marginBottom: 6 },
  itemDetail: { fontSize: 11, lineHeight: 1.55, opacity: 0.7 },
};