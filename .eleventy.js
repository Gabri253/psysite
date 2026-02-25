//const plugins = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  // Aggiunge il plugin di navigazione
  //eleventyConfig.addPlugin(plugins);

  // Copia i file statici
  eleventyConfig.addPassthroughCopy("src/assets/");
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  // Imposta le cartelle di input/output
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_includes/layouts"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
