import { motion } from 'framer-motion'

export default function ServicesOverview() {
  const services = [
    {
      icon: '🧠',
      title: 'Sovereign AI OS',
      description: 'Complete autonomous AI operating system running 100% locally. Multi-agent orchestration, memory layers, and action automation.',
      tags: ['LangGraph', 'Ollama', 'RAG', 'Multi-Agent'],
      large: true,
    },
    {
      icon: '🤖',
      title: 'Custom AI Agents',
      description: 'Purpose-built AI agents for your specific business processes. From data entry to complex decision making.',
      tags: ['Python', 'LangChain', 'FastAPI'],
    },
    {
      icon: '⚡',
      title: 'SaaS Development',
      description: 'Full-stack SaaS products built for scale. Beautiful UIs, robust backends, AI-powered.',
      tags: ['React', 'Node.js', 'PostgreSQL'],
    },
    {
      icon: '🔧',
      title: 'Legacy Automation',
      description: 'Automate your Tally, ERP, and legacy software with AI. No API needed. Works headlessly.',
      tags: ['PyAutoGUI', 'UIA', 'OCR'],
    },
    {
      icon: '✍️',
      title: 'AI Content Engine',
      description: 'Fully automated content pipelines. 800+ blogs/month, SEO-optimized, auto-published.',
      tags: ['Mistral', 'WordPress API', 'SEO'],
    },
    {
      icon: '📊',
      title: 'Data Intelligence',
      description: 'Transform your raw data into business intelligence with AI-powered analytics dashboards.',
      tags: ['Python', 'Qdrant', 'Neo4j'],
    },
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
          OUR EXPERTISE
        </div>
        <h2 style={{
          fontFamily: 'Clash Display',
          fontSize: 'clamp(32px, 5vw, 56px)',
          fontWeight: 700,
          lineHeight: 1.2,
        }}>
          We Don't Just Write Code.<br />
          <span className="gradient-text">We Build Intelligence.</span>
        </h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '32px',
      }}>
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`card-3d ${service.large ? 'lg-col-span-2' : ''}`}
            style={{
              padding: '32px',
              cursor: 'pointer',
            }}
          >
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>{service.icon}</div>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 600,
              marginBottom: '12px',
              color: 'var(--text-primary)',
            }}>
              {service.title}
            </h3>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '20px',
            }}>
              {service.description}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {service.tags.map((tag, i) => (
                <span
                  key={i}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '20px',
                    background: 'var(--accent-glow)',
                    color: 'var(--text-accent)',
                    fontSize: '12px',
                    fontWeight: 500,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (min-width: 768px) {
          .lg-col-span-2 {
            grid-column: span 2;
          }
        }
      `}</style>
    </section>
  )
}
