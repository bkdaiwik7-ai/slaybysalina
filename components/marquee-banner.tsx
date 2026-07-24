export function MarqueeBanner() {
  const items = Array.from({ length: 8 })

  return (
    <section
      className="overflow-hidden border-y border-border bg-primary py-8"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee items-center">
        {[0, 1].map((group) => (
          <div key={group} className="flex items-center">
            {items.map((_, i) => (
              <span
                key={i}
                className="flex items-center gap-6 pr-6 font-serif text-4xl font-light uppercase tracking-widest text-primary-foreground sm:text-6xl md:text-8xl"
              >
                Salon <span className="text-xl sm:text-3xl md:text-4xl">•</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
