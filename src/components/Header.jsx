import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { brand } from '../data/siteContent'
import logoImg from '../assets/logo.png'

const nav = [
  { to: '/', label: 'Home', end: true },
  { to: '/academics', label: 'Academics' },
  { to: '/admissions', label: 'Admissions' },
  { to: '/campuses', label: 'Campuses' },
  { to: '/student-life', label: 'Student life' },
  { to: '/calendar', label: 'Calendar' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-accent-100/80 bg-white/94 backdrop-blur-xl shadow-[0_10px_40px_-14px_rgba(30,138,122,0.1)]">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 exaa-header-rule opacity-70" aria-hidden />

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="group flex shrink-0 items-center gap-3 py-0.5">
          <img
            src={logoImg}
            alt=""
            width={156}
            height={40}
            className="h-9 w-auto max-h-9 max-w-[11rem] object-contain object-left"
          />
          <span className="leading-tight">
            <span className="block font-display text-[0.9375rem] font-semibold tracking-tight text-exaa-900 sm:text-base">
              {brand.name}
            </span>
            <span className="hidden text-[0.6875rem] font-medium tracking-wide text-exaa-500 sm:block">
              {brand.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                [
                  'relative rounded-md px-3 py-2 text-sm font-medium transition-colors duration-300',
                  isActive ? 'text-accent-700' : 'text-exaa-600 hover:text-exaa-900',
                ].join(' ')
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span
                    className={`absolute bottom-1 left-3 right-3 h-[1px] origin-center rounded-full bg-accent-500 transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0'}`}
                    aria-hidden
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <a
            href={brand.phoneTel}
            className="inline-flex items-center gap-2 rounded-lg border border-exaa-200 bg-exaa-50 px-3 py-2 text-sm font-medium text-exaa-800 transition hover:border-accent-300 hover:bg-accent-50 active:scale-[0.98]"
          >
            <Phone className="size-4 text-accent-600" aria-hidden />
            <span className="hidden md:inline">{brand.phone}</span>
          </a>
          <Link
            to="/admissions"
            className="inline-flex items-center justify-center rounded-lg bg-accent-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-500 active:scale-[0.98]"
          >
            Apply now
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex rounded-lg border border-exaa-200 bg-exaa-50 p-2 text-exaa-800 backdrop-blur lg:hidden"
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
          className="border-t border-exaa-200 bg-white px-4 py-4 shadow-sm backdrop-blur-xl lg:hidden"
        >
          <nav className="flex flex-col gap-0.5" aria-label="Mobile primary">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  [
                    'rounded-lg px-4 py-3 text-base font-medium transition',
                    isActive ? 'bg-accent-50 text-accent-800' : 'text-exaa-700 hover:bg-exaa-50 hover:text-exaa-900',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2 border-t border-exaa-200 pt-4">
            <a
              href={brand.phoneTel}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-exaa-200 bg-exaa-50 px-4 py-3 text-sm font-semibold text-exaa-800"
            >
              <Phone className="size-4 text-accent-600" aria-hidden />
              {brand.phone}
            </a>
            <Link
              to="/admissions"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-lg bg-accent-600 px-4 py-3 text-sm font-semibold text-white shadow-sm"
            >
              Apply now
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}
