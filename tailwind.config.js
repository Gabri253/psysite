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
    extend: {
      colors:{
        brand:{
          forest:'#1E392A',
          sage: '#5B7B5F',
          beige: '#FDFCF5',
          'beige-dark': '#F2F0E4',
          'light-beige': '#FFFEFA',
          lino: '#FDFCF5'
        }
      },
      fontFamily: {
        serif: ['Lora', 'serif'],
        sans: ['Inter', 'sans-serif']
      },

      fontSize: {
        // H1 · Hero — 48px → 56px → 64px → 72px
        'display':    ['3rem',   { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['4rem',   { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],

        // H2 · Titoli sezione — 28px → 32px → 40px → 48px
        'heading-1':    ['1.75rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-1-md': ['2rem',    { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-1-lg': ['2.5rem',  { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-1-xl': ['3rem',    { lineHeight: '1.15', letterSpacing: '-0.02em' }],

        // H3 · Titoli card — 20px → 22px → 24px → 28px
        'heading-2':    ['1.25rem',  { lineHeight: '1.3' }],
        'heading-2-md': ['1.375rem', { lineHeight: '1.3' }],
        'heading-2-lg': ['1.5rem',   { lineHeight: '1.25' }],
        'heading-2-xl': ['1.75rem',  { lineHeight: '1.25' }],

        // H4 · Titoli secondari — 18px → 20px → 22px
        'heading-3':    ['1.125rem', { lineHeight: '1.4' }],
        'heading-3-lg': ['1.25rem',  { lineHeight: '1.3' }],
        'heading-3-xl': ['1.375rem', { lineHeight: '1.3' }],

        // Testo corrente — 16px → 17px su schermi grandi
        'body':    ['1rem',      { lineHeight: '1.7' }],
        'body-xl': ['1.0625rem', { lineHeight: '1.75' }],

        // Nav / Header links — 18px → 20px
        'nav':    ['1.125rem', { lineHeight: '1.4', letterSpacing: '0.04em' }],
        'nav-md': ['1.25rem',  { lineHeight: '1.4', letterSpacing: '0.04em' }],

        // Bottoni, etichette — 14px → 16px
        'label':    ['0.875rem', { lineHeight: '1.4', letterSpacing: '0.04em' }],
        'label-md': ['1rem',     { lineHeight: '1.4', letterSpacing: '0.04em' }],

        // Note, footer, disclaimer — 13px
        'caption': ['0.8125rem', { lineHeight: '1.5' }],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography') //Aggiungo typography
  ],
}