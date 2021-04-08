const EXPERIENCE_ITEM_GRAPHQL_FIELDS = `
sys {
  id
}
companyName
jobTitle
startDate
leaveDate
description 
slug
`;

const WORK_ITEMS_GRAPHQL_FIELDS = `
sys {
  id
}
title
description
content {
  json
}
featuredImage {
  url
}
`;

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  )
    .then((response) => response.json())
    .catch((err) => console.err(err));
}

function extractWorkItemEntries(fetchResponse) {
  const company = fetchResponse?.data?.experienceItemCollection?.items?.[0];

  return {
    companyName: company?.companyName ?? "",
    workItems: company?.workItemsCollection?.items ?? [],
  };
}

export async function getAllWorkItems(slug, preview) {
  const entries = await fetchGraphQL(
    `query {
      experienceItemCollection(where: { slug: "${slug}" }, order: startDate_DESC, preview: ${
      preview ? "true" : "false"
    }) {
        items {
          companyName
          workItemsCollection(limit: 3) {
            items {
              ${WORK_ITEMS_GRAPHQL_FIELDS}
            }
          }
        }
      }
    }`,
    preview
  );
  return extractWorkItemEntries(entries);
}

function extractExperienceItemEntries(fetchResponse) {
  return fetchResponse?.data?.experienceItemCollection?.items;
}

export async function getAllExperienceItems(preview) {
  const entries = await fetchGraphQL(
    `query {
      experienceItemCollection(order: startDate_DESC, preview: ${
        preview ? "true" : "false"
      }) {
        items {
          ${EXPERIENCE_ITEM_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );
  return extractExperienceItemEntries(entries);
}

export async function getAllExperienceSlugs() {
  const entries = await fetchGraphQL(
    `query {
      experienceItemCollection(where: { slug_exists: true }, order: startDate_DESC) {
        items {
          slug
        }
      }
    }`
  );
  return extractExperienceItemEntries(entries);
}
