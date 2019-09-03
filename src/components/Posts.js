import React from "react"
import { Link } from "gatsby"

const Posts = props => {
  return (
    <article className="post">
      <div
        className="post__image"
        style={{
          backgroundImage: `url(${props.frontmatter.featuredImage.childImageSharp.fluid.src})`,
        }}
      ></div>
      <div className="post__content">
        <div className="post__content-info-box">
          <span className="material-icons material-icons--posts">
            expand_more
          </span>
          <h3>{props.frontmatter.title}</h3>
        </div>
        <div className="post__content-description">
          {props.excerpt.substring(0, 100)}
          <Link state={{ ...props }} to={`blog${props.frontmatter.path}`}>
            ...read more
          </Link>
        </div>
        <div className="post--footer">
          <i className="material-icons">watch_later</i>
          <div className="">{`${props.timeToRead}m | ${
            props.frontmatter.date.split(",")[0]
          }`}</div>
        </div>
      </div>
    </article>
  )
}

export default Posts
