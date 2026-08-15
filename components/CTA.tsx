export default function Intro() {
  return (
      <section id="contact" className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2000&q=85')",
          }}
        />

        <div className="absolute inset-0 bg-[#F6F1E8]/90" />

        <div className="relative mx-auto flex min-h-[480px] max-w-7xl flex-col justify-center px-6 lg:px-10">

          <p className="text-[10px] uppercase tracking-[0.35em] text-[#B58A4A]">
            Let's Begin
          </p>

          <h2 className="mt-5 max-w-xl font-serif text-6xl leading-[0.95] md:text-8xl">
            Your Event.
            <br />
            Our Expertise.
          </h2>

          <p className="mt-6 font-serif text-xl italic text-[#B58A4A]">
            Let's create something beautiful together.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              className="bg-[#B58A4A] px-8 py-4 text-[10px] uppercase tracking-[0.18em] text-white transition hover:bg-[#4A4036]"
            >
              Chat on WhatsApp
            </a>

            <a
              href="mailto:hello@aarambham.com"
              className="border border-[#4A4036] px-8 py-4 text-[10px] uppercase tracking-[0.18em] transition hover:bg-[#27231F] hover:text-white"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>


  )}