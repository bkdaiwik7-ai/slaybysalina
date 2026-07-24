import Image from 'next/image'

export function StorySection() {
  return (
    <section id="story" className="bg-primary py-20 text-primary-foreground md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col gap-8">
            <h2 className="font-serif text-4xl font-light uppercase leading-tight tracking-wide text-balance md:text-5xl">
              Slay By Salina - Where Luxury Meets Expertise
            </h2>
            <div className="flex flex-col gap-5 text-sm font-light leading-relaxed text-primary-foreground/80">
              <p>
                Slay By Salina began with a single chair, a pair of scissors,
                and a big dream: to build a salon where every guest leaves
                feeling unstoppable. What started as one artist&apos;s passion
                has grown into a destination loved by clients who refuse to
                settle for ordinary.
              </p>
              <p>
                Salina and her hand-picked team of stylists, colorists, and
                beauty artists train relentlessly to stay ahead of every
                trend, from lived-in balayage and precision cuts to editorial
                makeup and next-level nail art. But technique is only half of
                it. We take the time to understand your lifestyle, your
                routine, and your vibe before a single snip happens.
              </p>
              <p>
                We&apos;re equally proud of what happens beyond the chair.
                Through free styling days for community organizations and our
                mentorship program for aspiring stylists, we&apos;re committed
                to sharing the confidence a great look can bring with everyone
                around us.
              </p>
              <p>
                So whether you&apos;re here for a quick refresh or a full
                transformation, one thing is guaranteed: you&apos;ll come in as
                a guest and leave as a walking masterpiece.
              </p>
            </div>
            <div className="mt-4 w-full max-w-[547px]">
              <Image
                src="/images/luxury-1.png"
                alt="A model showcasing voluminous balayage hair styled at Slay By Salina"
                width={547}
                height={972}
                className="aspect-[547/972] w-full scale-100 object-cover object-center"
              />
            </div>
          </div>

          <div className="flex flex-col gap-10 md:pt-32">
            <div className="w-full max-w-[343px] self-end">
              <Image
                src="/images/luxury-2.png"
                alt="Premium haircare products displayed on a marble shelf"
                width={343}
                height={515}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="w-full max-w-[547px]">
              <Image
                src="/images/luxury-3.png"
                alt="A stylist performing a precision haircut in the studio"
                width={547}
                height={821}
                className="h-auto w-full object-cover"
              />
            </div>
            <blockquote className="border-l border-accent pl-6 font-serif text-2xl font-light uppercase leading-relaxed tracking-wider">
              &ldquo;Come in as a guest, leave as a masterpiece.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
