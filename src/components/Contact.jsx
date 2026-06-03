import { useState } from 'react'

const importVolumes = [
  { value: '', label: 'Bitte wählen' },
  { value: '1-20', label: '1 – 20 Importvorgänge / Jahr' },
  { value: '21-100', label: '21 – 100 Importvorgänge / Jahr' },
  { value: '101-500', label: '101 – 500 Importvorgänge / Jahr' },
  { value: '500+', label: 'Mehr als 500 Importvorgänge / Jahr' },
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

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    website: '',
    role: '',
    importVolume: '',
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
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section className="bg-slate-50 py-24 lg:py-32" id="kontakt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left */}
          <div className="lg:col-span-2">
            <span className="section-label">Kontakt</span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-navy-900 mt-3 leading-tight">
              Lassen Sie uns prüfen, ob sich ein Leak-Scan lohnt.
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed text-base">
              Schildern Sie uns kurz Ihre Importsituation. Wir melden uns, um den nächsten
              Schritt zu besprechen.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { label: 'Unverbindlich', desc: 'Kein Vertrag, keine automatische Beauftragung.' },
                { label: 'Kein Dokumentenupload hier', desc: 'Bitte laden Sie hier keine Zollbescheide hoch. Der sichere Datenraum folgt nach Abstimmung.' },
                { label: 'Antwort innerhalb von 2 Werktagen', desc: 'Wir prüfen Ihre Anfrage und melden uns zeitnah.' },
              ].map((item) => (
                <div key={item.label} className="flex gap-3">
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-accent/10 flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#1d6fa4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-slate-800">{item.label}</span>
                    <p className="text-sm text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M6 14l5.5 5.5L22 8" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">Anfrage erhalten</h3>
                  <p className="text-slate-500 text-sm max-w-xs mx-auto">
                    Vielen Dank. Wir melden uns innerhalb von 2 Werktagen bei Ihnen.
                  </p>
                </div>
              ) : (
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
                    <Field label="Rolle im Unternehmen">
                      <input
                        type="text"
                        name="role"
                        value={form.role}
                        onChange={handleChange}
                        placeholder="z. B. Einkaufsleiter, GF"
                        className={inputClass}
                      />
                    </Field>
                  </div>

                  <Field label="Geschätzte Importvorgänge pro Jahr" required>
                    <select
                      name="importVolume"
                      value={form.importVolume}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    >
                      {importVolumes.map((opt) => (
                        <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Hauptherkunftsländer" hint="z. B. China, Türkei, Vietnam">
                      <input
                        type="text"
                        name="countries"
                        value={form.countries}
                        onChange={handleChange}
                        placeholder="z. B. China, Türkei"
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Warengruppen" hint="z. B. Elektronik, Ersatzteile, Haushaltswaren">
                      <input
                        type="text"
                        name="categories"
                        value={form.categories}
                        onChange={handleChange}
                        placeholder="z. B. Elektronikzubehör"
                        className={inputClass}
                      />
                    </Field>
                  </div>

                  <Field label="Nachricht">
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Ergänzende Informationen zu Ihrer Importsituation..."
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
                      Ich möchte eine unverbindliche Potenzialanalyse anfragen.
                    </label>
                  </div>

                  <div className="p-4 bg-amber-50 border border-amber-100 rounded-lg">
                    <p className="text-xs text-amber-700 leading-relaxed">
                      Bitte laden Sie hier keine Zollbescheide oder sensiblen Dokumente hoch.
                      Nach der Erstprüfung stellen wir bei Bedarf einen sicheren Datenraum bereit.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary py-3.5 text-sm font-medium disabled:opacity-60"
                  >
                    {loading ? 'Wird gesendet…' : 'Anfrage senden'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
