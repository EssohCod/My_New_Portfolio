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
    const handleDocumentClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        !(event.target instanceof Element)
      ) {
        return
      }

      const anchor = event.target.closest('a')
      const href = anchor?.getAttribute('href')

      if (
        !anchor ||
        !href ||
        href.startsWith('#') ||
        anchor.hasAttribute('download') ||
        (anchor.target && anchor.target !== '_self')
      ) {
        return
      }

      const destination = new URL(anchor.href, window.location.href)
      if (destination.origin !== window.location.origin) return

      event.preventDefault()
      window.history.pushState({}, '', `${destination.pathname}${destination.search}${destination.hash}`)
      handleRouteChange()

      if (destination.hash) {
        window.requestAnimationFrame(() => {
          document.querySelector(destination.hash)?.scrollIntoView({ behavior: 'smooth' })
        })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }

    window.addEventListener('popstate', handleRouteChange)
    document.addEventListener('click', handleDocumentClick)

    return () => {
      window.removeEventListener('popstate', handleRouteChange)
      document.removeEventListener('click', handleDocumentClick)
    }
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
