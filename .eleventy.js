/* Capire se inserirlo o no, attualmente non necessario. */
//const plugins = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  // Aggiunge il plugin di navigazione
  //eleventyConfig.addPlugin(plugins);

  // Copia i file statici
  /* Perché dovrei mettere questa cartella e file che non esistono?
    La prima cartella credo sia per il CSS */
  eleventyConfig.addPassthroughCopy("src/assets/");
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  // Imposta le cartelle di input/output
  return {
    dir: {
      input: "src", //Dove scrivo il codice
      output: "_site", //Dove 11ty genera il sito
      includes: "_includes", // ??
      layouts: "_includes/layouts" //Sottocartella per i pezzi di layout (?)
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
