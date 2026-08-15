export default function Footer() {
  return (
    <footer className="bg-maroon px-6 py-16 text-beige-light lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">

        {/* Brand */}
        <div>
          <div className="font-serif text-3xl tracking-[0.12em] text-beige-light">
            AARAMBHAM
          </div>

          <p className="mt-4 max-w-xs text-xs leading-6 text-beige-light/55">
            Turning ideas into experiences.
            <br />
            Creating moments that last forever.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-[9px] uppercase tracking-[0.25em] text-gold-light">
            Explore
          </h4>

          <div className="mt-5 space-y-3 text-xs text-beige-light/60">
            <a
              href="#home"
              className="block transition hover:text-gold-light"
            >
              Home
            </a>

            <a
              href="#about"
              className="block transition hover:text-gold-light"
            >
              About
            </a>

            <a
              href="#services"
              className="block transition hover:text-gold-light"
            >
              Services
            </a>

            <a
              href="#experiences"
              className="block transition hover:text-gold-light"
            >
              Experiences
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-[9px] uppercase tracking-[0.25em] text-gold-light">
            Services
          </h4>

          <div className="mt-5 space-y-3 text-xs text-beige-light/60">
            <p>Corporate Events</p>
            <p>Celebrations</p>
            <p>Traditional Events</p>
            <p>Event Planning</p>
            <p>Decor & Styling</p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[9px] uppercase tracking-[0.25em] text-gold-light">
            Get In Touch
          </h4>

          <div className="mt-5 space-y-3 text-xs text-beige-light/60">
            <a
              href="tel:+919876543210"
              className="block transition hover:text-gold-light"
            >
              +91 98765 43210
            </a>

            <a
              href="mailto:hello@aarambham.com"
              className="block transition hover:text-gold-light"
            >
              hello@aarambham.com
            </a>

            <p>Hyderabad, India</p>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="mx-auto mt-14 max-w-7xl border-t border-gold/20 pt-6 text-[9px] uppercase tracking-[0.15em] text-beige-light/35">
        © 2026 Aarambham Events & Experiences. All rights reserved.
      </div>
    </footer>
  );
}