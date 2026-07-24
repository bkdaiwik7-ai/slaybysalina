import Image from 'next/image'
import Link from 'next/link'
import { Phone, MapPin, Mail, Clock } from 'lucide-react'

export function HoursSection() {
  return (
    <section id="hours" className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 md:grid-cols-2 md:gap-16 md:px-6 md:py-28">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-5">
            <h2 className="flex items-center gap-3 font-serif text-3xl font-light uppercase tracking-widest">
              <Clock className="size-6 text-accent" aria-hidden="true" />
              Hours
            </h2>
            <dl className="flex flex-col gap-2 text-sm font-light leading-relaxed">
              <div className="flex justify-between border-b border-border pb-2">
                <dt>Monday - Tuesday</dt>
                <dd>11:30 AM - 8:30 PM</dd>
              </div>
              <div className="flex justify-between border-b border-border pb-2 pt-2">
                <dt>Thursday - Sunday</dt>
                <dd>11:30 AM - 8:30 PM</dd>
              </div>
            </dl>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Open 6 days a week
            </p>
          </div>

          <div id="contact" className="flex flex-col gap-5">
            <h2 className="flex items-center gap-3 font-serif text-3xl font-light uppercase tracking-widest">
              <Phone className="size-6 text-accent" aria-hidden="true" />
              Appointments
            </h2>
            <p className="text-sm font-light leading-relaxed text-muted-foreground">
              Walk-ins are always welcome, but we recommend booking ahead so we
              can give you our undivided attention.
            </p>
            <ul className="flex flex-col gap-3 text-sm font-light">
              <li className="flex items-center gap-3">
                <MapPin className="size-4 shrink-0 text-accent" aria-hidden="true" />
                <Link
                  href="https://maps.google.com/?q=28.6429,77.1232"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  View on Map (28°38'34.6"N 77°07'23.7"E)
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-accent" aria-hidden="true" />
                <Link
                  href="tel:+919999757379"
                  className="transition-colors hover:text-accent"
                >
                  +91 9999 757379
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-accent" aria-hidden="true" />
                <Link
                  href="mailto:slaybysalina23@gmail.com"
                  className="transition-colors hover:text-accent"
                >
                  slaybysalina23@gmail.com
                </Link>
              </li>
            </ul>
            <Link
              href="/book"
              className="w-fit bg-primary px-6 py-3 text-xs uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-85"
            >
              Book an appointment
            </Link>
            <p className="text-xs font-light leading-relaxed text-muted-foreground">
              Cancellation policy: please give us at least 24 hours&apos;
              notice. Late cancellations may be charged 50% of the scheduled
              service.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full max-w-[499px]">
            <Image
              src="/images/reception.png"
              alt="The welcoming reception area at Slay By Salina"
              width={499}
              height={579}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
