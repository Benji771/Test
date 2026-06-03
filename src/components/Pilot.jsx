const pilotFeatures = [
  {
    title: 'Kostenloser Erstcheck',
    desc: 'Für ausgewählte Pilotkunden prüfen wir eine begrenzte Anzahl historischer Importvorgänge ohne Vorabkosten.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2l1.8 5.4h5.7l-4.6 3.4 1.8 5.4L10 13l-4.7 3.2 1.8-5.4L2.5 7.4h5.7L10 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Kein Upload ohne Freigabe',
    desc: 'Dokumente werden ausschließlich über einen vorab freigegebenen, geschützten Datenraum übermittelt. Kein Versand per E-Mail.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="4" y="9" width="12" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 9V7a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="10" cy="13.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Optionaler Expertenpartner',
    desc: 'Auf Wunsch vermitteln wir den Kontakt zu einem fachkundigen Zollberater oder Spediteur für die abschließende Prüfung.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="8" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 17c0-3.3 2.7-6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="14" cy="13" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12.3 11.3l3.4 3.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Erfolgsorientiertes Modell',
    desc: 'Das Abrechnungsmodell für weiterführende Analysen wird individuell vereinbart – orientiert am nachgewiesenen Prüfpotenzial.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 14l4-5 3 3 3-4 4 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 9l-1 5-5-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function Pilot() {
  return (
    <section className="bg-navy-900 py-24 lg:py-32" id="pilot">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-light">Pilotphase</span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mt-3 leading-tight">
            Kostenlose Potenzialanalyse für Pilotkunden
          </h2>
          <p className="mt-5 text-lg text-white/60 leading-relaxed">
            Für ausgewählte Pilotkunden prüfen wir eine begrenzte Anzahl historischer Importvorgänge
            kostenlos. Wenn ein prüffähiges Potenzial sichtbar wird, besprechen wir gemeinsam das
            weitere Vorgehen.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {pilotFeatures.map((f) => (
            <div key={f.title} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/8 transition-colors duration-200">
              <div className="w-10 h-10 rounded-lg bg-accent/20 text-accent-light flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <a href="#upload-flow" className="btn-primary-dark px-8 py-3.5 text-sm font-medium">
            Pilotplatz anfragen
          </a>
          <p className="text-sm text-white/40">
            Begrenzte Kapazität – wir wählen Pilotkunden nach Eignung aus.
          </p>
        </div>
      </div>
    </section>
  )
}
