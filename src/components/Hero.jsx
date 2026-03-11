import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Hero() {
  const canvasRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let particles = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Create particles
    const particleCount = 80
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      })
    }

    const animate = () => {
      ctx.fillStyle = '#020208'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw gradient overlay
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width
      )
      gradient.addColorStop(0, '#6366F115')
      gradient.addColorStop(1, '#020208')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        // Mouse interaction
        const dx = mousePos.x - p.x
        const dy = mousePos.y - p.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < 200) {
          p.x -= dx * 0.01
          p.y -= dy * 0.01
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = '#6366F1'
        ctx.fill()

        // Draw connections
        particles.slice(i + 1).forEach((p2) => {
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.3 * (1 - dist / 150)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animationFrameId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [mousePos])

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  return (
    <section
      style={{
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Neural Network Canvas */}
      <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0 }} />

      {/* Grid Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          opacity: 0.05,
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          maxWidth: '1200px',
          padding: '0 24px',
        }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'inline-block',
            padding: '8px 20px',
            borderRadius: '50px',
            border: '1px solid var(--accent-1)',
            background: 'var(--accent-glow)',
            marginBottom: '24px',
            fontSize: '14px',
            fontWeight: 600,
            color: 'var(--text-accent)',
          }}
        >
          🌍 Global Sovereign AI Solutions
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontFamily: 'Clash Display',
            fontSize: 'clamp(48px, 8vw, 96px)',
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: '24px',
          }}
        >
          <div>Build Smarter.</div>
          <div className="gradient-text">Deploy Locally.</div>
          <div>Own Everything.</div>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            fontSize: 'clamp(18px, 2vw, 24px)',
            color: 'var(--text-secondary)',
            maxWidth: '800px',
            margin: '0 auto 40px',
            lineHeight: 1.6,
          }}
        >
          We engineer autonomous AI systems that run 100% on your infrastructure.
          Zero cloud dependency. Complete data sovereignty. Infinite possibilities.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '60px',
          }}
        >
          <Link to="/products" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
            Explore Our AI OS →
          </Link>
          <button className="btn-secondary">Watch Demo ▶</button>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '32px',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          {[
            { number: '50+', label: 'Global Clients' },
            { number: '15+', label: 'Countries Served' },
            { number: '$0', label: 'API Costs for Clients' },
            { number: '24/7', label: 'Autonomous Operation' },
          ].map((stat, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div className="gradient-text" style={{ fontSize: '40px', fontWeight: 700, marginBottom: '8px' }}>
                {stat.number}
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          color: 'var(--text-secondary)',
          fontSize: '14px',
        }}
      >
        <div style={{ marginBottom: '8px' }}>Scroll to explore</div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{ fontSize: '24px' }}
        >
          ↓
        </motion.div>
      </motion.div>

      {/* Floating Cards */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{ y: [-20, 20, -20] }}
          transition={{ repeat: Infinity, duration: 6, delay: i * 2, ease: 'easeInOut' }}
          className="glass card-3d"
          style={{
            position: 'absolute',
            width: '200px',
            padding: '20px',
            borderRadius: '16px',
            top: `${20 + i * 15}%`,
            left: i === 0 ? '10%' : i === 1 ? 'auto' : '80%',
            right: i === 1 ? '10%' : 'auto',
            zIndex: 5,
            opacity: 0.6,
          }}
        >
          <div style={{ fontSize: '24px', marginBottom: '8px' }}>
            {['🧠', '⚡', '🔒'][i]}
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
            {['AI-Powered', 'Lightning Fast', '100% Secure'][i]}
          </div>
        </motion.div>
      ))}
    </section>
  )
}
