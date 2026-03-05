/* 
  1. Il percorso ./src/
    Indica a Tailwind di iniziare la ricerca all'interno della tua cartella principale dei sorgenti (src). 
    Questo evita che il programma perda tempo a scansionare cartelle inutili come node_modules (che è gigantesca) o la cartella di output _site.

  2. Il simbolo **
    È un comando "wildcard" (carattere jolly) che significa: "cerca in tutte le sottocartelle". 
    Quindi Tailwind guarderà in src/, ma anche in src/blog/, src/_includes/, src/layouts/, ecc.

  3. Il simbolo *
    Significa: "qualsiasi nome di file". Non gli importa come si chiama il file, gli importa solo l'estensione.

  4. La lista {njk,md,html,js}
    Specifica le estensioni dei file da analizzare. Dice a Tailwind: 
    "Apri tutti i file che finiscono per .njk (Nunjucks), .md (Markdown), .html o .js e leggi cosa c'è scritto dentro".
*/

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md,html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography') //Aggiungo typography
  ],
}