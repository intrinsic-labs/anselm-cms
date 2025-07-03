import {defineType} from 'sanity'

export default defineType({
  name: 'quotes',
  title: 'Quotes',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Quote Title/Reference',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'text',
      title: 'Quote Text',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required()
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'source',
      title: 'Source/Publication',
      type: 'string'
    },
    {
      name: 'authorImage',
      title: 'Author Image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt text',
          type: 'string'
        },
        {
          name: 'position',
          title: 'Position',
          type: 'string',
          options: {
            list: [
              {title: 'Left', value: 'left'},
              {title: 'Center', value: 'center'},
              {title: 'Right', value: 'right'}
            ]
          },
          initialValue: 'center'
        }
      ]
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Education', value: 'education'},
          {title: 'Faith', value: 'faith'},
          {title: 'Classical', value: 'classical'},
          {title: 'Wisdom', value: 'wisdom'}
        ]
      }
    },
    {
      name: 'featured',
      title: 'Featured Quote',
      type: 'boolean',
      initialValue: false
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'author',
      media: 'authorImage'
    },
    prepare({title, subtitle, media}: {title: string, subtitle: string, media: any}) {
      return {
        title,
        subtitle: `by ${subtitle}`,
        media
      }
    }
  }
}) 