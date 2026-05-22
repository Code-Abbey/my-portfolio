import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="c-footer">
      <div className="c-footer-inner">
        <div className="c-footer-left">
          <p className="footer-copy">© 2026 Abiodun Michael Adefusi</p>
          <p className="footer-sub">Creative Computing · AI · Builder</p>
        </div>
        <nav className="c-footer-links">
          <Link to="/work">Work</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <a href="https://github.com/Code-Abbey" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:biodun.adefusi@gmail.com">Email</a>
        </nav>
      </div>
    </footer>
  )
}
