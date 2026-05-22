import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { skillGroups } from '../data'

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

export default function About() {
  return (
    <main className="about-page">
      {/* ── Hero statement ── */}
      <section className="about-hero">
        <div className="about-hero-inner">
          <div className="reveal-wrap">
            <motion.p
              className="about-eyebrow"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              About
            </motion.p>
          </div>
          <h1 className="about-statement">
            <RevealLine delay={0.15}>Turning ambitious</RevealLine>
            <RevealLine delay={0.28}>ideas into practical</RevealLine>
            <RevealLine delay={0.41}><span className="statement-accent">solutions.</span></RevealLine>
          </h1>
        </div>
      </section>

      {/* ── Bio ── */}
      <section className="about-bio">
        <div className="about-bio-inner">
          <motion.div
            className="about-bio-text"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="bio-lead">
              I'm <strong>Abiodun Michael Adefusi</strong> — a Creative Computing student at
              the University of Applied Sciences St Pölten with a passion for building technology
              that solves real problems and creates meaningful experiences.
            </p>
            <p>
              My work spans AI and machine learning, native Android development, web applications,
              IoT and embedded systems, interactive experiences, and game development. I enjoy
              working at the intersection of technical depth and creative thinking — finding elegant
              solutions to complex problems.
            </p>
            <p>
              Beyond coding, I'm driven by curiosity and experimentation. I believe the best
              technology is not just functional — it's thoughtfully designed, purposefully built,
              and genuinely useful to people.
            </p>
            <p>
              Currently studying at the University of Applied Sciences St Pölten, continuously
              exploring new domains, and always open to interesting collaborations.
            </p>
          </motion.div>

          <motion.div
            className="about-bio-aside"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="aside-block">
              <h3>Based in</h3>
              <p>St Pölten, Austria</p>
            </div>
            <div className="aside-block">
              <h3>Currently</h3>
              <p>Studying Creative Computing at the University of Applied Sciences St Pölten</p>
            </div>
            <div className="aside-block">
              <h3>Interests</h3>
              <p>Applied AI · Web Development · Data Science · Interactive Technologies · Product Management · Usability & Evaluation · Research</p>
            </div>
            <div className="aside-block">
              <h3>Contact</h3>
              <p>
                <a href="mailto:biodun.adefusi@gmail.com" className="aside-link">
                  biodun.adefusi@gmail.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="about-skills">
        <motion.div
          className="about-skills-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-eyebrow">Toolkit</span>
          <div className="section-rule" />
        </motion.div>

        <div className="skills-groups-grid">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              className="skills-group-block"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
            >
              <h4 className="skills-group-label">{group.label}</h4>
              <ul className="skills-list">
                {group.items.map((skill) => (
                  <li key={skill} className="skill-item">{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <motion.section
        className="about-cta"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <p className="about-cta-text">
          Want to work together or have something interesting in mind?
        </p>
        <div className="about-cta-btns">
          <Link to="/contact" className="c-btn c-btn--primary">Get in Touch</Link>
          <Link to="/work" className="c-btn c-btn--ghost">See My Work</Link>
        </div>
      </motion.section>
    </main>
  )
}
