import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { admissionPolicy } from '../data/siteContent'

const headerTones = ['bg-accent-600', 'bg-accent-700', 'bg-exaa-700', 'bg-exaa-800']

function PolicyTable({ headers, rows, headerTone = 'bg-accent-600' }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-exaa-200/90 bg-white">
      <table className="w-full min-w-[20rem] text-left text-sm">
        <thead>
          <tr className={`${headerTone} text-white`}>
            {headers.map((header) => (
              <th key={header} className="px-4 py-3 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-exaa-200/80 text-exaa-800">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function LevelsGrid({ columns }) {
  const maxRows = Math.max(...columns.map((col) => col.classes.length))

  return (
    <div className="overflow-x-auto rounded-2xl border border-exaa-200/90 bg-white">
      <table className="w-full min-w-[36rem] text-left text-sm">
        <thead>
          <tr>
            {columns.map((col, i) => (
              <th
                key={col.title}
                className={`px-4 py-3 font-semibold text-white ${headerTones[i % headerTones.length]}`}
              >
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: maxRows }).map((_, rowIndex) => (
            <tr key={rowIndex} className="border-t border-exaa-200/80 text-exaa-800">
              {columns.map((col) => (
                <td key={col.title} className="px-4 py-3">
                  {col.classes[rowIndex] ?? '—'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function JourneyGrid({ columns }) {
  const maxSteps = Math.max(...columns.map((col) => col.steps.length))

  return (
    <div className="overflow-x-auto rounded-2xl border border-exaa-200/90 bg-white">
      <table className="w-full min-w-[28rem] text-left text-sm">
        <thead>
          <tr>
            {columns.map((col, i) => (
              <th
                key={col.title}
                className={`px-4 py-3 font-semibold text-white ${headerTones[i % headerTones.length]}`}
              >
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: maxSteps }).map((_, stepIndex) => (
            <tr key={stepIndex} className="border-t border-exaa-200/80 text-exaa-800">
              {columns.map((col) => (
                <td key={col.title} className="px-4 py-3">
                  {col.steps[stepIndex] ?? '—'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function SectionContent({ section }) {
  if (section.type === 'levels') {
    return (
      <div className="space-y-4">
        <p className="text-sm leading-relaxed text-exaa-700">{admissionPolicy.intro}</p>
        <LevelsGrid columns={section.columns} />
      </div>
    )
  }

  if (section.type === 'age-tables') {
    return (
      <div className="space-y-8">
        {section.groups.map((group, i) => (
          <div key={group.title}>
            <h3 className="mb-4 text-center font-display text-xl font-semibold text-exaa-900">
              {group.title}
            </h3>
            <PolicyTable
              headerTone={headerTones[i % headerTones.length]}
              headers={['Class level', 'Min Age', 'Max Age']}
              rows={group.rows.map((row) => [row.classLevel, row.minAge, row.maxAge])}
            />
          </div>
        ))}
      </div>
    )
  }

  if (section.type === 'criteria') {
    return (
      <div className="space-y-8">
        <p className="text-sm leading-relaxed text-exaa-700">{section.intro}</p>
        <ul className="list-disc space-y-1 pl-5 text-sm text-exaa-800">
          {section.conditions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {section.groups.map((group, i) => (
          <div key={group.title}>
            <h3 className="mb-4 text-center font-display text-xl font-semibold text-exaa-900">
              {group.title}
            </h3>
            <PolicyTable
              headerTone={headerTones[i % headerTones.length]}
              headers={['Class level', 'Admission Test / Interview']}
              rows={group.rows.map((row) => [row.classLevel, row.test])}
            />
          </div>
        ))}
      </div>
    )
  }

  if (section.type === 'journey') {
    return <JourneyGrid columns={section.columns} />
  }

  return null
}

export default function AdmissionPolicyAccordion() {
  const [openId, setOpenId] = useState(admissionPolicy.sections[0]?.id ?? null)

  return (
    <div className="rounded-3xl border border-exaa-200/90 bg-white shadow-sm">
      {admissionPolicy.sections.map((section) => {
        const open = openId === section.id
        return (
          <div key={section.id} className="border-b border-exaa-200/80 last:border-b-0">
            <button
              type="button"
              className={[
                'flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition sm:px-6 sm:py-5',
                open ? 'text-accent-700' : 'text-exaa-900 hover:bg-exaa-50/60',
              ].join(' ')}
              aria-expanded={open}
              onClick={() => setOpenId(open ? null : section.id)}
            >
              <span className="font-display text-lg font-semibold sm:text-xl">{section.title}</span>
              <ChevronDown
                className={[
                  'size-5 shrink-0 text-accent-600 transition-transform duration-300',
                  open ? 'rotate-180' : '',
                ].join(' ')}
                aria-hidden
              />
            </button>
            {open ? (
              <div className="border-t border-exaa-200/80 bg-exaa-50/40 px-5 py-6 sm:px-6 sm:py-8">
                <SectionContent section={section} />
              </div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}
