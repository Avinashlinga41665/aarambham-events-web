"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2200&q=90')",
        }}
      />

      {/* Maroon Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-maroon/90 via-maroon/55 to-maroon/10" />

      {/* Soft Beige Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-20 lg:px-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-2xl text-beige-light"
        >
          {/* Eyebrow */}
          <p className="mb-5 text-xs uppercase tracking-[0.38em] text-gold-light">
            Events & Experiences
          </p>

          {/* Heading */}
          <h1 className="font-serif text-6xl leading-[0.92] md:text-8xl">
            Moments
            <br />
            <span className="italic text-beige-light">
              That Matter.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-md text-sm leading-7 text-beige-light/80 md:text-base">
            Thoughtfully planned. Beautifully designed.
            <br />
            Flawlessly executed.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#experiences"
              className="bg-gold px-7 py-4 text-[10px] uppercase tracking-[0.18em] text-black transition hover:bg-gold-light"
            >
              Explore Our Work
            </a>

            <a
              href="#contact"
              className="border border-beige-light/60 px-7 py-4 text-[10px] uppercase tracking-[0.18em] text-beige-light transition hover:bg-beige-light hover:text-maroon"
            >
              Plan Your Event
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}