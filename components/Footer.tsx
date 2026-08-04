// import { socials } from "@/lib/data";

// export default function Footer() {
//   return (
//     <footer style={styles.footer}>
//       <span>ALL · COPYLEFT 2026 ARVIND.</span>
//       <div style={styles.links}>
//         {socials.map((s) => (
//           <a
//             key={s.label}
//             href={s.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             style={styles.link}
//           >
//             {s.label}
//           </a>
//         ))}
//       </div>
//     </footer>
//   );
// }

// const styles: Record<string, React.CSSProperties> = {
//   footer: {
//     borderTop: "3px solid var(--ink)",
//     padding: "24px 32px",
//     display: "flex",
//     justifyContent: "space-between",
//     flexWrap: "wrap",
//     gap: 12,
//     fontSize: 11,
//     letterSpacing: 1,
//   },
//   links: { display: "flex", gap: 16, flexWrap: "wrap" },
//   link: { color: "var(--ink)", textDecoration: "none", opacity: 0.75 },
// };



import { useState } from "react";
import { socials } from "@/lib/data";

export default function Footer() {
  const [legalOpen, setLegalOpen] = useState(false);

  return (
    <footer style={styles.footer}>
      <style>{`
        .bordered-btn:active {
          transform: translate(3px, 3px);
          box-shadow: 0 0 0 var(--ink) !important;
        }
      `}</style>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
  <span>© 2026 ARVIND. ALL RIGHTS RESERVED.</span>
  <button
    className="bordered-btn"
    style={styles.legalButton}
    onClick={() => setLegalOpen(true)}
  >
    [ Legal ]
  </button>
</div>
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

      {legalOpen && (
        <div style={styles.overlay} onClick={() => setLegalOpen(false)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h2 style={styles.modalTitle}>COPYRIGHT NOTICE</h2>
            <p style={styles.modalText}>
              © 2026 Arvind. All Rights Reserved.
              <br />
              <br />
              All content on this website — including its source code,
              design, layout, graphics, and text — is the original work of
              Arvind and is protected under the Copyright Act, 1957 (India)
              and applicable international copyright laws.
              <br />
              <br />
              No part of this website may be copied, reproduced, modified,
              or used to create a similar or derivative website without
              prior written permission.
              <br />
              <br />
              Unauthorized use may result in legal action under Sections 51,
              63, and 64 of the Copyright Act, 1957, including civil damages
              and/or criminal prosecution.
              <br />
              <br />
              For permissions or queries, contact: [your email here]
            </p>
            <button
              className="bordered-btn"
              style={styles.closeButton}
              onClick={() => setLegalOpen(false)}
            >
              [ Close ]
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}

const styles: Record<string, React.CSSProperties> = {
  footer: {
    borderTop: "3px solid var(--ink)",
    padding: "24px 32px",
    paddingRight: 180,
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 12,
    fontSize: 11,
    letterSpacing: 1,
    position: "relative",
  },
  links: { display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" },
  link: { color: "var(--ink)", textDecoration: "none", opacity: 0.75 },
  legalButton: {
    background: "var(--bg, #fdfcf8)",
    border: "2px solid var(--ink)",
    boxShadow: "3px 3px 0 var(--ink)",
    color: "var(--ink)",
    fontSize: 11,
    letterSpacing: 1,
    padding: "6px 12px",
    cursor: "pointer",
    fontFamily: "inherit",
    transition: "transform 0.1s ease, box-shadow 0.1s ease",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    padding: 24,
  },
  modal: {
    background: "var(--bg, #fdfcf8)",
    border: "3px solid var(--ink)",
    maxWidth: 560,
    width: "100%",
    maxHeight: "80vh",
    overflowY: "auto",
    padding: 32,
    position: "relative",
  },
  closeButton: {
    background: "var(--bg, #fdfcf8)",
    border: "2px solid var(--ink)",
    boxShadow: "3px 3px 0 var(--ink)",
    color: "var(--ink)",
    fontSize: 11,
    letterSpacing: 1,
    padding: "6px 12px",
    cursor: "pointer",
    fontFamily: "inherit",
    marginTop: 24,
    transition: "transform 0.1s ease, box-shadow 0.1s ease",
  },
  modalTitle: {
    fontSize: 14,
    letterSpacing: 1.5,
    marginBottom: 20,
    marginTop: 0,
  },
  modalText: {
    fontSize: 12,
    lineHeight: 1.7,
    opacity: 0.85,
  },
};