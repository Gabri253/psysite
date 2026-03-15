import { defineField, defineType } from "sanity"
export const post = defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        defineField({
        name: 'title',
        type: 'string',
        validation: (rule) => rule.required(),
        title: 'Titolo articolo',    
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {source: 'title'},
            validation: (rule) => rule.required(),
            title: 'URL articolo',
            description: 'Premi su Generate, se non ti piace puoi modificarlo ma non inserire caratteri strani (tipo accenti o spazi.)',
        }),
        defineField({
            name: 'publishedAt',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
            validation: (rule) => rule.required(),
            title: 'Orario di pubblicazione',
            
        }),
        defineField({
            name: 'image',
            type: 'image',
            options: { hotspot: true}, //Permette di scegliere il punto focale
            fields: [{
                name: 'alt',
                type: 'string',
                title: 'Testo alternativo',
                description: 'Decrizione dell immagine',
            }],
            title: 'Immagine articolo',
            description: 'Evita immagini troppo pesanti.',
        }),
        defineField({
            name: 'body',
            type: 'array',
            of: [{type: 'block'}],
            title: 'Testo articolo',
        }),
        defineField({
            name: 'excerpt',
            type: 'text',
            title: 'Riassunto articolo',
        }),
    ],
})
