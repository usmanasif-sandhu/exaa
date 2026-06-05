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
import AnnouncementBar from '../components/AnnouncementBar'
import HeroImageSlider from '../components/HeroImageSlider'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import TiltSurface from '../components/TiltSurface'
import {
  brand,
  calendarHighlights,
  heroCarouselSlides,
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
      <AnnouncementBar />

      <section className="relative overflow-hidden bg-gradient-to-b from-exaa-100 via-white to-bloom-100/50 exaa-grid-overlay">
        <img
          src={heroImage}
          alt=""
          className="exaa-hero-photo absolute inset-0 h-full w-full object-cover opacity-[0.22]"
          width={2000}
          height={1200}
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-white/[0.93] via-zest-50/[0.45] to-exaa-50/[0.97]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 top-16 size-[28rem] rounded-full bg-accent-300/35 blur-[118px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-28 bottom-0 size-[22rem] rounded-full bg-bloom-200/40 blur-[100px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute left-[40%] top-[55%] size-[14rem] rounded-full bg-zest-200/45 blur-[80px]"
          aria-hidden
        />

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-0 lg:px-8 lg:py-24">
          <div className="order-1 max-w-xl lg:col-span-6">
            <p className="hero-stagger hero-stagger-1 font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.26em] text-accent-700">
              {brand.tagline}
            </p>
            <h1 className="hero-stagger hero-stagger-2 mt-5 font-display text-[2.125rem] font-semibold leading-[1.12] tracking-tight text-exaa-950 sm:text-4xl lg:text-[2.75rem]">
              Through guidance and care, students dream bigger and rise with purpose.
            </h1>
            <p className="hero-stagger hero-stagger-3 mt-6 max-w-md text-base leading-relaxed text-exaa-700">
              A calm, stimulating nationwide school system — from Montessori discovery to
              career-ready skills — with Quranic study and English fluency woven into everyday rhythm.
            </p>
            <div className="hero-stagger hero-stagger-4 mt-10 flex flex-wrap gap-3">
              <Link
                to="/admissions"
                className="group inline-flex items-center gap-2 rounded-lg bg-accent-600 px-5 py-3.5 text-[0.9375rem] font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-accent-500 active:scale-[0.98]"
              >
                Start admission
                <ArrowRight className="size-4 transition duration-300 group-hover:translate-x-0.5" aria-hidden />
              </Link>
              <Link
                to="/campuses"
                className="group inline-flex items-center gap-2 rounded-lg border border-accent-200/80 bg-white/80 px-5 py-3.5 text-[0.9375rem] font-medium text-exaa-800 shadow-sm backdrop-blur-sm transition hover:border-zest-300 hover:bg-zest-50/90 active:scale-[0.98]"
              >
                Find a campus
              </Link>
            </div>
          </div>

          <div className="relative order-2 mt-10 min-h-[22rem] w-full lg:order-2 lg:col-span-6 lg:mt-0">
            <div className="hero-stagger hero-stagger-6 absolute -inset-[1px] rounded-[2px] lg:left-auto lg:right-0 lg:h-full lg:w-[min(100%,28rem)]">
              <span
                className="absolute left-0 top-8 h-28 w-[2px] bg-gradient-to-b from-accent-500/90 to-transparent"
                aria-hidden
              />
              <span
                className="absolute bottom-12 left-0 right-28 h-[2px] bg-gradient-to-r from-accent-400/85 to-transparent"
                aria-hidden
              />
            </div>
            <div className="relative mx-auto h-[min(58vh,28rem)] w-full max-w-md overflow-hidden rounded-xl border border-accent-100/90 bg-white shadow-[0_24px_56px_-12px_rgba(30,138,122,0.14),0_16px_40px_-8px_rgba(196,180,252,0.12)] lg:ml-auto">
              <HeroImageSlider slides={heroCarouselSlides} />
            </div>
          </div>

          <div
            className="hero-stagger hero-stagger-5 order-3 col-span-1 mx-auto mt-12 grid w-full max-w-3xl grid-cols-3 justify-items-center gap-3 border-t border-exaa-200/90 pt-10 text-center sm:gap-6 sm:px-2 lg:order-3 lg:col-span-12 lg:mt-14 lg:max-w-4xl lg:gap-10 lg:justify-self-center lg:pt-12"
          >
            {stats.map((s) => (
              <div key={s.label} className="min-w-0 w-full max-w-[10.5rem] px-1 sm:max-w-[11.5rem]">
                <p className="font-display text-2xl font-semibold tracking-tight text-exaa-900 sm:text-3xl">{s.value}</p>
                <p className="mt-1 text-xs font-medium leading-snug text-exaa-600 sm:text-sm">{s.label}</p>
                <p className="mt-1.5 text-pretty text-[0.6875rem] leading-snug text-exaa-500 sm:text-xs">{s.hint}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-b border-accent-100/70 bg-gradient-to-br from-white via-zest-50/30 to-accent-50/40 py-16 sm:py-24">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Start here"
              title="Everything families need — without noise"
              subtitle="Structured like a national handbook: clear journeys for admissions, learning, and daily life."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((item, i) => {
              const Icon = quickIcon[item.icon]
              return (
                <Reveal key={item.to} delay={i * 70}>
                  <TiltSurface className="h-full rounded-xl" maxTilt={5}>
                    <Link
                      to={item.to}
                      className="group exaa-card-shine flex h-full flex-col rounded-xl border border-exaa-900/10 bg-white p-6 shadow-[0_1px_0_rgba(255,255,255,0.85)_inset] transition duration-500 hover:border-accent-500/25 hover:shadow-[0_20px_40px_rgba(28,26,23,0.06)] hover:-translate-y-0.5"
                    >
                      <span className="exaa-icon-tile size-11 rounded-lg">
                        <Icon className="size-5 text-white" aria-hidden />
                      </span>
                      <h3 className="mt-5 font-display text-lg font-semibold text-exaa-900">{item.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-exaa-700/95">{item.description}</p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-800">
                        Open
                        <ArrowRight
                          className="size-4 text-accent-600 transition duration-300 group-hover:translate-x-0.5"
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

      <section className="relative overflow-hidden bg-gradient-to-b from-exaa-50 via-white to-bloom-50/25 py-16 sm:py-24">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="Learning begins here"
                title="Whole-child programmes, one steady philosophy"
                subtitle="Beyond marks: articulate, considerate young people equipped for whatever comes next."
              />
              <ul className="mt-10 space-y-3">
                {values.map((v, i) => (
                  <Reveal key={v.title} delay={i * 80}>
                    <li className="group rounded-xl border border-exaa-900/[0.08] bg-white/80 px-5 py-4 transition duration-400 hover:border-accent-500/20 hover:bg-white">
                      <p className="font-display text-lg font-semibold text-exaa-900">{v.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-exaa-700">{v.text}</p>
                      <span className="exaa-hover-rule mt-3 block" aria-hidden />
                    </li>
                  </Reveal>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <TiltSurface className="relative" maxTilt={6}>
                <div className="relative overflow-hidden rounded-sm border border-exaa-900/10 shadow-[0_28px_64px_rgba(28,26,23,0.12)]">
                  <img
                    src={secondaryImage}
                    alt="Students collaborating in a bright classroom"
                    className="max-h-[400px] w-full object-cover"
                    width={800}
                    height={600}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-exaa-900/20 to-transparent" aria-hidden />
                </div>
              </TiltSurface>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative border-t border-bloom-100/60 bg-white py-16 sm:py-24">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-200/70 to-transparent" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Our pillars"
              title="What we provide every week"
              subtitle="Six strands you can recognise from enrolment conversations through graduation."
              align="center"
            />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((p, i) => {
              const Icon = programIcon[p.icon]
              return (
                <Reveal key={p.title} delay={i * 60}>
                  <TiltSurface className="h-full rounded-xl" maxTilt={5}>
                    <article className="group exaa-card-shine flex h-full flex-col rounded-xl border border-exaa-900/[0.08] bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-accent-500/[0.2] hover:shadow-md">
                      <span className="exaa-icon-tile-muted size-11">
                        <Icon className="size-[1.375rem]" aria-hidden />
                      </span>
                      <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-exaa-900">{p.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-exaa-700">{p.text}</p>
                      <span className="exaa-hover-rule mt-5" aria-hidden />
                    </article>
                  </TiltSurface>
                </Reveal>
              )
            })}
          </div>
          <Reveal delay={100}>
            <p className="mt-14 text-center font-display text-lg font-medium italic text-exaa-800">
              “Where students perform, they learn to lead.”
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-accent-100/50 bg-gradient-to-b from-accent-50/40 via-white to-zest-50/35 py-16 sm:py-24">
        <div className="pointer-events-none absolute left-1/4 top-full size-[10rem] -translate-y-[58%] rounded-full bg-bloom-200/25 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[22rem] w-[120%] max-w-none -translate-x-1/2 bg-gradient-to-b from-accent-100/55 via-zest-100/35 to-transparent blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Voices"
              title="What families notice early"
              subtitle="Replace placeholders with verified names when you publish live."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name + t.role + i} delay={i * 90}>
                <TiltSurface className="h-full rounded-xl" maxTilt={6}>
                  <figure className="flex h-full flex-col rounded-xl border border-exaa-200/90 bg-white p-6 text-left shadow-sm transition duration-300 hover:border-accent-300/70 hover:shadow-md">
                    <Quote className="size-8 text-accent-500" aria-hidden />
                    <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-exaa-700">
                      “{t.quote}”
                    </blockquote>
                    <figcaption className="mt-6 border-t border-exaa-200/90 pt-4">
                      <p className="font-medium text-exaa-900">{t.name}</p>
                      <p className="text-xs text-accent-700">{t.role}</p>
                    </figcaption>
                  </figure>
                </TiltSurface>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-t border-zest-200/35 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal className="flex-1">
              <SectionHeading
                eyebrow="Calendar"
                title="Upcoming highlights"
                subtitle="Session 2026–27 academic dates and campus events — see the full calendar for every milestone."
              />
            </Reveal>
            <Reveal delay={80}>
              <Link
                to="/calendar"
                className="group inline-flex items-center gap-2 rounded-lg border border-exaa-900/12 bg-exaa-50 px-4 py-2.5 text-sm font-semibold text-exaa-900 transition hover:border-accent-500/30 hover:bg-white"
              >
                Full calendar
                <ArrowRight
                  className="size-4 text-accent-700 transition duration-300 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
            </Reveal>
          </div>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {calendarHighlights.map((e, i) => (
              <Reveal key={e.title} delay={i * 75}>
                <li className="flex gap-4 rounded-xl border border-exaa-200/90 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-accent-300/50 hover:bg-exaa-50">
                  <div className="flex w-[4.75rem] flex-col items-center justify-center rounded-lg border border-accent-500/25 bg-accent-600 py-3 text-center text-white shadow-sm">
                    <span className="font-display text-[1.75rem] font-semibold tabular-nums leading-none">{e.day}</span>
                    <span className="mt-1 font-sans text-[0.5625rem] font-bold uppercase tracking-[0.14em] text-accent-100">
                      {e.month}
                    </span>
                  </div>
                  <div>
                    <p className="font-display text-[1.0625rem] font-semibold text-exaa-900">{e.title}</p>
                    <p className="mt-1 text-sm text-exaa-700">{e.time}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-accent-100/50 bg-gradient-to-b from-white via-exaa-50/60 to-accent-50/25 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <TiltSurface className="overflow-hidden rounded-xl" maxTilt={4}>
              <div className="relative overflow-hidden rounded-xl border border-accent-100/80 bg-gradient-to-br from-white via-bloom-50/50 to-zest-50/40 px-8 py-12 shadow-[0_18px_44px_-14px_rgba(30,138,122,0.1),0_8px_28px_-8px_rgba(196,180,252,0.12)] sm:px-12 sm:py-14">
                <div
                  className="pointer-events-none absolute inset-0 opacity-70 exaa-grid-overlay blur-[2px]"
                  aria-hidden
                />
                <div className="exaa-cta-sheen pointer-events-none absolute inset-0 opacity-60" aria-hidden />
                <div
                  className="pointer-events-none absolute -right-16 top-1/2 size-72 -translate-y-1/2 rounded-full bg-accent-200/50 blur-[80px]"
                  aria-hidden
                />
                <div className="relative max-w-xl">
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent-700">Visit</p>
                  <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-exaa-950 sm:text-[2.125rem]">
                    Ready to walk a campus?
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-exaa-700">
                    Two clear actions: read how admission works — or ring the desk for a timely,
                    human answer.
                  </p>
                  <div className="mt-9 flex flex-wrap gap-3">
                    <Link
                      to="/admissions"
                      className="inline-flex items-center gap-2 rounded-lg bg-accent-600 px-5 py-3 text-[0.9375rem] font-semibold text-white shadow-sm transition hover:bg-accent-500"
                    >
                      Admission guide
                    </Link>
                    <a
                      href={brand.phoneTel}
                      className="inline-flex items-center gap-2 rounded-lg border border-exaa-300/90 bg-white/90 px-5 py-3 text-[0.9375rem] font-medium text-exaa-800 shadow-sm transition hover:border-accent-400 hover:bg-white"
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
