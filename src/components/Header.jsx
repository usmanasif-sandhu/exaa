import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { brand } from '../data/siteContent'

const nav = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/academics', label: 'Academics' },
  { to: '/admissions', label: 'Admissions' },
  { to: '/campuses', label: 'Campuses' },
  { to: '/student-life', label: 'Student life' },
  { to: '/contact', label: 'Contact' },
]

const linkClass = ({ isActive }) =>
  [
    'rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300',
    isActive
      ? 'bg-gradient-to-r from-cyan-500/25 to-violet-500/25 text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.25)] ring-1 ring-cyan-400/40'
      : 'text-slate-300 hover:bg-white/5 hover:text-white hover:shadow-[0_0_20px_rgba(167,139,250,0.15)]',
  ].join(' ')

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 shadow-[0_8px_40px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 exaa-header-glow" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(6,182,212,0.06)_0%,transparent_45%)]" aria-hidden />
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="group flex shrink-0 items-center gap-2.5">
          <span
            className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-cyan-500 via-violet-600 to-amber-400 font-display text-lg font-bold text-white shadow-lg shadow-cyan-500/30 ring-2 ring-white/10 transition duration-500 group-hover:scale-[1.06] group-hover:shadow-cyan-400/40 group-hover:rotate-[-3deg]"
            aria-hidden
          >
            <span className="absolute inset-0 bg-[conic-gradient(from_180deg,transparent,rgba(255,255,255,0.35),transparent)] opacity-0 transition duration-500 group-hover:opacity-100" />
            E
          </span>
          <span className="leading-tight">
            <span className="block bg-gradient-to-r from-white to-slate-300 bg-clip-text font-display text-sm font-bold text-transparent sm:text-base">
              {brand.name}
            </span>
            <span className="hidden bg-gradient-to-r from-cyan-300/90 to-violet-300/80 bg-clip-text text-xs font-medium text-transparent sm:block">
              {brand.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <a
            href={brand.phoneTel}
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm font-semibold text-white shadow-inner shadow-cyan-500/10 backdrop-blur transition hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-[0_0_24px_rgba(34,211,238,0.2)] active:scale-[0.98]"
          >
            <Phone className="size-4 text-cyan-400" aria-hidden />
            <span className="hidden md:inline">{brand.phone}</span>
          </a>
          <Link
            to="/admissions"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-violet-500/35 transition hover:-translate-y-0.5 hover:brightness-110 hover:shadow-cyan-400/30 active:scale-[0.98]"
          >
            Apply now
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex rounded-xl border border-white/15 bg-white/5 p-2 text-white backdrop-blur lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-white/10 bg-slate-950/95 px-4 py-4 shadow-inner shadow-cyan-500/5 backdrop-blur-2xl lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile primary">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  [
                    'rounded-xl px-4 py-3 text-base font-semibold transition',
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/30 to-violet-600/30 text-white ring-1 ring-cyan-400/40'
                      : 'text-slate-200 hover:bg-white/5 hover:text-white',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-4">
            <a
              href={brand.phoneTel}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-bold text-white"
            >
              <Phone className="size-4 text-cyan-400" aria-hidden />
              {brand.phone}
            </a>
            <Link
              to="/admissions"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 px-4 py-3 text-sm font-bold text-white shadow-lg"
            >
              Apply now
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}
