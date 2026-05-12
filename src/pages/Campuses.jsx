import SectionHeading from '../components/SectionHeading'
import { campuses, brand } from '../data/siteContent'
import { MapPin, Navigation, Phone } from 'lucide-react'

export default function Campuses() {
  return (
    <>
      <div className="border-b border-exaa-900/10 bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold tracking-tight text-exaa-950 sm:text-5xl">
            Campuses
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-exaa-900/70">
            Branch-first structure like Allied’s locator and TMUC’s multi-city contact pages — each card
            is a miniature “campus home” until you add maps API or embedded Google Maps iframes.
          </p>
        </div>
      </div>

      <section className="bg-exaa-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Network"
            title="Find the Exaa school nearest to you"
            subtitle="Replace placeholder cities with your official list. Phone numbers can differ per branch in siteContent.js."
          />
          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {campuses.map((c) => (
              <li
                key={c.slug}
                className="flex flex-col rounded-3xl border border-exaa-900/10 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-display text-xl font-bold text-exaa-950">
                      {c.city}
                      <span className="font-normal text-exaa-900/60"> · {c.area}</span>
                    </p>
                    <p className="mt-3 flex gap-2 text-sm leading-relaxed text-exaa-900/75">
                      <MapPin className="mt-0.5 size-4 shrink-0 text-accent-500" aria-hidden />
                      {c.address}
                    </p>
                  </div>
                  <span className="rounded-xl bg-exaa-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-exaa-800">
                    {c.slug.replace(/-/g, ' ')}
                  </span>
                </div>
                <div className="mt-6 flex flex-wrap gap-3 border-t border-exaa-900/10 pt-5">
                  <a
                    href={brand.phoneTel}
                    className="inline-flex items-center gap-2 rounded-xl bg-exaa-900 px-4 py-2 text-xs font-bold text-white hover:bg-exaa-800"
                  >
                    <Phone className="size-3.5" aria-hidden />
                    {c.phone}
                  </a>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.address)}`}
                    target="_blank"
                    rel="noreferrer"
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

      <section className="border-t border-exaa-900/10 bg-exaa-900 py-12 text-center text-exaa-100">
        <p className="text-sm">
          Head office helpline mirroring national chains:{' '}
          <a href={brand.phoneTel} className="font-bold text-accent-400 hover:underline">
            {brand.phone}
          </a>
        </p>
      </section>
    </>
  )
}
