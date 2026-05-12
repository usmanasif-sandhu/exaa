import SectionHeading from '../components/SectionHeading'
import { Mic, Palette, Shield, Trophy, Users2 } from 'lucide-react'

const blocks = [
  {
    title: 'Performing arts & oratory',
    text: 'Inter-campus Naat, Qirat, Urdu and English debates, and drama — confidence on stage translates to leadership in class.',
    icon: Mic,
  },
  {
    title: 'Athletics & self-defence',
    text: 'Structured PE, inter-house fixtures, and martial-arts style discipline supervised by trained staff.',
    icon: Trophy,
  },
  {
    title: 'Service & houses',
    text: 'House systems and service projects build collaboration — similar cadence to Roots’ societies without extra login friction.',
    icon: Users2,
  },
  {
    title: 'Safe climate',
    text: 'Published anti-bullying norms, visitor protocols, and staff supervision ratios appropriate to age bands.',
    icon: Shield,
  },
  {
    title: 'Creative studios',
    text: 'Art, craft, and display weeks let younger learners narrate learning through colour and construction.',
    icon: Palette,
  },
]

export default function StudentLife() {
  return (
    <>
      <div className="border-b border-exaa-900/10 bg-gradient-to-r from-exaa-800 to-exaa-900 py-14 text-white sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Student life</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-exaa-100/85">
            Holistic pages like TMUC’s “Life at” hubs — highlights beyond transcripts so prospective
            families sense the rhythm of your week.
          </p>
        </div>
      </div>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Beyond the timetable"
            title='Nurturing talents “beyond the book”'
            subtitle="Your public site already promises performance opportunities — this page expands that story with structured promises parents can compare."
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blocks.map((b) => (
              <article
                key={b.title}
                className="rounded-3xl border border-exaa-900/10 bg-exaa-50/60 p-6 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <b.icon className="size-8 text-accent-500" aria-hidden />
                <h2 className="mt-4 font-display text-lg font-bold text-exaa-950">{b.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-exaa-900/75">{b.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
