import { ExternalLink, FileText, Shield } from 'lucide-react'
import { policeMou } from '../data/siteContent'

export default function PoliceMouCard({ className = '' }) {
  return (
    <article
      className={[
        'relative overflow-hidden rounded-[1.5rem] border border-accent-200/50 bg-gradient-to-br from-white via-accent-50/40 to-bloom-50/30 p-6 shadow-[0_20px_50px_-28px_rgba(30,138,122,0.18)] sm:p-8',
        className,
      ].join(' ')}
    >
      <div
        className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-accent-300/20 blur-3xl"
        aria-hidden
      />
      <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex gap-4">
          <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-2xl bg-accent-600 text-white shadow-md ring-4 ring-accent-500/15">
            <Shield className="size-7" aria-hidden />
          </span>
          <div className="min-w-0">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-accent-700">
              Official partnership
            </p>
            <h3 className="mt-1 font-display text-xl font-semibold tracking-tight text-exaa-900 sm:text-2xl">
              {policeMou.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-exaa-600">{policeMou.partner}</p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-exaa-700">{policeMou.summary}</p>
            <p className="mt-2 text-sm text-exaa-600">{policeMou.subtitle}</p>
          </div>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:items-end">
          <a
            href={policeMou.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-500"
          >
            <FileText className="size-4" aria-hidden />
            View MOU (PDF)
            <ExternalLink className="size-3.5 opacity-80" aria-hidden />
          </a>
          <p className="text-center text-[0.6875rem] text-exaa-500 sm:text-right">
            Hosted on punjabpolice.gov.pk
          </p>
        </div>
      </div>
    </article>
  )
}
