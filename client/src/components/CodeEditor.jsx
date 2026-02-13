import React from "react";
import MonacoEditor from "@monaco-editor/react";

export default function CodeEditor({ code, onChange }) {
  const [selectedTab, setSelectedTab] = React.useState("App.jsx");
  const [isCopied, setIsCopied] = React.useState(false);
  const [isFormatting, setIsFormatting] = React.useState(false);

  const tabs = [
    { name: "App.jsx", icon: "⚛️", language: "javascript" },
    { name: "styles.css", icon: "🎨", language: "css", disabled: true },
    { name: "index.js", icon: "📦", language: "javascript", disabled: true },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleFormat = () => {
    setIsFormatting(true);
    // Simulate formatting delay
    setTimeout(() => setIsFormatting(false), 500);
    // In a real scenario, you'd format the code here
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = selectedTab;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={styles.container}>
      
      {/* TOP BAR WITH TABS */}
      <div style={styles.topBar}>
        <div style={styles.tabsContainer}>
          {tabs.map((tab) => (
            <div
              key={tab.name}
              onClick={() => !tab.disabled && setSelectedTab(tab.name)}
              style={{
                ...styles.fileTab,
                ...(selectedTab === tab.name ? styles.activeTab : {}),
                ...(tab.disabled ? styles.disabledTab : {}),
              }}
              onMouseEnter={(e) => {
                if (!tab.disabled) {
                  e.currentTarget.style.background = 'rgba(99, 102, 241, 0.15)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedTab !== tab.name && !tab.disabled) {
                  e.currentTarget.style.background = 'transparent';
                }
              }}
            >
              <span style={styles.tabIcon}>{tab.icon}</span>
              <span style={styles.tabName}>{tab.name}</span>
              {selectedTab === tab.name && (
                <div style={styles.activeIndicator}></div>
              )}
            </div>
          ))}
        </div>

        {/* TOOLBAR */}
        <div style={styles.toolbar}>
          {/* Format Button */}
          <button
            onClick={handleFormat}
            style={styles.toolbarButton}
            title="Format Code"
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(99, 102, 241, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
            }}
          >
            {isFormatting ? (
              <div style={styles.spinner}></div>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            )}
          </button>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            style={styles.toolbarButton}
            title="Copy Code"
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(99, 102, 241, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
            }}
          >
            {isCopied ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            )}
          </button>

          {/* Download Button */}
          <button
            onClick={handleDownload}
            style={styles.toolbarButton}
            title="Download Code"
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(99, 102, 241, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </button>
        </div>
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
            fontFamily: "'Fira Code', 'Monaco', 'Menlo', monospace",
            fontLigatures: true,
            wordWrap: "on",
            automaticLayout: true,
            scrollBeyondLastLine: false,
            tabSize: 2,
            padding: { top: 16, bottom: 16 },
            lineNumbers: "on",
            renderLineHighlight: "all",
            scrollbar: {
              vertical: "auto",
              horizontal: "auto",
              verticalScrollbarSize: 10,
              horizontalScrollbarSize: 10,
            },
            cursorBlinking: "smooth",
            cursorSmoothCaretAnimation: true,
            smoothScrolling: true,
            formatOnPaste: true,
            formatOnType: true,
          }}
        />
      </div>

      {/* STATUS BAR */}
      <div style={styles.statusBar}>
        <div style={styles.statusLeft}>
          <div style={styles.statusItem}>
            <div style={styles.statusDot}></div>
            <span>Ready</span>
          </div>
          <div style={styles.statusItem}>
            <span style={styles.statusIcon}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </span>
            <span>JavaScript</span>
          </div>
        </div>
        <div style={styles.statusRight}>
          <div style={styles.statusItem}>
            <span>{code.split('\n').length} lines</span>
          </div>
          <div style={styles.statusItem}>
            <span>UTF-8</span>
          </div>
          <div style={styles.statusItem}>
            <span>LF</span>
          </div>
        </div>
      </div>

      <style>{keyframes}</style>
    </div>
  );
}

/* ---------- KEYFRAMES ---------- */
const keyframes = `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`;

/* ---------- STYLES ---------- */
const styles = {
  container: {
    height: "100%",
    background: "#1e1e2e",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },

  topBar: {
    height: "48px",
    background: "rgba(15, 15, 25, 0.95)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: "12px",
  },

  tabsContainer: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    paddingLeft: "12px",
    flex: 1,
  },

  fileTab: {
    position: "relative",
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: "13px",
    padding: "8px 16px",
    borderRadius: "6px 6px 0 0",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    userSelect: "none",
  },

  activeTab: {
    background: "rgba(99, 102, 241, 0.15)",
    color: "#e0e7ff",
    fontWeight: "500",
  },

  disabledTab: {
    opacity: 0.4,
    cursor: "not-allowed",
  },

  tabIcon: {
    fontSize: "14px",
    lineHeight: 1,
  },

  tabName: {
    fontSize: "13px",
  },

  activeIndicator: {
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "70%",
    height: "2px",
    background: "linear-gradient(90deg, #6366f1, #a855f7)",
    borderRadius: "2px 2px 0 0",
  },

  toolbar: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },

  toolbarButton: {
    width: "32px",
    height: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255, 255, 255, 0.05)",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    borderRadius: "6px",
    color: "rgba(255, 255, 255, 0.7)",
    cursor: "pointer",
    transition: "all 0.2s ease",
    padding: 0,
  },

  spinner: {
    width: "12px",
    height: "12px",
    border: "2px solid rgba(255, 255, 255, 0.2)",
    borderTop: "2px solid #6366f1",
    borderRadius: "50%",
    animation: "spin 0.6s linear infinite",
  },

  editor: {
    flex: 1,
    overflow: "hidden",
  },

  statusBar: {
    height: "28px",
    background: "rgba(15, 15, 25, 0.95)",
    backdropFilter: "blur(10px)",
    borderTop: "1px solid rgba(255, 255, 255, 0.08)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 16px",
    fontSize: "12px",
    color: "rgba(255, 255, 255, 0.6)",
  },

  statusLeft: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },

  statusRight: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },

  statusItem: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },

  statusDot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "#10b981",
    animation: "pulse 2s ease-in-out infinite",
  },

  statusIcon: {
    display: "flex",
    alignItems: "center",
    opacity: 0.7,
  },
};