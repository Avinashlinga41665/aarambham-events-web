import { hygraphFetch } from "./hygraph";

export type Experience = {
  id: string;
  title: string;
  slug: string;
  location: string;
  description: {
    html: string;
  };
  coverImage: {
    url: string;
  };
  gallery: {
    url: string;
  }[];
  featured: boolean;
};

type ExperiencesResponse = {
  experiences: Experience[];
};

export async function getFeaturedExperiences() {
  const query = `
    query GetFeaturedExperiences {
      experiences(
        where: { featured: true }
        first: 5
      ) {
        id
        title
        slug
        location
        featured

        coverImage {
          url
        }

        description {
          html
        }
      }
    }
  `;

  const data =
    await hygraphFetch<ExperiencesResponse>(query);

  return data.experiences;
}

export async function getExperienceBySlug(slug: string) {
  const query = `
    query GetExperienceBySlug($slug: String!) {
      experience(where: { slug: $slug }) {
        id
        title
        slug
        location
        featured

        coverImage {
          url
        }

        description {
          html
        }

        gallery {
          url
        }
      }
    }
  `;

  const data = await hygraphFetch<{
    experience: Experience | null;
  }>(query, {
    slug,
  });

  return data.experience;
}