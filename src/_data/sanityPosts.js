/* File in cui ad ogni build 11ty interroga Sanity per ottenere i post */
const {createClient} = require('@sanity/client');

// helper for the Sanity client used by Eleventy data files
const client = createClient({
    projectId: 'mhr6l1q3',
    /*
    dataset: process.env.SANITY_DATASET || 'production',
    useCdn: process.env.SANITY_USE_CDN === 'true',
    */
    dataset: 'production',
    useCdn: false,
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
    console.log("Post trovati da Sanity:", posts.map(p => p.slug));
    return posts;
};