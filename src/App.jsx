import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './App.css'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const projects = [
  {
    tag: 'Web App',
    title: 'Portfolio Builder',
    description: 'Fast, responsive site for personal branding and showcasing work.',
  },
  {
    tag: 'E-commerce',
    title: 'ShopEase',
    description: 'Clean UI and optimized checkout flow for higher conversions.',
  },
  {
    tag: 'Dashboard',
    title: 'Insight Analytics',
    description: 'Interactive dashboards with charts and filters.',
  },
]

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Git', 'Figma']

function App() {
  const [isLight, setIsLight] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'light') {
      document.documentElement.classList.add('light')
      setIsLight(true)
    }
  }, [])

  const toggleTheme = () => {
    document.documentElement.classList.toggle('light')
    const nextTheme = document.documentElement.classList.contains('light')
    localStorage.setItem('theme', nextTheme ? 'light' : 'dark')
    setIsLight(nextTheme)
  }

  return (
    <div>
      <header className="site-header">
        <nav className="nav">
          <a className="logo" href="#top">Abiodun Michael Adefusi</a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            <span className="theme-icon">{isLight ? '☀️' : '🌙'}</span>
          </button>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <motion.div
            className="hero-content"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.p className="eyebrow" variants={fadeUp}>
              Hi, I’m Abiodun Michael Adefusi
            </motion.p>
            <motion.h1 variants={fadeUp}>
              Building premium web experiences with clarity, speed, and style.
            </motion.h1>
            <motion.p className="subhead" variants={fadeUp}>
              Front-end developer focused on elegant typography, accessibility, and fast,
              delightful user interfaces.
            </motion.p>
            <motion.div className="cta-group" variants={fadeUp}>
              <a className="btn primary" href="#projects">View Projects</a>
              <a className="btn ghost" href="#contact">Let’s Talk</a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-card"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <div className="stat">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">20+</span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </motion.div>
        </section>

        <motion.section
          id="about"
          className="section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.div className="section-header" variants={fadeUp}>
            <h2>About</h2>
            <p>Short bio that highlights your strengths and what you love building.</p>
          </motion.div>
          <div className="about-grid">
            {[
              {
                title: 'What I do',
                text: 'I design and build responsive web apps using modern tools, with a focus on accessibility, performance, and clean architecture.',
              },
              {
                title: 'What I value',
                text: 'Clear communication, well-structured code, and products that feel great to use.',
              },
              {
                title: 'Currently exploring',
                text: 'Design systems, TypeScript, and performance optimization.',
              },
            ].map((item) => (
              <motion.div key={item.title} className="about-card" variants={fadeUp}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className="section alt"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.div className="section-header" variants={fadeUp}>
            <h2>Projects</h2>
            <p>Replace these with your real projects.</p>
          </motion.div>
          <div className="projects-grid">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                className="project-card"
                variants={fadeUp}
                whileHover={{ y: -6 }}
              >
                <div className="project-tag">{project.tag}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a className="project-link" href="#">View Project →</a>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="skills"
          className="section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.div className="section-header" variants={fadeUp}>
            <h2>Skills</h2>
            <p>Tools and technologies I use day-to-day.</p>
          </motion.div>
          <motion.div className="skills-grid" variants={stagger}>
            {skills.map((skill) => (
              <motion.span key={skill} className="pill" variants={fadeUp}>
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          id="contact"
          className="section alt"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.div className="section-header" variants={fadeUp}>
            <h2>Contact</h2>
            <p>Want to work together? Send a message.</p>
          </motion.div>
          <motion.form
            className="contact-form"
            action="mailto:biodun.adefusi@gmail.com"
            method="post"
            encType="text/plain"
            variants={fadeUp}
          >
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="you@example.com" required />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" placeholder="Tell me about your project" required />
            </label>
            <button className="btn primary" type="submit">Send</button>
          </motion.form>
        </motion.section>
      </main>

      <footer className="site-footer">
        <p>© 2026 Abiodun Michael Adefusi. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/Code_Abbey" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:biodun.adefusi@gmail.com">Email</a>
        </div>
      </footer>
    </div>
  )
}

export default App
