"use client";

import { motion } from "framer-motion";

const steps = [
  [
    "01",
    "Discover",
    "We understand your occasion, vision and requirements.",
  ],
  [
    "02",
    "Design",
    "We create the concept, styling and experience.",
  ],
  [
    "03",
    "Plan",
    "Every detail is coordinated before the big day.",
  ],
  [
    "04",
    "Execute",
    "Our team brings everything together on-ground.",
  ],
];

export default function Process() {
  return (
    <section className="bg-maroon px-6 py-24 text-beige-light lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16">
          <p className="text-[10px] uppercase tracking-[0.35em] text-gold-light">
            The Process
          </p>

          <h2 className="mt-3 max-w-xl font-serif text-5xl leading-tight text-beige-light">
            From the first idea
            <br />
            to the final moment.
          </h2>
        </div>

        {/* Process Steps */}
        <div className="relative grid gap-10 md:grid-cols-4 md:gap-8">
          
          {/* Connecting Line */}
          <div className="absolute left-0 right-0 top-[17px] hidden h-px bg-gold/40 md:block" />

          {steps.map(([number, title, text], index) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
              }}
              className="relative"
            >
              {/* Number */}
              <div className="relative z-10 flex h-9 w-9 items-center justify-center border border-gold bg-maroon">
                <span className="font-serif text-sm text-gold-light">
                  {number}
                </span>
              </div>

              {/* Content */}
              <h3 className="mt-7 font-serif text-2xl text-beige-light">
                {title}
              </h3>

              <p className="mt-3 max-w-xs text-xs leading-6 text-beige-light/65">
                {text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}