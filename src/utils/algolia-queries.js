const escapeStringRegexp = require("escape-string-regexp")

const pagePath = `search`
const indexName = `docs`

const docQuery = `{
  docs:  allNodeDocuments {
    edges {
      node {
        drupal_internal__nid
        id
        title
        field_document_body {
          value
        }
        relationships {
          field_object_type {
            name
            drupal_internal__tid
          }
          field_author {
            ... on node__people {
              id
              drupal_internal__nid
              title
            }
            ... on node__organizations {
              id
              title
              drupal_internal__nid
            }
          }
          field_manuscript_type {
            name
            drupal_internal__tid
          }
          field_recipient {
            ... on node__people {
              id
              title
              drupal_internal__nid
            }
            ... on node__organizations {
              id
              drupal_internal__nid
              title
            }
          }
        }
      }
    }
  }
}`

function docToAlgoliaRecord({ node: { id, title,  drupal_internal__nid, field_document_body, relationships } }) {
  return {
    objectID: id,
    title,
    drupal_internal__nid,
    field_document_body,
    ...relationships,
  }
}

const queries = [
  {
    query: docQuery,
    transformer: ({ data }) => data.docs.edges.map(docToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`field_document_body.value:20`], searchableAttributes: ['title, field_document_body.value', 'relationships'], attributesForFaceting:['field_object_type.name', 'field_author.title', 'field_manuscript_type', 'field_recipient.title'], typoTolerance: 'min', minWordSizefor1Typo:5 },
  },
]

module.exports = queries