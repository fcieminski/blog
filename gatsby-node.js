const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  const path = createFilePath({ node, getNode, basePath: `blog-page` })
  createNodeField({
    node,
    name: `path`,
    value: path,
  })
}
