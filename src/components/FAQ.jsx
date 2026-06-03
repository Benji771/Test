import { useState } from 'react'

const faqs = [
  {
    question: 'Verdient ZollMetrics schon am Erstcheck?',
    answer:
      'Nein. Der Erstcheck mit ausgewählten Beispieldokumenten ist kostenlos. Eine Vergütung wird erst in einem Folgeprojekt vereinbart und nur auf tatsächlich realisierte Rückerstattungen oder Gutschriften berechnet.',
  },
  {
    question: 'Ist ZollMetrics ein Zollberater?',
    answer:
      'Nein. ZollMetrics bietet eine datenbasierte Voranalyse und keine Rechts-, Steuer- oder Zollberatung. Finale Bewertungen erfolgen durch den Kunden, dessen Zollberater, Spediteur oder einen spezialisierten Partner.',
  },
  {
    question: 'Müssen wir vor dem Upload einen Demo-Call buchen?',
    answer:
      'Nein. Der Erstcheck ist bewusst schlank aufgebaut. Sie geben kurz Kontext an und laden ein kleines Test-Set hoch.',
  },
  {
    question: 'Welche Dokumente eignen sich?',
    answer:
      'Zollbescheide, Handelsrechnungen, Packlisten, Spediteursabrechnungen und vorhandene Produkt- oder Tarifdaten.',
  },
  {
    question: 'Was passiert, wenn keine Auffälligkeiten gefunden werden?',
    answer:
      'Dann zahlen Sie nichts. Sie erhalten eine kurze Rückmeldung, dass sich auf Basis der bereitgestellten Testdokumente kein offensichtliches Potenzial gezeigt hat.',
  },
]

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors text-left"
      >
        <h3 className="font-medium text-slate-900 pr-8">{item.question}</h3>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className={`flex-shrink-0 text-accent transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        >
          <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
          <p className="text-slate-600 leading-relaxed text-sm">{item.answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-white py-24 lg:py-32" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="section-label">Häufig gefragt</span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-navy-900 mt-3 leading-tight">
            Fragen und Antworten
          </h2>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            Die wichtigsten Informationen zum Import-Duty-Leak-Scan auf einen Blick.
          </p>
        </div>

        <div className="space-y-3 max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} item={faq} isOpen={openIndex === index} onToggle={() => setOpenIndex(openIndex === index ? -1 : index)} />
          ))}
        </div>

        {/* Trust disclaimer */}
        <div className="mt-16 max-w-2xl mx-auto p-6 bg-slate-50 border border-slate-100 rounded-xl text-center">
          <p className="text-sm text-slate-600 leading-relaxed">
            <strong className="text-slate-700">Keine Rückerstattungsgarantie.</strong> Keine Zollberatung.{' '}
            <strong className="text-slate-700">Erstcheck kostenlos.</strong>
          </p>
        </div>
      </div>
    </section>
  )
}
