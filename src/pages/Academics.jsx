import AcademicResultCard from '../components/AcademicResultCard'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { BookMarked, CheckCircle2, GraduationCap, School, Sparkles } from 'lucide-react'
import { academicResults, hifzProgram, programs, schoolProfile } from '../data/siteContent'

const levels = [
  {
    title: 'Montessori & early years',
    text: 'Activity-based Montessori classrooms with sensory work, structured play, and gradual English exposure — the foundation of our BISE Gujranwala pathway.',
    icon: School,
  },
  {
    title: 'Primary progression',
    text: 'Core subjects taught with activity reinforcement, public speaking drills, and predictable homework rhythms parents can support.',
    icon: BookMarked,
  },
  {
    title: 'Middle & Matric',
    text: 'Board-aligned exam preparation through Matric under BISE Gujranwala, with career modules and strong academic results.',
    icon: GraduationCap,
  },
]

export default function Academics() {
  return (
    <>
      <div className="border-b border-exaa-200/80 bg-gradient-to-br from-exaa-100 via-exaa-50 to-white py-14 sm:py-16">
        <div className="exaa-container">
          <h1 className="font-display text-4xl font-semibold tracking-tight text-exaa-900 sm:text-5xl">
            Academics
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-exaa-700">
            {schoolProfile.intro}
          </p>
        </div>
      </div>

      <section className="bg-white py-16 sm:py-20">
        <div className="exaa-container">
          <SectionHeading
            eyebrow="Levels"
            title="Montessori to Matric — one philosophy"
            subtitle="Structured stages from early years through BISE Gujranwala board examinations."
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
        <div className="exaa-container">
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
        </div>
      </section>

      <section className="border-t border-exaa-900/10 bg-white py-16 sm:py-20">
        <div className="exaa-container">
          <SectionHeading
            eyebrow="Islamic education"
            title={hifzProgram.title}
            subtitle={hifzProgram.description}
          />
          <div className="mt-10 rounded-3xl border border-exaa-900/10 bg-exaa-50/60 p-6 shadow-sm sm:p-8">
            <Sparkles className="size-9 text-accent-500" aria-hidden />
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {hifzProgram.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm leading-relaxed text-exaa-900/75">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent-500" aria-hidden />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-exaa-900/10 bg-exaa-50 py-16 sm:py-20">
        <div className="exaa-container">
          <Reveal>
            <SectionHeading
              eyebrow={academicResults.intro.eyebrow}
              title={academicResults.intro.title}
              subtitle={academicResults.intro.subtitle}
              align="center"
            />
          </Reveal>
          <Reveal delay={80} className="mt-12 flex justify-center">
            <AcademicResultCard variant="full" />
          </Reveal>

        </div>
      </section>
    </>
  )
}
