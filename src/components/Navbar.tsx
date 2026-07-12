import { useEffect, useState } from 'react'
import type { MouseEvent } from 'react'
import Logo from "../assets/logo.png"

const navLinks = [
  'Home',
  'About',
  'Experience',
  'Skills',
  'Services',
  'Projects',
  'Contact',
]

function ArrowIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activePage, setActivePage] = useState(() => {
    const page = window.location.pathname.replace(/^\/+/, '').split('/')[0]
    return page || 'home'
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12)
    }

    const handleRouteChange = () => {
      const page = window.location.pathname.replace(/^\/+/, '').split('/')[0]
      setActivePage(page || 'home')
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('popstate', handleRouteChange)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('popstate', handleRouteChange)
    }
  }, [])

  const handleNavigate = () => setIsOpen(false)
  const navigateTo = (page: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    setIsOpen(false)
    window.history.pushState({}, '', page === 'home' ? '/' : `/${page}`)
    window.dispatchEvent(new PopStateEvent('popstate'))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-[70] border-b border-slate-200/80 bg-white/90 backdrop-blur-xl transition-all duration-300 ${
        isScrolled ? 'shadow-[0_14px_38px_rgba(15,23,42,0.1)]' : 'shadow-[0_8px_30px_rgba(15,23,42,0.04)]'
      }`}
    >
      <nav
        className={`mx-auto flex max-w-[1720px] items-center justify-between px-6 transition-all duration-300 lg:px-16 ${
          isScrolled ? 'h-16' : 'h-20'
        }`}
      >
        <a href="/" onClick={navigateTo('home')} className="flex shrink-0 items-center gap-3" aria-label="Nsikan Essoh Home">
          <img
            src={Logo}
            alt="Essoh Logo"
            className="h-9 w-auto max-w-[100px] object-contain sm:h-6"
          />
        </a>

        <div className="hidden h-full items-center gap-9 lg:flex">
          {navLinks.map((link) => {
            const page = link.toLowerCase()
            const isActive = activePage === page

            return (
              <a
                key={link}
                href={page === 'home' ? '/' : `/${page}`}
                onClick={navigateTo(page)}
                className={`relative flex h-full items-center text-sm font-bold transition ${
                  isActive ? 'text-[#1557ff]' : 'text-slate-950 hover:text-[#1557ff]'
                }`}
              >
                {link}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 h-[2px] w-12 -translate-x-1/2 rounded-full bg-[#1557ff]" />
                )}
              </a>
            )
          })}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/contact"
            onClick={navigateTo('contact')}
            className="hidden items-center justify-center gap-3 rounded-md bg-[#1557ff] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(21,87,255,0.25)] transition hover:-translate-y-0.5 hover:bg-[#0f46d8] sm:inline-flex"
          >
            Let&apos;s Work Together
            <ArrowIcon />
          </a>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
            className="grid h-11 w-11 place-items-center rounded-md border border-slate-200 bg-white text-slate-950 shadow-[0_10px_24px_rgba(15,23,42,0.08)] transition hover:border-[#1557ff] lg:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition ${
                  isOpen ? 'translate-y-[7px] rotate-45' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-current transition ${
                  isOpen ? '-translate-y-[7px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        className={`absolute left-0 right-0 top-full z-50 px-6 transition-all duration-300 lg:hidden ${
          isOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-3 opacity-0'
        }`}
      >
        <div className="mx-auto mt-3 max-w-md rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-[0_24px_70px_rgba(15,23,42,0.18)] backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link}
              href={link.toLowerCase() === 'home' ? '/' : `/${link.toLowerCase()}`}
              onClick={navigateTo(link.toLowerCase())}
              className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-black transition hover:bg-[#eef4ff] hover:text-[#1557ff] ${
                activePage === link.toLowerCase() ? 'bg-[#eef4ff] text-[#1557ff]' : 'text-slate-900'
              }`}
            >
              {link}
              <ArrowIcon className="h-4 w-4 text-[#1557ff]" />
            </a>
          ))}
          <a
            href="/contact"
            onClick={(event) => {
              handleNavigate()
              navigateTo('contact')(event)
            }}
            className="mt-2 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#1557ff] px-5 py-3.5 text-sm font-semibold text-white"
          >
            Let&apos;s Work Together
            <ArrowIcon />
          </a>
        </div>
      </div>
    </header>
    <div aria-hidden="true" className="h-20" />
    </>
  )
}

export default Navbar
