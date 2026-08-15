"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Corporate Annual Event",
    location: "Hyderabad",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Haldi Ceremony",
    location: "Hyderabad",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Birthday Celebration",
    location: "Hyderabad",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Product Launch",
    location: "Bengaluru",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Bridal Celebration",
    location: "Hyderabad",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=85",
  },
];

export default function Experiences() {
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

          <a
            href="#contact"
            className="hidden border-b border-gold pb-2 text-[10px] uppercase tracking-[0.2em] text-maroon transition hover:text-gold md:block"
          >
            View All Work →
          </a>
        </div>

        {/* Experience Grid */}
        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-5">
          {experiences.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.6,
              }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={event.image}
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

              {/* Small Gold Line */}
              <span className="mt-3 block h-px w-0 bg-gold transition-all duration-500 group-hover:w-8" />
            </motion.div>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-10 md:hidden">
          <a
            href="#contact"
            className="border-b border-gold pb-2 text-[10px] uppercase tracking-[0.2em] text-maroon"
          >
            View All Work →
          </a>
        </div>

      </div>
    </section>
  );
}