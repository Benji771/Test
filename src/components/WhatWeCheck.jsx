const checks = [
  {
    title: 'Tarifnummern-Konsistenz',
    desc: 'Wir prüfen, ob gleiche oder ähnliche Produkte in verschiedenen Sendungen unter einheitlichen HS-/CN-Codes deklariert wurden. Abweichungen werden dokumentiert und zur Prüfung aufbereitet.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="12" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="3" y="12" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 15.5h7M15.5 12v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Zollwertbestandteile',
    desc: 'Frachtkosten, Versicherung, Lizenzgebühren und andere Wertbestandteile werden auf Plausibilität und Vollständigkeit geprüft. Auffällige Abweichungen werden gekennzeichnet.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 16l4-5 3 3 3-4 4 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2" y="2" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: 'Präferenzursprung',
    desc: 'Wir analysieren, ob verfügbare Präferenzabkommen und Ursprungsnachweise genutzt wurden. Nicht beanspruchte Präferenzen werden als Prüffall markiert.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11 3c0 0-4 4-4 8s4 8 4 8M11 3c0 0 4 4 4 8s-4 8-4 8M3 11h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Spediteurs- und Abgabenabrechnungen',
    desc: 'Spediteursrechnungen werden mit den Zollbescheiden und Handelsrechnungen abgeglichen. Differenzen bei Abgaben, Gebühren oder Auslagen werden sichtbar gemacht.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 5h14M4 10h10M4 15h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17 13l2 2-2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Retouren, Defekte und Re-Exporte',
    desc: 'Sendungen mit Rücksendungen, beschädigten Waren oder Re-Exporten werden gesondert geprüft, ob eine formale Prüfung auf Erstattung oder Zollgutschrift sinnvoll erscheint.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 12a7 7 0 107 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 12l3-3M4 12l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 5h4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Wiederkehrende Importmuster',
    desc: 'Über mehrere Sendungen hinweg suchen wir nach Mustern – zum Beispiel immer gleiche Hochzoll-Codes bei bestimmten Produktgruppen oder Lieferanten.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 3" />
        <path d="M11 4V2M11 20v-2M4 11H2M20 11h-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function WhatWeCheck() {
  return (
    <section className="bg-slate-50 py-24 lg:py-32" id="pruefbereiche">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <span className="section-label">Prüfbereiche</span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-navy-900 mt-3 leading-tight">
            Was ZollMetrics prüft
          </h2>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            Sechs systematische Prüfbereiche, die typische Quellen von Zoll-Überzahlungen abdecken.
            Alle Befunde werden zur fachlichen Prüfung dokumentiert.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {checks.map((c) => (
            <div key={c.title} className="card group hover:shadow-md hover:border-slate-200 transition-all duration-200">
              <div className="w-11 h-11 rounded-xl bg-navy-900 text-white flex items-center justify-center mb-5 group-hover:bg-navy-800 transition-colors">
                {c.icon}
              </div>
              <h3 className="text-sm font-semibold text-navy-900 mb-2">{c.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
