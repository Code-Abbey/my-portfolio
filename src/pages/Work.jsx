import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data'

const FILTERS = ['All', 'Web', 'Full Stack', 'Mobile', 'Algorithms', 'ML', 'Game Dev']
const filterMap = {
  Web: ['Creative Coding', 'Web Game', 'Web Dev'],
  'Full Stack': ['Full Stack'],
  Mobile: ['Mobile App'],
  Algorithms: ['Algorithms'],
  ML: ['Machine Learning'],
  'Game Dev': ['XR / Game Dev', 'Python Tool'],
}

export default function Work() {
  const [active, setActive] = useState('All')
  const visible =
    active === 'All' ? projects : projects.filter((p) => (filterMap[active] || []).includes(p.tag))

  return (
    <main className="work-page">
      {/* ── Page header ── */}
      <section className="work-header">
        <div className="work-header-inner">
          <div className="reveal-wrap">
            <motion.h1
              className="work-display"
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              WORK
            </motion.h1>
          </div>
          <motion.p
            className="work-subtitle"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            {projects.length} projects across web, mobile, algorithms, and machine learning.
          </motion.p>
        </div>
      </section>

      {/* ── Filters ── */}
      <motion.div
        className="work-filters"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.55 }}
      >
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`filter-pill${active === f ? ' is-active' : ''}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </motion.div>

      {/* ── Grid ── */}
      <motion.div className="work-grid" layout>
        <AnimatePresence mode="popLayout">
          {visible.map((project, i) => (
            <motion.div
              key={project.slug}
              className="work-card-wrap"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              layout
            >
              <Link to={`/work/${project.slug}`} className="work-card">
                <div
                  className="work-card-thumb"
                  style={{ background: project.color, color: project.textColor }}
                >
                  <span className="wc-index">{project.index}</span>
                  <h2 className="wc-title">{project.title}</h2>
                  <span className="wc-arrow">→</span>
                </div>
                <div className="work-card-info">
                  <div className="wc-tags">
                    <span className="tag-pill">{project.tag}</span>
                    <span className="tag-pill tag-pill--lang">{project.lang}</span>
                  </div>
                  <p className="wc-short">{project.short}</p>
                  <div className="wc-links">
                    {project.liveUrl && (
                      <a
                        className="wc-link live"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Live ↗
                      </a>
                    )}
                    <a
                      className="wc-link code"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Code →
                    </a>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </main>
  )
}
