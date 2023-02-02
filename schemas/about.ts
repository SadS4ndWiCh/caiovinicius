import {defineField, defineType} from 'sanity'

export const aboutSchema = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'string',
    }),
    defineField({
      name: 'aboutMe',
      title: 'About me',
      type: 'text',
    }),
  ],
})
