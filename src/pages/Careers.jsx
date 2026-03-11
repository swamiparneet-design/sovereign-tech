export default function Careers() {
  const positions = [
    {
      title: 'Senior AI Engineer',
      location: 'Remote / Bangalore',
      type: 'Full-time',
      department: 'Engineering',
      description: 'Build autonomous AI systems using LangGraph, LlamaIndex, and local LLMs.',
      requirements: [
        '5+ years Python experience',
        'Experience with LangChain/LangGraph',
        'Strong understanding of LLMs',
        'Previous AI/ML project experience',
      ],
    },
    {
      title: 'Full Stack Developer',
      location: 'Remote',
      type: 'Full-time',
      department: 'Engineering',
      description: 'Build beautiful, responsive UIs and robust backends for our AI products.',
      requirements: [
        '4+ years React + Node.js',
        'Experience with modern CSS (Tailwind)',
        'Database design (PostgreSQL/Redis)',
        'API design and development',
      ],
    },
    {
      title: 'AI Research Scientist',
      location: 'Bangalore / Remote',
      type: 'Full-time',
      department: 'Research',
      description: 'Push the boundaries of local LLM capabilities and multi-agent systems.',
      requirements: [
        'PhD in CS/ML or equivalent experience',
        'Published research in AI/ML',
        'Experience with transformer models',
        'Strong Python + PyTorch/TensorFlow',
      ],
    },
    {
      title: 'Product Manager - AI',
      location: 'Remote',
      type: 'Full-time',
      department: 'Product',
      description: 'Define product strategy and roadmap for our AI OS and agent products.',
      requirements: [
        '3+ years PM experience in AI/SaaS',
        'Technical background preferred',
        'Customer-focused mindset',
        'Excellent communication skills',
      ],
    },
    {
      title: 'DevOps Engineer',
      location: 'Remote',
      type: 'Full-time',
      department: 'Infrastructure',
      description: 'Build and maintain infrastructure for deploying AI systems at scale.',
      requirements: [
        '4+ years DevOps experience',
        'Docker + Kubernetes expertise',
        'CI/CD pipeline experience',
        'Cloud platforms (AWS/GCP/Azure)',
      ],
    },
    {
      title: 'Sales Development Representative',
      location: 'Remote',
      type: 'Full-time',
      department: 'Sales',
      description: 'Generate qualified leads and build pipeline for enterprise sales.',
      requirements: [
        '2+ years B2B SDR experience',
        'Tech/AI industry background',
        'Excellent communication',
        'Self-starter mentality',
      ],
    },
  ]

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero */}
      <section style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--gradient-hero)',
        padding: '100px 24px',
      }}>
        <div style={{ textAlign: 'center', maxWidth: '900px' }}>
          <h1 style={{
            fontFamily: 'Clash Display',
            fontSize: 'clamp(48px, 6vw, 80px)',
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: '24px',
          }}>
            Build the Future<br />
            <span className="gradient-text">With Us</span>
          </h1>
          <p style={{
            fontSize: 'clamp(18px, 2vw, 24px)',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            marginTop: '24px',
          }}>
            Join a team building sovereign AI systems that serve clients worldwide.
            Remote-first. Impact-driven.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section-container">
        <h2 style={{
          fontFamily: 'Clash Display',
          fontSize: 'clamp(32px, 5vw, 48px)',
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: '60px',
        }}>
          Why Join Sovereign Tech?
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
          marginBottom: '80px',
        }}>
          {[
            { icon: '🌍', title: 'Remote-First', description: 'Work from anywhere. We hire globally.' },
            { icon: '💰', title: 'Competitive Pay', description: 'Top-of-market compensation + equity.' },
            { icon: '📚', title: 'Learning Budget', description: '$2000/year for courses, conferences, books.' },
            { icon: '🏥', title: 'Health Insurance', description: 'Comprehensive coverage for you and family.' },
            { icon: '⏰', title: 'Flexible Hours', description: 'Work when you\'re most productive.' },
            { icon: '🚀', title: 'Cutting-Edge Tech', description: 'Work with latest AI/ML technologies.' },
          ].map((perk, index) => (
            <div
              key={index}
              className="card-3d"
              style={{ padding: '32px' }}
            >
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>{perk.icon}</div>
              <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px' }}>
                {perk.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {perk.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section style={{
        background: 'var(--secondary-bg)',
        padding: '100px 24px',
      }}>
        <div className="section-container" style={{ maxWidth: '1200px', padding: 0 }}>
          <h2 style={{
            fontFamily: 'Clash Display',
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: '60px',
          }}>
            Open Positions
          </h2>
          <div style={{ display: 'grid', gap: '24px' }}>
            {positions.map((position, index) => (
              <div
                key={index}
                className="card-3d"
                style={{
                  padding: '32px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '32px',
                  alignItems: 'start',
                }}
              >
                <div>
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: 600,
                    marginBottom: '8px',
                    color: 'var(--text-primary)',
                  }}>
                    {position.title}
                  </h3>
                  <div style={{
                    display: 'flex',
                    gap: '16px',
                    flexWrap: 'wrap',
                    marginBottom: '16px',
                  }}>
                    <span style={{
                      padding: '6px 12px',
                      borderRadius: '20px',
                      background: 'var(--accent-glow)',
                      color: 'var(--text-accent)',
                      fontSize: '12px',
                      fontWeight: 600,
                    }}>
                      {position.department}
                    </span>
                    <span style={{
                      padding: '6px 12px',
                      borderRadius: '20px',
                      background: 'var(--surface)',
                      color: 'var(--text-secondary)',
                      fontSize: '12px',
                      fontWeight: 500,
                    }}>
                      {position.location}
                    </span>
                    <span style={{
                      padding: '6px 12px',
                      borderRadius: '20px',
                      background: 'var(--surface)',
                      color: 'var(--text-secondary)',
                      fontSize: '12px',
                      fontWeight: 500,
                    }}>
                      {position.type}
                    </span>
                  </div>
                  <p style={{
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '16px',
                  }}>
                    {position.description}
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px', color: 'var(--text-primary)' }}>
                    Requirements:
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {position.requirements.map((req, i) => (
                      <li key={i} style={{
                        padding: '8px 0',
                        color: 'var(--text-secondary)',
                        fontSize: '14px',
                        borderBottom: '1px solid var(--border)',
                      }}>
                        ✓ {req}
                      </li>
                    ))}
                  </ul>
                  <button className="btn-primary" style={{ width: '100%', marginTop: '20px' }}>
                    Apply Now →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-container" style={{ textAlign: 'center', padding: '100px 24px' }}>
        <h2 style={{
          fontFamily: 'Clash Display',
          fontSize: 'clamp(32px, 5vw, 48px)',
          fontWeight: 700,
          marginBottom: '16px',
        }}>
          Don't See Your Role?
        </h2>
        <p style={{
          fontSize: '18px',
          color: 'var(--text-secondary)',
          marginBottom: '32px',
        }}>
          We're always looking for exceptional talent. Send us your resume.
        </p>
        <button className="btn-secondary" style={{ fontSize: '16px', padding: '16px 40px' }}>
          Submit General Application →
        </button>
      </section>
    </div>
  )
}
