import React, { useState } from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Header from "../components/Header"
import "../styles/blogpage.scss"

import { data } from "../components/mockup"

const BlogPage = () => {
  const [posts, setData] = useState(data)
  return (
    <>
      <SEO title="Page two" />
      <Header />
      <main className="main">
        <section>
          <div className="main__post">
            {posts.map(post => (
              <article className="post">
                <div className="post__image">
                  <img src={post.image} />
                </div>
                <div className="post__content">
                  <div className="post__content-info-box">
                    <span className="material-icons material-icons--posts">
                      expand_more
                    </span>
                    <p>{post.title}</p>
                  </div>
                  <div className="post__content-description">
                    {post.description.substring(0, 100)} ...read more
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

export default BlogPage
