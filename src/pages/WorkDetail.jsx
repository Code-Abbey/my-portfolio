import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../data'

export default function WorkDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <main className="detail-page">
        <div className="detail-not-found">
          <p>Project not found.</p>
          <Link to="/work" className="c-btn c-btn--ghost">← Back to Work</Link>
        </div>
      </main>
    )
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const next = projects[(currentIndex + 1) % projects.length]

  return (
    <main className="detail-page">
      {/* ── Back ── */}
      <motion.div
        className="detail-back"
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link to="/work" className="detail-back-link">← All Work</Link>
      </motion.div>

      {/* ── Hero block ── */}
      <motion.div
        className="detail-hero"
        style={{ background: project.color, color: project.textColor }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="detail-hero-index">{project.index}</span>
        <h1 className="detail-hero-title">{project.title}</h1>
      </motion.div>

      {/* ── Meta + content ── */}
      <div className="detail-body">
        <motion.div
          className="detail-meta"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="detail-meta-row">
            <div className="detail-meta-item">
              <span className="detail-label">Category</span>
              <span className="detail-value">{project.tag}</span>
            </div>
            <div className="detail-meta-item">
              <span className="detail-label">Language</span>
              <span className="detail-value">{project.lang}</span>
            </div>
            <div className="detail-meta-item">
              <span className="detail-label">Year</span>
              <span className="detail-value">{project.year}</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="detail-content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <p className="detail-description">{project.description}</p>

          <div className="detail-actions">
            <a
              className="c-btn c-btn--primary"
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              View Code →
            </a>
            {project.liveUrl && (
              <a
                className="c-btn c-btn--ghost"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo ↗
              </a>
            )}
          </div>
        </motion.div>
      </div>

      {/* ── Next project ── */}
      <motion.div
        className="detail-next"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="detail-next-rule" />
        <span className="detail-next-label">Next Project</span>
        <Link to={`/work/${next.slug}`} className="detail-next-link">
          <div
            className="detail-next-thumb"
            style={{ background: next.color, color: next.textColor }}
          >
            <span>{next.index}</span>
            <span>{next.title}</span>
            <span>→</span>
          </div>
        </Link>
      </motion.div>
    </main>
  )
}
