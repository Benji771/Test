import LegalPageLayout from '../components/LegalPageLayout'

export default function Impressum() {
  return (
    <LegalPageLayout title="Impressum">
      <section>
        <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">ZollMetrics</h2>
        <p className="font-medium text-slate-700">Ein Projekt von:</p>
        <ul className="list-none space-y-1 mt-2 text-slate-600">
          <li>Normann Frei</li>
          <li>Benjamin Eisenhammer</li>
          <li>Tommy Dergunov</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">Anschrift</h2>
        <p className="text-slate-600 leading-relaxed">
          [Straße Hausnummer]<br />
          [PLZ Ort]<br />
          Deutschland
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">Kontakt</h2>
        <p className="text-slate-600">
          E-Mail:{' '}
          <a href="mailto:team@zollmetrics.com" className="text-accent hover:text-accent-light transition-colors">
            team@zollmetrics.com
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">Vertreten durch</h2>
        <ul className="list-none space-y-1 text-slate-600">
          <li>Normann Frei</li>
          <li>Benjamin Eisenhammer</li>
          <li>Tommy Dergunov</li>
        </ul>
      </section>

      <section className="bg-amber-50 border border-amber-100 rounded-lg p-6 mt-8">
        <h3 className="text-base font-semibold text-amber-900 mb-3">Hinweis zur Rechtsform</h3>
        <p className="text-sm text-amber-800 leading-relaxed">
          ZollMetrics befindet sich derzeit in der Validierungs- und Pilotphase. Die endgültige Rechtsform und
          vollständige Anbieterkennzeichnung werden vor Aufnahme des regulären Geschäftsbetriebs ergänzt.
        </p>
      </section>

      <section className="bg-slate-50 border border-slate-100 rounded-lg p-6 mt-8">
        <h3 className="text-base font-semibold text-slate-900 mb-3">Haftungsausschluss / Fachlicher Hinweis</h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          ZollMetrics bietet eine datenbasierte Voranalyse von Importdokumenten und keine Rechts-, Steuer- oder
          Zollberatung. Finale Bewertungen, Anträge oder rechtliche Schritte erfolgen durch den Kunden, dessen
          Zollberater, Spediteur oder einen spezialisierten Partner.
        </p>
      </section>
    </LegalPageLayout>
  )
}
