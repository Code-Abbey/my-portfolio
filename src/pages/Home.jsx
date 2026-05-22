import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects, featured } from '../data'

// ── Line-reveal animation (COLLINS text wipe) ────────────────────────────────
function RevealLine({ children, delay = 0, className = '' }) {
  return (
    <div className={`reveal-wrap ${className}`}>
      <motion.div
        initial={{ y: '105%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  )
}

// ── Typewriter for the greeting ───────────────────────────────────────────────
function useTypewriter(text, speed = 46, startDelay = 200) {
  const [pos, setPos] = useState(0)
  const [started, setStarted] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setStarted(true), startDelay)
    return () => clearTimeout(t)
  }, [startDelay])
  useEffect(() => {
    if (!started || pos >= text.length) return
    const t = setTimeout(() => setPos((p) => p + 1), speed)
    return () => clearTimeout(t)
  }, [started, pos, text, speed])
  return { typed: text.slice(0, pos), done: pos >= text.length }
}

// ── Project color block ───────────────────────────────────────────────────────
function WorkCard({ project, index }) {
  return (
    <motion.div
      className="home-work-item"
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/work/${project.slug}`} className="home-work-link">
        <div
          className="home-work-thumb"
          style={{ background: project.color, color: project.textColor }}
        >
          <span className="thumb-index">{project.index}</span>
          <span className="thumb-title">{project.title}</span>
          <span className="thumb-arrow">→</span>
        </div>
        <div className="home-work-meta">
          <span className="meta-tag">{project.tag}</span>
          <span className="meta-lang">{project.lang}</span>
        </div>
        <h3 className="home-work-title">{project.title}</h3>
      </Link>
    </motion.div>
  )
}

export default function Home() {
  const { typed, done } = useTypewriter("Hi, I'm Abiodun Michael Adefusi.", 46, 400)
  const featuredProjects = featured.map((slug) => projects.find((p) => p.slug === slug)).filter(Boolean)

  return (
    <main className="home">
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="home-hero">
        <div className="home-hero-inner">
          {/* Greeting — typewriter */}
          <motion.p
            className="home-greeting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {typed}
            <span className={`tw-cursor${done ? ' done' : ''}`} aria-hidden="true" />
          </motion.p>

          {/* Display name — line reveal */}
          <h1 className="home-display">
            <RevealLine delay={0.15}><span>CREATIVE</span></RevealLine>
            <RevealLine delay={0.28}><span>COMPUTING</span></RevealLine>
            <RevealLine delay={0.41}><span className="display-outline">STUDENT</span></RevealLine>
          </h1>

          <motion.div
            className="home-divider"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          />

          <motion.div
            className="home-intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="home-bio-lead">
              AI enthusiast and multidisciplinary builder passionate about creating technology
              that solves real-world problems and delivers meaningful experiences.
            </p>
            <p className="home-bio-body">
              I work across AI, interactive systems, mobile apps, web technologies, IoT, and
              digital products — blending technical development with creativity, usability,
              and innovation.
            </p>
            <p className="home-bio-body">
              My toolkit includes React, Kotlin, Python, C#, Unity, embedded systems, and
              modern AI technologies — driven by curiosity, experimentation, and building
              things that make an impact.
            </p>
            <div className="home-cta-row">
              <Link to="/work" className="c-btn c-btn--primary">View All Work</Link>
              <a
                href="https://github.com/Code-Abbey"
                target="_blank"
                rel="noreferrer"
                className="c-btn c-btn--ghost"
              >
                GitHub ↗
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="home-scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.5 }}
        >
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          >
            ↓
          </motion.span>
          <span>scroll</span>
        </motion.div>
      </section>

      {/* ── Featured Work ────────────────────────────────────────── */}
      <section className="home-work">
        <div className="home-work-header">
          <motion.span
            className="section-eyebrow"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Selected Work
          </motion.span>
          <motion.div
            className="section-rule"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <div className="home-work-grid">
          {featuredProjects.map((project, i) => (
            <WorkCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        <motion.div
          className="home-work-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/work" className="c-btn c-btn--ghost">
            See all {projects.length} projects →
          </Link>
        </motion.div>
      </section>

      {/* ── Stats strip ──────────────────────────────────────────── */}
      <motion.section
        className="home-stats"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        {[
          { num: '40+', label: 'GitHub Repositories' },
          { num: '6+', label: 'Languages & Runtimes' },
          { num: '4', label: 'Live Projects' },
          { num: '∞', label: 'Ideas in Progress' },
        ].map(({ num, label }) => (
          <div key={label} className="home-stat">
            <span className="stat-n">{num}</span>
            <span className="stat-l">{label}</span>
          </div>
        ))}
      </motion.section>
    </main>
  )
}
