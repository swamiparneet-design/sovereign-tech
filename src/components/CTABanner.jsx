export default function CTABanner() {
  return (
    <section style={{
      padding: '100px 24px',
      background: 'linear-gradient(135deg, var(--secondary-bg), var(--surface))',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Animated Gradient Mesh Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 50%, var(--accent-glow) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, #06B6D420 0%, transparent 50%),
          radial-gradient(circle at 40% 20%, #8B5CF620 0%, transparent 50%)
        `,
        opacity: 0.5,
        animation: 'pulse 8s ease-in-out infinite',
      }} />

      <div className="section-container" style={{ maxWidth: '900px', padding: 0, textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <h2 style={{
          fontFamily: 'Clash Display',
          fontSize: 'clamp(32px, 6vw, 64px)',
          fontWeight: 700,
          lineHeight: 1.2,
          marginBottom: '20px',
        }}>
          Ready to Build Your AI<br />
          <span className="gradient-text">Empire?</span>
        </h2>
        <p style={{
          fontSize: 'clamp(18px, 2vw, 24px)',
          color: 'var(--text-secondary)',
          marginBottom: '40px',
          lineHeight: 1.6,
        }}>
          Let's discuss your project. Free consultation.<br />
          No commitment. Just possibilities.
        </p>
        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <button className="btn-primary" style={{ fontSize: '18px', padding: '16px 40px' }}>
            Book Free Call →
          </button>
          <button className="btn-secondary" style={{ fontSize: '18px', padding: '16px 40px' }}>
            WhatsApp Us
          </button>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </section>
  )
}
