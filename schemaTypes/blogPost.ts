import {defineType} from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(200)
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt text',
          type: 'string',
          validation: (Rule) => Rule.required()
        },
        {
          name: 'caption',
          title: 'Caption',
          type: 'string'
        }
      ]
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'Quote', value: 'blockquote'}
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Underline', value: 'underline'}
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url'
                  }
                ]
              }
            ]
          }
        },
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              title: 'Alt text',
              type: 'string'
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string'
            }
          ]
        }
      ],
      validation: (Rule) => Rule.required()
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'person'}],
      validation: (Rule) => Rule.required()
    },
    {
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'blogCategory'}]}]
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true
      },
      fields: [
        {name: 'metaTitle', title: 'Meta Title', type: 'string'},
        {name: 'metaDescription', title: 'Meta Description', type: 'text'},
        {name: 'keywords', title: 'Keywords', type: 'array', of: [{type: 'string'}]},
        {name: 'ogImage', title: 'Social Share Image', type: 'image'}
      ]
    }
  ],
  orderings: [
    {
      title: 'Published Date, New',
      name: 'publishedDateDesc',
      by: [
        {field: 'publishedAt', direction: 'desc'}
      ]
    },
    {
      title: 'Title',
      name: 'titleAsc',
      by: [
        {field: 'title', direction: 'asc'}
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      date: 'publishedAt',
      media: 'featuredImage'
    },
    prepare({title, author, date, media}: {title: string, author: string, date: string, media: any}) {
      return {
        title,
        subtitle: `${author} - ${new Date(date).toLocaleDateString()}`,
        media
      }
    }
  }
}) 