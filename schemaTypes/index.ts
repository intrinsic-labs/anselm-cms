import siteSettings from './siteSettings'
import heroSection from './heroSection'
import purposeSection from './purposeSection'
import identitySection from './identitySection'
import anselmSection from './anselmSection'
import person from './person'
import blogPost from './blogPost'
import blogCategory from './blogCategory'
import quotes from './quotes'

export const schemaTypes = [
  // Site-wide settings
  siteSettings,
  
  // Main page sections
  heroSection,
  purposeSection,
  identitySection,
  anselmSection,
  
  // People
  person,
  
  // Blog
  blogPost,
  blogCategory,
  
  // Quotes
  quotes,
]
