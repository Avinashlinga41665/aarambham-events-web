const HYGRAPH_API_URL = process.env.HYGRAPH_API_URL!;
const HYGRAPH_TOKEN = process.env.HYGRAPH_TOKEN;

export async function hygraphFetch<T>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> {
  const response = await fetch(HYGRAPH_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(HYGRAPH_TOKEN
        ? {
            Authorization: `Bearer ${HYGRAPH_TOKEN}`,
          }
        : {}),
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    cache: "no-store",
  });

  const json = await response.json();

  console.log("HYGRAPH STATUS:", response.status);
  console.log("HYGRAPH RESPONSE:", JSON.stringify(json, null, 2));

  if (!response.ok) {
    throw new Error(
      `Hygraph request failed: ${response.status} - ${JSON.stringify(json)}`
    );
  }

  if (json.errors) {
    throw new Error(
      `Hygraph GraphQL error: ${JSON.stringify(json.errors)}`
    );
  }

  return json.data;
}