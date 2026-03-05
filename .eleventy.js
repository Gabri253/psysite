/* Capire se inserirlo o no, attualmente non necessario. */
//const plugins = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  /* Aggiunge il plugin di navigazione, attualmente non lo uso */
  //eleventyConfig.addPlugin(plugins);

  // Copia i file statici
  /* Perché dovrei mettere questa cartella e file che non esistono?
     La prima cartella credo sia per il CSS, mi sa che con tailwind non serve  */
  /* Commentato perché altrimenti va a sovrascrivere il file creato da Tailwind nella cartella _site/assets/css */
  //eleventyConfig.addPassthroughCopy("src/assets/");
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  /* REGISTRA IL FILTRO DATA PER FORMATTARE LE DATE IN ITALIANO */
  eleventyConfig.addFilter("dateFilter", (dateObj) => {
    return new Intl.DateTimeFormat('it-IT', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(dateObj);
  });

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
