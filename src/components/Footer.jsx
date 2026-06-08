import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { brand, footerColumns } from '../data/siteContent'
import logoImg from '../assets/logo.png'

export default function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden border-t border-bloom-200/55 bg-gradient-to-b from-accent-50/40 via-white/90 to-zest-50/30 text-exaa-700">
      <div className="pointer-events-none absolute inset-x-0 top-0 exaa-header-rule opacity-60" aria-hidden />
      <div
        className="pointer-events-none absolute -left-1/4 top-0 size-[26rem] rounded-full bg-accent-200/30 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-1/4 bottom-0 size-[22rem] rounded-full bg-bloom-200/[0.42] blur-[90px]"
        aria-hidden
      />
      <div className="relative exaa-container py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="flex items-start gap-3">
              <img
                src={logoImg}
                alt=""
                width={140}
                height={36}
                className="h-8 w-auto max-h-8 max-w-[10rem] shrink-0 object-contain object-left"
              />
              <div>
                <p className="font-display text-lg font-semibold tracking-tight text-exaa-900">{brand.name}</p>
                <p className="text-sm text-exaa-600">{brand.tagline}</p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-exaa-600">
              Where students perform, they learn to lead — knowledge, kindness, and courage in every
              classroom.
            </p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-accent-700">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-exaa-600 transition hover:text-accent-700 hover:underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-4">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-accent-700">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-2">
                <Phone className="mt-0.5 size-4 shrink-0 text-accent-600" aria-hidden />
                <a href={brand.phoneTel} className="text-exaa-800 hover:text-accent-800 hover:underline">
                  {brand.phone}
                </a>
              </li>
              <li className="flex gap-2">
                <Mail className="mt-0.5 size-4 shrink-0 text-exaa-500" aria-hidden />
                <a href={brand.emailHref} className="break-all text-exaa-800 hover:text-accent-800 hover:underline">
                  {brand.email}
                </a>
              </li>
              <li className="flex gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-exaa-500" aria-hidden />
                <span className="text-exaa-600">
                  Shadman Colony, Gujrat ·{' '}
                  <a
                    href="https://maps.app.goo.gl/7G9pXRyk1Tu7ZybV7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-700 hover:underline"
                  >
                    Directions
                  </a>
                  {' · '}
                  <a href="tel:+923319993209" className="text-exaa-800 hover:text-accent-800 hover:underline">
                    0331-9993209
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-exaa-200/80 pt-8 text-xs text-exaa-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <p className="text-exaa-400">Powered By DevTorque</p>
        </div>
      </div>
    </footer>
  )
}
