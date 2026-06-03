function ScanCard() {
  const items = [
    { label: 'Analysierte Positionen', value: '1.248', color: 'text-slate-700' },
    { label: 'Erkannte Auffälligkeiten', value: '37', color: 'text-warning' },
    { label: 'Priorisierte Prüffälle', value: '5', color: 'text-accent' },
  ]

  const flags = [
    { code: 'HS 8471.30', desc: 'Tarifnummer inkonsistent (3×)', status: 'flag' },
    { code: 'INV-2024-114', desc: 'Zollwert Abweichung erkannt', status: 'flag' },
    { code: 'DEL-2023-88', desc: 'Präferenznachweis fehlt', status: 'warn' },
    { code: 'RET-2024-22', desc: 'Retoure – keine Abschreibung', status: 'warn' },
  ]

  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Glow */}
      <div className="absolute -inset-4 bg-accent/10 rounded-2xl blur-xl" />

      <div className="relative bg-navy-800 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        {/* Header bar */}
        <div className="px-5 py-3.5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-white/70 text-xs font-medium tracking-wide uppercase">Import Leak Scan</span>
          </div>
          <span className="text-xs text-white/40 font-mono">v2.1</span>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 divide-x divide-white/10 border-b border-white/10">
          {items.map((item) => (
            <div key={item.label} className="px-4 py-3 text-center">
              <div className={`text-xl font-semibold font-mono ${item.color}`}>{item.value}</div>
              <div className="text-xs text-white/40 mt-0.5 leading-tight">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Flags list */}
        <div className="p-4 space-y-2">
          {flags.map((f) => (
            <div key={f.code} className="flex items-start gap-3 p-2.5 rounded-lg bg-white/5 border border-white/5">
              <div className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${
                f.status === 'flag' ? 'bg-warning/20' : 'bg-accent/20'
              }`}>
                {f.status === 'flag' ? (
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M4 2v2.5M4 6h.01" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <circle cx="4" cy="4" r="2" fill="#1d6fa4" />
                  </svg>
                )}
              </div>
              <div className="min-w-0">
                <div className="text-xs font-mono text-white/60">{f.code}</div>
                <div className="text-xs text-white/80 mt-0.5">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Potenzial footer */}
        <div className="px-4 py-3 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs text-white/50">Potenzial-Status</span>
          <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-accent/20 text-accent-light border border-accent/30">
            Zur fachlichen Prüfung
          </span>
        </div>
      </div>
    </div>
  )
}

const badges = [
  'Für DACH-Importeure',
  'Datenbasierte Vorprüfung',
  'Keine Rückerstattungsgarantie – klare Potenzialbewertung',
  'Sicherer Datenraum nach Freigabe',
]

export default function Hero() {
  return (
    <section className="relative bg-navy-900 min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-accent/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-xs text-accent font-medium tracking-wide">DACH Import-Duty-Leak-Scanner</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-semibold text-white leading-tight tracking-tight mb-6">
              Versteckte Zoll-Über&shy;zahlungen in Ihren Import&shy;daten finden.
            </h1>

            <p className="text-lg text-white/65 leading-relaxed mb-10 max-w-lg">
              ZollMetrics analysiert Zollbescheide, Handelsrechnungen und Speditionsdaten auf mögliche
              Überzahlungen – datenbasiert, strukturiert und vorbereitet für die fachliche Prüfung durch
              Ihren Zollprofi.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <a href="#kontakt" className="btn-primary-dark px-7 py-3.5 text-sm font-medium">
                Kostenlose Potenzialanalyse anfragen
              </a>
              <a href="#ablauf" className="btn-ghost px-7 py-3.5 text-sm font-medium">
                Ablauf ansehen
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2">
              {badges.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-1.5 text-xs text-white/60 bg-white/5 border border-white/10 rounded-full px-3 py-1.5"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2 2 4-4" stroke="#1d6fa4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Right: UI Card */}
          <div className="flex justify-center lg:justify-end">
            <ScanCard />
          </div>
        </div>
      </div>
    </section>
  )
}
