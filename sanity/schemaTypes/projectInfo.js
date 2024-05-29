import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projects',
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
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        }
    }),

    defineField({
        name: 'iconLists',
        title: 'Icon Lists',
        type: 'array',
        of: [{ 
          type: 'image'
        }],
        options: {
          layout: 'grid'
        }
    }),

    defineField({
        name: 'link',
        title: 'Link',
        type: 'string',
    }),

  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})
