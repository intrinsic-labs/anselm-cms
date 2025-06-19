import {defineType} from 'sanity'

export default defineType({
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'role',
      title: 'Role/Title',
      type: 'string'
    },
    {
      name: 'organization',
      title: 'Organization/Affiliation',
      type: 'string'
    },
    {
      name: 'bio',
      title: 'Biography',
      type: 'array',
      of: [
        {
          type: 'block'
        }
      ]
    },
    {
      name: 'shortBio',
      title: 'Short Bio',
      type: 'text',
      rows: 3
    },
    {
      name: 'photo',
      title: 'Photo',
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
    {
      name: 'email',
      title: 'Email',
      type: 'email'
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string'
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'platform', title: 'Platform', type: 'string'},
            {name: 'url', title: 'URL', type: 'url'}
          ]
        }
      ]
    },
    {
      name: 'boardType',
      title: 'Board Type',
      type: 'string',
      options: {
        list: [
          {title: 'Board of Directors', value: 'board'},
          {title: 'Advisory Council', value: 'advisory'},
          {title: 'Faculty', value: 'faculty'}
        ]
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: (Rule) => 
        Rule.custom(async (order, context) => {
          // Skip validation if no order value
          if (typeof order === 'undefined' || order === null) {
            return true
          }

          const client = context.getClient({apiVersion: '2023-05-03'})
          const currentDocId = context.document?._id

          // Query for other documents with the same order value and board type
          const query = `*[_type == "person" && order == $order && boardType == $boardType && _id != $currentDocId]{name, _id}`
          const duplicates = await client.fetch(query, {
            order,
            boardType: context.document?.boardType,
            currentDocId: currentDocId?.replace('drafts.', '')
          })

          if (duplicates.length > 0) {
            const names = duplicates.map((doc: {name: string, _id: string}) => doc.name).join(', ')
            return `Display order ${order} is already used by: ${names}. Consider using a different order number.`
          }

          return true
        }).warning()
    },
    {
      name: 'credentials',
      title: 'Credentials/Education',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'degree', title: 'Degree', type: 'string'},
            {name: 'institution', title: 'Institution', type: 'string'},
            {name: 'year', title: 'Year', type: 'number'}
          ]
        }
      ]
    },
    {
      name: 'expertise',
      title: 'Areas of Expertise',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {name: 'metaTitle', title: 'Meta Title', type: 'string'},
        {name: 'metaDescription', title: 'Meta Description', type: 'text'}
      ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'photo',
      boardType: 'boardType',
      order: 'order'
    },
    prepare({title, subtitle, media, boardType, order}: {title: string, subtitle: string, media: any, boardType: string, order: number}) {
      return {
        title: `${order ? order + '. ' : ''}${title}`,
        subtitle: `${subtitle} (${boardType})`,
        media
      }
    }
  }
}) 