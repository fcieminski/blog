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
                <div className="box__title">
                  <p>{title}</p>
                  <div className="box__title-read">
                    <i class="material-icons">watch_later</i>
                    {node.timeToRead} min
                  </div>
                </div>
                <div>{node.excerpt}</div>
                <div className="box__author">
                  <i class="material-icons">calendar_today</i>
                  {node.frontmatter.date}
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
          timeToRead
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`
