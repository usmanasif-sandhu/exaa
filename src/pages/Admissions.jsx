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
      <div className="border-b border-exaa-200/80 bg-gradient-to-br from-exaa-100 via-exaa-50 to-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold tracking-tight text-exaa-900 sm:text-5xl">Admissions</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-exaa-700">
            Plan your visit to the Exaa school nearest to you.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={brand.phoneTel}
              className="inline-flex items-center gap-2 rounded-xl bg-accent-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-accent-500"
            >
              <Phone className="size-4" aria-hidden />
              Speak to admissions
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl border border-exaa-300/90 bg-white px-5 py-3 text-sm font-semibold text-exaa-800 shadow-sm hover:border-accent-400"
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
                <span className="absolute left-6 top-0 -translate-y-1/2 rounded-full bg-accent-600 px-3 py-1 font-display text-sm font-semibold text-white shadow-sm">
                  Step {s.step}
                </span>
                <h2 className="font-display text-xl font-bold text-exaa-900">{s.title}</h2>
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
            <div className="mt-8 rounded-3xl border border-accent-200/90 bg-white p-6 shadow-md">
              <p className="font-display text-3xl font-bold text-exaa-900">Up to 40% off</p>
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
