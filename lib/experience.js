const client = require("contentful").createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default async function getAllExperienceItems() {
  const entries = await client.getEntries({
    content_type: "experienceItem",
    order: "-fields.startDate",
  });

  if (entries.items) {
    return entries.items;
  }

  console.error(`Error getting Entries for ${contentType.name}.`);
}
