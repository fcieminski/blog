import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "../styles/blogpage.scss"

const BlogPost = ({ location: { state: post } }) => {
  const {
    allFile: { edges: info },
  } = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            id
            childImageSharp {
              fluid(maxWidth: 1000) {
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

  const { frontmatter } = post
  const { html } = post

  return (
    <section className="blog-section">
      <div className="image-box">
        <img
          className="image-box__image"
          src={frontmatter.featuredImage.childImageSharp.fluid.src}
          alt={frontmatter.title}
        />
      </div>
      <article
        dangerouslySetInnerHTML={{ __html: html }}
        className="blog-content"
      />
    </section>
  )
}

export default BlogPost
