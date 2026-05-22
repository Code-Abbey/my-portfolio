import { useState } from 'react'
import { motion } from 'framer-motion'

function RevealLine({ children, delay = 0 }) {
  return (
    <div className="reveal-wrap">
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

export default function Contact() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const data = new FormData(e.target)
    try {
      const res = await fetch('https://formsubmit.co/ajax/biodun.adefusi@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      if (res.ok) { setStatus('success'); e.target.reset() }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  return (
    <main className="contact-page">
      {/* ── Header ── */}
      <section className="contact-hero">
        <div className="contact-hero-inner">
          <div className="reveal-wrap">
            <motion.p
              className="about-eyebrow"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              Contact
            </motion.p>
          </div>
          <h1 className="contact-display">
            <RevealLine delay={0.15}>LET'S</RevealLine>
            <RevealLine delay={0.28}>CONNECT.</RevealLine>
          </h1>
          <motion.p
            className="contact-subtitle"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            Have a project, an idea, or just want to say hi? I'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* ── Body ── */}
      <div className="contact-body">
        {/* Form */}
        <motion.div
          className="contact-form-wrap"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <form className="c-form" onSubmit={handleSubmit}>
            <input type="hidden" name="_subject" value="New message from portfolio" />
            <input type="hidden" name="_captcha" value="false" />

            <div className="c-field">
              <label className="c-label" htmlFor="name">Name</label>
              <input id="name" className="c-input" type="text" name="name" placeholder="Your name" required />
            </div>
            <div className="c-field">
              <label className="c-label" htmlFor="email">Email</label>
              <input id="email" className="c-input" type="email" name="email" placeholder="you@example.com" required />
            </div>
            <div className="c-field">
              <label className="c-label" htmlFor="message">Message</label>
              <textarea id="message" className="c-input c-textarea" name="message" rows="6" placeholder="Tell me about your project or idea..." required />
            </div>

            <button
              className={`c-btn c-btn--primary c-submit${status === 'sending' ? ' loading' : ''}`}
              type="submit"
              disabled={status === 'sending' || status === 'success'}
            >
              {status === 'sending' ? 'Sending…' : status === 'success' ? 'Sent!' : 'Send Message →'}
            </button>

            {status === 'success' && (
              <motion.p
                className="form-msg success"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Message sent! I'll get back to you soon.
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                className="form-msg error"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Something went wrong. Try emailing me directly.
              </motion.p>
            )}
          </form>
        </motion.div>

        {/* Aside */}
        <motion.div
          className="contact-aside"
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
        >
          <div className="contact-info-block">
            <span className="ci-label">Email</span>
            <a href="mailto:biodun.adefusi@gmail.com" className="ci-value">
              biodun.adefusi@gmail.com
            </a>
          </div>
          <div className="contact-info-block">
            <span className="ci-label">GitHub</span>
            <a href="https://github.com/Code-Abbey" target="_blank" rel="noreferrer" className="ci-value">
              @Code-Abbey ↗
            </a>
          </div>
          <div className="contact-info-block">
            <span className="ci-label">Based in</span>
            <span className="ci-value">St Pölten, Austria</span>
          </div>
          <div className="contact-info-block">
            <span className="ci-label">Open to</span>
            <span className="ci-value">Internships, Full time / Part time work &amp; interesting projects</span>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
