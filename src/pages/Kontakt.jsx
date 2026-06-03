import { useState } from 'react'
import { Link } from 'react-router-dom'

const importCounts = [
  { value: '', label: 'Bitte wählen' },
  { value: 'under-25', label: 'unter 25' },
  { value: '25-100', label: '25–100' },
  { value: '101-500', label: '101–500' },
  { value: '501-2000', label: '501–2.000' },
  { value: '2000+', label: '2.000+' },
  { value: 'unsure', label: 'unsicher' },
]

const importValues = [
  { value: '', label: 'Bitte wählen' },
  { value: 'under-100k', label: 'unter 100.000 €' },
  { value: '100k-500k', label: '100.000–500.000 €' },
  { value: '500k-2m', label: '500.000–2 Mio. €' },
  { value: '2m-10m', label: '2–10 Mio. €' },
  { value: 'over-10m', label: 'über 10 Mio. €' },
  { value: 'unsure', label: 'unsicher' },
]

function Field({ label, required, children, hint }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1.5">
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </label>
      {children}
      {hint && <p className="mt-1.5 text-xs text-slate-400">{hint}</p>}
    </div>
  )
}

const inputClass =
  'w-full px-4 py-2.5 text-sm border border-slate-200 rounded-lg bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors'

export default function KontaktPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    website: '',
    role: '',
    importCount: '',
    importValue: '',
    countries: '',
    categories: '',
    message: '',
    consent: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // TODO: Formular an Backend/API senden
    // TODO: E-Mail-Benachrichtigung einrichten
    // TODO: CRM/Lead-Speicherung einrichten
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-light transition-colors mb-8">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Zurück zur Startseite
        </Link>
        {submitted ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M8 16l6 6L24 10" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-navy-900 mb-2">Anfrage erhalten</h2>
            <p className="text-slate-600 max-w-md mx-auto mb-8">
              Vielen Dank für Ihre Nachricht. Wir prüfen Ihre Anfrage und melden uns innerhalb von 2 Werktagen bei
              Ihnen.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-sm text-accent hover:text-accent-light transition-colors font-medium"
            >
              Weitere Anfrage senden
            </button>
          </div>
        ) : (
          <div>
            <h1 className="text-4xl font-semibold text-navy-900 mb-4">Kontakt</h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-3">Sprechen wir über Ihre Importdaten.</p>
            <p className="text-base text-slate-600 leading-relaxed mb-12">
              Sie möchten prüfen, ob sich ein Import-Duty-Leak-Scan lohnt? Schreiben Sie uns kurz, welche Waren Sie
              importieren und wie viele Importvorgänge ungefähr pro Jahr anfallen.
            </p>

            {/* Contact info */}
            <div className="mb-12 p-6 bg-slate-50 border border-slate-100 rounded-xl">
              <p className="text-slate-600">
                <strong className="text-slate-700">E-Mail:</strong>{' '}
                <a href="mailto:team@zollmetrics.com" className="text-accent hover:text-accent-light transition-colors">
                  team@zollmetrics.com
                </a>
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Vorname" required>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="Max"
                    required
                    className={inputClass}
                  />
                </Field>
                <Field label="Nachname" required>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Mustermann"
                    required
                    className={inputClass}
                  />
                </Field>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Geschäftliche E-Mail" required>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="max@unternehmen.de"
                    required
                    className={inputClass}
                  />
                </Field>
                <Field label="Unternehmen" required>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Muster GmbH"
                    required
                    className={inputClass}
                  />
                </Field>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Website">
                  <input
                    type="url"
                    name="website"
                    value={form.website}
                    onChange={handleChange}
                    placeholder="https://www.unternehmen.de"
                    className={inputClass}
                  />
                </Field>
                <Field label="Rolle/Funktion">
                  <input
                    type="text"
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    placeholder="z. B. Einkaufsleiter"
                    className={inputClass}
                  />
                </Field>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Geschätzte Importvorgänge pro Jahr" required>
                  <select name="importCount" value={form.importCount} onChange={handleChange} required className={inputClass}>
                    {importCounts.map((opt) => (
                      <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Geschätztes jährliches Importvolumen" required>
                  <select name="importValue" value={form.importValue} onChange={handleChange} required className={inputClass}>
                    {importValues.map((opt) => (
                      <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Hauptherkunftsländer" required>
                  <input
                    type="text"
                    name="countries"
                    value={form.countries}
                    onChange={handleChange}
                    placeholder="z. B. China, Türkei"
                    required
                    className={inputClass}
                  />
                </Field>
                <Field label="Warengruppen" required>
                  <input
                    type="text"
                    name="categories"
                    value={form.categories}
                    onChange={handleChange}
                    placeholder="z. B. Elektronikzubehör"
                    required
                    className={inputClass}
                  />
                </Field>
              </div>

              <Field label="Nachricht">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Weitere Informationen zu Ihrer Importsituation..."
                  className={`${inputClass} resize-none`}
                />
              </Field>

              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={form.consent}
                  onChange={handleChange}
                  required
                  className="mt-0.5 w-4 h-4 accent-accent cursor-pointer"
                />
                <label htmlFor="consent" className="text-sm text-slate-600 leading-relaxed cursor-pointer">
                  Ich möchte kontaktiert werden und stimme der Verarbeitung meiner Daten gemäß der
                  <a href="/datenschutz" className="text-accent hover:text-accent-light transition-colors">
                    {' '}
                    Datenschutzerklärung
                  </a>
                  {' '}zu.
                </label>
              </div>

              <div className="p-4 bg-amber-50 border border-amber-100 rounded-lg">
                <p className="text-xs text-amber-700 leading-relaxed">
                  Bitte laden Sie über dieses Kontaktformular keine sensiblen Zollbescheide oder vollständigen
                  Dokumentenarchive hoch. Für Testdokumente oder Projektunterlagen stellen wir einen passenden
                  Upload-Prozess bereit.
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary py-3 text-sm font-medium disabled:opacity-60"
              >
                {loading ? 'Wird gesendet…' : 'Anfrage senden'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
