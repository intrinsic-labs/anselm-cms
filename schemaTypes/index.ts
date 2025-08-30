import siteSettings from './siteSettings'
import heroSection from './heroSection'
import purposeSection from './purposeSection'
import identitySection from './identitySection'
import lastingSection from './lastingSection'
import anselmSection from './anselmSection'
import givingSection from './givingSection'
import person from './person'
import quotes from './quotes'

export const schemaTypes = [
  // Site-wide settings
  siteSettings,
  
  // Main page sections
  heroSection,
  purposeSection,
  identitySection,
  anselmSection,
  lastingSection,

  // Giving section
  givingSection,

  // People
  person,
  
  // Quotes
  quotes,
]
