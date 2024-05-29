import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
    }),

    defineField({
        name: 'description',
        title: 'Description',
        type: 'text',
    }),

    defineField({
        name: 'company',
        title: 'Company',
        type: 'string',
    }),

    defineField({
        name: 'duration',
        title: 'Duration',
        type: 'string',
    }),

    defineField({
        name: 'thumbnail',
        title: 'Thumbnail',
        type: 'image',
        options: {
          hotspot: true,
        }
    }),

  ],
  preview: {
    select: {
      title: 'title',
      media: 'thumbnail',
    },
  },
})
