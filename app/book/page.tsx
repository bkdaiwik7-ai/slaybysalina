import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { BookingForm } from '@/components/booking-form'
import { FaceLineArt } from '@/components/face-line-art'

export const metadata: Metadata = {
  title: 'Book an Appointment | Slay By Salina',
  description:
    'Reserve your chair at Slay By Salina. Pick a service, date, and time, and we will confirm your appointment shortly.',
}

export default function BookPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="mx-auto flex max-w-xl flex-col items-center px-4 pb-20 pt-14 text-center md:px-6 md:pt-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 self-start text-xs font-light uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to Home
          </Link>

          <FaceLineArt className="mt-6 h-32 w-auto text-foreground md:h-40" />

          <h1 className="mt-6 font-serif text-4xl font-light uppercase leading-tight tracking-wide text-balance md:text-5xl">
            Reserve Your Chair
          </h1>

          <p className="mt-4 max-w-md font-light leading-relaxed text-muted-foreground">
            Tell us a little about you and we&apos;ll lock in your spot.
            Prefer to talk it through?{' '}
            <Link
              href="tel:+919986177668"
              className="underline underline-offset-4 transition-colors hover:text-accent"
            >
              Call us instead
            </Link>
            .
          </p>

          <div className="mt-10 w-full">
            <BookingForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
