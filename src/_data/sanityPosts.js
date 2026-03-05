/*const {createClient} = require('@sanity/client');

// helper for the Sanity client used by Eleventy data files
const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID || 'IL_TUO_ID',
    dataset: process.env.SANITY_DATASET || 'production',
    useCdn: process.env.SANITY_USE_CDN === 'true',
    apiVersion: '2026-03-03',
});

module.exports = async function() {
    const posts = await client.fetch(
        `*[_type == "post"]{
            title,
            "slug": slug.current,
            publishedAt,
            body,
            "mainImage": mainImage.asset->url
        } | order(publishedAt desc)`
    );
    return posts;
}; */