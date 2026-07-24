'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { TimePicker } from './time-picker'
import { SALON_CONTACT } from '@/lib/constants'

// Keep in sync with services-section.tsx if that list changes
const SERVICE_OPTIONS = [
  'Haircut',
  'Hair Coloring',
  'Styling',
  'Hair Treatment',
  'Blow Out',
  'Hair Extensions',
]

type FormState = {
  name: string
  email: string
  phone: string
  service: string
  date: string
  time: string
}

const INITIAL_FORM_STATE: FormState = {
  name: '',
  email: '',
  phone: '',
  service: '',
  date: '',
  time: '',
}

export function BookingForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState<FormState>(INITIAL_FORM_STATE)

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // Create WhatsApp message with appointment details
    const appointmentMessage = `APPOINTMENT BOOKING REQUEST

SLAY BY SALINA

CLIENT INFORMATION
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

SERVICE DETAILS
Service: ${formData.service.charAt(0).toUpperCase() + formData.service.slice(1)}
Date: ${formData.date}
Time: ${formData.time}

Please confirm availability. Thank you for choosing Slay By Salina!`

    // Create WhatsApp link
    const whatsappLink = `https://wa.me/${SALON_CONTACT.WHATSAPP}?text=${encodeURIComponent(appointmentMessage)}`

    console.log('Appointment request submitted:', formData)

    setIsSubmitted(true)

    // Redirect to WhatsApp after 1.5 seconds
    setTimeout(() => {
      window.open(whatsappLink, '_blank')
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center gap-5 border border-border bg-card px-6 py-16 text-center">
        <div className="flex size-16 items-center justify-center rounded-full bg-accent/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-8 text-accent"
            aria-hidden="true"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h2 className="font-serif text-3xl font-light uppercase tracking-widest">
          You&apos;re all set
        </h2>
        <p className="max-w-sm text-sm font-light leading-relaxed text-muted-foreground">
          Thanks for booking an appointment, {formData.name.split(' ')[0] || 'friend'}! 
          You will receive a message shortly from our team.
        </p>
        <Link
          href="/"
          className="mt-2 bg-primary px-8 py-4 text-xs uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-85"
        >
          Back to Home
        </Link>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 border border-border bg-card p-6 md:p-10"
    >
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="book-name"
          className="text-xs uppercase tracking-[0.15em] text-muted-foreground"
        >
          Name
        </label>
        <input
          id="book-name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Jane Doe"
          className="border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="book-email"
            className="text-xs uppercase tracking-[0.15em] text-muted-foreground"
          >
            Email
          </label>
          <input
            id="book-email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="jane@email.com"
            className="border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="book-phone"
            className="text-xs uppercase tracking-[0.15em] text-muted-foreground"
          >
            Phone
          </label>
          <input
            id="book-phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="(555) 010-1234"
            className="border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="book-service"
          className="text-xs uppercase tracking-[0.15em] text-muted-foreground"
        >
          Service
        </label>
        <select
          id="book-service"
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          className="border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
        >
          <option value="" disabled>
            Select a service
          </option>
          {SERVICE_OPTIONS.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="book-date"
            className="text-xs uppercase tracking-[0.15em] text-muted-foreground"
          >
            Preferred Date
          </label>
          <input
            id="book-date"
            name="date"
            type="date"
            required
            value={formData.date}
            onChange={handleChange}
            className="border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="book-time"
            className="text-xs uppercase tracking-[0.15em] text-muted-foreground"
          >
            Preferred Time
          </label>
          <TimePicker
            value={formData.time}
            onChange={(time) =>
              setFormData((prev) => ({ ...prev, time }))
            }
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={!formData.time}
        className="mt-2 bg-primary px-8 py-4 text-sm uppercase tracking-[0.15em] text-primary-foreground transition-opacity hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Confirm Appointment
      </button>
    </form>
  )
}
