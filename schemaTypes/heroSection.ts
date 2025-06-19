import {defineType} from 'sanity'

export default defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'headline',
      title: 'Main Headline',
      type: 'string',
      validation: (Rule) => Rule.required(),
      initialValue: 'THE ANSELM SCHOOL'
    },
    {
      name: 'subheadline',
      title: 'Subheadline',
      type: 'string',
      initialValue: 'Opening Fall 2026'
    },
    {
      name: 'openingStatement',
      title: 'Opening Statement',
      type: 'text',
      rows: 3,
      initialValue: 'A Classical Christian school opening in Charlotte, NC in 2026. Our aim is to train the hearts and minds of students to be lovers of wisdom, knowledge, and virtue.'
    },
    {
      name: 'ctaText',
      title: 'Call to Action Text',
      type: 'string',
      initialValue: 'Get Updates'
    },
    {
      name: 'donationCtaText',
      title: 'Donation CTA Text',
      type: 'string',
      initialValue: 'Give Today'
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
    },
    {
      name: 'logo',
      title: 'Hero Logo',
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
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {name: 'title', title: 'Page Title', type: 'string'},
        {name: 'description', title: 'Meta Description', type: 'text'}
      ]
    }
  ]
}) 