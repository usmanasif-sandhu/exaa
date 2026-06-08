import { Award, GraduationCap, Trophy } from 'lucide-react'
import { featuredResult } from '../data/siteContent'

export default function AcademicResultCard({ variant = 'summary' }) {
  const card = featuredResult
  if (!card) return null

  const isFull = variant === 'full'

  return (
    <article className="exaa-card-shine relative mx-auto w-full max-w-3xl overflow-hidden rounded-3xl border border-accent-200/50 bg-white shadow-[0_24px_56px_-12px_rgba(30,138,122,0.14),0_16px_40px_-8px_rgba(196,180,252,0.1)]">
      <div
        className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-accent-300/15 blur-3xl"
        aria-hidden
      />
      <div className="relative bg-gradient-to-r from-accent-600 via-accent-600 to-accent-500 px-8 py-7 text-white sm:px-10 sm:py-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 ring-4 ring-white/10 backdrop-blur-sm">
              <Trophy className="size-7" aria-hidden />
            </span>
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-accent-100">
                {card.exam}
              </p>
              <p className="mt-1 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Year {card.year}
              </p>
              <p className="mt-1 text-sm text-accent-100/90">{card.board}</p>
            </div>
          </div>
          <div className="rounded-2xl bg-white/15 px-6 py-4 text-center ring-1 ring-white/20 backdrop-blur-sm sm:text-right">
            <p className="font-display text-4xl font-bold tabular-nums leading-none sm:text-5xl">
              {card.passPercentage}
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-accent-100">
              Pass rate
            </p>
          </div>
        </div>
      </div>

      <div className="relative px-8 py-8 sm:px-10 sm:py-10">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex items-center gap-3 rounded-2xl border border-exaa-200/90 bg-exaa-50/60 px-5 py-4">
            <GraduationCap className="size-8 shrink-0 text-accent-600" aria-hidden />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-exaa-500">Board</p>
              <p className="mt-0.5 font-display text-lg font-semibold text-exaa-900">{card.board}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-exaa-200/90 bg-exaa-50/60 px-5 py-4">
            <Award className="size-8 shrink-0 text-accent-600" aria-hidden />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-exaa-500">Position holders</p>
              <p className="mt-0.5 font-display text-lg font-semibold text-exaa-900">{card.positionHolders}</p>
            </div>
          </div>
        </div>

        {card.topAchievers ? (
          <div className="mt-8 border-t border-exaa-200/90 pt-8">
            <p className="font-display text-xl font-semibold text-exaa-900">
              {isFull ? 'Top Achievers' : 'Leading achievers'}
            </p>
            <ul className={`mt-5 ${isFull ? 'grid gap-2 sm:grid-cols-2' : 'space-y-3'}`}>
              {(isFull ? card.topAchievers : card.topAchievers.slice(0, 3)).map((student, i) => (
                <li
                  key={student.name}
                  className="flex items-center justify-between gap-3 rounded-xl border border-exaa-200/80 bg-white px-4 py-3 transition hover:border-accent-300/60 hover:bg-accent-50/30"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-accent-600 text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="truncate font-medium text-exaa-900">{student.name}</span>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-bold tabular-nums ${
                      student.grade === 'A+'
                        ? 'bg-accent-100 text-accent-800'
                        : 'bg-exaa-100 text-exaa-700'
                    }`}
                  >
                    {student.marks} · {student.grade}
                  </span>
                </li>
              ))}
            </ul>
            {!isFull && card.topAchievers.length > 3 ? (
              <p className="mt-4 text-center text-sm text-exaa-600">
                + {card.topAchievers.length - 3} more high achievers
              </p>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  )
}
