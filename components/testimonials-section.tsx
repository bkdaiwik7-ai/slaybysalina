import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Salina completely transformed my hair. I walked in nervous about a big change and walked out feeling like I stepped off a magazine cover. The whole team makes you feel so cared for.',
    name: 'Priya M.',
  },
  {
    quote:
      'Best Service I have ever had. They actually listened to what I wanted instead of pushing their own ideas, and the result was even better than my inspiration photos.',
    name: 'Pooja R.',
  },
  {
    quote:
      'From the head massage during the wash to the final blowout, every minute felt luxurious. I have found my forever salon.',
    name: 'Amrutha K.',
  },
]

export function TestimonialsSection() {
  return (
    <section className="border-t border-border bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-14 flex flex-col items-center gap-5 text-center">
          <h2 className="font-serif text-4xl font-light uppercase tracking-widest md:text-5xl">
            What our clients say
          </h2>
          <div className="flex items-center gap-3">
            <span className="font-serif text-5xl font-light">4.9</span>
            <div className="flex flex-col items-start gap-1">
              <div className="flex gap-1" aria-label="4.9 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-accent text-accent" aria-hidden="true" />
                ))}
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Average rating
              </span>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col gap-6 bg-card p-8">
              <blockquote className="text-sm font-light leading-relaxed text-muted-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="text-xs uppercase tracking-[0.2em]">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
