'use client'

import { useEffect, useState, type FormEvent } from 'react'
import { SALON_CONTACT } from '@/lib/constants'
import { TimePicker } from './time-picker'

// Services offered - keep in sync with services-section.tsx if that list changes
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

export function AppointmentPopup() {
  // Whether the modal is currently visible
  const [isOpen, setIsOpen] = useState(false)
  // Whether the success confirmation is currently showing
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState<FormState>(INITIAL_FORM_STATE)

  // Automatically show the popup 2 seconds after the page loads
  useEffect(() => {
    const showTimer = setTimeout(() => {
      setIsOpen(true)
    }, 2000)

    return () => clearTimeout(showTimer)
  }, [])

  // Lock body scroll while the modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleClose = () => {
    setIsOpen(false)
  }

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

    // WhatsApp Business API - Uses salon's WhatsApp number from constants
    const whatsappLink = `https://wa.me/${SALON_CONTACT.WHATSAPP}?text=${encodeURIComponent(appointmentMessage)}`

    // Log for debugging
    console.log('Appointment request submitted:', formData)

    setIsSubmitted(true)

    // Redirect to WhatsApp after 1.5 seconds
    setTimeout(() => {
      window.open(whatsappLink, '_blank')
      // Close popup after redirect
      setTimeout(() => {
        setIsOpen(false)
        setIsSubmitted(false)
        setFormData(INITIAL_FORM_STATE)
      }, 500)
    }, 1500)
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 p-4 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto border border-border bg-card p-6 shadow-xl sm:p-8 md:p-10"
        // Prevent clicks inside the modal from closing it via the backdrop handler
        onClick={(event) => event.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close appointment popup"
          className="absolute right-4 top-4 flex size-8 items-center justify-center text-foreground/60 transition-colors hover:text-foreground"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-5"
            aria-hidden="true"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        {isSubmitted ? (
          // Success state
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <div className="flex size-14 items-center justify-center rounded-full bg-accent/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-7 text-accent"
                aria-hidden="true"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-light uppercase tracking-widest">
              Opening WhatsApp
            </h3>
            <p className="max-w-xs text-sm font-light leading-relaxed text-muted-foreground">
              Thank you, {formData.name.split(' ')[0] || 'there'}! Connecting you to our WhatsApp for confirmation.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6 text-center">
              <h3 className="font-serif text-3xl font-light uppercase tracking-widest text-balance">
                Reserve Your Chair
              </h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground">
                Tell us a little about you and we&apos;ll lock in your spot.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="popup-name"
                  className="text-xs uppercase tracking-[0.15em] text-muted-foreground"
                >
                  Name
                </label>
                <input
                  id="popup-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className="border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="popup-email"
                    className="text-xs uppercase tracking-[0.15em] text-muted-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="popup-email"
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
                    htmlFor="popup-phone"
                    className="text-xs uppercase tracking-[0.15em] text-muted-foreground"
                  >
                    Phone
                  </label>
                  <input
                    id="popup-phone"
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
                  htmlFor="popup-service"
                  className="text-xs uppercase tracking-[0.15em] text-muted-foreground"
                >
                  Service
                </label>
                <select
                  id="popup-service"
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

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="popup-date"
                    className="text-xs uppercase tracking-[0.15em] text-muted-foreground"
                  >
                    Preferred Date
                  </label>
                  <input
                    id="popup-date"
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
                    htmlFor="popup-time"
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
                Book an appointment
              </button>

              <button
                type="button"
                onClick={handleClose}
                className="text-xs uppercase tracking-[0.15em] text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
              >
                Maybe later
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
