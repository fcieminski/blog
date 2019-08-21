import React from "react"
import { graphql, StaticQuery } from "gatsby"

import SEO from "../components/seo"
import Header from "../components/Header"
import Posts from "../components/Posts"
import "../styles/blogpage.scss"

const BlogPage = () => {
  return (
    <>
      <SEO title="Page two" />
      <Header />
      <main className="main">
        <section>
          <div className="main__post">
            <StaticQuery
              query={query}
              render={data => {
                return data.allMarkdownRemark.edges.map(({ node }) => (
                  <Posts key={node.id} {...node}></Posts>
                ))
              }}
            ></StaticQuery>
          </div>
        </section>
      </main>
    </>
  )
}

const query = graphql`
  query MyQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            author
            date
            path
            title
          }
          excerpt(format: PLAIN)
        }
      }
    }
  }
`

export default BlogPage
