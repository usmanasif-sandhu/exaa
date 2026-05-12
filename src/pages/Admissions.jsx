import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import { Link } from 'react-router-dom'
import { CheckCircle2, FileDown, Phone } from 'lucide-react'
import { admissionSteps, brand } from '../data/siteContent'

const faqs = [
  {
    q: 'What documents should we bring?',
    a: 'Birth certificate, guardian CNIC copies, previous school leaving certificate if any, and passport photos. Adjust per campus policy.',
  },
  {
    q: 'Do you offer transport?',
    a: 'Some campuses run vans — confirm routes and charges directly with the branch manager.',
  },
  {
    q: 'How does fee payment work?',
    a: 'Typically term-wise with published due dates. Replace this copy with your official schedule.',
  },
]

export default function Admissions() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <>
      <div className="border-b border-exaa-900/10 bg-exaa-900 py-14 text-white sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Admissions</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-exaa-100/85">
            Single admissions hub in the style of PGC / Allied — process, criteria, and next action in
            one scan. No account system needed; swap forms for real PDFs or WhatsApp deep links later.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={brand.phoneTel}
              className="inline-flex items-center gap-2 rounded-2xl bg-accent-500 px-5 py-3 text-sm font-bold text-exaa-950"
            >
              <Phone className="size-4" aria-hidden />
              Speak to admissions
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15"
              onClick={(e) => e.preventDefault()}
            >
              <FileDown className="size-4" aria-hidden />
              Student form (link your PDF)
            </a>
          </div>
        </div>
      </div>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Three steps"
            title="From first call to enrolled learner"
            subtitle="mirrors the transparent timelines parents expect from national chains."
          />
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {admissionSteps.map((s) => (
              <li
                key={s.step}
                className="relative rounded-3xl border border-exaa-900/10 bg-exaa-50/80 p-6 pt-10 shadow-sm"
              >
                <span className="absolute left-6 top-0 -translate-y-1/2 rounded-full bg-accent-500 px-3 py-1 font-display text-sm font-bold text-exaa-950">
                  Step {s.step}
                </span>
                <h2 className="font-display text-xl font-bold text-exaa-950">{s.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-exaa-900/75">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-exaa-900/10 bg-exaa-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Offers"
              title="Discount and campaigns"
              subtitle="One announcement surface — avoid repeating the same strip up and down the homepage."
            />
            <div className="mt-8 rounded-3xl border border-accent-500/40 bg-white p-6 shadow-md">
              <p className="font-display text-3xl font-bold text-exaa-950">Up to 40% off</p>
              <p className="mt-2 text-sm font-semibold text-accent-700">
                With complimentary admission — verify eligibility at campus.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-exaa-900/70">
                Add start/end dates, branch exclusions, and sibling rules here. Static front-end only:
                keep legal copy approved by management before go-live.
              </p>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="FAQs"
              title="Questions parents ask before they visit"
            />
            <div className="mt-8 space-y-2">
              {faqs.map((f, i) => {
                const open = openFaq === i
                return (
                  <div key={f.q} className="rounded-2xl border border-exaa-900/10 bg-white">
                    <button
                      type="button"
                      className="flex w-full items-center gap-3 px-4 py-4 text-left text-sm font-semibold text-exaa-950"
                      aria-expanded={open}
                      onClick={() => setOpenFaq(open ? -1 : i)}
                    >
                      <CheckCircle2
                        className={`size-5 shrink-0 ${open ? 'text-accent-500' : 'text-exaa-900/25'}`}
                        aria-hidden
                      />
                      {f.q}
                    </button>
                    {open ? (
                      <p className="border-t border-exaa-900/10 px-4 pb-4 pt-2 text-sm leading-relaxed text-exaa-900/75">
                        {f.a}
                      </p>
                    ) : null}
                  </div>
                )
              })}
            </div>
            <Link
              to="/campuses"
              className="mt-8 inline-block text-sm font-bold text-exaa-900 underline underline-offset-4 hover:text-accent-600"
            >
              See campus contacts →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
