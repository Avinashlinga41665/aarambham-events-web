"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

export default function Intro() {
  return (
    <section
      id="about"
      className="bg-beige px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

        {/* Content */}
        <motion.div
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="text-[10px] uppercase tracking-[0.35em] text-gold">
            Aarambham
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-tight text-maroon md:text-6xl">
            Every celebration
            <br />
            has a beginning.
          </h2>

          <p className="mt-3 font-serif text-2xl italic text-gold">
            We make it unforgettable.
          </p>

          <p className="mt-7 max-w-lg text-sm leading-7 text-black/65">
            At Aarambham, we believe every event is a story waiting to be
            told. From corporate milestones to intimate celebrations, we
            bring creativity, precision and passion to every detail.
          </p>

          <a
            href="#services"
            className="mt-8 inline-block border-b border-gold pb-2 text-[10px] uppercase tracking-[0.2em] text-maroon transition hover:text-gold"
          >
            Discover Aarambham
          </a>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1400&q=85"
            alt="Aarambham event"
            className="h-[520px] w-full object-cover"
          />

          {/* Event Count */}
          <div className="absolute -bottom-7 -left-5 bg-beige-light px-8 py-6 shadow-xl">
            <div className="font-serif text-4xl text-maroon">
              150+
            </div>

            <div className="mt-1 text-[9px] uppercase tracking-[0.2em] text-black/50">
              Events Executed
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}