function UploadPreview() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Glow */}
      <div className="absolute -inset-4 bg-accent/10 rounded-2xl blur-xl" />

      <div className="relative bg-navy-800 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="px-5 py-3.5 border-b border-white/10 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-white/70 text-xs font-medium tracking-wide uppercase">Kostenlosen Scan starten</span>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 text-accent-light">
              <path d="M10 2v12M5 9l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="2" y="15" width="16" height="2" rx="1" fill="currentColor" opacity="0.3" />
            </svg>
            <div>
              <div className="text-xs font-semibold text-white">Schritt 1</div>
              <div className="text-xs text-white/60">Kurzformular ausfüllen</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 text-accent-light">
              <path d="M10 2v12M5 9l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="2" y="15" width="16" height="2" rx="1" fill="currentColor" opacity="0.3" />
            </svg>
            <div>
              <div className="text-xs font-semibold text-white">Schritt 2</div>
              <div className="text-xs text-white/60">3–10 Test-Dokumente hochladen</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 text-accent-light">
              <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
              <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div>
              <div className="text-xs font-semibold text-white">Schritt 3</div>
              <div className="text-xs text-white/60">Potenzialeinschätzung erhalten</div>
            </div>
          </div>

          <div className="pt-2 border-t border-white/10">
            <p className="text-xs text-white/50">
              <strong className="text-white/70">Gesamtdauer:</strong> ca. 5–10 Minuten
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const badges = [
  'Kein Demo-Call nötig',
  'Upload in wenigen Minuten',
  'Datenbasierte Voranalyse',
  'Keine Rückerstattungsgarantie',
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
              <span className="text-xs text-accent font-medium tracking-wide">Self-Serve Leak-Analyse</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-semibold text-white leading-tight tracking-tight mb-6">
              Versteckte Zoll-Über&shy;zahlungen in Ihren Import&shy;daten finden.
            </h1>

            <p className="text-lg text-white/65 leading-relaxed mb-10 max-w-lg">
              Starten Sie ohne Sales-Call: Laden Sie ausgewählte Importdokumente hoch und erhalten Sie eine
              erste datenbasierte Potenzialeinschätzung.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <a href="#upload-flow" className="btn-primary-dark px-7 py-3.5 text-sm font-medium">
                Kostenlosen Leak-Scan starten
              </a>
              <a href="#ablauf" className="btn-ghost px-7 py-3.5 text-sm font-medium">
                So funktioniert der Upload
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

          {/* Right: Upload Preview */}
          <div className="flex justify-center lg:justify-end">
            <UploadPreview />
          </div>
        </div>
      </div>
    </section>
  )
}
