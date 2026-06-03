const processSteps = [
  {
    num: '01',
    title: 'Kontakt & Datenrahmen',
    desc: 'Wir klären Importvolumen, Warenkategorien, Herkunftsländer und vorhandene Dokumente. Kein Dokumentenversand in dieser Phase – nur ein strukturiertes Erstgespräch.',
    details: [
      'Importvolumen und Sendungsfrequenz',
      'Wichtigste Warenkategorien',
      'Herkunftsländer und Lieferanten',
      'Vorhandene Dokumententypen',
    ],
  },
  {
    num: '02',
    title: 'Sicherer Datenraum',
    desc: 'Pilotkunden erhalten einen geschützten Upload-Link für ausgewählte Beispieldokumente. Keine sensiblen Dokumente per E-Mail – nur über den freigegebenen Datenraum.',
    details: [
      'Geschützter Datenraum nach Freigabe',
      'Keine Dokumente per normaler E-Mail',
      'Datenminimierung: nur relevante Unterlagen',
      'NDA / AVV möglich vor Projektstart',
    ],
  },
  {
    num: '03',
    title: 'Leak-Report',
    desc: 'Sie erhalten eine strukturierte Übersicht möglicher Prüffälle inklusive Potenzial, Risiko, fehlender Unterlagen und Empfehlungen für die fachliche Prüfung durch Ihren Zollprofi.',
    details: [
      'Priorisierte Prüffälle mit Begründung',
      'Potenzialschätzung pro Fall',
      'Status fehlender Unterlagen',
      'Empfehlung zum weiteren Vorgehen',
    ],
  },
]

export default function Process() {
  return (
    <section className="bg-white py-24 lg:py-32" id="ablauf">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <span className="section-label">Ablauf</span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-navy-900 mt-3 leading-tight">
            In 3 Schritten zur Potenzialbewertung
          </h2>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            Ein strukturierter, transparenter Ablauf – von der ersten Kontaktaufnahme bis zum
            prüffähigen Leak-Report.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line on desktop */}
          <div className="hidden lg:block absolute left-8 top-10 bottom-10 w-px bg-slate-100" />

          <div className="space-y-8">
            {processSteps.map((s, i) => (
              <div key={s.num} className="relative flex gap-8">
                {/* Step number */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-navy-900 flex items-center justify-center z-10">
                  <span className="text-white text-sm font-mono font-semibold">{s.num}</span>
                </div>

                {/* Content */}
                <div className="flex-1 pt-3 pb-2 grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900 mb-3">{s.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">{s.desc}</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                    <ul className="space-y-2">
                      {s.details.map((d) => (
                        <li key={d} className="flex items-start gap-2.5 text-sm text-slate-600">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5 text-accent">
                            <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
