import { defineField, defineType } from 'sanity'

export const projectSchema = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The project name',
    }),
    defineField({
      name: 'thumb',
      title: 'Thumb',
      type: 'image',
      description: 'An image that represents the project',
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      description: 'Technologies used in the project',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A short description about the project',
    }),
    defineField({
      name: 'sourceCode',
      title: 'Source Code',
      type: 'url',
      description: 'Url of the project source code',
    }),
    defineField({
      name: 'demo',
      title: 'Demo',
      type: 'url',
      description: 'Url of the project demo',
    }),
  ],
})
