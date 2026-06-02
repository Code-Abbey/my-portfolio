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
              I'm <strong>Abiodun Michael Adefusi</strong>, a Creative Computing student
              specialising in AI at the University of Applied Sciences St. Pölten, with a background
              that sits at the crossroads of data, technology and human experience.
            </p>
            <p>
              Before my degree I worked as a data analyst for a US tech platform, tracking campaign
              performance and building dashboards that informed real business decisions. I also spent
              time at Heineken in a data-driven operational role. Those experiences taught me something
              that most computing students don't get in a classroom. Technology only matters when it
              connects to a decision someone actually needs to make.
            </p>
            <p>
              My work spans data analytics and visualisation, web and AI applications, Android
              development, IoT, and interactive experiences. But what ties it all together is a deep
              interest in research and human-centred product development, the belief that the best
              solutions come from truly understanding the people you are building for and placing their
              experience at the very core of every decision.
            </p>
            <p>
              I am drawn to problems where technical depth and creative thinking have to work together,
              where the solution has to be both rigorous and human. I believe technology should not just
              function well, it should feel right to the people using it.
            </p>
            <p>
              Always open to interesting collaborations, curious conversations and problems worth solving.
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
