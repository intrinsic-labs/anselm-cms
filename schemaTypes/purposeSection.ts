import {defineType} from 'sanity'

export default defineType({
  name: 'purposeSection',
  title: 'Purpose Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Our Purpose'
    },
    {
      name: 'content',
      title: 'Purpose Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'Quote', value: 'blockquote'}
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Underline', value: 'underline'}
            ]
          }
        }
      ],
      validation: (Rule) => Rule.required()
    },
    {
      name: 'highlightQuote',
      title: 'Highlight Quote',
      type: 'object',
      fields: [
        {name: 'text', title: 'Quote Text', type: 'text'},
        {name: 'author', title: 'Author', type: 'string'},
        {name: 'source', title: 'Source', type: 'string'}
      ]
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
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
    }
  ]
}) 