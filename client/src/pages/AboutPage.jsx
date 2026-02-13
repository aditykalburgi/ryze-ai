import React from 'react';
import Header from '../components/Header';

export default function AboutPage() {
  const features = [
    {
      icon: '',
      title: 'AI-Powered Suggestions',
      description: 'Get intelligent recommendations for layouts and components'
    },
    {
      icon: '',
      title: 'Customizable Components',
      description: 'Easily modify styles, themes, and layouts'
    },
    {
      icon: '',
      title: 'Cross-Platform Compatible',
      description: 'Works seamlessly across web and mobile screens'
    },
    {
      icon: '',
      title: 'Real-Time Preview',
      description: 'Instantly visualize changes as you design'
    },
    {
      icon: '',
      title: 'Code Export Options',
      description: 'Export UI in multiple frameworks and formats'
    },
    {
      icon: '',
      title: 'Drag and Drop Support',
      description: 'Build interfaces quickly with intuitive controls'
    },
    {
      icon: '',
      title: 'Theme Integration',
      description: 'Apply dark, light, or custom themes effortlessly'
    },
    {
      icon: '',
      title: 'Performance Optimized',
      description: 'Lightweight and fast-loading UI components'
    },
    {
      icon: '',
      title: 'Reusable Component Library',
      description: 'Save and reuse UI blocks across projects'
    },
    {
      icon: '',
      title: 'Accessibility Friendly',
      description: 'Designed following accessibility best practices'
    },
    {
      icon: '',
      title: 'Collaboration Support',
      description: 'Share and work on UI designs with your team'
    },
    {
      icon: '',
      title: 'Smart Layout Alignment',
      description: 'Auto-adjust spacing and alignment for better design'
    },
    {
      icon: '',
      title: 'Template Marketplace',
      description: 'Choose from ready-made professional templates'
    },
    {
      icon: '',
      title: 'Responsive Testing',
      description: 'Test UI across multiple screen sizes instantly'
    },
    {
      icon: '',
      title: 'Framework Integration',
      description: 'Works smoothly with React, Angular, and Vue'
    }
  ];

  return (
    <div style={styles.page}>
      <Header />

      {/* Animated Background */}
      <div style={styles.backgroundAnimation}>
        <div style={styles.gradientOrb1}></div>
        <div style={styles.gradientOrb2}></div>
      </div>

      <div style={styles.container}>
        {/* Hero Section */}
        <div style={styles.hero}>
          <div style={styles.badge}>
            <span style={styles.badgeText}> About Us</span>
          </div>
          
          <h1 style={styles.title}>
            Empowering Developers with{' '}
            <span style={styles.gradientText}>AI-Driven Design</span>
          </h1>
          
          <p style={styles.subtitle}>
            Ryze AI transforms the way developers build user interfaces. 
            Harness the power of artificial intelligence to create stunning, 
            production-ready React components in seconds.
          </p>
        </div>

        {/* Mission Statement */}
        <div style={styles.missionCard}>
          <div style={styles.missionIcon}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h2 style={styles.missionTitle}>Our Mission</h2>
          <p style={styles.missionText}>
            We believe that building beautiful user interfaces should be fast, intuitive, and accessible to everyone. 
            Ryze AI bridges the gap between imagination and implementation, allowing developers to focus on what matters 
            most—creating exceptional user experiences.
          </p>
        </div>

        {/* Features Grid */}
        <div style={styles.featuresSection}>
          <h2 style={styles.sectionTitle}>Powerful Features</h2>
          <p style={styles.sectionSubtitle}>
            Everything you need to build modern, responsive UIs
          </p>

          <div style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div 
                key={index} 
                style={{
                  ...styles.featureCard,
                  animationDelay: `${index * 0.05}s`
                }}
              >
                <div style={styles.featureIcon}>{feature.icon}</div>
                <h3 style={styles.featureTitle}>{feature.title}</h3>
                <p style={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div style={styles.statsSection}>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>10x</div>
            <div style={styles.statLabel}>Faster Development</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>100+</div>
            <div style={styles.statLabel}>UI Components</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>99.9%</div>
            <div style={styles.statLabel}>Uptime</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>50k+</div>
            <div style={styles.statLabel}>Happy Developers</div>
          </div>
        </div>

        {/* CTA Section */}
        <div style={styles.ctaSection}>
          <h2 style={styles.ctaTitle}>Ready to Transform Your Workflow?</h2>
          <p style={styles.ctaText}>
            Join thousands of developers who are already building faster with Ryze AI
          </p>
          <button style={styles.ctaButton}>
            Get Started Now
            <span style={styles.ctaArrow}>→</span>
          </button>
        </div>
      </div>

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

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

/* ---------- STYLES ---------- */
const styles = {
  page: {
    background: '#0a0a0f',
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden',
  },

  backgroundAnimation: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
    pointerEvents: 'none',
  },

  gradientOrb1: {
    position: 'absolute',
    top: '10%',
    right: '-10%',
    width: '600px',
    height: '600px',
    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%)',
    borderRadius: '50%',
    animation: 'float 20s ease-in-out infinite',
    filter: 'blur(60px)',
  },

  gradientOrb2: {
    position: 'absolute',
    bottom: '10%',
    left: '-10%',
    width: '500px',
    height: '500px',
    background: 'radial-gradient(circle, rgba(147, 51, 234, 0.12) 0%, transparent 70%)',
    borderRadius: '50%',
    animation: 'float 25s ease-in-out infinite reverse',
    filter: 'blur(60px)',
  },

  container: {
    position: 'relative',
    zIndex: 1,
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '4rem 2rem',
  },

  hero: {
    textAlign: 'center',
    marginBottom: '5rem',
    animation: 'fadeInUp 0.8s ease-out',
  },

  badge: {
    display: 'inline-block',
    padding: '8px 20px',
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '50px',
    marginBottom: '1.5rem',
  },

  badgeText: {
    fontSize: '0.85rem',
    fontWeight: '500',
    color: '#e0e7ff',
    letterSpacing: '0.5px',
  },

  title: {
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: '1.5rem',
    lineHeight: '1.2',
    letterSpacing: '-0.02em',
  },

  gradientText: {
    background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },

  subtitle: {
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    color: 'rgba(255, 255, 255, 0.7)',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.7',
  },

  missionCard: {
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '20px',
    padding: '3rem',
    marginBottom: '5rem',
    textAlign: 'center',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
    animation: 'fadeInUp 0.8s ease-out 0.2s backwards',
  },

  missionIcon: {
    width: '64px',
    height: '64px',
    margin: '0 auto 1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(168, 85, 247, 0.2))',
    borderRadius: '16px',
    color: '#818cf8',
  },

  missionTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '1rem',
  },

  missionText: {
    fontSize: '1.1rem',
    color: 'rgba(255, 255, 255, 0.7)',
    lineHeight: '1.8',
    maxWidth: '800px',
    margin: '0 auto',
  },

  featuresSection: {
    marginBottom: '5rem',
  },

  sectionTitle: {
    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
    fontWeight: '700',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: '0.5rem',
  },

  sectionSubtitle: {
    fontSize: '1.1rem',
    color: 'rgba(255, 255, 255, 0.6)',
    textAlign: 'center',
    marginBottom: '3rem',
  },

  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem',
  },

  featureCard: {
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '16px',
    padding: '2rem',
    transition: 'all 0.3s ease',
    animation: 'slideIn 0.6s ease-out backwards',
    cursor: 'default',
  },

  featureIcon: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },

  featureTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#e0e7ff',
    marginBottom: '0.5rem',
  },

  featureDescription: {
    fontSize: '0.95rem',
    color: 'rgba(255, 255, 255, 0.6)',
    lineHeight: '1.6',
  },

  statsSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
    marginBottom: '5rem',
  },

  statCard: {
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '16px',
    padding: '2.5rem 2rem',
    textAlign: 'center',
    transition: 'all 0.3s ease',
  },

  statNumber: {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '0.5rem',
  },

  statLabel: {
    fontSize: '1rem',
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: '500',
  },

  ctaSection: {
    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '20px',
    padding: '4rem 2rem',
    textAlign: 'center',
  },

  ctaTitle: {
    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '1rem',
  },

  ctaText: {
    fontSize: '1.1rem',
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: '2rem',
  },

  ctaButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '1rem 2.5rem',
    background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
    color: '#ffffff',
    fontSize: '1.1rem',
    fontWeight: '600',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 24px rgba(99, 102, 241, 0.3)',
  },

  ctaArrow: {
    fontSize: '1.3rem',
    transition: 'transform 0.3s ease',
  },
};