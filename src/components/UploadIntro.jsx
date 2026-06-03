const stepCards = [
  {
    num: '1',
    title: 'Kurzformular ausfüllen',
    desc: 'Unternehmen, Importvolumen, Herkunftsländer und Warengruppen angeben.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="4" y="3" width="12" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 7h6M7 11h4M7 14h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: '2',
    title: 'Testdokumente hochladen',
    desc: 'PDF, ZIP, CSV oder XLSX hochladen. Bitte zunächst nur ausgewählte Beispieldokumente.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2v12M5 9l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2" y="15" width="16" height="2" rx="1" fill="currentColor" opacity="0.3" />
      </svg>
    ),
  },
  {
    num: '3',
    title: 'Potenzialeinschätzung erhalten',
    desc: 'Wir melden uns mit einer ersten Einschätzung: keine Auffälligkeit, weitere Daten nötig oder prüffähiger Verdachtsfall.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function UploadIntro() {
  return (
    <section className="bg-white py-24 lg:py-32" id="upload-intro">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="section-label">Upload-Wedge</span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-navy-900 mt-3 leading-tight">
            Kein Sales-Prozess. Erstcheck direkt per Upload.
          </h2>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            Bei ZollMetrics müssen Sie nicht erst mehrere Beratungsgespräche führen. Für den Erstcheck laden Sie
            ein kleines Test-Set Ihrer Importdokumente hoch. Wir prüfen, ob auffällige Muster oder mögliche
            Zoll-Überzahlungen sichtbar sind.
          </p>
          <p className="mt-3 text-base text-slate-500">
            Für den Erstcheck reichen <strong>3–10 Dokumente</strong>: zum Beispiel Zollbescheide, Handelsrechnungen,
            Packlisten oder Spediteursabrechnungen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stepCards.map((s) => (
            <div key={s.num} className="bg-slate-50 rounded-2xl border border-slate-100 p-8 text-center hover:shadow-md hover:border-slate-200 transition-all duration-200">
              <div className="w-12 h-12 rounded-full bg-navy-900 text-white flex items-center justify-center mx-auto mb-5">
                {s.icon}
              </div>
              <div className="text-sm font-semibold text-accent mb-2">Schritt {s.num}</div>
              <h3 className="text-base font-semibold text-navy-900 mb-2">{s.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
