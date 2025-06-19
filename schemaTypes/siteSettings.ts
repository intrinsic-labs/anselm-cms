import {defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      initialValue: 'The Anselm School'
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(160).warning('Keep under 160 chars for SEO'),
      initialValue: 'A Classical Christian school opening in Charlotte, NC in 2026. Our aim is to train the hearts and minds of students to be lovers of wisdom, knowledge, and virtue.'
    },
    {
      name: 'url',
      title: 'Site URL',
      type: 'url',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'logo',
      title: 'Site Logo',
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
        }
      ]
    },
    {
      name: 'favicon',
      title: 'Favicon',
      type: 'image'
    },
    {
      name: 'openingDate',
      title: 'School Opening Date',
      type: 'date',
      initialValue: '2026-08-01'
    },
    {
      name: 'foundingYear',
      title: 'Founding Year',
      type: 'number',
      initialValue: 2026
    },
    {
      name: 'address',
      title: 'School Address',
      type: 'object',
      fields: [
        {name: 'streetAddress', title: 'Street Address', type: 'string'},
        {name: 'addressLocality', title: 'City', type: 'string', initialValue: 'Charlotte'},
        {name: 'addressRegion', title: 'State/Province', type: 'string', initialValue: 'NC'},
        {name: 'postalCode', title: 'Postal Code', type: 'string'},
        {name: 'addressCountry', title: 'Country', type: 'string', initialValue: 'US'}
      ]
    },
    {
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        {name: 'phone', title: 'Phone', type: 'string'},
        {name: 'email', title: 'Email', type: 'email'},
        {name: 'admissionsEmail', title: 'Admissions Email', type: 'email'}
      ]
    },
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'platform', title: 'Platform', type: 'string'},
            {name: 'url', title: 'URL', type: 'url'},
            {name: 'handle', title: 'Handle/Username', type: 'string'}
          ]
        }
      ]
    },
    {
      name: 'seoSettings',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        {name: 'metaTitle', title: 'Meta Title', type: 'string'},
        {name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 2},
        {name: 'keywords', title: 'Keywords', type: 'array', of: [{type: 'string'}]},
        {name: 'ogImage', title: 'Open Graph Image', type: 'image'}
      ]
    }
  ]
}) 