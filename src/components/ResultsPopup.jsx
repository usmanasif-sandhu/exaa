import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import { resultsPopup } from '../data/siteContent'

function reducedMotionPreferred() {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false
}

export default function ResultsPopup() {
  const [open, setOpen] = useState(false)

  const dismiss = useCallback(() => {
    setOpen(false)
    sessionStorage.setItem(resultsPopup.storageKey, '1')
  }, [])

  useEffect(() => {
    if (sessionStorage.getItem(resultsPopup.storageKey) === '1') return undefined

    const delay = reducedMotionPreferred() ? 0 : 500
    const id = window.setTimeout(() => setOpen(true), delay)
    return () => window.clearTimeout(id)
  }, [])

  useEffect(() => {
    if (!open) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event) => {
      if (event.key === 'Escape') dismiss()
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, dismiss])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Academic results announcement"
    >
      <button
        type="button"
        className="exaa-popup-backdrop absolute inset-0 bg-exaa-950/70 backdrop-blur-[2px]"
        aria-label="Close announcement"
        onClick={dismiss}
      />

      <div className="exaa-popup-panel relative z-10 w-full max-w-[min(100%,28rem)] sm:max-w-md md:max-w-lg">
        <button
          type="button"
          className="absolute -right-2 -top-2 z-20 inline-flex size-9 items-center justify-center rounded-full  bg-exaa-900 text-white shadow-lg transition hover:bg-exaa-800 sm:-right-3 sm:-top-3 sm:size-8"
          aria-label="Close"
          onClick={dismiss}
        >
          <X className="size-5" aria-hidden />
        </button>

        <Link
          to={resultsPopup.linkTo}
          className="block overflow-hidden rounded-l  bg-white shadow-[0_28px_64px_rgba(15,23,42,0.35)] transition hover:shadow-[0_32px_72px_rgba(15,23,42,0.4)]"
          onClick={dismiss}
        >
          <img
            src={resultsPopup.image}
            alt={resultsPopup.imageAlt}
            className="h-auto w-full object-contain"
            width={640}
            height={900}
            loading="eager"
            decoding="async"
          />
        </Link>
      </div>
    </div>
  )
}
