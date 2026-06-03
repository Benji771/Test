const processSteps = [
  {
    num: '01',
    title: 'Test-Set hochladen',
    desc: 'Sie laden 3–10 ausgewählte Importdokumente hoch. Kein Demo-Call nötig.',
    details: [
      'Kurzformular mit Unternehmensdaten',
      'Importdokumente hochladen (PDF, ZIP, CSV, XLSX)',
      'Kein Versand per E-Mail nötig',
      'Direkt im Upload-Portal',
    ],
  },
  {
    num: '02',
    title: 'Auffälligkeiten prüfen',
    desc: 'Wir extrahieren relevante Angaben und prüfen auf Muster wie abweichende Tarifnummern, ungenutzte Präferenzhinweise oder auffällige Zollwertbestandteile.',
    details: [
      'Automatisierte Datenextraktion',
      'Pattern-Erkennung',
      'Konsistenzprüfung über Dokumente',
      'Kategorisierung nach Leak-Risiko',
    ],
  },
  {
    num: '03',
    title: 'Potenzialeinschätzung erhalten',
    desc: 'Sie erhalten eine erste Einschätzung, ob sich eine tiefere Prüfung lohnt.',
    details: [
      'Schriftliche erste Bewertung',
      'Keine Auffälligkeit erkannt',
      'Weitere Daten nötig',
      'Prüffähiger Verdachtsfall identifiziert',
    ],
  },
  {
    num: '04',
    title: 'Optional: Expertenprüfung',
    desc: 'Wenn ein prüffähiger Fall sichtbar wird, kann die fachliche Bewertung durch Ihren Zollberater, Spediteur oder einen spezialisierten Partner erfolgen.',
    details: [
      'Übergang zur formalen Analyse',
      'NDA / AVV Vereinbarung',
      'Optionale Vermittlung zu Expertenpartnern',
      'Individuelles Abrechnungsmodell',
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
            Schnell zur ersten Potenzialeinschätzung
          </h2>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            Von der Dateneingabe bis zur ersten Einschätzung – ohne lange Wartezeiten auf Demo-Calls.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {processSteps.map((s, i) => (
            <div key={s.num} className="bg-slate-50 rounded-xl border border-slate-100 p-6 hover:shadow-md hover:border-slate-200 transition-all duration-200">
              <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">{s.num}</div>
              <h3 className="text-sm font-semibold text-navy-900 mb-2 leading-snug">{s.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">{s.desc}</p>
              <ul className="space-y-1.5">
                {s.details.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-xs text-slate-500">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0 mt-0.5 text-accent">
                      <circle cx="6" cy="6" r="4" fill="currentColor" opacity="0.3" />
                    </svg>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
