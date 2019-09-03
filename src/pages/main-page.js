import React from "react"
import { graphql, StaticQuery } from "gatsby"

import SEO from "../components/seo"
import Header from "../components/Header"
import Posts from "../components/Posts"
import me from "../images/12.png"
import "../styles/posthightlight.scss"

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
        <aside className="main__about-section">
          <div className="about-section__about">
            <div style={{ backgroundImage: `url(${me})` }}></div>
            <div>
              <h2>Lorem, ipsum dolor.</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae, temporibus.
              </p>
            </div>
          </div>
          <div className="about-section__tags"></div>
        </aside>
      </main>
    </>
  )
}

const query = graphql`
  query MyQuery {
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
`

export default BlogPage
