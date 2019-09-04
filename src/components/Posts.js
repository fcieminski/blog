import React from "react"
import { Link } from "gatsby"

const Posts = props => {
  let dateFormatter = new Intl.DateTimeFormat("pl", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  let newDate = []
  let switchDate = props.frontmatter.date.split(",")[0].split(".")
  newDate.push(switchDate[1], switchDate[0], switchDate[2])

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
          <h3>{props.frontmatter.title}</h3>
        </div>
        <div className="post__content-description">
          {props.excerpt.substring(0, 100)}...
        </div>
        <Link state={{ ...props }} to={`blog${props.frontmatter.path}`}>
          <i className="material-icons material-icons--posts">expand_more</i>
          {new Date().to}
        </Link>
        <div className="post--footer">
          <i className="material-icons">watch_later</i>
          <div className="">{`${props.timeToRead}m | ${dateFormatter.format(
            new Date(newDate.join(" "))
          )}`}</div>
        </div>
      </div>
    </article>
  )
}

export default Posts
