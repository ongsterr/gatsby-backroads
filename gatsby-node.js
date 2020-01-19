const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const tourTemplate = path.resolve(`src/templates/tour-template.js`)

  const { data } = await graphql(`
    query {
      tours: allContentfulTours {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.tours.edges.forEach(({ node }) => {
    createPage({
      path: `tours/${node.slug}`,
      component: tourTemplate,
      context: {
        slug: node.slug,
      },
    })
  })
}
