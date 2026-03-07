# Heading

**Installazione su un altro PC:** Scaricare node.js dal sito ed installarlo. Riavviare il PC e avviare il server 11ty.

*Per avviare tutto, sia Tailwind che 11ty ho configurato il comando npm start*

**Per avviare il server: npx @11ty/eleventy --serve**

**Per avviare il sanity studio: andare nella cartella studio e digitare npm run dev**

**Per ribuildare il progetto (sia 11ty che tailwind): npm run build (PROBLEMA PER IL CSS CHE I CAMBIAMENTI NON VENGONO MOSTRATI SE NON SI RIBUILDA ALCUNE VOLTE)**

**package-lock.json** --> Contiene l'elenco di tutti i pacchetti e le esatte versioni, in modo che quando eseguo il sito sul server vengano utilizzate le stesse esatte versioni.

**package.json** --> Contiene le informazioni generiche sul sito, gli script da eseguire allo start, build, etc e le dipendenze da pacchetti esterni per la costruzione del sito

**.eleventy.js** --> Aggiunge plugin, cartelle da cui pescare i file oltre a quelle di default, definisce le cartelle per costruire il sito. Sono le istruzioni per l'effettiva costruzione del sito.

Il contenuto della cartella _site è l'output della build di 11ty.

Definisco un file base, nel mio caso base.njk, che definisce la struttura del sito. YAML (---) per i file .md

## TODO
 - Inserire supporto immagini per fare sezioni con immagini (https://www.ilariabellavia.it/)
 - Inserire Sanity/Decap CMS e settarlo ✅
 - Inserire supporto Tailwind ✅
 - Definire meglio la struttura del sito
 - Inserire Google Maps nella pagina dove ci sono gli indirizzi, eventualmente riferimento alle recensioni Google (?)
 - Icone SVG --> lucide.dev o Heroicons
 - @sanity/image-url ✅
 - @portabletext/to-html ✅
 - Aggiungere WebHook per Netlify, una volta caricato


I **Global Data Files** definiscono delle regole che sono valide per tutto il progetto. Nel mio caso è il file **site.json**, in cui ho definito delle variabili globali attualmente.
I **Directory Data Files** invece definiscono una serie di regole che sono valide solamente all'interno della cartella in cui è contenuto. Nel mio caso ho definito il file **posts.json**
In entrambi i casi, comunque, si tratta di file json.
Inoltre, 11ty utilizza una gerarchia detta Data Cascade, ovvero se un'informazione è scritta in più posti, allora vince quella più specifica. Nello specifico, in ordine di specificità avrò: Global Data Files, Directory Data Files, **Front Matter** (Intestazione) dei file.

## Nunjucks
La variabile **content** prende tutto il contenuto di un file .md, ovviamente escluso il Front Matter (YAML incluso tra i ---). Utilizzare il filtro safe serve per dire ad 11ty che all'interno del file .md sono presenti elementi HTML e non testuali, quindi non c'è bisogno di inserirli all'interno di tag HTML. Se, invece utilizzo .data.title, significa che sto andando a prendere dei dati che si trovano nel Front Matter.

Definire all'interno di posts.json `"permalink" : "/blog/{{ title | slugify }}/` permette di avere come comportamento predefinito che il link del post venga costruito a partire dal titolo dei metadata, reso però correttamente leggibile grazie a slug nel caso di caratteri strani, tipo apostrofi o accenti.


**post.data.description or post.templateContent | truncate(150) | safe** --> Posso usare come anteprima una parte troncata del testo, oppure scrivere una descrizione apposita nei metadati.

## Sanity
Query da fare su sanity:
    *[_type == "post"]{
        title,
        "slug": slug.current,
        publishedAt,
        body,
        "mainImage": mainImage.asset->url
    }