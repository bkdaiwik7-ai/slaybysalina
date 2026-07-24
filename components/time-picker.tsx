'use client'

import { useEffect, useRef, useState } from 'react'

interface TimePickerProps {
  value: string
  onChange: (value: string) => void
}

// Generates 30-minute slots between two 24h hour bounds, e.g. 9 -> 21
function buildSlots(startHour: number, endHour: number) {
  const slots: string[] = []
  for (let h = startHour; h <= endHour; h++) {
    for (const m of [0, 30]) {
      if (h === endHour && m > 0) continue
      slots.push(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`)
    }
  }
  return slots
}

const ALL_SLOTS = buildSlots(9, 21) // 9:00 AM – 9:00 PM

function formatSlot(time: string) {
  const [h, m] = time.split(':').map(Number)
  const hour12 = h % 12 || 12
  const ampm = h >= 12 ? 'PM' : 'AM'
  return `${hour12}:${String(m).padStart(2, '0')} ${ampm}`
}

function groupSlots(slots: string[]) {
  const groups: { label: string; slots: string[] }[] = [
    { label: 'Morning', slots: [] },
    { label: 'Afternoon', slots: [] },
    { label: 'Evening', slots: [] },
  ]
  for (const s of slots) {
    const h = Number(s.split(':')[0])
    if (h < 12) groups[0].slots.push(s)
    else if (h < 17) groups[1].slots.push(s)
    else groups[2].slots.push(s)
  }
  return groups.filter((g) => g.slots.length > 0)
}

export function TimePicker({ value, onChange }: TimePickerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false)
      }
    }
    if (isOpen) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  const groups = groupSlots(ALL_SLOTS)

  return (
    <div className="relative w-full" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between border border-border bg-background px-4 py-3 text-sm outline-none transition-colors hover:border-accent focus:border-accent"
      >
        <span className="font-light">
          {value ? formatSlot(value) : 'Select a time'}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-5 shrink-0 text-muted-foreground"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute left-1/2 top-full z-50 mt-3 w-[calc(100vw-2.5rem)] max-w-sm -translate-x-1/2 border border-border bg-card p-5 shadow-2xl"
          style={{
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
            maxHeight: '380px',
            overflowY: 'auto',
          }}
        >
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-serif text-base font-light uppercase tracking-widest">
              Select Time
            </h3>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col gap-5">
            {groups.map((group) => (
              <div key={group.label}>
                <p className="mb-2 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  {group.label}
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {group.slots.map((slot) => {
                    const selected = slot === value
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => {
                          onChange(slot)
                          setIsOpen(false)
                        }}
                        className={`border px-2 py-2 text-xs font-light tracking-wide transition-colors ${
                          selected
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-border hover:border-accent hover:bg-accent/10'
                        }`}
                      >
                        {formatSlot(slot)}
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
