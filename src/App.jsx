import { useEffect, useState } from 'react'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Work from './pages/Work'
import WorkDetail from './pages/WorkDetail'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css'

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname, hash])
  return null
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname + location.hash}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/work" element={<PageWrapper><Work /></PageWrapper>} />
        <Route path="/work/:slug" element={<PageWrapper><WorkDetail /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  )
}

function AppInner() {
  const [isLight, setIsLight] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'light') {
      document.documentElement.classList.add('light')
      setIsLight(true)
    }
  }, [])

  const toggleTheme = () => {
    document.documentElement.classList.toggle('light')
    const next = document.documentElement.classList.contains('light')
    localStorage.setItem('theme', next ? 'light' : 'dark')
    setIsLight(next)
  }

  return (
    <div className="app-shell">
      <ScrollToTop />
      <Nav isLight={isLight} onToggle={toggleTheme} />
      <div className="app-content">
        <AnimatedRoutes />
      </div>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <HashRouter>
      <AppInner />
    </HashRouter>
  )
}
