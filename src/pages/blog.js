import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import PageUp from "../components/utils/PageUp"
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
  const [scroll, setScroll] = useState(false)
  const [animateInfo, setAnimateInfo] = useState(false)

  useEffect(() => {
    const scroll = () => {
      if (window.pageYOffset > 400) {
        setAnimateInfo(true)
        setScroll(true)
      } else {
        setScroll(false)
        setAnimateInfo(false)
      }
    }
    window.addEventListener("scroll", scroll)
    return () => {
      window.removeEventListener("scroll", scroll)
    }
  }, [])

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
      <PageUp
        style={{ transform: scroll ? "translateX(0%)" : "translateX(300%)" }}
      />
      <div
        className={
          animateInfo
            ? "info__section--animation"
            : "info__section--animation-stop"
        }
      >
        <div className="info__section--animate">
          <div className="info__post-about">
            <div className="post-about__icons">
              <i className="material-icons">watch_later</i>
              <div className="post-about__text">{`CZAS CZYTANIA ${timeToRead} MINUTY`}</div>
            </div>
          </div>
          <h1 className="info__post-title--animate">{frontmatter.title}</h1>
        </div>
      </div>
    </article>
  )
}

export default BlogPost
