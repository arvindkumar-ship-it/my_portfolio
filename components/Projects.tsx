"use client";

import { useState } from "react";
import { projects } from "@/lib/data";

const ALL = "All";
const categories = [ALL, ...Array.from(new Set(projects.map((p) => p.category)))];

export default function Projects() {
  const [active, setActive] = useState(ALL);
  const visible = active === ALL ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section">
      <div className="section-tag">// Projects</div>
      <h2 className="section-title">What I built</h2>

      <div className="chips" role="tablist" aria-label="Project categories">
        {categories.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={active === c}
            className={`chip-btn ${active === c ? "on" : ""}`}
            onClick={() => setActive(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="project-list">
        {visible.map((p) => (
          <article key={p.id} className="card project" style={{ ["--accent" as string]: `var(${p.color})` }}>
            <header className="project-head">
              <span className="category">{p.category}</span>
              <h3>{p.title}</h3>
              <p className="summary">{p.summary}</p>
            </header>

            {p.metrics.length > 0 && (
              <ul className="metrics">
                {p.metrics.map((m) => (
                  <li key={m.label}>
                    <strong>{m.value}</strong>
                    <span>{m.label}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="cols">
              <Block title="What I built" items={p.built} />
              <Block title="Impact" items={p.impact} />
              <Block title="Industry use" items={p.industryUse} />
            </div>

            <footer className="project-foot">
              <div className="stack">
                {p.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
              <div className="links">
                <a className="btn" href={p.codeUrl} target="_blank" rel="noopener noreferrer">
                  Code
                </a>
                {p.demoUrl && (
                  <a className="btn" href={p.demoUrl} target="_blank" rel="noopener noreferrer">
                    Live demo
                  </a>
                )}
              </div>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4>{title}</h4>
      <ul>
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
