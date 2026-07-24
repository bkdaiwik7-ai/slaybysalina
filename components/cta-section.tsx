import Link from 'next/link'
import { FaceLineArt } from './face-line-art'

export function CtaSection() {
  return (
    <section className="border-t border-primary-foreground/10 bg-primary py-24 text-primary-foreground md:py-32">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 px-4 text-center md:px-6">
        <FaceLineArt className="h-40 w-auto text-primary-foreground md:h-52" />
        <h2 className="font-serif text-5xl font-light uppercase leading-tight tracking-widest text-balance md:text-7xl">
          Your Best <span className="mx-2 text-3xl align-middle md:text-4xl">•</span> Your Style
        </h2>
        <p className="max-w-xl font-light leading-relaxed text-primary-foreground/70">
          Your next great hair day is one appointment away. Reserve your chair
          at Slay By Salina and let&apos;s create something unforgettable.
        </p>
        {/* Book / Call button group: stacked on mobile, side-by-side from sm breakpoint up */}
        <div className="flex w-full max-w-md flex-col gap-4 sm:w-auto sm:flex-row sm:justify-center">
          <Link
            href="/book"
            className="border border-primary-foreground px-8 py-4 text-xs uppercase tracking-[0.25em] transition-colors hover:bg-primary-foreground hover:text-primary"
          >
            Book an appointment
          </Link>

          <Link
            href="tel:+919986177668"
            className="inline-flex items-center justify-center gap-2 bg-primary-foreground px-8 py-4 text-xs uppercase tracking-[0.25em] text-primary transition-opacity hover:opacity-85"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4 shrink-0"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call Now
          </Link>
        </div>
      </div>
    </section>
  )
}
