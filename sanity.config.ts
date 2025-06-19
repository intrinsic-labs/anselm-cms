import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import structure from './structure'

export default defineConfig({
  name: 'default',
  title: 'The Anselm School',

  projectId: 'gy4drf5d',
  dataset: 'production',

  plugins: [
    structureTool({
      structure
    }), 
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
