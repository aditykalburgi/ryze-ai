import React from "react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
        padding: "0.8rem 2rem",
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo / Brand */}
        <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <img
            src="/assets/logos/ryzeai.png"
            alt="Ryze AI"
            style={{
              height: "55px",
              cursor: "pointer",
            }}
          />
        </Link>

        {/* Navigation */}
        <nav>
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              gap: "1.5rem",
              margin: 0,
              padding: 0,
            }}
          >
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  style={{
                    textDecoration: "none",
                    fontWeight: 500,
                    color: "#374151",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#4f46e5")}
                  onMouseLeave={(e) => (e.target.style.color = "#374151")}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
