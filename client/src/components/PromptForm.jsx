import React, { useState } from "react";

export default function PromptForm({ onSubmit }) {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    await onSubmit(prompt);
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        gap: "10px",
        marginTop: "1rem",
      }}
    >
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe your UI... (e.g. Login page with gradient background)"
        style={{
          flex: 1,
          padding: "12px 15px",
          borderRadius: "8px",
          border: "1px solid #d1d5db",
          fontSize: "16px",
          outline: "none",
        }}
      />

      <button
        type="submit"
        disabled={!prompt.trim() || loading}
        style={{
          padding: "12px 20px",
          borderRadius: "8px",
          border: "none",
          background: loading ? "#9ca3af" : "#4f46e5",
          color: "white",
          fontWeight: "600",
          cursor: loading ? "not-allowed" : "pointer",
          transition: "0.2s",
        }}
      >
        {loading ? "Generating..." : "Generate"}
      </button>
    </form>
  );
}
