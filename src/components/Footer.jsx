import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { brand, footerColumns, hours } from '../data/siteContent'

export default function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden border-t border-white/10 bg-slate-950 text-slate-200">
      <div className="pointer-events-none absolute inset-x-0 top-0 exaa-header-glow" aria-hidden />
      <div
        className="pointer-events-none absolute -left-1/4 top-0 size-[28rem] rounded-full bg-cyan-500/10 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-1/4 bottom-0 size-[24rem] rounded-full bg-violet-600/15 blur-[90px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-violet-600 to-amber-400 font-display text-lg font-bold text-white shadow-lg shadow-cyan-500/30">
                E
              </span>
              <div>
                <p className="bg-gradient-to-r from-white to-slate-300 bg-clip-text font-display text-lg font-bold text-transparent">
                  {brand.name}
                </p>
                <p className="text-sm text-cyan-200/70">{brand.tagline}</p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Where students perform, they learn to lead. Knowledge, kindness, and courage — the
              footprints we nurture in every classroom.
            </p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <p className="font-display text-sm font-semibold uppercase tracking-wider text-cyan-400">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-slate-400 transition hover:text-cyan-300 hover:underline"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-4">
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-violet-300">
              Contact & hours
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-2">
                <Phone className="mt-0.5 size-4 shrink-0 text-cyan-400" aria-hidden />
                <a href={brand.phoneTel} className="text-slate-200 hover:text-cyan-300 hover:underline">
                  {brand.phone}
                </a>
              </li>
              <li className="flex gap-2">
                <Mail className="mt-0.5 size-4 shrink-0 text-violet-400" aria-hidden />
                <a href={brand.emailHref} className="break-all text-slate-200 hover:text-violet-300 hover:underline">
                  {brand.email}
                </a>
              </li>
              <li className="flex gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-amber-400" aria-hidden />
                <span className="text-slate-400">Multiple campuses — see Campuses for locations.</span>
              </li>
            </ul>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm shadow-inner shadow-cyan-500/5 backdrop-blur-sm">
              <p className="font-semibold text-white">Working hours</p>
              <ul className="mt-2 space-y-1 text-slate-400">
                {hours.map((h) => (
                  <li key={h.label} className="flex justify-between gap-4">
                    <span>{h.label}</span>
                    <span className="text-right text-slate-200">{h.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <p className="text-slate-600">Front-end demo — replace with your hosting & analytics.</p>
        </div>
      </div>
    </footer>
  )
}
