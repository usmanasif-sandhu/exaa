import SectionHeading from '../components/SectionHeading'
import { Mic, Palette, Shield, Trophy, Users2 } from 'lucide-react'
import { studentLifeBlocks } from '../data/siteContent'

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
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Student life</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-exaa-700">
            The Exaa School System is a Montessori-inspired school system that provides a comprehensive education for students from early years to senior preparation.
          </p>
        </div>
      </section>
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Beyond the timetable"
            title='Nurturing talents “beyond the book”'
            subtitle="Your public site already promises performance opportunities — this page expands that story with structured promises parents can compare."
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
    </>
  )
}
