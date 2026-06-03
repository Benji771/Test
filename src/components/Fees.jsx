const pricingTiers = [
  {
    title: 'Erstcheck',
    price: '0 €',
    description: 'Kostenlos',
    features: [
      '3–10 ausgewählte Beispieldokumente',
      'Erste datenbasierte Potenzialeinschätzung',
      'Keine Zahlung für bloße Prüfung',
      'Kein Demo-Call erforderlich',
    ],
    highlight: false,
  },
  {
    title: 'Vollanalyse',
    price: 'Individuell abgestimmt',
    description: 'Nach Vereinbarung',
    features: [
      'Analyse größerer Importdatenmengen',
      'Priorisierte Prüffälle',
      'Dokumentenstatus und Potenzialschätzung',
      'Optional Übergabe an Zollberater, Spediteur oder spezialisierten Partner',
    ],
    highlight: true,
  },
  {
    title: 'Erfolgsvergütung',
    price: 'Nur bei realisierter Erstattung',
    description: 'Risikogerechtes Modell',
    features: [
      'Vergütung nur auf tatsächlich realisierte Rückerstattungen oder Gutschriften',
      'Keine Gebühr auf bloße Auffälligkeiten',
      'Prozentsatz wird vor Projektstart vertraglich vereinbart',
      'Keine Rückerstattungsgarantie',
    ],
    highlight: false,
  },
]

export default function Fees() {
  return (
    <section className="bg-slate-50 py-24 lg:py-32" id="pricing">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="section-label">Vergütungsmodell</span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-navy-900 mt-3 leading-tight">
            Kostenloser Erstcheck. Vergütung nur bei Ergebnis.
          </h2>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            Der erste Leak-Scan mit ausgewählten Beispieldokumenten ist kostenlos. Wenn sich daraus ein prüffähiges
            Potenzial ergibt, vereinbaren wir vor der vollständigen Analyse ein erfolgsorientiertes Modell.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12 auto-rows-max">
          {pricingTiers.map((tier) => (
            <div
              key={tier.title}
              className={`rounded-2xl border transition-all duration-200 flex flex-col h-full ${
                tier.highlight
                  ? 'bg-navy-900 border-navy-800 shadow-lg md:scale-105'
                  : 'bg-white border-slate-100 hover:shadow-md hover:border-slate-200'
              }`}
            >
              {tier.highlight && (
                <div className="bg-accent text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 text-center border-b border-accent/20">
                  Beliebt
                </div>
              )}

              <div className="p-8 flex flex-col h-full">
                <div>
                  <h3 className={`text-lg font-semibold mb-1 ${tier.highlight ? 'text-white' : 'text-navy-900'}`}>
                    {tier.title}
                  </h3>
                  <p className={`text-xs mb-6 min-h-[1.25rem] leading-normal ${tier.highlight ? 'text-white/60' : 'text-slate-500'}`}>
                    {tier.description}
                  </p>

                  <div className="mb-6">
                    <div className={`text-2xl lg:text-3xl font-bold leading-snug break-words max-w-full ${
                      tier.highlight ? 'text-accent-light' : 'text-navy-900'
                    }`}>
                      {tier.price}
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 flex-1">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-3 text-sm leading-relaxed min-w-0 ${
                        tier.highlight ? 'text-white/80' : 'text-slate-600'
                      }`}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
                        <path
                          d="M3 8l3.5 3.5L13 5"
                          stroke={tier.highlight ? '#2389c7' : '#1d6fa4'}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="break-words">{feature}</span>
                    </li>
                  ))}
                </ul>

                {tier.title === 'Erstcheck' && (
                  <a href="#upload-flow" className="mt-6 block w-full py-2.5 text-center text-sm font-medium text-white bg-accent rounded-lg hover:bg-accent-light transition-colors">
                    Jetzt starten
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="max-w-3xl mx-auto p-6 bg-white border border-slate-100 rounded-xl">
          <p className="text-xs text-slate-600 leading-relaxed">
            <strong className="text-slate-700">Rechtlicher Hinweis:</strong> ZollMetrics bietet eine datenbasierte
            Voranalyse und keine Rechts-, Steuer- oder Zollberatung. Finale Bewertungen, Anträge oder rechtliche
            Schritte erfolgen durch den Kunden, dessen Zollberater/Spediteur oder einen spezialisierten Partner.
          </p>
        </div>
      </div>
    </section>
  )
}
