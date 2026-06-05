import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import PoliceMouCard from '../components/PoliceMouCard'
import Reveal from '../components/Reveal'
import { academicCalendar, eventsCalendar } from '../data/siteContent'
import { BookOpen, CalendarDays, PartyPopper } from 'lucide-react'

const tabs = [
  { id: 'academic', label: 'Academic calendar', session: 'Session 2026–27', icon: BookOpen },
  { id: 'events', label: 'Events calendar', session: 'Session 2026', icon: PartyPopper },
]

function CalendarGrid({ items, emptyLabel }) {
  if (!items.length) {
    return <p className="text-sm text-exaa-600">{emptyLabel}</p>
  }

  return (
    <ol className="grid gap-3 sm:grid-cols-2">
      {items.map((item, i) => (
        <Reveal key={`${item.no}-${item.title}`} delay={Math.min(i * 35, 280)}>
          <li className="flex h-full gap-4 rounded-2xl border border-exaa-200/80 bg-white p-4 shadow-sm transition hover:border-accent-200/70 hover:shadow-md sm:p-5">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent-50 font-display text-sm font-bold text-accent-800">
              {item.no}
            </span>
            <div className="min-w-0">
              <p className="font-display text-[0.95rem] font-semibold leading-snug text-exaa-900 sm:text-base">
                {item.title}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-exaa-600">{item.when}</p>
            </div>
          </li>
        </Reveal>
      ))}
    </ol>
  )
}

export default function Calendar() {
  const [active, setActive] = useState('academic')
  const current = tabs.find((t) => t.id === active) ?? tabs[0]
  const items = active === 'academic' ? academicCalendar : eventsCalendar

  return (
    <>
      <div className="border-b border-exaa-200/80 bg-gradient-to-br from-accent-50/50 via-white to-exaa-50 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent-700">
            <CalendarDays className="size-4" aria-hidden />
            School calendar
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-exaa-900 sm:text-5xl">
            Academic &amp; events schedule
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-exaa-700">
            Official term dates, examinations, PTMs, and campus events for Session 2026–27 — published
            for families and staff.
          </p>
        </div>
      </div>

      <section className="bg-exaa-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div
            className="flex flex-wrap gap-2 rounded-2xl border border-exaa-200/80 bg-white p-1.5 shadow-sm"
            role="tablist"
            aria-label="Calendar type"
          >
            {tabs.map((tab) => {
              const Icon = tab.icon
              const selected = active === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(tab.id)}
                  className={[
                    'inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition sm:flex-none sm:px-6',
                    selected
                      ? 'bg-accent-600 text-white shadow-sm'
                      : 'text-exaa-700 hover:bg-exaa-50 hover:text-exaa-900',
                  ].join(' ')}
                >
                  <Icon className="size-4" aria-hidden />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>

          <Reveal className="mt-10">
            <SectionHeading
              eyebrow={current.session}
              title={current.label}
              subtitle={
                active === 'academic'
                  ? 'Term structure, assessments, holidays, and parent–teacher meetings.'
                  : 'Cultural programmes, competitions, assemblies, and special observances.'
              }
            />
          </Reveal>

          <div className="mt-10" role="tabpanel">
            <CalendarGrid items={items} emptyLabel="No calendar entries yet." />
          </div>

          <p className="mt-8 text-center text-xs text-exaa-500">
            Dates follow the official Exaa calendar. Confirm with your campus office if local timings differ.
          </p>
        </div>
      </section>

      <section className="border-t border-exaa-200/70 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Community trust"
              title="Partnership with Punjab Police"
              subtitle="Our formal MOU with Punjab Police, Gujrat reflects a shared duty of care for every student."
              align="center"
            />
          </Reveal>
          <Reveal delay={80} className="mt-10">
            <PoliceMouCard />
          </Reveal>
        </div>
      </section>
    </>
  )
}
