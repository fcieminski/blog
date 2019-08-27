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
  const { timeToRead } = post

  return (
    <article>
      <div>
        <div
          className="image-box__image"
          style={{
            backgroundImage: `url(${frontmatter.featuredImage.childImageSharp.original.src})`,
          }}
        />
        <div className="info__section">
          <div className="info__post-about">
            <div className="post-about__icons">
              <i className="material-icons">watch_later</i>
              <div className="post-about__text">{`CZAS CZYTANIA ${timeToRead} MINUTY`}</div>
            </div>
            <div className="post-about__text">{frontmatter.date}</div>
          </div>
          <h1 className="info__post-title">{frontmatter.title}</h1>
        </div>
      </div>
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      {/* <aside>
          {frontmatter.tags.map(tag => (
            <p>{tag}</p>
          ))}
        </aside> */}
    </article>
  )
}

export default BlogPost
