import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import { brand, campuses, hours } from '../data/siteContent'
import { Mail, MapPin, Phone, Send } from 'lucide-react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <div className="border-b border-exaa-900/10 bg-white py-14 sm:py-16">
        <div className="exaa-container">
          <h1 className="font-display text-4xl font-semibold tracking-tight text-exaa-900 sm:text-5xl">
            Contact
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-exaa-900/70">
            Front-end only: this form demonstrates UX. Wire it to WhatsApp, Formspree, or your CRM
            when you connect services.
          </p>
        </div>
      </div>

      <section className="bg-exaa-50 py-16 sm:py-20">
        <div className="exaa-container grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow="Direct lines"
              title="Reach the team"
              subtitle="Publish escalation paths once — admissions vs accounts vs transport — to match enterprise college sites."
            />
            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex gap-3 rounded-2xl border border-exaa-900/10 bg-white p-4">
                <Phone className="mt-0.5 size-5 text-accent-500" aria-hidden />
                <div>
                  <p className="font-semibold text-exaa-950">Phone</p>
                  <a href={brand.phoneTel} className="text-exaa-900/75 hover:underline">
                    {brand.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-3 rounded-2xl border border-exaa-900/10 bg-white p-4">
                <Mail className="mt-0.5 size-5 text-accent-500" aria-hidden />
                <div>
                  <p className="font-semibold text-exaa-950">Email</p>
                  <a href={brand.emailHref} className="break-all text-exaa-900/75 hover:underline">
                    {brand.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-3 rounded-2xl border border-exaa-900/10 bg-white p-4">
                <MapPin className="mt-0.5 size-5 text-accent-500" aria-hidden />
                <div>
                  <p className="font-semibold text-exaa-950">Campuses</p>
                  <p className="text-exaa-900/75">See the Campuses page for every branch address.</p>
                </div>
              </li>
            </ul>

            <div className="mt-8 rounded-2xl border border-exaa-200/90 bg-white p-5 text-sm shadow-sm">
              <p className="font-display font-semibold text-exaa-900">Office hours</p>
              <ul className="mt-3 space-y-2">
                {hours.map((h) => (
                  <li key={h.label} className="flex justify-between gap-4">
                    <span className="text-exaa-600">{h.label}</span>
                    <span className="font-medium text-exaa-800">{h.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-exaa-900/10 bg-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="font-display text-xl font-bold text-exaa-950">Send a message</h2>
              <p className="mt-1 text-sm text-exaa-900/65">
                All fields are optional except a note — demo validation only.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium text-exaa-900">
                  Full name
                  <input
                    name="name"
                    className="mt-1 w-full rounded-xl border border-exaa-900/15 bg-exaa-50/50 px-3 py-2.5 text-exaa-950 outline-none ring-accent-500/40 focus:ring-2"
                    autoComplete="name"
                  />
                </label>
                <label className="block text-sm font-medium text-exaa-900">
                  Email
                  <input
                    name="email"
                    type="email"
                    className="mt-1 w-full rounded-xl border border-exaa-900/15 bg-exaa-50/50 px-3 py-2.5 text-exaa-950 outline-none ring-accent-500/40 focus:ring-2"
                    autoComplete="email"
                  />
                </label>
                <label className="block text-sm font-medium text-exaa-900 sm:col-span-2">
                  Campus interest
                  <select
                    name="campus"
                    className="mt-1 w-full rounded-xl border border-exaa-900/15 bg-exaa-50/50 px-3 py-2.5 text-exaa-950 outline-none ring-accent-500/40 focus:ring-2"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a campus
                    </option>
                    {campuses.map((c) => (
                      <option key={c.slug} value={c.slug}>
                        {c.name ?? `${c.city} · ${c.area}`}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block text-sm font-medium text-exaa-900 sm:col-span-2">
                  Message
                  <textarea
                    name="message"
                    rows={4}
                    className="mt-1 w-full rounded-xl border border-exaa-900/15 bg-exaa-50/50 px-3 py-2.5 text-exaa-950 outline-none ring-accent-500/40 focus:ring-2"
                    placeholder="Tell us your child’s grade and how we can help."
                  />
                </label>
              </div>
              {sent ? (
                <p className="mt-4 rounded-xl border border-exaa-200/80 bg-exaa-100 px-4 py-3 text-sm font-medium text-exaa-800">
                  Thanks — in production this would submit to your server, inbox, or WhatsApp bot.
                </p>
              ) : null}
              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-accent-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-accent-500"
              >
                <Send className="size-4" aria-hidden />
                Submit (demo)
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
