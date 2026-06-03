import { useState } from 'react'

const importVolumes = [
  { value: '', label: 'Bitte wählen' },
  { value: '1-20', label: '1–20 Importvorgänge / Jahr' },
  { value: '21-100', label: '21–100 Importvorgänge / Jahr' },
  { value: '101-500', label: '101–500 Importvorgänge / Jahr' },
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
    message: '',
    inquiry: 'general',
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
    <section className="bg-white py-20 lg:py-24" id="kontakt">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {submitted ? (
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M6 14l5.5 5.5L22 8" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-navy-900 mb-2">Nachricht erhalten</h3>
            <p className="text-slate-500 text-sm max-w-xs mx-auto mb-6">
              Vielen Dank. Wir melden uns zeitnah bei Ihnen.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-sm text-accent hover:text-accent-light transition-colors font-medium"
            >
              Weitere Nachricht senden
            </button>
          </div>
        ) : (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold text-navy-900 mb-3">Fragen zum Upload oder zur Analyse?</h2>
              <p className="text-slate-600 max-w-xl mx-auto">
                Schreiben Sie uns direkt. Wir antworten innerhalb von 2 Werktagen.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
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

              <Field label="Thema" required>
                <select name="inquiry" value={form.inquiry} onChange={handleChange} className={inputClass}>
                  <option value="general">Allgemeine Frage</option>
                  <option value="upload">Upload / technische Frage</option>
                  <option value="privacy">Datenschutz / Sicherheit</option>
                  <option value="integration">Integration / Partner</option>
                </select>
              </Field>

              <Field label="Nachricht" required>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Ihre Frage oder Nachricht…"
                  required
                  className={`${inputClass} resize-none`}
                />
              </Field>

              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100 mb-4">
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
                  Ich stimme zu, dass ZollMetrics meine Nachricht und Kontaktdaten nutzen darf, um mich zu
                  kontaktieren.
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary py-3 text-sm font-medium disabled:opacity-60"
              >
                {loading ? 'Wird gesendet…' : 'Nachricht senden'}
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  )
}
