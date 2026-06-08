import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { CheckCircle2, Mic, Palette, Shield, Trophy, Users2 } from 'lucide-react'
import { coCurricularActivities, schoolProfile, studentLeadership, studentLifeBlocks } from '../data/siteContent'

const icons = {
  mic: Mic,
  trophy: Trophy,
  users: Users2,
  shield: Shield,
  palette: Palette,
}

export default function StudentLife() {
  return (
    <>
      <section className="border-b border-exaa-200/80 bg-gradient-to-r from-exaa-100 via-exaa-50 to-white py-14 text-exaa-900 sm:py-16">
        <div className="exaa-container">
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Student life</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-exaa-700">
            {schoolProfile.levels} with vibrant societies, annual student elections, and opportunities beyond the classroom.
          </p>
        </div>
      </section>
      <section className="bg-white py-16 sm:py-20">
        <div className="exaa-container">
          <SectionHeading
            eyebrow="Beyond the timetable"
            title='Nurturing talents “beyond the book”'
            subtitle="Structured societies, competitions, and leadership programmes that build confidence and character."
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {studentLifeBlocks.map((b) => {
              const Icon = icons[b.icon]
              return (
                <article
                  key={b.title}
                  className="group overflow-hidden rounded-3xl border border-exaa-900/10 bg-exaa-50/60 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="relative aspect-[16/11] overflow-hidden bg-exaa-200/35">
                    <img
                      src={b.image}
                      alt={b.imageAlt}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      width={960}
                      height={660}
                      loading="lazy"
                      decoding="async"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-exaa-950/25 via-transparent to-transparent"
                      aria-hidden
                    />
                  </div>
                  <div className="p-6">
                    <Icon className="size-8 text-accent-500" aria-hidden />
                    <h2 className="mt-4 font-display text-lg font-bold text-exaa-950">{b.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-exaa-900/75">{b.text}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-exaa-900/10 bg-exaa-50 py-16 sm:py-20">
        <div className="exaa-container">
          <Reveal>
            <SectionHeading
              eyebrow="Co-curricular"
              title="Student societies & activities"
              subtitle="A rich calendar of societies, competitions, and campus events."
              align="center"
            />
          </Reveal>
          <Reveal delay={80} className="mt-10">
            <div className="rounded-3xl border border-exaa-900/10 bg-white p-6 shadow-sm sm:p-8">
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {coCurricularActivities.map((activity) => (
                  <li key={activity} className="flex gap-2 text-sm leading-relaxed text-exaa-900/75">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent-500" aria-hidden />
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-exaa-900/10 bg-white py-16 sm:py-20">
        <div className="exaa-container">
          <Reveal>
            <SectionHeading
              eyebrow="Leadership"
              title={studentLeadership.title}
              subtitle={studentLeadership.description}
            />
          </Reveal>
        </div>
      </section>
    </>
  )
}
