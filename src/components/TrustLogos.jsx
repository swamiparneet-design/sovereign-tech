export default function TrustLogos() {
  const technologies = [
    'Python', 'React', 'FastAPI', 'LangChain', 'Ollama', 'Docker',
    'PostgreSQL', 'Redis', 'Neo4j', 'Qdrant', 'TailwindCSS', 'Node.js',
    'Supabase', 'Hetzner', 'LangGraph', 'HuggingFace'
  ]

  return (
    <section style={{
      padding: '60px 0',
      background: 'var(--secondary-bg)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div className="section-container" style={{ maxWidth: '1400px', padding: '0 24px' }}>
        <h3 style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '40px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px' }}>
          Technologies We Master
        </h3>
        
        {/* Infinite Scroll Marquee - Row 1 */}
        <div style={{ overflow: 'hidden', marginBottom: '20px' }}>
          <div style={{ display: 'flex', gap: '60px', animation: 'scroll 30s linear infinite' }}>
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={`row1-${index}`}
                style={{
                  fontSize: '24px',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  whiteSpace: 'nowrap',
                  opacity: 0.7,
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Infinite Scroll Marquee - Row 2 (opposite direction) */}
        <div style={{ overflow: 'hidden' }}>
          <div style={{ display: 'flex', gap: '60px', animation: 'scroll-reverse 30s linear infinite' }}>
            {[...technologies.reverse(), ...technologies].map((tech, index) => (
              <div
                key={`row2-${index}`}
                style={{
                  fontSize: '24px',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  whiteSpace: 'nowrap',
                  opacity: 0.5,
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  )
}
