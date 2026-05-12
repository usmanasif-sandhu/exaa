import SectionHeading from '../components/SectionHeading'
import { Link } from 'react-router-dom'
import { ArrowRight, Award, Heart, Lightbulb, Users } from 'lucide-react'
import { secondaryImage } from '../data/siteContent'

const milestones = [
  {
    year: 'Founding',
    title: 'A national vision',
    text: 'Exaa grows as a coordinated school system with shared values and campus-level care.',
  },
  {
    year: 'Today',
    title: 'Whole-child model',
    text: 'Montessori roots, Quranic essentials, English fluency, and career-aware guidance in one journey.',
  },
  {
    year: 'Ahead',
    title: 'Future-ready learners',
    text: 'Expanding branches while keeping class climate intimate and disciplined.',
  },
]

export default function About() {
  return (
    <>
      <div className="border-b border-exaa-900/10 bg-exaa-900 py-14 text-white sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-accent-400">
            About Exaa
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Knowledge, kindness, courage — the footprints we nurture nationwide.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-exaa-100/85">
            Built with the same institutional depth you see on leading Pakistani education portals —
            clear story, leadership voice, and transparent family journeys — tailored for The Exaa
            Schools.
          </p>
          <Link
            to="/admissions"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-accent-500 px-5 py-3 text-sm font-bold text-exaa-950"
          >
            Plan your visit
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <img
            src={secondaryImage}
            alt="Students and mentor in discussion"
            className="h-80 w-full rounded-3xl object-cover shadow-xl ring-1 ring-exaa-900/10 lg:h-[420px]"
            width={800}
            height={600}
          />
          <div>
            <SectionHeading
              eyebrow="Chairperson / principal message"
              title="A school is only as strong as its culture"
              subtitle="Use this block for your signed leadership message. The layout mirrors Roots’ ‘Directors Desk’ and large-system authority pages — swap copy in siteContent.js when you centralise text."
            />
            <ul className="mt-8 space-y-4 text-sm leading-relaxed text-exaa-900/75">
              <li className="flex gap-3">
                <Lightbulb className="mt-0.5 size-5 shrink-0 text-accent-500" aria-hidden />
                Technology and tradition both serve learning — neither replaces compassionate teaching.
              </li>
              <li className="flex gap-3">
                <Users className="mt-0.5 size-5 shrink-0 text-accent-500" aria-hidden />
                Parents, teachers, and learners are co-stakeholders; routines stay predictable and fair.
              </li>
              <li className="flex gap-3">
                <Heart className="mt-0.5 size-5 shrink-0 text-accent-500" aria-hidden />
                Character is not an extra period — it is lived in assemblies, sports, and classroom manners.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-exaa-900/10 bg-exaa-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Journey" title="From first classroom to confident graduate" align="center" />
          <ol className="mt-14 grid gap-8 md:grid-cols-3">
            {milestones.map((m) => (
              <li key={m.year} className="rounded-3xl border border-exaa-900/10 bg-white p-6 shadow-sm">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-accent-600">
                  {m.year}
                </span>
                <p className="mt-2 font-display text-xl font-bold text-exaa-950">{m.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-exaa-900/70">{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-exaa-900 py-16 text-exaa-100 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Standards"
            title="What “Exaa quality” means in daily practice"
            subtitle="Borrowing the QA language families expect from large systems — without burying them in dense PDF walls."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Supervised routines',
                text: 'Arrival, prayer, lessons, and dismissal follow published timings per campus.',
                icon: Award,
              },
              {
                title: 'Continuous training',
                text: 'Pedagogy refreshers keep Montessori and activity strands sharp and consistent.',
                icon: Users,
              },
              {
                title: 'Safe stimulation',
                text: 'Equipment, visits, and events run with trained staff and clear parent communication.',
                icon: Heart,
              },
            ].map((c) => (
              <div key={c.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <c.icon className="size-8 text-accent-400" aria-hidden />
                <h3 className="mt-4 font-display text-lg font-bold text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-exaa-100/75">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
