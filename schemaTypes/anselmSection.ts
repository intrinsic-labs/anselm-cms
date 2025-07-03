import {defineType} from 'sanity'

export default defineType({
  name: 'anselmSection',
  title: 'Saint Anselm Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Saint Anselm of Canterbury'
    },
    {
      name: 'lifespan',
      title: 'Lifespan',
      type: 'string',
      initialValue: 'c. 1033-1109'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'}
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'}
            ]
          }
        }
      ]
    },
    {
      name: 'quote',
      title: 'Saint Anselm Quote',
      type: 'object',
      fields: [
        {
          name: 'text', 
          title: 'Quote Text', 
          type: 'text',
          initialValue: 'For I do not seek to understand in order that I may believe, but I believe in order to understand. For this also I believe -- that unless I believe I shall not understand.'
        },
        {
          name: 'source', 
          title: 'Source', 
          type: 'string',
          initialValue: 'Proslogion'
        }
      ]
    },
    {
      name: 'portrait',
      title: 'Portrait Image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt text',
          type: 'string'
        }
      ]
    },
  ]
}) 