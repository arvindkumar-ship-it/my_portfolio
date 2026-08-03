import { socials } from "@/lib/data";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <span>NO RIGHTS RESERVED · COPYLEFT 2026 ARVIND.</span>
      <div style={styles.links}>
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            {s.label}
          </a>
        ))}
      </div>
    </footer>
  );
}

const styles: Record<string, React.CSSProperties> = {
  footer: {
    borderTop: "3px solid var(--ink)",
    padding: "24px 32px",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 12,
    fontSize: 11,
    letterSpacing: 1,
  },
  links: { display: "flex", gap: 16, flexWrap: "wrap" },
  link: { color: "var(--ink)", textDecoration: "none", opacity: 0.75 },
};