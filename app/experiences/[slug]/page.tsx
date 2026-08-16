import { notFound } from "next/navigation";
import Link from "next/link";

import Navbar from "@/components/Navbar";

import { getExperienceBySlug } from "@/lib/experiences";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ExperiencePage({
  params,
}: PageProps) {
  const { slug } = await params;

  const experience = await getExperienceBySlug(slug);

  if (!experience) {
    notFound();
  }

  const descriptionHtml =
    experience.description?.html ?? "";

  const gallery = experience.gallery ?? [];

  return (
    <>
      <Navbar />

      <main className="bg-beige-light">

        {/* Hero */}
        <section className="px-6 pb-20 pt-40 lg:px-10">
          <div className="mx-auto max-w-7xl">

            <p className="text-[10px] uppercase tracking-[0.35em] text-gold">
              {experience.location}
            </p>

            <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-tight text-maroon md:text-7xl">
              {experience.title}
            </h1>

          </div>
        </section>

        {/* Cover Image */}
        <section className="px-6 lg:px-10">
          <div className="mx-auto max-w-7xl overflow-hidden">
            <img
              src={experience.coverImage.url}
              alt={experience.title}
              className="h-[500px] w-full object-cover md:h-[650px]"
            />
          </div>
        </section>

        {/* Description */}
        <section className="px-6 py-24 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">

            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-gold">
                The Experience
              </p>

              <h2 className="mt-4 font-serif text-4xl text-maroon">
                {experience.title}
              </h2>
            </div>

            <div
              className="max-w-2xl text-sm leading-8 text-black/65 md:col-span-2"
              dangerouslySetInnerHTML={{
                __html: descriptionHtml,
              }}
            />

          </div>
        </section>

        {/* Gallery */}
        {gallery.length > 0 && (
          <section className="px-6 pb-28 lg:px-10">
            <div className="mx-auto max-w-7xl">

              <div className="mb-12">
                <p className="text-[10px] uppercase tracking-[0.35em] text-gold">
                  Moments
                </p>

                <h2 className="mt-3 font-serif text-5xl text-maroon">
                  A Look Back.
                </h2>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {gallery.map((image, index) => (
                  <div
                    key={`${image.url}-${index}`}
                    className="overflow-hidden"
                  >
                    <img
                      src={image.url}
                      alt={`${experience.title} ${index + 1}`}
                      className="h-[450px] w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>
                ))}
              </div>

            </div>
          </section>
        )}

        {/* CTA */}
        <section className="border-t border-gold/30 px-6 py-24 text-center lg:px-10">

          <p className="text-[10px] uppercase tracking-[0.35em] text-gold">
            Let's Create Yours
          </p>

          <h2 className="mt-4 font-serif text-5xl text-maroon">
            Planning something special?
          </h2>

          <Link
            href="/#contact"
            className="mt-8 inline-block bg-maroon px-8 py-4 text-[10px] uppercase tracking-[0.2em] text-white transition hover:bg-gold"
          >
            Plan Your Event
          </Link>

        </section>

      </main>
    </>
  );
}