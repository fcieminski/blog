import React from "react"
import { graphql, StaticQuery, useStaticQuery, Link } from "gatsby"

import SEO from "../components/seo"
import Header from "../components/Header"
import Posts from "../components/Posts"
import me from "../images/12.png"
import Tags from "./tags"
import "../styles/posthightlight.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        group(field: frontmatter___tags) {
          fieldValue
        }
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
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)
  return (
    <>
      <SEO title="Page two" />
      <Header />
      <main className="main">
        <section className="main__section">
          <div className="main__post">
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Posts key={node.id} {...node}></Posts>
            ))}
          </div>
        </section>
        <aside className="main__about-section">
          <div className="about-section__about">
            <div
              className="about__photo"
              style={{ backgroundImage: `url(${me})` }}
            ></div>
            <div className="about__text">
              <h2>Cześć, jestem Filip</h2>
              <p>
                Programowaniem fascynuje się od zawsze, a zawodowo zajmuję się
                nim od niedawna. Przybliżę Ci front-end, jak junior juniorowi,
                czyli bez niepotrzebnego bólu głowy.
              </p>
            </div>
          </div>
          <div className="about-section__tags">
            {data.allMarkdownRemark.group.map(({ fieldValue }, index) => (
              <Link
                key={index}
                className="tags"
                to={`/tags/${fieldValue
                  .toLowerCase()
                  .split(".")
                  .join("-")}`}
              >
                {fieldValue}
              </Link>
            ))}
          </div>
        </aside>
      </main>
    </>
  )
}

export default BlogPage
