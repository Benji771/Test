import { Link } from 'react-router-dom'

export default function LegalPageLayout({ title, children }) {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-light transition-colors mb-8">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Zurück zur Startseite
        </Link>
        <h1 className="text-4xl font-semibold text-navy-900 mb-12">{title}</h1>
        <div className="prose prose-sm max-w-none text-slate-600 space-y-6">
          {children}
        </div>
      </div>
    </div>
  )
}
