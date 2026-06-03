const securityPoints = [
  {
    title: 'Kein Versand per normaler E-Mail',
    desc: 'Sensible Importdokumente werden niemals per unverschlüsselter E-Mail übermittelt. Alle Dokumente laufen ausschließlich über freigegebene Kanäle.',
  },
  {
    title: 'Geschützter Datenraum nach Freigabe',
    desc: 'Pilotkunden erhalten erst nach individueller Freigabe Zugang zu einem dedizierten, geschützten Upload-Bereich.',
  },
  {
    title: 'Datenminimierung',
    desc: 'Wir arbeiten ausschließlich mit den Dokumenten, die für die jeweilige Analyse relevant sind. Keine Sammlung nicht benötigter Unterlagen.',
  },
  {
    title: 'Löschung nach Projektabschluss',
    desc: 'Übermittelte Dokumente und Analysedaten werden nach Abschluss des Projekts nach individueller Vereinbarung gelöscht.',
  },
  {
    title: 'NDA und AVV möglich',
    desc: 'Sobald ein formales Projekt startet, können Vertraulichkeitsvereinbarungen (NDA) und ein Auftragsverarbeitungsvertrag (AVV) abgeschlossen werden.',
  },
]

export default function Security() {
  return (
    <section className="bg-white py-24 lg:py-32" id="sicherheit">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <span className="section-label">Datensicherheit</span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-navy-900 mt-3 leading-tight">
              Sensible Importdaten brauchen saubere Prozesse.
            </h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Importdokumente enthalten vertrauliche Geschäftsinformationen. Wir behandeln sie
              entsprechend – mit klaren Prozessen und keinen übertriebenen Versprechen.
            </p>

            {/* What we don't claim */}
            <div className="mt-8 p-5 bg-slate-50 border border-slate-200 rounded-xl">
              <h3 className="text-sm font-semibold text-slate-700 mb-3">Was wir nicht behaupten:</h3>
              <ul className="space-y-2">
                {[
                  '„100 % sicher" oder absolute Datensicherheitsgarantien',
                  'Pauschale DSGVO-Konformitätszertifizierungen',
                  'Technische Versprechen ohne Grundlage',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-500">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
                      <path d="M4 4l8 8M12 4L4 12" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-5 text-sm text-slate-500 leading-relaxed">
              Wir kommunizieren klar, was wir tun – und was wir nicht tun. Fragen zu konkreten
              Datenschutzanforderungen besprechen wir gerne vor Projektstart.
            </p>
          </div>

          {/* Right: security list */}
          <div className="space-y-4">
            {securityPoints.map((p, i) => (
              <div key={p.title} className="flex gap-4 p-5 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-sm transition-all duration-200">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-navy-900 text-white flex items-center justify-center text-xs font-mono font-semibold">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-navy-900 mb-1">{p.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
