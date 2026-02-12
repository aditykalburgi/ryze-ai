import React from "react";
import { Sandpack } from "@codesandbox/sandpack-react";

export default function LivePreview({ code }) {
  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        marginTop: "1rem",
      }}
    >
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
