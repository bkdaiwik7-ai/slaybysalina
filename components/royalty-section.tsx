import Image from 'next/image'
import Link from 'next/link'

export function RoyaltySection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        {/* Left column */}
        <div className="flex flex-col gap-8">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            The Experience
          </p>
          <h2 className="font-serif text-4xl font-light uppercase leading-tight tracking-wide text-balance md:text-5xl">
            Ready to be treated like royalty?
          </h2>
          <p className="max-w-md leading-relaxed text-muted-foreground">
            From the moment you walk through our doors, everything is about
            you. A warm welcome, a listening ear, and hands that know exactly
            how to bring your vision to life. Sit back, relax, and let us do
            the slaying.
          </p>
          <Link
            href="#contact"
            className="w-fit border border-foreground px-6 py-3 text-xs uppercase tracking-[0.2em] transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Book an appointment
          </Link>
          <div className="mt-4 w-full max-w-[608px]">
            <Image
              src="/images/royalty.png"
              alt="A client relaxing during a pampering hair treatment at Slay By Salina"
              width={608}
              height={811}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-8 md:pt-24">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            The Philosophy
          </p>
          <h2 className="font-serif text-4xl font-light uppercase leading-tight tracking-wide text-balance md:text-5xl">
            Your personality, your hair, your story.
          </h2>
          <p className="max-w-md leading-relaxed text-muted-foreground">
            We believe a great style is never one-size-fits-all. Every cut,
            color, and finish we create is shaped around who you are and how
            you want the world to see you.
          </p>
          <div className="mt-4 w-full max-w-[608px]">
            <Image
              src="/images/story.png"
              alt="A stylist blow-drying a client's hair in the Slay By Salina studio"
              width={608}
              height={912}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
