import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'bento',
  title: 'Bento',
  type: 'document',
  fields: [

    defineField({
        name: 'id',
        title: 'Id',
        type: 'number',
    }),

    defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
    }),

    defineField({
        name: 'description',
        title: 'Description',
        type: 'string',
    }),

    defineField({
        name: 'className',
        title: 'Classname',
        type: 'string',
    }),

    defineField({
        name: 'imgClassName',
        title: 'Image Classname',
        type: 'string',
    }),

    defineField({
        name: 'titleClassName',
        title: 'Title Classname',
        type: 'string',
    }),

    defineField({
        name: 'img',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        }
    }),

    defineField({
        name: 'spareImg',
        title: 'Spare Image',
        type: 'image',
        options: {
          hotspot: true,
        }
    }),

  ],
  preview: {
    select: {
      title: 'title',
      media: 'img',
    },
  },
})
