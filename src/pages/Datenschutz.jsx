import LegalPageLayout from '../components/LegalPageLayout'

export default function Datenschutz() {
  return (
    <LegalPageLayout title="Datenschutzerklärung">
      <section>
        <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">1. Verantwortliche</h2>
        <div className="text-slate-600 space-y-1">
          <p className="font-medium">ZollMetrics</p>
          <p>Ein Projekt von Normann Frei, Benjamin Eisenhammer und Tommy Dergunov</p>
          <p>
            Adresse: [Straße Hausnummer, PLZ Ort, Deutschland]<br />
            E-Mail:{' '}
            <a href="mailto:team@zollmetrics.com" className="text-accent hover:text-accent-light transition-colors">
              team@zollmetrics.com
            </a>
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">2. Allgemeine Hinweise</h2>
        <p className="text-slate-600 leading-relaxed">
          Wir verarbeiten personenbezogene Daten nur, soweit dies für den Betrieb dieser Website, die Bearbeitung von
          Anfragen und die Durchführung einer angefragten Potenzialanalyse erforderlich ist.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">3. Hosting und Server-Logs</h2>
        <p className="text-slate-600 leading-relaxed">
          Beim Aufruf der Website können technische Daten verarbeitet werden, z.B. IP-Adresse, Datum und Uhrzeit,
          Browser, Betriebssystem und aufgerufene Seiten.
        </p>
        <p className="text-slate-600 leading-relaxed mt-3">
          <strong className="text-slate-700">Zweck:</strong> technischer Betrieb, Sicherheit und Fehleranalyse.
        </p>
        <p className="text-slate-600 leading-relaxed mt-3">
          <strong className="text-slate-700">Rechtsgrundlage:</strong> berechtigtes Interesse (Art. 6 Abs. 1 lit. f
          DSGVO).
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">4. Kontaktformular und Leak-Scan-Anfrage</h2>
        <p className="text-slate-600 leading-relaxed">
          Wenn Nutzer das Formular ausfüllen, verarbeiten wir die angegebenen Daten wie Name, E-Mail, Unternehmen,
          Website, Rolle, Importvolumen, Herkunftsländer, Warengruppen und Nachricht.
        </p>
        <p className="text-slate-600 leading-relaxed mt-3">
          <strong className="text-slate-700">Zweck:</strong> Bearbeitung der Anfrage und Einschätzung, ob ein
          Leak-Scan sinnvoll ist.
        </p>
        <p className="text-slate-600 leading-relaxed mt-3">
          <strong className="text-slate-700">Rechtsgrundlage:</strong> vorvertragliche Maßnahmen bzw. berechtigtes
          Interesse (Art. 6 Abs. 1 lit. f DSGVO).
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">5. Dokumenten-Upload / Testdokumente</h2>
        <p className="text-slate-600 leading-relaxed">
          Sofern über die Website oder einen bereitgestellten Datenraum Dokumente hochgeladen werden, verarbeiten wir
          diese ausschließlich zur angefragten datenbasierten Voranalyse. Bitte laden Sie im Erstcheck nur ausgewählte
          Beispieldokumente hoch und keine vollständigen Jahresarchive.
        </p>
        <p className="text-slate-600 leading-relaxed mt-3">
          <strong className="text-slate-700">Hinweis:</strong> Die technische Umsetzung des Uploads kann je nach
          Projektphase über ein separates, geschütztes System erfolgen.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">6. Keine Zollberatung</h2>
        <p className="text-slate-600 leading-relaxed">
          Die Verarbeitung der Dokumente dient ausschließlich einer datenbasierten Voranalyse. ZollMetrics erbringt
          keine Rechts-, Steuer- oder Zollberatung.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">7. Speicherdauer</h2>
        <p className="text-slate-600 leading-relaxed">
          Anfragedaten werden nur so lange gespeichert, wie dies für die Bearbeitung der Anfrage erforderlich ist.
          Projekt- oder Dokumentendaten werden nach Abschluss der Prüfung bzw. nach Vereinbarung gelöscht, sofern
          keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">8. Weitergabe an Dritte</h2>
        <p className="text-slate-600 leading-relaxed">
          Eine Weitergabe erfolgt nur, wenn dies zur Bearbeitung der Anfrage erforderlich ist, der Nutzer eingewilligt
          hat oder eine gesetzliche Pflicht besteht. Eine Weitergabe an Zollberater, Spediteure oder spezialisierte
          Partner erfolgt nur nach vorheriger Abstimmung.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">9. Betroffenenrechte</h2>
        <p className="text-slate-600 leading-relaxed">
          Sie haben das Recht, gegenüber uns folgende Ansprüche geltend zu machen:
        </p>
        <ul className="list-disc list-inside text-slate-600 mt-3 space-y-1">
          <li>Auskunft über Ihre verarbeiteten Daten</li>
          <li>Berichtigung unrichtiger Daten</li>
          <li>Löschung Ihrer Daten</li>
          <li>Einschränkung der Datenverarbeitung</li>
          <li>Widerspruch gegen die Verarbeitung</li>
          <li>Datenübertragbarkeit (Recht auf Portabilität)</li>
          <li>Widerruf einer Einwilligung</li>
          <li>Beschwerde bei einer Datenschutzaufsichtsbehörde</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">10. Cookies und Tracking</h2>
        <p className="text-slate-600 leading-relaxed">
          Wir setzen derzeit keine nicht notwendigen Tracking- oder Marketing-Cookies ein. Die technisch erforderlichen
          Cookies werden gespeichert, um die Website nutzen zu können.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">11. Aktualisierung dieser Datenschutzerklärung</h2>
        <p className="text-slate-600 leading-relaxed">
          Diese Datenschutzerklärung wird angepasst, sobald sich technische Prozesse, Rechtsform oder
          Datenverarbeitungen ändern.
        </p>
      </section>

      <section className="bg-slate-50 border border-slate-100 rounded-lg p-6 mt-8">
        <h3 className="text-base font-semibold text-slate-900 mb-3">Fragen zum Datenschutz?</h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          Kontaktieren Sie uns unter{' '}
          <a href="mailto:team@zollmetrics.com" className="text-accent hover:text-accent-light transition-colors">
            team@zollmetrics.com
          </a>
        </p>
      </section>
    </LegalPageLayout>
  )
}
