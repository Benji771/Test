import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Lösung', href: '#loesung' },
  { label: 'Ablauf', href: '#ablauf' },
  { label: 'Für wen', href: '#fuer-wen' },
  { label: 'Sicherheit', href: '#sicherheit' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-900 shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded bg-accent flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white">
                <rect x="1" y="3" width="14" height="2" rx="1" fill="currentColor" opacity="0.9" />
                <rect x="1" y="7" width="10" height="2" rx="1" fill="currentColor" opacity="0.7" />
                <rect x="1" y="11" width="12" height="2" rx="1" fill="currentColor" opacity="0.5" />
                <circle cx="13" cy="12" r="2.5" fill="currentColor" />
              </svg>
            </div>
            <span className="text-white font-semibold text-base tracking-tight">
              Zoll<span className="text-accent-light">Metrics</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 hover:text-white transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link to="/kontakt" className="btn-primary-dark text-sm px-5 py-2.5">
              Kostenlosen Leak-Scan starten
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white/80 hover:text-white p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menü öffnen"
          >
            {mobileOpen ? (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-navy-900 border-t border-white/10 pb-4">
            <nav className="flex flex-col gap-1 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-2 py-2.5 text-sm text-white/75 hover:text-white hover:bg-white/5 rounded transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 px-2">
                <Link to="/kontakt" onClick={() => setMobileOpen(false)} className="btn-primary-dark w-full text-sm">
                  Kostenlosen Leak-Scan starten
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
