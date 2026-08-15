"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Corporate Events",
    text: "Conferences, launches, annual celebrations & office experiences.",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Celebrations",
    text: "Birthdays, anniversaries, private parties & unforgettable moments.",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Traditional Events",
    text: "Haldi, bridal celebrations, ceremonies & beautifully styled traditions.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-beige px-6 pb-28 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="text-[10px] uppercase tracking-[0.35em] text-gold">
            What We Do
          </p>

          <h2 className="mt-3 font-serif text-4xl text-maroon md:text-5xl">
            We Design. We Plan. We Execute.
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative h-[430px] overflow-hidden"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 p-8 text-beige-light">

                <p className="mb-3 text-[9px] uppercase tracking-[0.3em] text-gold-light">
                  0{index + 1}
                </p>

                <h3 className="font-serif text-3xl">
                  {service.title}
                </h3>

                <p className="mt-3 max-w-xs text-xs leading-6 text-beige-light/75">
                  {service.text}
                </p>

                <span className="mt-5 inline-block text-xl text-gold-light transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}