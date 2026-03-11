import { motion } from 'framer-motion'

export default function ProcessTimeline() {
  const steps = [
    {
      number: '01',
      title: 'Discovery Call',
      duration: '30 min',
      description: 'Understand your business, pain points, goals',
    },
    {
      number: '02',
      title: 'Architecture Design',
      duration: '3 days',
      description: 'Custom AI OS blueprint for your use case',
    },
    {
      number: '03',
      title: 'Rapid Development',
      duration: '2-4 weeks',
      description: 'Build, test, iterate with daily updates',
    },
    {
      number: '04',
      title: 'Local Deployment',
      duration: '1-2 days',
      description: 'Your server, your data, zero cloud',
    },
    {
      number: '05',
      title: 'Continuous Evolution',
      duration: 'ongoing',
      description: 'AI learns, improves, never stops growing',
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
          OUR PROCESS
        </div>
        <h2 style={{
          fontFamily: 'Clash Display',
          fontSize: 'clamp(32px, 5vw, 56px)',
          fontWeight: 700,
          lineHeight: 1.2,
        }}>
          From Idea to Autonomous AI<br />
          <span className="gradient-text">In Weeks</span>
        </h2>
      </div>

      <div style={{
        position: 'relative',
        maxWidth: '900px',
        margin: '0 auto',
      }}>
        {/* Progress Line */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          bottom: 0,
          width: '2px',
          background: 'linear-gradient(to bottom, var(--accent-1), var(--accent-2))',
          transform: 'translateX(-50%)',
        }} />

        {/* Steps */}
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              marginBottom: '60px',
              flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
            }}
          >
            {/* Content Side */}
            <div style={{
              flex: 1,
              padding: '32px',
              background: 'var(--secondary-bg)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              zIndex: 1,
            }}>
              <div style={{
                display: 'inline-block',
                padding: '6px 12px',
                borderRadius: '20px',
                background: 'var(--accent-glow)',
                color: 'var(--text-accent)',
                fontSize: '12px',
                fontWeight: 600,
                marginBottom: '12px',
              }}>
                Step {step.number}
              </div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 600,
                marginBottom: '8px',
                color: 'var(--text-primary)',
              }}>
                {step.title}
              </h3>
              <p style={{
                color: 'var(--text-secondary)',
                marginBottom: '8px',
              }}>
                {step.description}
              </p>
              <p style={{
                fontSize: '14px',
                color: 'var(--accent-1)',
                fontWeight: 600,
              }}>
                Duration: {step.duration}
              </p>
            </div>

            {/* Center Circle */}
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'var(--primary-bg)',
              border: '3px solid var(--accent-1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '18px',
              color: 'var(--accent-1)',
              zIndex: 2,
              margin: '0 20px',
              boxShadow: '0 0 30px var(--accent-glow)',
            }}>
              {step.number}
            </div>

            {/* Empty Side */}
            <div style={{ flex: 1 }} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
