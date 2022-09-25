const path = require(`path`)

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
    const typeDefs = `
      type node__documents implements Node {
        drupal_id: String!
        drupal_internal__id: Int
      }
    `
    createTypes(typeDefs)
  }

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return graphql(`
      {
        allNodeDocuments {
            edges {
                node {
                  id
                  drupal_internal__nid
                }
            }
          }
        
        allNodePeople {
          edges {
            node {
              id
              drupal_internal__nid
            }
          }
        }

        allNodePage {
          edges {
            node {
              title
              body {
                value
              }
              drupal_internal__nid
            }
          }
        }

      }
      
    `
    ).then(result => {
      if (result.errors) {
        throw result.errors
      }
      
        const docs = result.data.allNodeDocuments.edges
        docs.forEach(({ node }) => {
          createPage({
            path: `/documents/${node.drupal_internal__nid}`,
            component: path.resolve(`./src/templates/document-page.js`),
            context: {
              id: node.id,
              diid: node.drupal_internal__nid
            },
          })
        })

        const people = result.data.allNodePeople.edges
        people.forEach(({ node }) => {
          createPage({
            path: `/people/${node.drupal_internal__nid}`,
            component: path.resolve(`./src/templates/people-page.js`),
            context: {
              id: node.id,
              piid: node.drupal_internal__nid
            },
          })
        })
     
      const pages = result.data.allNodePage.edges
        pages.forEach(({ node }) => {
          createPage({
            path: `/pages/${node.drupal_internal__nid}`,
            component: path.resolve(`./src/templates/page.js`),
            context: {
              id: node.id,
              pgid: node.drupal_internal__nid
            },
          })
        })
      })
      
    }