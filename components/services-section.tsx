const serviceCategories = [
  {
    name: 'Hair',
    services: [
      'Signature Layered Cuts',
      'Hair Cut & Styling',
      'Hair Wash & Massage',
      'Hair Treatment & Conditioning',
      'Global Hair Color',
      'Balayage & Highlights',
      'Keratin Treatment',
      'Hair Smoothening',
      'Hair Straightening',
      'Botox for Hair',
      'Hair Spa Rituals',
      'Fashion & Rainbow Shades',
    ],
  },
  {
    name: 'Skin & Body',
    services: [
      'Luxury Facials',
      'Bridal Beauty',
      'Facial Care & Treatments',
      'Skin Brightening Rituals',
      'Full Body Waxing',
      'Body Polishing',
      'Arms Polishing',
      'Legs Polishing',
      'Full Back Polishing',
      'De-Tan Treatments',
      'D-Tan for Hands & Feet',
      'Aroma Treatments',
      'Foot Massage',
      'Clean-Ups',
    ],
  },
  {
    name: 'Nails',
    services: [
      'Classic Manicure',
      'Spa Pedicure',
      'Gel Manicure',
      'Gel Pedicure',
      'Acrylic Extensions',
      'Custom Nail Art',
      'Nail Repair & Refills',
      'Nail Filing & Painting',
      'SARA Manicure & Pedicure',
      'VLCC Manicure & Pedicure',
      'O3+ Manicure & Pedicure',
      'AVL Manicure & Pedicure',
    ],
  },
  {
    name: 'For Him',
    services: [
      'Precision Haircuts',
      'Beard Sculpting & Styling',
      'Hair Color & Highlights',
      "Men's Facials",
      'Scalp Treatments',
      'Signature Services',
    ],
  },
  {
    name: 'Beauty & Makeup',
    services: [
      'Bridal Makeup',
      'Party & Event Makeup',
      'Engagement Looks',
      'Saree Draping & Styling',
      'Pre-Bridal Packages',
      'Professional Makeup',
    ],
  },
  {
    name: 'Eyes & Lashes',
    services: [
      'Lash Extensions',
      'Lash Lift & Tint',
      'Brow Lamination',
      'Brow Shaping & Tinting',
      'Brow Design',
    ],
  },
  {
    name: 'Premium Care',
    services: [
      'Embroidered Max Includes',
      'Reduced Pan & Redness',
      'Massaged Therapies',
      'Bridal Makeup Package',
      'Engagement Package',
      'Party Makeup',
    ],
  },
  {
    name: 'Kids',
    services: ['Kids Haircuts', 'Fun Braids & Styles', 'First Haircut Keepsake'],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
      <div className="mb-16 flex flex-col items-center gap-4 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          What we do
        </p>
        <h2 className="font-serif text-5xl font-light uppercase tracking-wide md:text-6xl">
          Services
        </h2>
      </div>

      <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {serviceCategories.map((category) => (
          <div key={category.name} className="flex flex-col gap-5">
            <h3 className="border-b border-border pb-3 font-serif text-2xl font-light uppercase tracking-widest">
              {category.name}
            </h3>
            <ul className="flex flex-col gap-3">
              {category.services.map((service) => (
                <li
                  key={service}
                  className="text-sm font-light leading-relaxed text-muted-foreground"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-20 flex flex-col items-center gap-6 overflow-hidden text-center">
        <p className="font-serif text-8xl font-light leading-none tracking-tighter text-foreground/10 sm:text-[10rem] md:text-[14rem]" aria-hidden="true">
          SS
        </p>
        <p className="-mt-16 font-serif text-3xl font-light uppercase tracking-[0.3em] md:-mt-24 md:text-4xl">
          Our Services
        </p>
      </div>
    </section>
  )
}
