import React from "react";
import { Sandpack } from "@codesandbox/sandpack-react";

export default function LivePreview({ code, loading }) {
  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        marginTop: "1rem",
        position: "relative",
      }}
    >
      {loading && (
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(255, 255, 255, 0.95)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
          borderRadius: "12px",
          backdropFilter: "blur(4px)",
        }}>
          <div style={{
            textAlign: "center",
          }}>
            <div style={{
              width: "40px",
              height: "40px",
              border: "3px solid rgba(99, 102, 241, 0.1)",
              borderTop: "3px solid #6366f1",
              borderRadius: "50%",
              animation: "spin 0.8s linear infinite",
              margin: "0 auto 12px",
            }}></div>
            <p style={{ color: "#666", fontSize: "0.9rem", fontWeight: "500" }}>
              Generating preview...
            </p>
          </div>
        </div>
      )}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      <Sandpack
        template="react"
        files={{
          "/App.js": code || `export default function App() {
  return <h2>Hello Start generating UI!</h2>;
}`,
        }}
        options={{
          showNavigator: false,
          showTabs: true,
          editorHeight: 400,
          showLineNumbers: true,
          wrapContent: true,
        }}
        theme="light"
      />
    </div>
  );
}
