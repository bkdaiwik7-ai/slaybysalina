const stats = [
  { value: '25,000+', label: 'Happy Clients' },
  { value: '100+', label: 'Styles Mastered' },
  { value: '5+', label: 'Years of Craft' },

]

export function StatsSection() {
  return (
    <section className="bg-primary py-16 text-primary-foreground md:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-4 text-center md:grid-cols-4 md:px-6">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-2">
            <span className="font-serif text-4xl font-light md:text-5xl">
              {stat.value}
            </span>
            <span className="text-xs uppercase tracking-[0.25em] text-primary-foreground/70">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
