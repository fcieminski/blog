const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPost = path.resolve(`./src/pages/blog.js`)
  const tagSite = path.resolve(`./src/pages/tags.js`)

  const postFetch = graphql(`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            html
            id
            timeToRead
            excerpt
            frontmatter {
              highlight
              author
              date
              path
              title
              tags
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 600) {
                    src
                  }
                  original {
                    src
                  }
                }
              }
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
          postData: node,
        },
      })
    })
  })

  const tagsFetch = graphql(`
    {
      tags: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          edges {
            node {
              excerpt
              frontmatter {
                author
                date
                title
                path
              }
              timeToRead
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }
    const tags = result.data.tags.group

    tags.forEach(tag => {
      const path = `/tags/${tag.fieldValue
        .toLowerCase()
        .split(".")
        .join("-")}`
      createPage({
        path,
        component: tagSite,
        context: {
          tag: tag.fieldValue,
          postInfo: tag.edges,
        },
      })
    })
  })

  return Promise.all([postFetch, tagsFetch])
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `md`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `path`,
      node,
      value,
    })
  }
}
