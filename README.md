# Heading

**Installazione su un altro PC:** Scaricare node.js dal sito ed installarlo. Riavviare il PC e avviare il server 11ty.

**Per avviare il server: npx @11ty/eleventy --serve**

**package-lock.json** --> Contiene l'elenco di tutti i pacchetti e le esatte versioni, in modo che quando eseguo il sito sul server vengano utilizzate le stesse esatte versioni.

**package.json** --> Contiene le informazioni generiche sul sito, gli script da eseguire allo start, build, etc e le dipendenze da pacchetti esterni per la costruzione del sito

**.eleventy.js** --> Aggiunge plugin, cartelle da cui pescare i file oltre a quelle di default, definisce le cartelle per costruire il sito. Sono le istruzioni per l'effettiva costruzione del sito.

Il contenuto della cartella _site è l'output della build di 11ty.

Definisco un file base, nel mio caso base.njk, che definisce la struttura del sito. YAML (---) per i file .md

## TODO
 - Inserire supporto immagini per fare sezioni con immagini (https://www.ilariabellavia.it/)
 - Inserire Sanity/Decap CMS e settarlo
 - Inserire supporto Tailwind
 - Definire meglio la struttura del sito
 - Inserire Google Maps nella pagina dove ci sono gli indirizzi, eventualmente riferimento alle recensioni Google (?)
