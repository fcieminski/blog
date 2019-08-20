import React, { useState } from "react"
import { Link } from "gatsby"

const Posts = props => {
  return (
    <article className="post">
      <div className="post__image">
        <img src={props.frontmatter.image} />
      </div>
      <div className="post__content">
        <div className="post__content-info-box">
          <span className="material-icons material-icons--posts">
            expand_more
          </span>
          <h3>{props.frontmatter.title}</h3>
        </div>
        <div className="post__content-description">
          {props.excerpt.substring(0, 100)}{" "}
          <Link to={`/${node.frontmatter.path}`}>...read more</Link>
        </div>
      </div>
    </article>
  )
}

export default Posts
