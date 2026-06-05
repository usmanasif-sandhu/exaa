import SectionHeading from '../components/SectionHeading'
import { campuses, brand, phoneTelHref } from '../data/siteContent'
import { Mail, MapPin, Navigation, Phone } from 'lucide-react'

function mapsHref(campus) {
  if (campus.mapLink) return campus.mapLink
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(campus.address)}`
}

export default function Campuses() {
  return (
    <>
      <div className="border-b border-exaa-900/10 bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold tracking-tight text-exaa-900 sm:text-5xl">
            Campuses
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-exaa-900/70">
            Find the Exaa school nearest to you — call, email, or open directions for any branch.
          </p>
        </div>
      </div>

      <section className="bg-exaa-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Network"
            title="Find the Exaa school nearest to you"
            subtitle="Ten campuses across the region. Use the direct line or campus email for the fastest reply."
          />
          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {campuses.map((c) => (
              <li
                key={c.slug}
                className="flex flex-col rounded-3xl border border-exaa-900/10 bg-white p-6 shadow-sm transition hover:border-accent-200/60 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="font-display text-lg font-bold leading-snug text-exaa-950 sm:text-xl">
                      {c.name ?? `${c.city} · ${c.area}`}
                    </p>
                    {c.name ? (
                      <p className="mt-1 text-sm font-medium text-exaa-500">
                        {c.city}
                        {c.area ? ` · ${c.area}` : ''}
                      </p>
                    ) : null}
                    <p className="mt-3 flex gap-2 text-sm leading-relaxed text-exaa-900/75">
                      <MapPin className="mt-0.5 size-4 shrink-0 text-accent-500" aria-hidden />
                      {c.address}
                    </p>
                    {c.email ? (
                      <p className="mt-2 flex gap-2 text-sm leading-relaxed text-exaa-900/75">
                        <Mail className="mt-0.5 size-4 shrink-0 text-accent-500" aria-hidden />
                        <a href={c.emailHref} className="break-all hover:text-accent-700 hover:underline">
                          {c.email}
                        </a>
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-3 border-t border-exaa-900/10 pt-5">
                  <a
                    href={c.phoneTel}
                    className="inline-flex items-center gap-2 rounded-xl bg-accent-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-accent-500"
                  >
                    <Phone className="size-3.5" aria-hidden />
                    {c.phone}
                  </a>
                  {c.phoneAlt ? (
                    <a
                      href={c.phoneAltTel}
                      className="inline-flex items-center gap-2 rounded-xl border border-exaa-900/15 px-4 py-2 text-xs font-bold text-exaa-900 hover:border-exaa-900/30"
                    >
                      <Phone className="size-3.5" aria-hidden />
                      {c.phoneAlt}
                    </a>
                  ) : null}
                  <a
                    href={mapsHref(c)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-exaa-900/15 px-4 py-2 text-xs font-bold text-exaa-900 hover:border-exaa-900/30"
                  >
                    <Navigation className="size-3.5" aria-hidden />
                    Maps
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-exaa-200/80 bg-exaa-100/80 py-12 text-center text-exaa-800">
        <p className="text-sm">
          Head office helpline:{' '}
          <a href={brand.phoneTel} className="font-semibold text-accent-700 hover:underline">
            {brand.phone}
          </a>
          {' · '}
          Shadman campus:{' '}
          <a href={phoneTelHref('03319993209')} className="font-semibold text-accent-700 hover:underline">
            0331-9993209
          </a>
        </p>
      </section>
    </>
  )
}
