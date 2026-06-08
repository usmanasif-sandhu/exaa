import { useState } from 'react'
import AdmissionPolicyAccordion from '../components/AdmissionPolicyAccordion'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { Link } from 'react-router-dom'
import { CheckCircle2, Phone } from 'lucide-react'
import { admissionSteps, brand, policeWelfare, scholarships } from '../data/siteContent'

const faqs = [
  {
    q: 'What documents should we bring?',
    a: 'Birth certificate, guardian CNIC copies, previous school leaving certificate if any, and passport photos. Adjust per campus policy.',
  },
  {
    q: 'Do you offer scholarships or fee concessions?',
    a: 'Yes. Merit-based scholarships and fee concessions are available for deserving and high-achieving students. Police welfare concessions also apply for eligible families — contact your campus for details.',
  },
  {
    q: 'Do you offer transport?',
    a: 'Some campuses run vans — confirm routes and charges directly with the branch manager.',
  },
  {
    q: 'How does fee payment work?',
    a: 'Typically term-wise with published due dates. Scholarships and concessions are applied after verification of eligibility.',
  },
]

export default function Admissions() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <>
      <div className="border-b border-exaa-200/80 bg-gradient-to-br from-exaa-100 via-exaa-50 to-white py-14 sm:py-16">
        <div className="exaa-container">
          <h1 className="font-display text-4xl font-semibold tracking-tight text-exaa-900 sm:text-5xl">Admissions</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-exaa-700">
            Plan your visit to the Exaa school nearest to you. Merit scholarships and fee concessions are available for deserving students.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={brand.phoneTel}
              className="inline-flex items-center gap-2 rounded-xl bg-accent-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-accent-500"
            >
              <Phone className="size-4" aria-hidden />
              Speak to admissions
            </a>
           
          </div>
        </div>
      </div>

      <section className="bg-white py-16 sm:py-20">
        <div className="exaa-container">
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

      <section className="border-t border-exaa-900/10 bg-white py-16 sm:py-20">
        <div className="exaa-container">
          <Reveal>
            <SectionHeading
              eyebrow="Admission policy"
              title="Levels, age range, criteria & journey"
              subtitle="Standard registration guidelines for families applying to The Exaa School System."
              align="center"
            />
          </Reveal>
          <Reveal delay={80} className="mt-10">
            <AdmissionPolicyAccordion />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-exaa-900/10 bg-exaa-50 py-16 sm:py-20">
        <div className="exaa-container grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Student support"
              title={scholarships.title}
              subtitle="Financial assistance for talented and deserving learners."
            />
            <div className="mt-8 space-y-6">
              <div className="rounded-3xl border border-accent-200/90 bg-white p-6 shadow-md">
                <p className="font-display text-xl font-bold text-exaa-900">Merit-based scholarships</p>
                <p className="mt-4 text-sm leading-relaxed text-exaa-900/70">{scholarships.description}</p>
              </div>
              <Reveal>
                <div className="rounded-3xl border border-exaa-900/10 bg-white p-6 shadow-sm">
                  <p className="font-display text-xl font-bold text-exaa-900">{policeWelfare.title}</p>
                  <p className="mt-2 text-sm text-exaa-700">{policeWelfare.intro}</p>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-exaa-900/70">
                    {policeWelfare.benefits.map((benefit) => (
                      <li key={benefit} className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent-500" aria-hidden />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
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
