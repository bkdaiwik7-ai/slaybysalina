import Link from 'next/link'
import Image from 'next/image'
import { FaceLineArt } from './face-line-art'

export function Hero() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center px-4 pt-16 pb-10 text-center md:px-6 md:pt-20">
      <FaceLineArt className="h-48 w-auto text-foreground md:h-64" />

      <h1 className="mt-10 max-w-4xl font-serif text-4xl font-light uppercase leading-tight tracking-wide text-balance sm:text-5xl md:text-7xl">
        Welcome to Slay By Salina - Where Every Visit Ends in a Slay!
      </h1>

      <p className="mt-8 max-w-2xl font-serif text-lg uppercase leading-relaxed tracking-wider text-pretty sm:text-xl md:text-2xl">
        Step in, unwind, and let our artists bring out the boldest, most
        confident version of you. Great hair days start here!
      </p>

      {/* Book / Call button group: stacked on mobile, side-by-side from sm breakpoint up */}
      <div className="mt-10 flex w-full max-w-md flex-col gap-4 sm:w-auto sm:flex-row sm:justify-center">
        <Link
          href="/book"
          className="bg-primary px-8 py-4 text-sm uppercase tracking-[0.15em] text-primary-foreground transition-opacity hover:opacity-85"
        >
          Book an appointment
        </Link>

        <Link
          href="tel:+919986177668"
          className="inline-flex items-center justify-center gap-2 border border-primary px-8 py-4 text-sm uppercase tracking-[0.15em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
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

      <Link
        href="#hours"
        className="mt-6 text-sm underline underline-offset-4 transition-colors hover:text-accent"
      >
        Location &amp; Hours
      </Link>

      <div className="mt-14 w-full max-w-[630px]">
        <Image
          src="/images/hero-salon.png"
          alt="The elegant interior of Slay By Salina salon with styling chairs and round mirrors"
          width={630}
          height={945}
          priority
          className="h-auto w-full object-cover"
        />
      </div>
    </section>
  )
}
