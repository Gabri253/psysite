/* Pacchetto per convertire il JSON fornito da Sanity in HTML */
const { toHTML } = require('@portabletext/to-html');

/* Pacchetto per formattare le date in italiano */
const { DateTime } = require("luxon");

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

  // Aggiunge un watch target per il file CSS generato da Tailwind
  eleventyConfig.addWatchTarget("./_site/assets/css/output.css");

  // Copia la cartella delle immagini nel sito finale
  eleventyConfig.addPassthroughCopy("./src/assets/img");

  /* REGISTRA IL FILTRO DATA PER FORMATTARE LE DATE IN ITALIANO */
  eleventyConfig.addFilter("dateFilter", (dateObj) => {
    return new Intl.DateTimeFormat('it-IT', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(dateObj);
  });

  /* Conversione del JSON restituio da  Sanity in HTML */
  eleventyConfig.addFilter("toHtml", (value) => {
    if (!value) return ""; // Evita errori se il campo è vuoto
    return toHTML(value);
  });

  /* Filtro per formattare le date in italiano usando Luxon */
  eleventyConfig.addFilter("formatDate", (dateObj) => {
    // Trasforma la data di Sanity in un oggetto Luxon e poi in stringa leggibile
    return DateTime.fromISO(dateObj)
      .setLocale('it') // Imposta la lingua in italiano
      .toLocaleString(DateTime.DATE_FULL); // Esempio: 12 ottobre 2023
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
