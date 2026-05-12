import { Link } from 'react-router-dom'
import {
  Activity,
  ArrowRight,
  BookOpen,
  ClipboardList,
  Compass,
  MapPin,
  MessageCircle,
  Palette,
  Quote,
  Shapes,
  Sparkles,
  Target,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import TiltSurface from '../components/TiltSurface'
import {
  brand,
  events,
  heroImage,
  programs,
  quickLinks,
  secondaryImage,
  stats,
  testimonials,
  values,
} from '../data/siteContent'

const quickIcon = {
  compass: Compass,
  clipboard: ClipboardList,
  book: BookOpen,
  map: MapPin,
}

const programIcon = {
  shapes: Shapes,
  sparkles: Sparkles,
  activity: Activity,
  target: Target,
  message: MessageCircle,
  palette: Palette,
}

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-950 px-4 py-3 text-center text-sm font-medium text-slate-200 sm:text-base">
        <div
          className="pointer-events-none absolute inset-0 opacity-40 exaa-animate-shimmer bg-[linear-gradient(110deg,transparent_0%,rgba(34,211,238,0.15)_45%,rgba(167,139,250,0.25)_50%,rgba(251,191,36,0.12)_55%,transparent_100%)] bg-[length:220%_100%]"
          aria-hidden
        />
        <p className="relative">
          <span className="font-bold text-cyan-300 drop-shadow-[0_0_12px_rgba(34,211,238,0.5)]">
            Admissions open
          </span>
          <span className="mx-2 text-slate-500" aria-hidden>
            ·
          </span>
          Session {new Date().getFullYear()}–{new Date().getFullYear() + 1}: speak to your nearest
          campus or{' '}
          <Link
            to="/admissions"
            className="font-semibold text-white underline decoration-cyan-400/80 underline-offset-4 transition hover:text-cyan-200"
          >
            view the process
          </Link>
          .
        </p>
      </div>

      <section className="relative overflow-hidden bg-slate-950">
        <img
          src={heroImage}
          alt=""
          className="exaa-hero-ken absolute inset-0 h-full w-full object-cover opacity-[0.38]"
          width={2000}
          height={1200}
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/90 to-slate-900/95"
          aria-hidden
        />
        <div
          className="exaa-animate-float pointer-events-none absolute -left-32 top-1/4 size-[22rem] rounded-full bg-cyan-500/25 blur-3xl"
          aria-hidden
        />
        <div
          className="exaa-animate-float-slow pointer-events-none absolute -right-40 bottom-0 size-[28rem] rounded-full bg-violet-600/30 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute left-1/2 top-0 size-[min(90vw,40rem)] -translate-x-1/2 rounded-full bg-amber-400/15 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,rgba(34,211,238,0.18),transparent_55%)]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="max-w-2xl [perspective:1200px]">
            <p className="hero-stagger hero-stagger-1 font-display text-xs font-bold uppercase tracking-[0.28em] text-cyan-300">
              {brand.tagline}
            </p>
            <h1 className="hero-stagger hero-stagger-2 exaa-text-hero mt-4 font-display text-4xl font-extrabold leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl">
              Through guidance and inspiration, students dream bigger and achieve more.
            </h1>
            <p className="hero-stagger hero-stagger-3 mt-6 max-w-xl text-lg leading-relaxed text-slate-300/95">
              A nurturing, stimulating nationwide school system — from Montessori activity-based
              learning to career-ready skills, with Quranic education and English fluency at the
              centre of daily life.
            </p>
            <div className="hero-stagger hero-stagger-4 mt-10 flex flex-wrap gap-3">
              <Link
                to="/admissions"
                className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 px-5 py-3.5 text-base font-bold text-white shadow-[0_0_40px_rgba(34,211,238,0.35),0_12px_40px_rgba(139,92,246,0.25)] transition hover:-translate-y-1 hover:brightness-110 active:scale-[0.97]"
              >
                Start admission
                <ArrowRight className="size-5 transition group-hover:translate-x-1" aria-hidden />
              </Link>
              <Link
                to="/campuses"
                className="group inline-flex items-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-5 py-3.5 text-base font-semibold text-white shadow-inner shadow-cyan-500/10 backdrop-blur-xl transition hover:border-cyan-400/50 hover:bg-white/15 hover:shadow-[0_0_28px_rgba(34,211,238,0.2)] active:scale-[0.97]"
              >
                Find a campus
              </Link>
            </div>
            <div className="hero-stagger hero-stagger-5 mt-12 grid gap-4 sm:grid-cols-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-cyan-400/20 bg-white/[0.06] p-4 shadow-[0_0_32px_rgba(6,182,212,0.12)] backdrop-blur-xl transition duration-300 hover:border-violet-400/35 hover:bg-white/[0.1] hover:shadow-[0_0_40px_rgba(139,92,246,0.2)]"
                >
                  <p className="font-display text-2xl font-bold text-white">{s.value}</p>
                  <p className="mt-1 text-sm font-medium text-slate-200">{s.label}</p>
                  <p className="mt-2 text-xs text-slate-500">{s.hint}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-b border-slate-200/80 bg-white/80 py-16 shadow-inner shadow-cyan-500/5 backdrop-blur-sm sm:py-24">
        <div
          className="pointer-events-none absolute left-1/4 top-0 size-72 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Start here"
              title="Everything families need, one click away"
              subtitle="Inspired by leading national school portals — structured like Allied’s parent corner and Roots’ clear qualification paths — without the clutter."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((item, i) => {
              const Icon = quickIcon[item.icon]
              return (
                <Reveal key={item.to} delay={i * 70}>
                  <TiltSurface className="exaa-aurora-frame h-full rounded-3xl" maxTilt={9}>
                    <Link
                      to={item.to}
                      className="card-shine exaa-aurora-inner group flex h-full flex-col bg-gradient-to-br from-white via-slate-50 to-cyan-50/40 p-6 shadow-xl transition duration-300 hover:shadow-[0_20px_50px_rgba(6,182,212,0.12)]"
                    >
                      <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 via-violet-600 to-amber-400 text-white shadow-lg shadow-cyan-500/30 ring-1 ring-white/20 transition duration-300 group-hover:scale-110 group-hover:rotate-6">
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <h3 className="mt-4 font-display text-lg font-bold text-slate-900">{item.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                        {item.description}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-sm font-bold text-transparent">
                        Open
                        <ArrowRight
                          className="size-4 text-cyan-600 transition duration-300 group-hover:translate-x-1"
                          aria-hidden
                        />
                      </span>
                    </Link>
                  </TiltSurface>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-violet-50/30 py-16 sm:py-24">
        <div
          className="pointer-events-none absolute right-0 top-0 size-[min(100vw,32rem)] translate-x-1/3 -translate-y-1/3 rounded-full bg-violet-400/15 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 size-80 rounded-full bg-cyan-300/10 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <SectionHeading
                eyebrow="Learning begins with us"
                title="Programs built for whole-child growth"
                subtitle="At Exaa, excellence goes beyond marks: confident, creative, compassionate young people ready to shape the future."
              />
              <ul className="mt-8 space-y-4">
                {values.map((v, i) => (
                  <Reveal key={v.title} delay={i * 80}>
                    <li className="rounded-2xl border border-slate-200/90 bg-white/90 p-5 shadow-md shadow-violet-500/5 backdrop-blur-sm transition hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10">
                      <p className="font-display text-lg font-semibold text-slate-900">{v.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{v.text}</p>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <TiltSurface className="relative rounded-[2rem]" maxTilt={6}>
                <div
                  className="exaa-animate-float absolute -right-4 -top-4 size-40 rounded-full bg-gradient-to-br from-cyan-400/40 to-violet-500/30 blur-2xl"
                  aria-hidden
                />
                <div
                  className="absolute inset-2 -z-10 rounded-[2rem] bg-gradient-to-br from-cyan-500/25 via-violet-500/20 to-amber-400/20 blur-2xl"
                  aria-hidden
                />
                <img
                  src={secondaryImage}
                  alt="Students collaborating in a bright classroom"
                  className="relative z-[1] max-h-[420px] w-full rounded-[2rem] object-cover shadow-2xl ring-2 ring-white/80 transition duration-500 hover:ring-cyan-400/50"
                  width={800}
                  height={600}
                />
              </TiltSurface>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative bg-white py-16 sm:py-24">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Our pillars"
              title="What we provide every day"
              subtitle="Six aligned strands — from faith-informed study to expressive arts — that mirror your public promise to parents."
              align="center"
            />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((p, i) => {
              const Icon = programIcon[p.icon]
              return (
                <Reveal key={p.title} delay={i * 60}>
                  <TiltSurface className="exaa-aurora-frame h-full rounded-3xl" maxTilt={8}>
                    <article className="card-shine exaa-aurora-inner group flex h-full flex-col bg-gradient-to-b from-white via-slate-50/90 to-cyan-50/30 p-6 shadow-lg transition duration-300 hover:shadow-[0_24px_48px_rgba(139,92,246,0.12)]">
                      <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 via-violet-900 to-cyan-800 text-cyan-300 shadow-lg ring-1 ring-white/10 transition duration-300 group-hover:scale-110">
                        <Icon className="size-6" aria-hidden />
                      </span>
                      <h3 className="mt-4 font-display text-xl font-bold text-slate-900">{p.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{p.text}</p>
                      <span
                        className="mt-4 h-1 w-0 rounded-full bg-gradient-to-r from-cyan-500 via-violet-500 to-amber-400 transition-all duration-500 group-hover:w-14"
                        aria-hidden
                      />
                    </article>
                  </TiltSurface>
                </Reveal>
              )
            })}
          </div>
          <Reveal delay={100}>
            <p className="mt-12 text-center font-display text-lg font-semibold italic text-transparent bg-gradient-to-r from-violet-700 via-cyan-600 to-amber-600 bg-clip-text">
              “Where students perform, they learn to lead.”
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/10 bg-slate-950 py-16 sm:py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_0%,rgba(34,211,238,0.12),transparent_50%),radial-gradient(ellipse_80%_50%_at_100%_100%,rgba(139,92,246,0.15),transparent_50%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Voices"
              title="What families notice first"
              subtitle="Swap these with real parent names and cities when you publish."
              align="center"
              tone="dark"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 90}>
                <TiltSurface className="h-full rounded-3xl" maxTilt={7}>
                  <figure className="flex h-full flex-col rounded-3xl border border-cyan-500/20 bg-white/[0.05] p-6 text-left shadow-[0_0_40px_rgba(34,211,238,0.08)] backdrop-blur-xl transition duration-300 hover:border-violet-400/40 hover:shadow-[0_0_48px_rgba(139,92,246,0.2)]">
                    <Quote className="size-8 text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.5)]" aria-hidden />
                    <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-200/95">
                      “{t.quote}”
                    </blockquote>
                    <figcaption className="mt-6 border-t border-white/10 pt-4">
                      <p className="font-semibold text-white">{t.name}</p>
                      <p className="text-xs text-cyan-200/60">{t.role}</p>
                    </figcaption>
                  </figure>
                </TiltSurface>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-b from-slate-50 to-cyan-50/20 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal className="flex-1">
              <SectionHeading
                eyebrow="Calendar"
                title="Upcoming highlights"
                subtitle="Publish term dates and inter-campus events like Roots and TMUC — static data for now, easy to swap later."
              />
            </Reveal>
            <Reveal delay={80}>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-xl border border-slate-300/80 bg-white px-4 py-2.5 text-sm font-bold text-slate-900 shadow-md transition hover:border-cyan-400/60 hover:shadow-[0_0_24px_rgba(34,211,238,0.2)]"
              >
                Sync with your campus
                <ArrowRight
                  className="size-4 text-cyan-600 transition group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            </Reveal>
          </div>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {events.map((e, i) => (
              <Reveal key={e.title} delay={i * 75}>
                <li className="flex gap-4 rounded-3xl border border-slate-200/90 bg-white p-5 shadow-lg shadow-violet-500/5 transition hover:-translate-y-1 hover:border-cyan-300/60 hover:shadow-cyan-500/15">
                  <div className="flex w-16 flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 via-violet-600 to-slate-900 text-center text-white shadow-lg">
                    <span className="font-display text-2xl font-bold leading-none">{e.day}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-200">
                      {e.month}
                    </span>
                  </div>
                  <div>
                    <p className="font-display text-base font-bold text-slate-900">{e.title}</p>
                    <p className="mt-1 text-sm text-slate-600">{e.time}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-slate-100 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <TiltSurface className="exaa-aurora-frame rounded-[2rem]" maxTilt={5}>
              <div className="exaa-aurora-inner relative overflow-hidden rounded-[calc(2rem-2px)] bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 px-8 py-12 sm:px-12 sm:py-16">
                <div
                  className="exaa-animate-float pointer-events-none absolute -right-24 top-1/2 size-96 -translate-y-1/2 rounded-full bg-cyan-500/25 blur-3xl"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,transparent_38%,rgba(255,255,255,0.06)_50%,transparent_62%)] bg-[length:200%_100%] exaa-animate-shimmer"
                  aria-hidden
                />
                <div className="relative max-w-2xl">
                  <h2 className="bg-gradient-to-r from-white via-cyan-100 to-violet-200 bg-clip-text font-display text-3xl font-bold tracking-tight text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.25)] sm:text-4xl">
                    Ready to visit a campus?
                  </h2>
                  <p className="mt-4 text-lg text-slate-300/90">
                    TMUC-style clarity: one primary action for applicants, one for questions. No
                    pop-ups — just a fast path to your team.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      to="/admissions"
                      className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 px-5 py-3 text-base font-bold text-white shadow-lg shadow-violet-500/30 transition hover:-translate-y-0.5 hover:brightness-110 active:scale-[0.98]"
                    >
                      Admission guide
                    </Link>
                    <a
                      href={brand.phoneTel}
                      className="inline-flex items-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-5 py-3 text-base font-semibold text-white backdrop-blur transition hover:bg-white/15 hover:shadow-[0_0_24px_rgba(34,211,238,0.2)] active:scale-[0.98]"
                    >
                      Call {brand.phone}
                    </a>
                  </div>
                </div>
              </div>
            </TiltSurface>
          </Reveal>
        </div>
      </section>
    </>
  )
}
