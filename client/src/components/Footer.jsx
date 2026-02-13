import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#111827",
        color: "#d1d5db",
        padding: "2rem 1rem",
        marginTop: "3rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "1.5rem",
        }}
      >
        {/* Branding */}
        <div>
          <h3 style={{ color: "white", marginBottom: "0.5rem" }}>
            Ryze.ai
          </h3>
          <p style={{ fontSize: "14px" }}>
            Generate modern UI components using AI.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 style={{ color: "white", marginBottom: "0.5rem" }}>Quick Links</h4>
          <p><Link to="/" style={{ color: "#d1d5db", textDecoration: "none" }}>Home</Link></p>
          <p><Link to="/about" style={{ color: "#d1d5db", textDecoration: "none" }}>About</Link></p>
          <p><Link to="/contact" style={{ color: "#d1d5db", textDecoration: "none" }}>Contact</Link></p>
        </div>

        {/* Social Links */}
        <div>
          <h4 style={{ color: "white", marginBottom: "0.5rem" }}>Follow</h4>
          <p style={{ cursor: "pointer" }}>GitHub</p>
          <p style={{ cursor: "pointer" }}>LinkedIn</p>

        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: "1px solid #374151",
          marginTop: "1.5rem",
          paddingTop: "1rem",
          textAlign: "center",
          fontSize: "14px",
        }}
      >
        © 2026 Ryze.ai. All rights reserved.
      </div>
    </footer>
  );
}
