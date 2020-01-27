const path = require(`path`)

// When experiencing issues loading data from Contentful, could be issue with caching > gatsby clean

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const tourTemplate = path.resolve(`src/templates/tour-template.js`)
  const blogTemplate = path.resolve(`src/templates/blog-template.js`)
  const blogListTemplate = path.resolve(`src/templates/blog-list-template.js`)

  const { data } = await graphql(`
    query {
      tours: allContentfulTours {
        edges {
          node {
            slug
          }
        }
      }
      posts: allContentfulPosts {
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

  data.posts.edges.forEach(({ node }) => {
    createPage({
      path: `blog/${node.slug}`,
      component: blogTemplate,
      context: {
        slug: node.slug,
      },
    })
  })

  // Number of posts
  const posts = data.posts.edges

  // posts per page
  const postPerPage = 5

  // how many pages
  const numPages = Math.ceil(posts.length / postPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `blogs` : `blogs/${i + 1}`,
      component: blogListTemplate,
      context: {
        limit: postPerPage,
        skip: i * postPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
