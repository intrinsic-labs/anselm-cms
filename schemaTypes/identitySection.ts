import {defineType} from 'sanity'

export default defineType({
  name: 'identitySection',
  title: 'Identity Section',
  type: 'document',
  fields: [
    {
      name: 'titleP1',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Our'
    },
    {
      name: 'titleP2',
      title: 'Section Title P2',
      type: 'string',
      initialValue: 'Identity'
    },
    {
      name: 'distinctives',
      title: 'Distinctives',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'distinctive',
          title: 'Distinctive',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required()
            },
            {
              name: 'shortDescription',
              title: 'Short Description',
              type: 'text',
              rows: 2
            },
            {
              name: 'content',
              title: 'Full Content',
              type: 'array',
              of: [
                {
                  type: 'block',
                  styles: [
                    {title: 'Normal', value: 'normal'},
                    {title: 'H3', value: 'h3'},
                    {title: 'H4', value: 'h4'}
                  ]
                }
              ]
            },
            {
              name: 'icon',
              title: 'Icon',
              type: 'image',
              options: {
                hotspot: true
              },
              fields: [
                {
                  name: 'alt',
                  title: 'Alternative Text',
                  type: 'string',
                  description: 'Important for accessibility and SEO'
                }
              ]
            }
          ],
          preview: {
            select: {
              title: 'title'
            },
            prepare(selection) {
              const {title} = selection
              return {
                title: title
              }
            }
          }
        }
      ],
      validation: (Rule) => Rule.min(3).max(3).warning('Exactly 3 distinctives recommended')
    },
    {
      name: 'motto',
      title: 'Motto',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: false
      },
      fields: [
        {name: 'primary', title: 'Primary Text', type: 'string'},
        {name: 'sub', title: 'Sub Text', type: 'string'},
        {name: 'showInCarousel', title: 'Show in Carousel', type: 'boolean', initialValue: false},
        {name: 'mottoExplanation', title: 'Motto Explanation', type: 'array', of: [{type: 'block'}]}
      ]
    },
    {
      name: 'ctaText',
      title: 'Call to Action Text',
      type: 'string',
      initialValue: 'Learn More'
    },
    {
      name: 'ctaLink',
      title: 'Call to Action Link',
      type: 'string',
      initialValue: '#about'
    }
  ]
}) 