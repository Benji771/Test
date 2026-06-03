import { useState } from 'react'

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

const inputClass =
  'w-full px-4 py-2.5 text-sm border border-slate-200 rounded-lg bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors'

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

function StepIndicator({ currentStep, totalSteps }) {
  return (
    <div className="flex items-center gap-2 mb-8">
      {Array.from({ length: totalSteps }).map((_, i) => (
        <div key={i} className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all ${
              i < currentStep ? 'bg-accent text-white' : i === currentStep ? 'bg-accent text-white ring-2 ring-accent/30' : 'bg-slate-100 text-slate-400'
            }`}
          >
            {i < currentStep ? (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              i + 1
            )}
          </div>
          {i < totalSteps - 1 && <div className={`w-8 h-0.5 transition-all ${i < currentStep ? 'bg-accent' : 'bg-slate-200'}`} />}
        </div>
      ))}
    </div>
  )
}

function FileUploadZone({ files, onFilesSelected }) {
  const [dragActive, setDragActive] = useState(false)

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(e.type !== 'dragleave')
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    const newFiles = Array.from(e.dataTransfer.files)
    onFilesSelected([...files, ...newFiles])
  }

  const handleFileInput = (e) => {
    const newFiles = Array.from(e.target.files)
    onFilesSelected([...files, ...newFiles])
  }

  return (
    <div
      onDragOver={handleDrag}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDrop={handleDrop}
      className={`relative border-2 border-dashed rounded-xl p-10 text-center transition-all ${
        dragActive ? 'border-accent bg-accent/5' : 'border-slate-200 bg-slate-50 hover:border-slate-300'
      }`}
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="mx-auto mb-3 text-slate-400">
        <path d="M16 4v16M8 16l8 8 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="4" y="24" width="24" height="2" rx="1" fill="currentColor" opacity="0.3" />
      </svg>
      <p className="text-sm font-medium text-slate-700 mb-1">PDF, ZIP, CSV oder XLSX hier ablegen</p>
      <p className="text-xs text-slate-500 mb-4">oder auswählen</p>
      <input type="file" onChange={handleFileInput} multiple className="hidden" id="file-input" accept=".pdf,.zip,.csv,.xlsx" />
      <label htmlFor="file-input" className="inline-block px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:border-slate-300 cursor-pointer transition-colors">
        Dateien auswählen
      </label>

      <div className="mt-5 space-y-2 text-left">
        <p className="text-xs text-slate-500">
          <strong className="text-slate-600">Für den Erstcheck reichen 3–10 Beispieldokumente.</strong>
        </p>
        <p className="text-xs text-slate-500">Geeignet: Zollbescheide, Handelsrechnungen, Packlisten, Spediteursabrechnungen.</p>
        <p className="text-xs text-slate-500">Bitte laden Sie keine vollständigen Jahresarchive hoch.</p>
        <p className="text-xs text-slate-500">Max. 50 MB pro Upload.</p>
      </div>
    </div>
  )
}

export default function UploadFlow() {
  const [currentStep, setCurrentStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
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
    files: [],
    consent1: false,
    consent2: false,
    consent3: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleFilesSelected = (files) => {
    setFormData((prev) => ({ ...prev, files }))
  }

  const removeFile = (index) => {
    setFormData((prev) => ({ ...prev, files: prev.files.filter((_, i) => i !== index) }))
  }

  const canProceed = () => {
    if (currentStep === 0) {
      return formData.firstName && formData.lastName && formData.email && formData.company && formData.importCount && formData.importValue && formData.countries && formData.categories
    }
    if (currentStep === 1) {
      return formData.files.length > 0
    }
    if (currentStep === 2) {
      return formData.consent1 && formData.consent2 && formData.consent3
    }
    return false
  }

  const handleNext = () => {
    if (canProceed() && currentStep < 2) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!canProceed()) return

    setLoading(true)
    // TODO: Formular an Backend/API senden
    // TODO: Dateien sicher speichern
    // TODO: AVV/NDA/Datenschutzprozess einbinden
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="bg-slate-50 py-24 lg:py-32" id="upload-flow">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M8 16l6 6L24 10" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-navy-900 mb-2">Anfrage eingegangen</h3>
            <p className="text-slate-600 text-base leading-relaxed max-w-md mx-auto mb-8">
              Vielen Dank. Ihre Anfrage wurde erhalten. Wir prüfen Ihre Dokumente und melden uns mit den nächsten
              Schritten innerhalb von 2 Werktagen.
            </p>
            <a href="#upload-flow" onClick={() => setSubmitted(false)} className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-light transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 8l3-3M1 8h6M4 8l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Zurück zum Formular
            </a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-slate-50 py-24 lg:py-32" id="upload-flow">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 sm:p-10">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-navy-900 mb-2">Kostenlosen Leak-Scan starten</h2>
            <p className="text-slate-600 text-sm">
              Laden Sie ein kleines Test-Set hoch. Bitte keine vollständigen Jahresarchive im Erstcheck.
            </p>
          </div>

          <StepIndicator currentStep={currentStep} totalSteps={3} />

          <form onSubmit={handleSubmit}>
            {/* Step 1: Company Info */}
            {currentStep === 0 && (
              <div className="space-y-5 animate-fade-in">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Vorname" required>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Max" required className={inputClass} />
                  </Field>
                  <Field label="Nachname" required>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Mustermann" required className={inputClass} />
                  </Field>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Geschäftliche E-Mail" required>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="max@unternehmen.de" required className={inputClass} />
                  </Field>
                  <Field label="Unternehmen" required>
                    <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Muster GmbH" required className={inputClass} />
                  </Field>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Website">
                    <input type="url" name="website" value={formData.website} onChange={handleChange} placeholder="https://www.unternehmen.de" className={inputClass} />
                  </Field>
                  <Field label="Rolle/Funktion">
                    <input type="text" name="role" value={formData.role} onChange={handleChange} placeholder="z. B. Einkaufsleiter, GF" className={inputClass} />
                  </Field>
                </div>

                <Field label="Geschätzte Importvorgänge pro Jahr" required hint="Gemeint sind Zoll-/Importvorgänge, nicht einzelne Produkte oder Bestellungen.">
                  <select name="importCount" value={formData.importCount} onChange={handleChange} required className={inputClass}>
                    {importCounts.map((opt) => (
                      <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Geschätztes jährliches Importvolumen" required hint="Eine grobe Schätzung reicht. Das hilft uns einzuschätzen, ob sich ein Leak-Scan wirtschaftlich lohnt.">
                  <select name="importValue" value={formData.importValue} onChange={handleChange} required className={inputClass}>
                    {importValues.map((opt) => (
                      <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </Field>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Hauptherkunftsländer" required hint="z. B. China, Türkei, Vietnam">
                    <input type="text" name="countries" value={formData.countries} onChange={handleChange} placeholder="z. B. China, Türkei" required className={inputClass} />
                  </Field>
                  <Field label="Warengruppen" required hint="z. B. Elektronik, Ersatzteile">
                    <input type="text" name="categories" value={formData.categories} onChange={handleChange} placeholder="z. B. Elektronikzubehör" required className={inputClass} />
                  </Field>
                </div>
              </div>
            )}

            {/* Step 2: File Upload */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h3 className="text-base font-semibold text-navy-900 mb-3">Schritt 2: Testdokumente hochladen</h3>
                  <p className="text-sm text-slate-600 mb-4">Laden Sie 3–10 ausgewählte Importdokumente hoch (PDF, ZIP, CSV oder XLSX).</p>
                </div>

                <FileUploadZone files={formData.files} onFilesSelected={handleFilesSelected} />

                {formData.files.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-slate-700">
                      {formData.files.length} Datei{formData.files.length !== 1 ? 'en' : ''} ausgewählt
                    </p>
                    <div className="space-y-1.5">
                      {formData.files.map((f, i) => (
                        <div key={i} className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                          <div className="flex items-center gap-2 min-w-0">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 text-slate-400">
                              <path d="M8 1v10M3 7l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              <rect x="1" y="12" width="14" height="1.5" rx="0.5" fill="currentColor" opacity="0.3" />
                            </svg>
                            <span className="text-sm text-slate-700 truncate">{f.name}</span>
                          </div>
                          <button type="button" onClick={() => removeFile(i)} className="flex-shrink-0 text-slate-400 hover:text-slate-600 transition-colors">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 3: Consent */}
            {currentStep === 2 && (
              <div className="space-y-4 animate-fade-in">
                <h3 className="text-base font-semibold text-navy-900 mb-4">Schritt 3: Bestätigung</h3>

                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <input
                    type="checkbox"
                    id="consent1"
                    name="consent1"
                    checked={formData.consent1}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 accent-accent cursor-pointer flex-shrink-0"
                  />
                  <label htmlFor="consent1" className="text-sm text-slate-600 leading-relaxed cursor-pointer">
                    Ich bestätige, dass ich berechtigt bin, diese Dokumente hochzuladen.
                  </label>
                </div>

                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <input
                    type="checkbox"
                    id="consent2"
                    name="consent2"
                    checked={formData.consent2}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 accent-accent cursor-pointer flex-shrink-0"
                  />
                  <label htmlFor="consent2" className="text-sm text-slate-600 leading-relaxed cursor-pointer">
                    Ich habe verstanden, dass ZollMetrics eine datenbasierte Voranalyse und <strong>keine Rechts-, Steuer- oder Zollberatung</strong> anbietet.
                  </label>
                </div>

                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <input
                    type="checkbox"
                    id="consent3"
                    name="consent3"
                    checked={formData.consent3}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 accent-accent cursor-pointer flex-shrink-0"
                  />
                  <label htmlFor="consent3" className="text-sm text-slate-600 leading-relaxed cursor-pointer">
                    Ich möchte eine unverbindliche Potenzialeinschätzung erhalten und erkenne die Datenschutzbedingungen an.
                  </label>
                </div>

                <div className="p-4 bg-amber-50 border border-amber-100 rounded-lg">
                  <p className="text-xs text-amber-700 leading-relaxed">
                    <strong>Datenschutz:</strong> Die hochgeladenen Dokumente werden nur für diese Erstprüfung verwendet. Weitere Details zu Speicherung und Löschung besprechen wir vor der Vollanalyse.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between gap-4 mt-10 pt-6 border-t border-slate-100">
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentStep === 0}
                className="px-6 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                Zurück
              </button>

              {currentStep < 2 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="px-7 py-2.5 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent-light disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Weiter
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!canProceed() || loading}
                  className="px-7 py-2.5 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent-light disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {loading ? 'Wird verarbeitet…' : 'Leak-Scan anfragen'}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
