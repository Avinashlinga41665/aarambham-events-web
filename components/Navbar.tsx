export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-maroon/10 bg-beige/90 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* Logo */}
<a href="#home" className="block">
  <img
    src="/aarambham-logo.png"
    alt="Aarambham by Vasudha"
    className="h-14 w-auto"
  />
</a>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 text-[11px] uppercase tracking-[0.16em] lg:flex">
          <a
            href="#home"
            className="text-maroon transition hover:text-gold"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-black/70 transition hover:text-maroon"
          >
            About
          </a>

          <a
            href="#services"
            className="text-black/70 transition hover:text-maroon"
          >
            Services
          </a>

          <a
            href="#experiences"
            className="text-black/70 transition hover:text-maroon"
          >
            Experiences
          </a>

          <a
            href="#contact"
            className="text-black/70 transition hover:text-maroon"
          >
            Contact
          </a>
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="bg-maroon px-5 py-3 text-[10px] font-medium uppercase tracking-[0.12em] text-beige-light transition hover:bg-maroon-light"
        >
          Plan Your Event
        </a>

      </div>
    </header>
  );
}