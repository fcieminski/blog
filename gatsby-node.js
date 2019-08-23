const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPost = path.resolve(`./src/pages/blog.js`)

  return graphql(`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }
    const posts = result.data.allMarkdownRemark.edges
    posts.forEach(({ node }) => {
      const path = `/blog${node.frontmatter.path}`

      createPage({
        path,
        component: blogPost,
        context: {
          slug: node.frontmatter.path,
          title: node.frontmatter.title,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `path`,
      node,
      value,
    })
  }
}
