export default function LegalPageLayout({ title, children }) {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <h1 className="text-4xl font-semibold text-navy-900 mb-12">{title}</h1>
        <div className="prose prose-sm max-w-none text-slate-600 space-y-6">
          {children}
        </div>
      </div>
    </div>
  )
}
