export default function Contact() {
  return (
    <section className="bg-white py-20 lg:py-24" id="kontakt">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-8">
          <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-accent">
              <path d="M14 2v10M8 8l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 24l8-8 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-navy-900 mb-3">Sprechen wir über Ihre Importdaten.</h2>
          <p className="text-slate-600 max-w-xl mx-auto mb-8 leading-relaxed">
            Sie möchten prüfen, ob sich ein Import-Duty-Leak-Scan lohnt? Nutzen Sie unser Kontaktformular oder schreiben
            Sie uns direkt.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/kontakt" className="btn-primary px-8 py-3 text-sm font-medium">
              Kontaktformular öffnen
            </a>
            <a
              href="mailto:team@zollmetrics.com"
              className="btn-secondary px-8 py-3 text-sm font-medium"
            >
              team@zollmetrics.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
