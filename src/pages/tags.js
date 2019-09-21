import React from "react"

import Layout from "../components/Layout"
import { Link, graphql } from "gatsby"

import "../styles/tagspage.scss"

const Tags = ({ pageContext, data }) => {
  const { tag, postInfo } = pageContext
  const { totalCount } = data.allMarkdownRemark

  return (
    <Layout>
      <div className="tags">
        <h2>{tag}</h2>
        <div>
          {postInfo.map(({ node }) => {
            const { title } = node.frontmatter
            return (
              <Link className="tags__box" to={`/blog/${node.frontmatter.path}`}>
                <p>
                  {title} {node.timeToRead}
                </p>
                <div>{node.excerpt}</div>
                <div className="box__author">
                  <div>{node.frontmatter.author}</div>
                  <div>{node.frontmatter.date}</div>
                </div>
              </Link>
            )
          })}
        </div>
        <Link to="/main-page/">Powrót</Link>
      </div>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`
