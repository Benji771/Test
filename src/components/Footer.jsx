export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-12 grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
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
            </a>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              Datenbasierte Import-Leak-Analyse für DACH-Importeure.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">Seiten</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Lösung', href: '#loesung' },
                { label: 'Ablauf', href: '#ablauf' },
                { label: 'Für wen', href: '#fuer-wen' },
                { label: 'Sicherheit', href: '#sicherheit' },
                { label: 'Kontakt', href: '#kontakt' },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-white/50 hover:text-white/80 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">Rechtliches</h4>
            <ul className="space-y-2.5">
              {['Impressum', 'Datenschutz', 'Kontakt'].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-white/50 hover:text-white/80 transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/5 py-8">
          <div className="bg-white/3 border border-white/8 rounded-xl p-5 mb-8">
            <p className="text-xs text-white/40 leading-relaxed">
              <strong className="text-white/60 font-medium">Rechtlicher Hinweis:</strong>{' '}
              ZollMetrics bietet eine datenbasierte Voranalyse und keine Rechts-, Steuer- oder
              Zollberatung. Finale Bewertungen, Anträge oder rechtliche Schritte erfolgen durch
              den Kunden, dessen Zollberater/Spediteur oder einen spezialisierten Partner.
            </p>
          </div>
          <p className="text-xs text-white/25 text-center">
            &copy; {new Date().getFullYear()} ZollMetrics. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}
