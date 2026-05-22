import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function Nav({ isLight, onToggle }) {
  const { pathname, hash } = useLocation()
  const path = hash.replace('#', '') || '/'
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname, hash])

  const links = [
    { to: '/work', label: 'Work' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  const isActive = (to) => path === to || (to === '/work' && path.startsWith('/work'))

  return (
    <>
      <header className={`c-nav${scrolled ? ' scrolled' : ''}`}>
        <div className="c-nav-inner">
          <Link to="/" className="c-nav-logo">
            <span className="logo-mark">AA</span>
            <span className="logo-name">Abiodun Adefusi</span>
          </Link>

          <nav className="c-nav-links" aria-label="Main navigation">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`c-nav-link${isActive(to) ? ' is-active' : ''}`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="c-nav-end">
            <button className="c-theme-btn" onClick={onToggle} aria-label="Toggle theme">
              <span className="theme-dot" />
            </button>
            <button
              className={`c-menu-btn${menuOpen ? ' is-open' : ''}`}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Menu"
              aria-expanded={menuOpen}
            >
              <span /><span />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="c-mobile-nav"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {links.map(({ to, label }, i) => (
              <motion.div
                key={to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link to={to} className="c-mobile-link">
                  <span className="mobile-link-idx">0{i + 1}</span>
                  {label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
