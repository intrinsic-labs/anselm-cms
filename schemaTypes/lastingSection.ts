import {defineType} from 'sanity'

export default defineType({
  name: 'lastingSection',
  title: 'Lasting Section',
  type: 'document',
  fields: [
    {
      name: 'titleP1',
      title: 'Section Title P1',
      type: 'string',
      initialValue: 'Something That'
    },
    {
      name: 'titleP2',
      title: 'Section Title P2',
      type: 'string',
      initialValue: 'Lasts'
    },
    {
      name: 'content',
      title: 'Lasting Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'H5', value: 'h5'},
            {title: 'H6', value: 'h6'},
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