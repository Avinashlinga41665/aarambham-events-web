"use client";

import { motion } from "framer-motion";
import { useForm } from "@formspree/react";

export default function CTA() {
  const [state, handleSubmit] = useForm("xrpzayee");

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-beige-light"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.12]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2200&q=85')",
        }}
      />

      <div className="absolute inset-0 bg-beige-light/80" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[10px] uppercase tracking-[0.35em] text-gold">
              Let's Begin
            </p>

            <h2 className="mt-5 max-w-xl font-serif text-5xl leading-[0.95] text-maroon md:text-7xl">
              Your Event.
              <br />
              Our Expertise.
            </h2>

            <p className="mt-6 font-serif text-xl italic text-gold">
              Let's create something beautiful together.
            </p>

            <p className="mt-6 max-w-md text-sm leading-7 text-black/60">
              Tell us a little about your event and our team will
              get back to you to discuss your ideas, requirements
              and possibilities.
            </p>

            <div className="mt-10 space-y-3 text-xs text-black/60">
              <p>Hyderabad, India</p>

              <a
                href="tel:+919876543210"
                className="block transition hover:text-maroon"
              >
                +91 98765 43210
              </a>

              <a
                href="mailto:hello@aarambham.com"
                className="block transition hover:text-maroon"
              >
                hello@aarambham.com
              </a>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="border border-gold/30 bg-beige-light/90 p-7 md:p-10"
          >

            {state.succeeded ? (
              /* SUCCESS */
              <div className="flex min-h-[430px] flex-col items-center justify-center text-center">

                <div className="text-4xl text-gold">
                  ✦
                </div>

                <p className="mt-6 text-[9px] uppercase tracking-[0.3em] text-gold">
                  Thank You
                </p>

                <h3 className="mt-3 font-serif text-4xl text-maroon">
                  We'll be in touch.
                </h3>

                <p className="mt-5 max-w-sm text-sm leading-7 text-black/60">
                  Your enquiry has been received. Our team will
                  contact you shortly to discuss your event.
                </p>

              </div>
            ) : (
              <>
                <div className="mb-8">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-gold">
                    Plan Your Event
                  </p>

                  <h3 className="mt-3 font-serif text-3xl text-maroon">
                    Tell us about it.
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="text-[9px] uppercase tracking-[0.2em] text-black/60"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      required
                      className="mt-2 w-full border-b border-black/20 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-black/30 focus:border-gold"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="text-[9px] uppercase tracking-[0.2em] text-black/60"
                    >
                      Call Back Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91"
                      required
                      className="mt-2 w-full border-b border-black/20 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-black/30 focus:border-gold"
                    />
                  </div>

                  {/* Event Type */}
                  <div>
                    <label
                      htmlFor="eventType"
                      className="text-[9px] uppercase tracking-[0.2em] text-black/60"
                    >
                      Event Type
                    </label>

                    <select
                      id="eventType"
                      name="eventType"
                      defaultValue=""
                      required
                      className="mt-2 w-full border-b border-black/20 bg-transparent px-0 py-3 text-sm text-black/60 outline-none transition focus:border-gold"
                    >
                      <option value="" disabled>
                        Select event type
                      </option>

                      <option value="Corporate Event">
                        Corporate Event
                      </option>

                      <option value="Birthday / Celebration">
                        Birthday / Celebration
                      </option>

                      <option value="Traditional Event">
                        Traditional Event
                      </option>

                      <option value="Wedding / Bridal Event">
                        Wedding / Bridal Event
                      </option>

                      <option value="Other">
                        Other
                      </option>
                    </select>
                  </div>

                  {/* Description */}
                  <div>
                    <label
                      htmlFor="description"
                      className="text-[9px] uppercase tracking-[0.2em] text-black/60"
                    >
                      Tell Us About Your Event
                    </label>

                    <textarea
                      id="description"
                      name="description"
                      rows={3}
                      required
                      placeholder="Tell us about your event, date, location or requirements..."
                      className="mt-2 w-full resize-none border-b border-black/20 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-black/30 focus:border-gold"
                    />
                  </div>

                  {/* Error */}
                  {state.errors && (
                    <p className="text-xs text-maroon">
                      Something went wrong. Please try again.
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="mt-3 w-full bg-maroon px-7 py-4 text-[10px] uppercase tracking-[0.2em] text-beige-light transition hover:bg-gold disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {state.submitting
                      ? "Sending..."
                      : "Send Enquiry →"}
                  </button>

                </form>
              </>
            )}

          </motion.div>
        </div>
      </div>
    </section>
  );
}