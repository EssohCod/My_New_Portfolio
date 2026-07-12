import { useEffect, useState } from 'react'
import About from './pages/About'
import Contact from './pages/Contact'
import Experience from './pages/Experience'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Services from './pages/Services'
import Skills from './pages/Skills'

function getCurrentPage() {
  const page = window.location.pathname.replace(/^\/+/, '').split('/')[0]
  return page || 'home'
}

function App() {
  const [currentPage, setCurrentPage] = useState(getCurrentPage)

  useEffect(() => {
    const handleRouteChange = () => setCurrentPage(getCurrentPage())

    window.addEventListener('popstate', handleRouteChange)
    return () => window.removeEventListener('popstate', handleRouteChange)
  }, [])

  if (currentPage === 'about') {
    return <About />
  }

  if (currentPage === 'experience') {
    return <Experience />
  }

  if (currentPage === 'services') {
    return <Services />
  }

  if (currentPage === 'projects') {
    return <Projects />
  }

  if (currentPage === 'contact') {
    return <Contact />
  }

  if (currentPage === 'skills') {
    return <Skills />
  }

  return <Home />
}

export default App
