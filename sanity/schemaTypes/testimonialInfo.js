import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
        name: 'name',
        title: 'Name',
        type: 'string',
    }),

    defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
    }),

    defineField({
        name: 'quote',
        title: 'Quote',
        type: 'text',
    }),

    defineField({
        name: 'photo',
        title: 'Photo',
        type: 'image',
        options: {
          hotspot: true,
        }
    }),

    defineField({
        name: 'companyLogo',
        title: 'Company Logo',
        type: 'image',
        options: {
          hotspot: true,
        }
    }),

  ],
  preview: {
    select: {
      title: 'name',
      media: 'photo',
    },
  },
})
