export default function Portfolio() {
  const projects = [
    {
      client: 'TechCorp USA',
      location: 'San Francisco, CA',
      category: 'AI Automation',
      title: 'Enterprise AI OS for Fortune 500',
      description: 'Built a complete autonomous AI operating system handling customer support, data processing, and internal workflows. Reduced manual work by 80%.',
      results: ['80% reduction in manual tasks', '$2M+ annual savings', '24/7 autonomous operation', 'Zero data leaks'],
      tech: ['Python', 'LangGraph', 'Ollama', 'PostgreSQL'],
      image: '🏢',
    },
    {
      client: 'FinServe Ltd',
      location: 'London, UK',
      category: 'FinTech',
      title: 'Automated Accounting Assistant',
      description: 'AI assistant for chartered accountants automating GST filing, ITR preparation, and client management. Handles 1000+ clients simultaneously.',
      results: ['10x faster processing', '99.9% accuracy', '1000+ clients handled', 'GDPR compliant'],
      tech: ['FastAPI', 'React', 'Tally API', 'OCR'],
      image: '💼',
    },
    {
      client: 'MediCare Health',
      location: 'Berlin, Germany',
      category: 'Healthcare',
      title: 'Patient Data Intelligence System',
      description: 'HIPAA-compliant AI system for patient data analysis, appointment scheduling, and medical record management. 100% local deployment.',
      results: ['HIPAA compliant', '50% faster scheduling', 'Zero cloud dependency', 'Real-time analytics'],
      tech: ['Python', 'Neo4j', 'Qdrant', 'Docker'],
      image: '🏥',
    },
    {
      client: 'EduTech Global',
      location: 'Singapore',
      category: 'EdTech',
      title: 'Personalized Learning AI',
      description: 'AI-powered personalized learning platform adapting to student pace and style. Automated content generation and assessment.',
      results: ['3x student engagement', 'Automated grading', 'Multi-language support', 'Scalable to 10K users'],
      tech: ['React', 'Node.js', 'LangChain', 'Redis'],
      image: '📚',
    },
    {
      client: 'RetailHub EU',
      location: 'Amsterdam, Netherlands',
      category: 'E-commerce',
      title: 'Inventory & Sales Prediction AI',
      description: 'ML-powered inventory management and sales forecasting. Reduced overstock by 60% and stockouts by 75%.',
      results: ['60% less overstock', '75% fewer stockouts', 'Real-time predictions', '€500K+ saved annually'],
      tech: ['Python', 'TensorFlow', 'PostgreSQL', 'FastAPI'],
      image: '🛒',
    },
    {
      client: 'LegalTech Partners',
      location: 'New York, NY',
      category: 'Legal Tech',
      title: 'Contract Analysis AI',
      description: 'NLP system for automated contract review, clause extraction, and risk assessment. Processes 500+ contracts daily.',
      results: ['90% time savings', '500+ contracts/day', 'Risk detection 95% accurate', 'SOC 2 Type II certified'],
      tech: ['Python', 'HuggingFace', 'Neo4j', 'React'],
      image: '⚖️',
    },
  ]

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero */}
      <section style={{
        minHeight: '60vh',
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
            Trusted by Clients<br />
            <span className="gradient-text">Worldwide</span>
          </h1>
          <p style={{
            fontSize: 'clamp(18px, 2vw, 24px)',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            marginTop: '24px',
          }}>
            Real results from businesses across 15+ countries.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{
        background: 'var(--secondary-bg)',
        padding: '60px 24px',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="section-container" style={{ maxWidth: '1400px', padding: 0 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '32px',
            textAlign: 'center',
          }}>
            {[
              { number: '50+', label: 'Global Clients' },
              { number: '15+', label: 'Countries Served' },
              { number: '$50M+', label: 'Client Revenue Impact' },
              { number: '100%', label: 'Data Sovereignty' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="gradient-text" style={{ fontSize: '40px', fontWeight: 700, marginBottom: '8px' }}>
                  {stat.number}
                </div>
                <div style={{ color: 'var(--text-secondary)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-3d"
              style={{ padding: '40px' }}
            >
              <div style={{ fontSize: '64px', marginBottom: '20px' }}>{project.image}</div>
              <div style={{
                padding: '6px 12px',
                borderRadius: '20px',
                background: 'var(--accent-glow)',
                color: 'var(--text-accent)',
                fontSize: '12px',
                fontWeight: 600,
                display: 'inline-block',
                marginBottom: '12px',
              }}>
                {project.category} • {project.location}
              </div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 600,
                marginBottom: '12px',
                color: 'var(--text-primary)',
              }}>
                {project.title}
              </h3>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: '20px',
              }}>
                {project.description}
              </p>
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px', color: 'var(--text-primary)' }}>
                  Results:
                </h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {project.results.map((result, i) => (
                    <li key={i} style={{
                      padding: '8px 0',
                      color: 'var(--text-primary)',
                      fontSize: '14px',
                    }}>
                      ✓ {result}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    style={{
                      padding: '6px 12px',
                      borderRadius: '20px',
                      background: 'var(--surface)',
                      color: 'var(--text-accent)',
                      fontSize: '12px',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section style={{
        background: 'var(--secondary-bg)',
        padding: '100px 24px',
        borderTop: '1px solid var(--border)',
      }}>
        <div className="section-container" style={{ maxWidth: '1200px', padding: 0 }}>
          <h2 style={{
            fontFamily: 'Clash Display',
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: '60px',
          }}>
            What Our Clients Say
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '32px',
          }}>
            {[
              {
                quote: "Sovereign Tech's AI OS transformed our operations. We've reduced costs by 80% while improving service quality. This is the future.",
                author: 'John Smith',
                role: 'CEO — TechCorp USA',
              },
              {
                quote: "Finally, an AI solution that keeps our data 100% secure. GDPR compliance made easy. Highly recommend for European companies.",
                author: 'Sarah Johnson',
                role: 'CTO — FinServe Ltd UK',
              },
              {
                quote: "The ROI was immediate. Within 3 months, we saved more than the investment. Best decision we made this year.",
                author: 'Marco Rossi',
                role: 'Founder — Milan Tech EU',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="card-3d"
                style={{ padding: '40px' }}
              >
                <div style={{ fontSize: '48px', opacity: 0.3, marginBottom: '20px' }}>"</div>
                <p style={{
                  fontSize: '16px',
                  lineHeight: 1.8,
                  color: 'var(--text-primary)',
                  marginBottom: '24px',
                }}>
                  {testimonial.quote}
                </p>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                    {testimonial.author}
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                    {testimonial.role}
                  </div>
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
          Ready to Be Our Next Success Story?
        </h2>
        <p style={{
          fontSize: '18px',
          color: 'var(--text-secondary)',
          marginBottom: '32px',
        }}>
          Let's build something extraordinary together.
        </p>
        <button className="btn-primary" style={{ fontSize: '16px', padding: '16px 40px' }}>
          Start Your Project →
        </button>
      </section>
    </div>
  )
}
