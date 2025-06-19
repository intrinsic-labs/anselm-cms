import {StructureBuilder} from 'sanity/structure'

export default (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // Site Settings
      S.listItem()
        .title('Site Settings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(() => '⚙️'),
      
      S.divider(),
      
      // Main Page Sections
      S.listItem()
        .title('Main Page')
        .child(
          S.list()
            .title('Page Sections')
            .items([
              S.listItem()
                .title('Hero Section')
                .child(
                  S.document()
                    .schemaType('heroSection')
                    .documentId('heroSection')
                )
                .icon(() => '🏛️'),
              S.listItem()
                .title('Purpose Section')
                .child(
                  S.document()
                    .schemaType('purposeSection')
                    .documentId('purposeSection')
                )
                .icon(() => '🎯'),
              S.listItem()
                .title('Identity Section')
                .child(
                  S.document()
                    .schemaType('identitySection')
                    .documentId('identitySection')
                )
                .icon(() => '🔍'),
              S.listItem()
                .title('Saint Anselm Section')
                .child(
                  S.document()
                    .schemaType('anselmSection')
                    .documentId('anselmSection')
                )
                .icon(() => '⛪')
            ])
        )
        .icon(() => '📄'),
      
      S.divider(),
      
      // People
      S.listItem()
        .title('People')
        .child(
          S.list()
            .title('People')
            .items([
              S.listItem()
                .title('Board of Directors')
                .child(
                  S.documentList()
                    .title('Board of Directors')
                    .filter('_type == "person" && boardType == "board"')
                    .defaultOrdering([{field: 'order', direction: 'asc'}])
                )
                .icon(() => '👔'),
              S.listItem()
                .title('Advisory Council')
                .child(
                  S.documentList()
                    .title('Advisory Council')
                    .filter('_type == "person" && boardType == "advisory"')
                    .defaultOrdering([{field: 'order', direction: 'asc'}])
                )
                .icon(() => '💼'),
              S.listItem()
                .title('All People')
                .child(
                  S.documentList()
                    .title('All People')
                    .filter('_type == "person"')
                    .defaultOrdering([{field: 'boardType', direction: 'asc'}, {field: 'order', direction: 'asc'}])
                )
                .icon(() => '👥')
            ])
        )
        .icon(() => '👥'),
      
      S.divider(),
      
      // Quotes
      S.listItem()
        .title('Quotes')
        .child(
          S.documentList()
            .title('Quotes')
            .filter('_type == "quotes"')
            .defaultOrdering([{field: 'title', direction: 'asc'}])
        )
        .icon(() => '💭'),
  ])