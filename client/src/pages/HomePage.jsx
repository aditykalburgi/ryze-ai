import React from "react";
import Header from "../components/Header";
import PromptForm from "../components/PromptForm";
import CodeEditor from "../components/CodeEditor";
import LivePreview from "../components/LivePreview";
import VersionHistory from "../components/VersionHistory";

export default function HomePage() {
  const [code, setCode] = React.useState(`export default function App() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h2>Welcome to Ryze AI</h2>
      <p>Describe your UI above to get started!</p>
    </div>
  );
}`);
  const [versions, setVersions] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const handlePrompt = async (prompt) => {
    setLoading(true);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL || "http://localhost:5000"}/api/ui/generate`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt }),
        }
      );

      const data = await response.json();

      const generated =
        data.code ||
        `export default function App() {
  return (
    <div style={{ padding: 40 }}>
      <h1>${prompt}</h1>
    </div>
  );
}`;

      setCode(generated);
      setVersions([{ code: generated, createdAt: new Date() }, ...versions]);
    } catch (err) {
      alert("Failed to generate UI");
    } finally {
      setLoading(false);
    }
  };

  const handleSelectVersion = (v) => setCode(v.code);

  return (
    <div style={styles.page}>
      <Header />

      {/* Animated Background */}
      <div style={styles.backgroundAnimation}>
        <div style={styles.gradientOrb1}></div>
        <div style={styles.gradientOrb2}></div>
        <div style={styles.gradientOrb3}></div>
      </div>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <div style={styles.badge}>
            <span style={styles.badgeText}>AI-Powered Development</span>
          </div>
          
          <h1 style={styles.heroTitle}>
            Build UI with{" "}
            <span style={styles.gradientText}>AI Magic</span>
          </h1>
          
          <p style={styles.heroSubtitle}>
            Describe any interface and watch Ryze AI generate production-ready React code in seconds.
          </p>

          <PromptForm onSubmit={handlePrompt} />

          {loading && (
            <div style={styles.loadingContainer}>
              <div style={styles.spinner}></div>
              <p style={styles.loadingText}>Crafting your UI...</p>
            </div>
          )}
        </div>
      </section>

      {/* WORKSPACE */}
      <section style={styles.workspace}>
        
        {/* LEFT - PREVIEW */}
        <div style={styles.panel}>
          <div style={styles.panelHeader}>
            <div style={styles.headerContent}>
              <div style={styles.iconWrapper}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <span>Live Preview</span>
            </div>
          </div>
          <LivePreview code={code} />
        </div>

        {/* CENTER - EDITOR */}
        <div style={styles.panel}>
          <div style={styles.panelHeader}>
            <div style={styles.headerContent}>
              <div style={styles.iconWrapper}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <span>Code Editor</span>
            </div>
          </div>
          <CodeEditor code={code} onChange={setCode} />
        </div>

        {/* RIGHT - VERSION */}
        <div style={styles.panel}>
          <div style={styles.panelHeader}>
            <div style={styles.headerContent}>
              <div style={styles.iconWrapper}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <span>History</span>
            </div>
            {versions.length > 0 && (
              <div style={styles.versionCount}>{versions.length}</div>
            )}
          </div>
          <VersionHistory
            versions={versions}
            onSelect={handleSelectVersion}
          />
        </div>
      </section>

      <style>{keyframes}</style>
    </div>
  );
}

/* ---------- KEYFRAMES ---------- */
const keyframes = `
  @keyframes float {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(30px, -30px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes shimmer {
    0% { background-position: -1000px 0; }
    100% { background-position: 1000px 0; }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

/* ---------- STYLES ---------- */
const styles = {
  page: {
    background: "#0a0a0f",
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
  },

  backgroundAnimation: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 0,
    pointerEvents: "none",
  },

  gradientOrb1: {
    position: "absolute",
    top: "-10%",
    right: "-5%",
    width: "600px",
    height: "600px",
    background: "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)",
    borderRadius: "50%",
    animation: "float 20s ease-in-out infinite",
    filter: "blur(60px)",
  },

  gradientOrb2: {
    position: "absolute",
    bottom: "-10%",
    left: "-5%",
    width: "500px",
    height: "500px",
    background: "radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, transparent 70%)",
    borderRadius: "50%",
    animation: "float 25s ease-in-out infinite reverse",
    filter: "blur(60px)",
  },

  gradientOrb3: {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
    height: "400px",
    background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
    borderRadius: "50%",
    animation: "float 30s ease-in-out infinite",
    filter: "blur(60px)",
  },

  hero: {
    position: "relative",
    zIndex: 1,
    textAlign: "center",
    padding: "100px 20px 80px",
  },

  heroContent: {
    maxWidth: "800px",
    margin: "0 auto",
    animation: "fadeInUp 0.8s ease-out",
  },

  badge: {
    display: "inline-block",
    padding: "8px 20px",
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "50px",
    marginBottom: "30px",
  },

  badgeText: {
    fontSize: "0.85rem",
    fontWeight: "500",
    color: "#e0e7ff",
    letterSpacing: "0.5px",
  },

  heroTitle: {
    fontSize: "clamp(2.5rem, 6vw, 4rem)",
    fontWeight: "800",
    marginBottom: "20px",
    color: "#ffffff",
    lineHeight: "1.2",
    letterSpacing: "-0.02em",
  },

  gradientText: {
    background: "linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },

  heroSubtitle: {
    fontSize: "clamp(1rem, 2vw, 1.25rem)",
    marginBottom: "40px",
    color: "rgba(255, 255, 255, 0.7)",
    lineHeight: "1.6",
    maxWidth: "600px",
    margin: "0 auto 40px",
  },

  loadingContainer: {
    marginTop: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
  },

  spinner: {
    width: "20px",
    height: "20px",
    border: "3px solid rgba(255, 255, 255, 0.1)",
    borderTop: "3px solid #6366f1",
    borderRadius: "50%",
    animation: "spin 0.8s linear infinite",
  },

  loadingText: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: "0.95rem",
    fontWeight: "500",
  },

  workspace: {
    position: "relative",
    zIndex: 1,
    display: "grid",
    gridTemplateColumns: "1.2fr 1.2fr 0.6fr",
    gap: "20px",
    padding: "20px",
    maxWidth: "1800px",
    margin: "0 auto",
    height: "calc(100vh - 400px)",
    minHeight: "600px",
  },

  panel: {
    background: "rgba(255, 255, 255, 0.03)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    borderRadius: "16px",
    padding: "0",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
    transition: "all 0.3s ease",
  },

  panelHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 20px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
    background: "rgba(255, 255, 255, 0.02)",
  },

  headerContent: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#e0e7ff",
    fontSize: "0.95rem",
    fontWeight: "600",
  },

  iconWrapper: {
    width: "32px",
    height: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(99, 102, 241, 0.1)",
    borderRadius: "8px",
    color: "#818cf8",
  },

  versionCount: {
    padding: "4px 12px",
    background: "rgba(99, 102, 241, 0.2)",
    color: "#c7d2fe",
    borderRadius: "12px",
    fontSize: "0.8rem",
    fontWeight: "600",
  },
};