import SectionHeading from '../components/SectionHeading'
import { Link } from 'react-router-dom'
import { ArrowRight, BookMarked, GraduationCap, School } from 'lucide-react'
import { programs } from '../data/siteContent'

const levels = [
  {
    title: 'Early years & foundation',
    text: 'Montessori-informed classrooms with sensory work, structured play, and gradual English exposure — aligned with Allied-style early programmes.',
    icon: School,
  },
  {
    title: 'Primary progression',
    text: 'Core subjects taught with activity reinforcement, public speaking drills, and predictable homework rhythms parents can support.',
    icon: BookMarked,
  },
  {
    title: 'Middle & senior preparation',
    text: 'Exam skills, lab routines, and career modules that echo TMUC’s clarity: know your path early, practise the habits to reach it.',
    icon: GraduationCap,
  },
]

export default function Academics() {
  return (
    <>
      <div className="border-b border-exaa-200/80 bg-gradient-to-br from-exaa-100 via-exaa-50 to-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold tracking-tight text-exaa-900 sm:text-5xl">
            Academics
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-exaa-700">
            The Exaa School System is a Montessori-inspired school system that provides a comprehensive education for students from early years to senior preparation.
          </p>
        </div>
      </div>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Levels"
            title="Structured stages, one philosophy"
            subtitle="Edit cohort names and board alignment here when you publish official pathways."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {levels.map((L) => (
              <article
                key={L.title}
                className="rounded-3xl border border-exaa-900/10 bg-exaa-50/60 p-6 shadow-sm transition hover:border-accent-500/40"
              >
                <L.icon className="size-9 text-accent-500" aria-hidden />
                <h2 className="mt-4 font-display text-xl font-bold text-exaa-950">{L.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-exaa-900/75">{L.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-exaa-900/10 bg-exaa-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Program catalogue"
            title="Six strands parents can recognise from your brochure"
            align="center"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {programs.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-exaa-900/10 bg-white p-5 text-sm leading-relaxed text-exaa-900/75"
              >
                <h3 className="font-display text-lg font-semibold text-exaa-950">{p.title}</h3>
                <p className="mt-2">{p.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              to="/admissions"
              className="inline-flex items-center gap-2 rounded-2xl bg-accent-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-accent-500"
            >
              Download prospectus (add PDF later)
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
