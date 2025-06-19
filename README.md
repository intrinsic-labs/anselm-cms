# The Anselm School - Sanity CMS

This is the content management system for The Anselm School website, built with Sanity.

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Sanity account

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3333](http://localhost:3333) in your browser to access the Sanity Studio.

## Project Structure

### Schema Types

The CMS includes the following content types:

#### Site-wide Content
- **Site Settings** (`siteSettings`) - Global site configuration, contact info, SEO settings
- **Quotes** (`quotes`) - Inspirational quotes used throughout the site

#### Main Page Sections
- **Hero Section** (`heroSection`) - Landing page hero content
- **Purpose Section** (`purposeSection`) - School's mission and purpose
- **Identity Section** (`identitySection`) - The three distinctives (Biblically Rooted, Classically Focused, Academically Robust)
- **Saint Anselm Section** (`anselmSection`) - Information about the school's namesake

#### People
- **Person** (`person`) - Board members, advisory council, and faculty
  - Board of Directors
  - Advisory Council
  - Faculty (for future use)

#### Blog
- **Blog Post** (`blogPost`) - Individual blog posts
- **Blog Category** (`blogCategory`) - Categories for organizing blog posts

## Content Organization

The Sanity Studio is organized into logical sections:

1. **Site Settings** - Global configuration
2. **Main Page** - All sections of the homepage
3. **People** - Board members and advisory council
4. **Quotes** - Inspirational quotes
5. **Blog** - Posts and categories

## Key Features

### SEO Optimization
- Schema.org structured data support
- Meta titles and descriptions
- Open Graph images
- Keyword management

### Content Management
- Rich text editor with custom styles
- Image management with alt text and captions
- Slug generation for SEO-friendly URLs
- Order management for display control

### User-Friendly Interface
- Custom structure tool for organized content
- Preview functionality
- Validation rules to ensure content quality
- Visual icons for easy navigation

## Initial Content Setup

The `scripts/populateInitialData.js` file contains the initial content structure based on the provided web copy. This includes:

- Purpose section content
- Three distinctives with full descriptions
- Board member and advisory council information
- Featured quotes from C.S. Lewis, J. Gresham Machen, and John Calvin

## Content Types Details

### Hero Section
- Main headline and subheadline
- Opening statement
- Call-to-action buttons
- Background and logo images
- SEO metadata

### Purpose Section
- Rich text content with styling options
- Highlight quotes
- Background image support

### Identity Section
- Three distinctives (exactly 3 required)
- Expandable content for each distinctive
- Custom ordering
- Icons for visual appeal

### Saint Anselm Section
- Historical information
- School motto ("In Omnibus Christus")
- Famous quotes
- Portrait and background images

### Person Schema
- Complete contact information
- Biography and credentials
- Board type classification
- Social media links
- Photo with alt text

### Blog System
- Rich content editor
- Category system
- Featured post functionality
- Author attribution
- Publication scheduling
- SEO optimization

## Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run deploy       # Deploy to Sanity
npm run deploy-graphql # Deploy GraphQL API
```

## Environment Variables

Create a `.env.local` file with:

```bash
SANITY_STUDIO_PROJECT_ID=gy4drf5d
SANITY_STUDIO_DATASET=production
```

## Schema.org Integration

The CMS is designed to support rich structured data including:

- EducationalOrganization schema
- Person schema for board members
- Article schema for blog posts
- ContactPoint and PostalAddress schemas

## Content Guidelines

### Images
- Always include descriptive alt text
- Use high-quality images (minimum 1200px wide for hero images)
- Optimize images before upload

### SEO
- Keep meta descriptions under 160 characters
- Use descriptive, keyword-rich titles
- Include relevant keywords in content

### Content Style
- Use the rich text editor's built-in styles
- Keep paragraphs concise and readable
- Use quotes and emphasis sparingly for impact

## Support

For questions about content management or technical issues, refer to the [Sanity documentation](https://www.sanity.io/docs) or contact the development team.
