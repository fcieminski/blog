import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Header from "../components/Header"

const BlogPage = () => (
  <>
    <SEO title="Page two" />
    <Header />
    <main className="main">
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </main>
  </>
)

export default BlogPage
