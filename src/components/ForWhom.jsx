const suitable = [
  'E-Commerce-Importeure mit regelmäßigen Nicht-EU-Importen',
  'Amazon-, Shopify- und Shopware-Händler',
  'Ersatzteil- und Elektronikzubehörhändler',
  'Unternehmen mit wiederkehrenden Lieferanten und ähnlichen Produkten',
  'Importeure ohne eigene Zollabteilung',
]

const notSuitable = [
  'Einzelimporte ohne Wiederholung',
  'Sehr kleine Importvolumen',
  'Unternehmen ohne Zugriff auf Zollbescheide und Handelsrechnungen',
  'Fälle, bei denen eine sofortige verbindliche Rechtsberatung erwartet wird',
]

export default function ForWhom() {
  return (
    <section className="bg-slate-50 py-24 lg:py-32" id="fuer-wen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <span className="section-label">Zielgruppe</span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-navy-900 mt-3 leading-tight">
            Für wen ZollMetrics sinnvoll ist
          </h2>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            ZollMetrics eignet sich besonders für Unternehmen mit strukturierten, wiederkehrenden
            Importvorgängen – und einem Interesse an datenbasierter Vorprüfung.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Suitable */}
          <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8l3.5 3.5L13 4" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-navy-900">Geeignet für</h3>
            </div>
            <ul className="space-y-3.5">
              {suitable.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="flex-shrink-0 mt-0.5">
                    <circle cx="9" cy="9" r="8" fill="#dcfce7" />
                    <path d="M5.5 9l2.5 2.5 4.5-5" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not suitable */}
          <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 4l8 8M12 4l-8 8" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-navy-900">Weniger geeignet</h3>
            </div>
            <ul className="space-y-3.5">
              {notSuitable.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="flex-shrink-0 mt-0.5">
                    <circle cx="9" cy="9" r="8" fill="#f1f5f9" />
                    <path d="M6 12l6-6M12 12L6 6" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <span className="text-sm text-slate-500 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
