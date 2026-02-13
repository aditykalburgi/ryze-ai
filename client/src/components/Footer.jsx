import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>

        {/* BRANDING */}
        <div>
          <h2 style={styles.brand}>Ryze.ai</h2>
          <p style={styles.description}>
            Generate modern UI components instantly using AI.
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <h4 style={styles.heading}>Quick Links</h4>

          <FooterLink to="/" label="Home" />
          <FooterLink to="/about" label="About" />
          <FooterLink to="/contact" label="Contact" />
        </div>

        {/* SOCIAL */}
        <div>
          <h4 style={styles.heading}>Follow</h4>

          <ExternalLink
            href="https://github.com/aditykalburgi"
            label="GitHub"
          />
          <ExternalLink
            href="https://www.linkedin.com/in/aditya-kalburgi-080b5b267/"
            label="LinkedIn"
          />
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div style={styles.bottomBar}>
        © {new Date().getFullYear()} Ryze.ai — All rights reserved.
      </div>
    </footer>
  );
}

/* ---------- Reusable Components ---------- */

function FooterLink({ to, label }) {
  return (
    <p>
      <Link to={to} style={styles.link}>
        {label}
      </Link>
    </p>
  );
}

function ExternalLink({ href, label }) {
  return (
    <p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.link}
      >
        {label}
      </a>
    </p>
  );
}

/* ---------- Styles ---------- */

const styles = {
  footer: {
    background: "#020617",
    color: "#cbd5f5",
    padding: "3rem 1rem 1.5rem",
    marginTop: "3rem",
  },

  container: {
    maxWidth: "1200px",
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "2rem",
  },

  brand: {
    color: "#ffffff",
    marginBottom: "0.5rem",
    fontWeight: "600",
  },

  description: {
    fontSize: "14px",
    lineHeight: "1.6",
    color: "#94a3b8",
  },

  heading: {
    color: "#ffffff",
    marginBottom: "0.8rem",
    fontSize: "15px",
    fontWeight: "600",
  },

  link: {
    color: "#94a3b8",
    textDecoration: "none",
    fontSize: "14px",
    transition: "0.2s",
  },

  bottomBar: {
    borderTop: "1px solid #1e293b",
    marginTop: "2rem",
    paddingTop: "1rem",
    textAlign: "center",
    fontSize: "13px",
    color: "#64748b",
  },
};
