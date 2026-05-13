import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { announcementSlides } from '../data/siteContent'

const ROTATE_MS = 6500

function formatLine(template) {
  const y = new Date().getFullYear()
  return template.replace('{session}', `Session ${y}–${y + 1}`)
}

function reducedMotionPreferred() {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false
}

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0)
  const [reduceMotion, setReduceMotion] = useState(() =>
    typeof window !== 'undefined' ? reducedMotionPreferred() : false,
  )
  const [hoverPause, setHoverPause] = useState(false)

  const autoAdvance = !reduceMotion && !hoverPause

  useEffect(() => {
    if (!autoAdvance || announcementSlides.length <= 1) return undefined
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % announcementSlides.length)
    }, ROTATE_MS)
    return () => window.clearInterval(id)
  }, [autoAdvance])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setReduceMotion(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  const slide = announcementSlides[index] ?? announcementSlides[0]

  return (
    <div
      className={[
        'relative z-[41] isolate overflow-hidden',
        'border-b border-accent-200/50 bg-gradient-to-b from-white via-zest-100/80 to-accent-50/95',
        'shadow-[inset_0_1px_0_rgba(255,255,255,0.98),0_10px_44px_-12px_rgba(30,138,122,0.22),0_22px_56px_-14px_rgba(196,180,252,0.16),0_4px_16px_-4px_rgba(234,179,8,0.1)]',
        'ring-1 ring-accent-300/35',
        'after:pointer-events-none after:absolute after:inset-x-[10%] after:-bottom-[1px] after:h-px after:bg-gradient-to-r after:from-transparent after:via-bloom-400/55 after:to-transparent',
      ].join(' ')}
      onMouseEnter={() => setHoverPause(true)}
      onMouseLeave={() => setHoverPause(false)}
      role="region"
      aria-label="Announcements"
    >
      <div
        className="pointer-events-none absolute -left-[18%] top-1/2 h-[200%] w-[50%] -translate-y-1/2 rounded-full bg-zest-300/[0.13] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-[12%] top-1/2 h-[160%] w-[42%] -translate-y-1/2 rounded-full bg-bloom-300/[0.14] blur-[2.5rem]"
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-2.5 pb-3 sm:gap-1.5 sm:px-6 sm:py-3 sm:pb-3.5">
        <p
          key={slide?.id ?? index}
          aria-live={reduceMotion ? 'off' : 'polite'}
          className="exaa-announce-slide max-w-[min(100%,52rem)] text-center text-sm leading-snug text-exaa-800 sm:text-[0.9375rem] sm:leading-normal"
        >
          <span className="font-semibold tracking-tight text-accent-800">{slide.emphasis}</span>
          <span className="mx-1.5 inline text-exaa-400 select-none sm:mx-2" aria-hidden>
            ·
          </span>
          <span className="text-exaa-700">
            {formatLine(slide.line)}
            <Link
              to={slide.link.to}
              className="font-medium text-accent-700 underline decoration-accent-400/85 underline-offset-[5px] transition hover:text-accent-800 hover:decoration-accent-600"
            >
              {slide.link.label}
            </Link>
            {slide.suffix}
          </span>
        </p>

        {announcementSlides.length > 1 ? (
          <div className="flex gap-1.5" aria-label="Announcement pages">
            {announcementSlides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                aria-label={`Announcement ${i + 1}: ${s.emphasis}`}
                aria-current={i === index ? 'true' : undefined}
                className={[
                  'h-1.5 min-h-1.5 rounded-full transition-[width,transform,background] duration-300',
                  i === index ? 'w-6 bg-accent-600' : 'w-1.5 bg-accent-400/50 hover:bg-accent-500/75',
                ].join(' ')}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}
