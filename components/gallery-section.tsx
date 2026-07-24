import Image from 'next/image'

const galleryPhotos = [
  {
    src: '/images/grid 1.png',
    alt: 'The Slay By Salina studio interior',
    
  },
  {
    src: '/images/grid 2.png',
    alt: 'A model showcasing voluminous balayage hair',
    
  },
  {
    src: '/images/grid 3.png',
    alt: 'A finished bridal makeup look',
    
  },
  {
    src: '/images/grid 4.png',
    alt: 'The welcoming reception area',
    
  },
  {
    src: '/images/grid 5.png',
    alt: 'Premium haircare products on display',
   
  },
  {
    src: '/images/grid 6.png',
    alt: 'A stylist at work in the studio',
    
  },
]

export function GallerySection() {
  return (
    <section id="gallery" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <div className="mb-16 flex flex-col items-center gap-4 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            A closer look
          </p>
          <h2 className="font-serif text-5xl font-light uppercase tracking-wide md:text-6xl">
            Gallery
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-8">
          {galleryPhotos.map((photo) => (
            <div
              key={photo.src}
              className="group relative aspect-[3/4] overflow-hidden bg-secondary"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/30" />
              <p className="absolute bottom-0 left-0 translate-y-full p-4 font-serif text-sm uppercase tracking-[0.2em] text-primary-foreground opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
