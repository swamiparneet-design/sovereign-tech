export default function TechStack() {
  const technologies = [
    { name: 'Python', category: 'AI/ML' },
    { name: 'React', category: 'Frontend' },
    { name: 'FastAPI', category: 'Backend' },
    { name: 'LangChain', category: 'AI/ML' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Ollama', category: 'AI/ML' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Qdrant', category: 'Database' },
    { name: 'TailwindCSS', category: 'Frontend' },
    { name: 'LangGraph', category: 'AI/ML' },
    { name: 'Redis', category: 'Database' },
    { name: 'HuggingFace', category: 'AI/ML' },
    { name: 'Supabase', category: 'Backend' },
    { name: 'Neo4j', category: 'Database' },
    { name: 'Hetzner', category: 'DevOps' },
  ]

  return (
    <section className="section-container">
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <div style={{
          display: 'inline-block',
          padding: '8px 20px',
          borderRadius: '50px',
          border: '1px solid var(--accent-1)',
          background: 'var(--accent-glow)',
          marginBottom: '16px',
          fontSize: '14px',
          fontWeight: 600,
          color: 'var(--text-accent)',
        }}>
          BUILT WITH
        </div>
        <h2 style={{
          fontFamily: 'Clash Display',
          fontSize: 'clamp(32px, 5vw, 56px)',
          fontWeight: 700,
          lineHeight: 1.2,
        }}>
          Battle-Tested Technology<br />
          <span className="gradient-text">Stack</span>
        </h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '24px',
      }}>
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="card-3d"
            style={{
              padding: '24px',
              textAlign: 'center',
              cursor: 'pointer',
            }}
          >
            <div style={{
              fontSize: '32px',
              marginBottom: '12px',
            }}>
              {getIcon(tech.name)}
            </div>
            <div style={{
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginBottom: '8px',
            }}>
              {tech.name}
            </div>
            <div style={{
              padding: '4px 12px',
              borderRadius: '20px',
              background: 'var(--accent-glow)',
              color: 'var(--text-accent)',
              fontSize: '12px',
              fontWeight: 500,
              display: 'inline-block',
            }}>
              {tech.category}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function getIcon(name) {
  const icons = {
    Python: '🐍',
    React: '⚛️',
    FastAPI: '⚡',
    LangChain: '🔗',
    PostgreSQL: '🐘',
    Docker: '🐳',
    Ollama: '🦙',
    'Node.js': '📦',
    Qdrant: '💎',
    TailwindCSS: '🎨',
    LangGraph: '📊',
    Redis: '🔴',
    HuggingFace: '🤗',
    Supabase: '📚',
    Neo4j: '🕸️',
    Hetzner: '🖥️',
  }
  return icons[name] || '🔹'
}
