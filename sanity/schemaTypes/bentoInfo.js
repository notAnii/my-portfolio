import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'bento',
  title: 'Bento',
  type: 'document',
  fields: [
    defineField({
        name: 'grid1',
        title: 'Grid 1',
        type: 'image',
        options: {
          hotspot: true,
        }
    }),

    defineField({
        name: 'techStack',
        title: 'Tech Stack',
        type: 'array',
        of: [{type: 'string'}],
    }),

    defineField({
        name: 'insideScoop',
        title: 'Inside Scoop',
        type: 'string',
    }),

  ],
  preview: {
    select: {
      title: 'insideScoop',
      media: 'grid1',
    },
  },
})
