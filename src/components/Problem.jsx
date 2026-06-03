const problems = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="3" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 7h8M6 10h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="14" cy="10" r="2.5" fill="currentColor" opacity="0.3" />
      </svg>
    ),
    title: 'Unterschiedliche HS-/CN-Codes für gleiche Artikel',
    text: 'Gleiche Produkte werden über verschiedene Sendungen unter abweichenden Tarifnummern verzollt – mit teils erheblichen Zollsatzdifferenzen.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 3v3M10 14v3M3 10h3M14 10h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Nicht genutzte Präferenznachweise',
    text: 'Gültige Ursprungsnachweise und Präferenzabkommen bleiben ungenutzt, obwohl sie den Zollsatz erheblich reduzieren könnten.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 14l4-4 3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2" y="2" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Auffällige Zollwert- oder Frachtkostenbestandteile',
    text: 'Frachtkosten, Versicherung oder Lizenzgebühren werden im Zollwert falsch angesetzt – häufig auf Basis veralteter Spediteursvorlagen.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M6 6h8M6 10h8M6 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 3h14a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Abweichungen zwischen Rechnung, Bescheid und Spediteur',
    text: 'Handelsrechnung, Zollbescheid und Spediteursabrechnung weisen unterschiedliche Beträge oder Mengenangaben auf, ohne dass dies aufgefallen ist.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 14l-4-4h2.5V6h3v4H14L10 14z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2" y="2" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Defekte, Retouren oder Re-Exporte ohne Prüfung',
    text: 'Bei Rücksendungen, beschädigten Waren oder Re-Exporten wird selten geprüft, ob eine Erstattung oder Zollgutschrift in Betracht käme.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 7v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Wiederkehrende Hochzoll-Codes bei unklaren Produktbeschreibungen',
    text: 'Vage oder veraltete Produktbeschreibungen führen zu überhöhten Zolltarifnummern, die sich über Monate oder Jahre wiederholen.',
  },
]

export default function Problem() {
  return (
    <section className="bg-slate-50 py-24 lg:py-32" id="problem">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <span className="section-label">Warum das wichtig ist</span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-navy-900 mt-3 leading-tight">
            Importdaten sind komplex. Fehler bleiben oft jahrelang unentdeckt.
          </h2>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            Viele Unternehmen verlassen sich auf Lieferanten, Spediteure oder alte Zolltarifnummern.
            Dadurch können sich Fehler über viele Importsendungen wiederholen – ohne dass jemand es bemerkt.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((p) => (
            <div key={p.title} className="card group hover:shadow-md hover:border-slate-200 transition-all duration-200">
              <div className="w-10 h-10 rounded-lg bg-slate-100 group-hover:bg-accent/10 text-slate-500 group-hover:text-accent flex items-center justify-center mb-4 transition-colors duration-200">
                {p.icon}
              </div>
              <h3 className="text-sm font-semibold text-navy-900 mb-2 leading-snug">{p.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
