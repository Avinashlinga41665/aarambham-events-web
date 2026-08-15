"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export type Experience = {
  id: string;
  title: string;
  slug: string;
  location: string;
  coverImage: {
    url: string;
  };
};

type ExperiencesProps = {
  experiences: Experience[];
};

export default function Experiences({
  experiences,
}: ExperiencesProps) {
  return (
    <section
      id="experiences"
      className="bg-beige-light px-6 py-28 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-gold">
              Selected Experiences
            </p>

            <h2 className="mt-3 font-serif text-5xl text-maroon">
              Memories We're Proud Of.
            </h2>
          </div>

          <Link
            href="/experiences"
            className="hidden border-b border-gold pb-2 text-[10px] uppercase tracking-[0.2em] text-maroon transition hover:text-gold md:block"
          >
            View All Work →
          </Link>
        </div>

        {/* Featured Experiences */}
        {experiences.length > 0 ? (
          <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-5">
            {experiences.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.6,
                }}
              >
                <Link
                  href={`/experiences/${event.slug}`}
                  className="group block"
                >
                  {/* Image */}
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={event.coverImage.url}
                      alt={event.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Event Details */}
                  <h3 className="mt-4 font-serif text-lg text-maroon transition-colors duration-300 group-hover:text-gold">
                    {event.title}
                  </h3>

                  <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-black/50">
                    {event.location}
                  </p>

                  {/* Gold Line */}
                  <span className="mt-3 block h-px w-0 bg-gold transition-all duration-500 group-hover:w-8" />
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="mt-12 py-16 text-center">
            <p className="font-serif text-2xl text-maroon">
              Our experiences are coming soon.
            </p>

            <p className="mt-3 text-sm text-black/50">
              We're preparing something beautiful.
            </p>
          </div>
        )}

        {/* Mobile View All */}
        <div className="mt-10 md:hidden">
          <Link
            href="/experiences"
            className="border-b border-gold pb-2 text-[10px] uppercase tracking-[0.2em] text-maroon transition hover:text-gold"
          >
            View All Work →
          </Link>
        </div>

      </div>
    </section>
  );
}