import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
    }),

    defineField({
        name: 'url',
        title: 'Url',
        type: 'string',
    }),

  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
