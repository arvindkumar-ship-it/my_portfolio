"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const ROLES = [
  "AI Platform Engineer",
  "Agentic Systems Builder",
  "LangGraph Practitioner",
  "Reliability-Obsessed Developer",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex % ROLES.length];
    const speed = deleting ? 35 : 65;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1200);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setRoleIndex((i) => i + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section id="hero" style={styles.section}>
      <div>
        <div style={styles.eyebrow}>// AI Platform & Agentic Systems</div>
        <h1 style={styles.h1}>ARVIND KUMAR</h1>
        <div style={styles.role}>
          {text}
          <span style={styles.caret}>|</span>
        </div>
        <p style={styles.intro}>
          I build production-grade AI agent platforms — from security scanning
          systems to autonomous multi-agent pipelines. Currently deep in
          LangGraph, FastAPI, and everything that makes agents actually
          reliable. Dual-degree: RKGIT B.Tech IT · IIT Madras BS Data
          Science · WorldQuant Research Consultant.
        </p>
        <div style={styles.chips}>
          <span style={styles.chip}>Top 20% · International Quant Championship 2025</span>
          <span style={styles.chip}>RKGIT B.Tech IT · IIT Madras BS Data Science</span>
          <span style={styles.chip}>Open to internships & hackathons</span>
        </div>
      </div>

      <div style={styles.right}>
        <div style={styles.frame}>
          <Image
          src="/arvind_portfolio.png"
          alt="Arvind"
          fill
          style={styles.photo}
          priority
          />
        </div>
      </div>
    </section>
  );
}


const styles: Record<string, React.CSSProperties> = {
  section: {
    padding: "72px 32px",
    maxWidth: 1200,
    position: "relative",
  },
  eyebrow: {
    fontSize: 12,
    letterSpacing: 2,
    color: "var(--ink)",
    opacity: 0.65,
    marginBottom: 12,
  },
  h1: {
    fontFamily: "var(--font-display)",
    fontSize: 84,
    lineHeight: 1,
    margin: "0 0 8px",
    letterSpacing: 2,
  },
  role: {
    fontSize: 16,
    fontWeight: 700,
    minHeight: 24,
    marginBottom: 20,
  },
  caret: {
    animation: "blink 1s step-start infinite",
  },
  intro: {
    fontSize: 14,
    lineHeight: 1.7,
    maxWidth: 640,
    opacity: 0.85,
    marginBottom: 24,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
  },
  chip: {
    border: "2px solid var(--line)",
    padding: "6px 12px",
    fontSize: 11,
    letterSpacing: 0.5,
  },
  right: {
    position: "absolute",
    top: 0,
    right: -300,
  },
  frame: {
    border: "3px solid var(--ink)",
    boxShadow: "10px 10px 0 var(--ink)",
    padding: 6,
    background: "var(--bg)",
    position: "relative",
    width: 460,
    height: 450,
  },
  photo: {
    objectFit: "cover",
    filter: "grayscale(1) contrast(1.05)",
  },
};