import React from "react";

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
        <h1
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#4f46e5",
            cursor: "pointer",
          }}
        >
          RYZE.AI
        </h1>

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
            {["Home", "Templates", "Docs", "Contact"].map((item) => (
              <li
                key={item}
                style={{
                  cursor: "pointer",
                  fontWeight: 500,
                  color: "#374151",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#4f46e5")}
                onMouseLeave={(e) => (e.target.style.color = "#374151")}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
