const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPost = path.resolve(`./src/pages/blog.js`)

  const postsMd = graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
        edges {
          node {
            id
            frontmatter {
              title
              path
              date
              author
              featuredImage {
                id
                absolutePath
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
            excerpt
          }
        }
      }
    }
  `)

  const images = graphql(`
    {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            id
            childImageSharp {
              id
              fluid(maxWidth: 500) {
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
  `)

  return Promise.all([postsMd, images]).then(([post, image]) => {
    if (post.errors || image.errors) {
      throw [post.errors, image.errors]
    }

    let imageData = {}
    let postsData = {}

    image.data.allFile.edges.forEach(({ node }) => {
      imageData = {
        fluid: node.childImageSharp.fluid.src,
        original: node.childImageSharp.original.src,
      }
      return imageData
    })

    const posts = post.data.allMarkdownRemark.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      const path = `/blog${post.node.frontmatter.path}`
      postsData = {
        path,
        component: blogPost,
        context: {
          slug: post.node.frontmatter.path,
          previous,
          next,
        },
      }
      return postsData
    })

    createPage({
      ...postsData,
      context: { ...postsData.context, image: imageData },
    })
  })
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
