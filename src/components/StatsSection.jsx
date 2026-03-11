import { useState, useEffect } from 'react'

export default function StatsSection() {
  const [counts, setCounts] = useState({ projects: 0, apiCost: 0, dataLocal: 0, uptime: 0 })

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const interval = duration / steps
    
    const targetValues = {
      projects: 50,
      apiCost: 0,
      dataLocal: 100,
      uptime: 99.9,
    }

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps
      
      setCounts({
        projects: Math.floor(progress * targetValues.projects),
        apiCost: 0,
        dataLocal: Math.floor(progress * targetValues.dataLocal),
        uptime: (progress * targetValues.uptime).toFixed(1),
      })

      if (currentStep >= steps) {
        clearInterval(timer)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [])

  return (
    <section style={{
      background: 'var(--secondary-bg)',
      padding: '100px 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background Glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
        opacity: 0.3,
        pointerEvents: 'none',
      }} />

      <div className="section-container" style={{ maxWidth: '1400px', padding: 0, position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '48px',
          marginBottom: '60px',
        }}>
          {[
            { value: `${counts.projects}+`, label: 'Projects Built', suffix: '+' },
            { value: `$${counts.apiCost}`, label: 'API costs for clients', prefix: '$' },
            { value: `${counts.dataLocal}%`, label: 'Data stays on client server', suffix: '%' },
            { value: `${counts.uptime}%`, label: 'Autonomous operation', suffix: '%' },
          ].map((stat, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div className="gradient-text" style={{
                fontSize: 'clamp(48px, 6vw, 72px)',
                fontWeight: 700,
                marginBottom: '16px',
                lineHeight: 1,
              }}>
                {stat.value}
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '16px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="card-3d" style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '40px',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '48px', marginBottom: '20px', opacity: 0.3 }}>"</div>
          <p style={{
            fontSize: '20px',
            lineHeight: 1.8,
            color: 'var(--text-primary)',
            marginBottom: '24px',
          }}>
            Sovereign Tech transformed our operations with their AI OS. We've reduced manual work by 80% 
            and our data stays 100% secure on our servers. This is the future of enterprise AI.
          </p>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
          }}>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>John Smith</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>CEO — TechCorp USA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
