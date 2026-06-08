export default function SectionHeading({ eyebrow, title, subtitle, align = 'left' }) {
  const wrap =
    align === 'center'
      ? 'mx-auto max-w-2xl text-center'
      : 'max-w-3xl'

  const eyebrowClass =
    'bg-gradient-to-r from-accent-700 via-bloom-400 to-accent-700 bg-clip-text font-sans text-xs font-semibold uppercase tracking-[0.22em] text-transparent'

  const titleClass =
    'mt-3 font-display text-3xl font-semibold tracking-tight text-exaa-900 sm:text-4xl'

  const subtitleClass = 'mt-3 text-base leading-relaxed text-exaa-700/90'

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
