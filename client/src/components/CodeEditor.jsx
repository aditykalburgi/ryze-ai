import React from "react";
import MonacoEditor from "@monaco-editor/react";

export default function CodeEditor({ code, onChange }) {
  return (
    <div style={styles.container}>
      
      {/* TOP BAR */}
      <div style={styles.topBar}>
        <span style={styles.fileTab}>App.js</span>
      </div>

      {/* EDITOR */}
      <div style={styles.editor}>
        <MonacoEditor
          height="100%"
          defaultLanguage="javascript"
          theme="vs-dark"
          value={code}
          onChange={(value) => onChange(value || "")}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            wordWrap: "on",
            automaticLayout: true,
            scrollBeyondLastLine: false,
            tabSize: 2,
            padding: { top: 10 },
          }}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100%",
    background: "#0f172a",
    display: "flex",
    flexDirection: "column",
  },

  topBar: {
    height: "40px",
    background: "#020617",
    borderBottom: "1px solid #1e293b",
    display: "flex",
    alignItems: "center",
    paddingLeft: "12px",
  },

  fileTab: {
    color: "#e2e8f0",
    fontSize: "14px",
    padding: "6px 12px",
    background: "#0f172a",
    borderRadius: "6px",
  },

  editor: {
    flex: 1,
  },
};
