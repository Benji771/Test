const steps = [
  {
    step: 'A',
    color: 'bg-navy-800',
    title: 'Daten strukturieren',
    desc: 'Wir extrahieren relevante Angaben aus Zollbescheiden, Handelsrechnungen, Packlisten und Speditionsabrechnungen und bringen sie in eine einheitliche, auswertbare Form.',
    tags: ['Zollbescheide', 'Handelsrechnungen', 'Packlisten', 'Speditionsabrechnungen'],
  },
  {
    step: 'B',
    color: 'bg-accent-muted',
    title: 'Auffälligkeiten erkennen',
    desc: 'Unsere Analyse erkennt wiederkehrende Muster, Abweichungen zwischen Dokumenten und potenzielle Leak-Kategorien – strukturiert und nachvollziehbar.',
    tags: ['Mustererkennung', 'Abweichungsanalyse', 'Leak-Kategorien'],
  },
  {
    step: 'C',
    color: 'bg-navy-700',
    title: 'Prüffälle vorbereiten',
    desc: 'Sie erhalten eine priorisierte Fallliste mit Begründung, Dokumentenstatus, Potenzialschätzung und konkreten nächsten Schritten – zur fachlichen Prüfung durch Ihren Zollprofi.',
    tags: ['Priorisierung', 'Potenzialschätzung', 'Empfehlungen'],
  },
]

export default function Solution() {
  return (
    <section className="bg-white py-24 lg:py-32" id="loesung">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <span className="section-label">Unsere Lösung</span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-navy-900 mt-3 leading-tight">
            Wir machen aus Dokumentenchaos eine prüfbare Fallliste.
          </h2>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            ZollMetrics übernimmt die strukturierte Aufbereitung Ihrer Importdaten – damit Ihr Zollberater,
            Spediteur oder interner Zollverantwortlicher auf einer soliden Grundlage prüfen kann.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={s.step} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-6 border-t-2 border-dashed border-slate-200 z-10 -translate-x-3" />
              )}

              <div className="bg-navy-900 rounded-2xl p-7 h-full flex flex-col">
                <div className={`w-9 h-9 ${s.color} rounded-lg flex items-center justify-center mb-5`}>
                  <span className="text-white text-sm font-bold">{s.step}</span>
                </div>
                <h3 className="text-base font-semibold text-white mb-3">{s.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed flex-1">{s.desc}</p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs text-white/50 bg-white/5 border border-white/10 rounded-full px-2.5 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
