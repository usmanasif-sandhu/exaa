export default function SectionHeading({ eyebrow, title, subtitle, align = 'left', tone = 'light' }) {
  const wrap =
    align === 'center'
      ? 'mx-auto max-w-2xl text-center'
      : 'max-w-3xl'

  const eyebrowClass =
    tone === 'dark'
      ? 'bg-gradient-to-r from-cyan-300 via-violet-300 to-amber-200 bg-clip-text font-display text-xs font-bold uppercase tracking-[0.2em] text-transparent'
      : 'bg-gradient-to-r from-cyan-600 via-violet-600 to-amber-500 bg-clip-text font-display text-xs font-bold uppercase tracking-[0.2em] text-transparent'

  const titleClass =
    tone === 'dark'
      ? 'mt-3 bg-gradient-to-br from-white via-cyan-100 to-violet-200 bg-clip-text font-display text-3xl font-bold tracking-tight text-transparent drop-shadow-[0_0_32px_rgba(34,211,238,0.35)] sm:text-4xl'
      : 'exaa-text-aurora mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl'

  const subtitleClass =
    tone === 'dark' ? 'mt-3 text-base leading-relaxed text-slate-300/90' : 'mt-3 text-base leading-relaxed text-exaa-900/70'

  return (
    <div className={wrap}>
      {eyebrow ? (
        <div className={align === 'center' ? 'flex flex-col items-center' : ''}>
          <p className={eyebrowClass}>{eyebrow}</p>
          <span
            className={`exaa-eyebrow-line mt-2 block ${align === 'center' ? 'origin-center mx-auto' : 'origin-left'}`}
            aria-hidden
          />
        </div>
      ) : null}
      <h2 className={titleClass}>{title}</h2>
      {subtitle ? <p className={subtitleClass}>{subtitle}</p> : null}
    </div>
  )
}
