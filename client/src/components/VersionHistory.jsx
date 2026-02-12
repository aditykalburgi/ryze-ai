import React, { useState } from "react";

export default function VersionHistory({ versions = [], onSelect }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleSelect = (version, index) => {
    setActiveIndex(index);
    onSelect(version);
  };

  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        padding: "1rem",
        marginTop: "1rem",
        boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        maxHeight: "300px",
        overflowY: "auto",
      }}
    >
      <h3 style={{ marginBottom: "0.8rem" }}> History</h3>

      {versions.length === 0 ? (
        <p style={{ color: "#6b7280" }}>No versions available</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {versions.map((v, i) => (
            <li key={i} style={{ marginBottom: "8px" }}>
              <button
                onClick={() => handleSelect(v, i)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "10px",
                  borderRadius: "8px",
                  border:
                    activeIndex === i
                      ? "1px solid #4f46e5"
                      : "1px solid #e5e7eb",
                  background:
                    activeIndex === i ? "#eef2ff" : "#ffffff",
                  cursor: "pointer",
                  transition: "0.2s",
                }}
              >
                {v.createdAt
                  ? new Date(v.createdAt).toLocaleString()
                  : `Version ${i + 1}`}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
