import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/Header"
import "../styles/styles.scss"
import "../styles/home.scss"

const IndexPage = () => {
  const [letters, setLetters] = useState("Front-end okiem Juniora")

  useEffect(() => {
    typeText()
  }, [])

  let startPos = 0
  const typeText = () => {
    let cursor = "|"
    let newText = letters
    setLetters(letters.substring(0, startPos) + cursor)
    if (startPos++ === newText.length) {
      startPos = 0
      setLetters(letters.substring(0, letters.length))
    } else {
      setTimeout(typeText, 100)
    }
  }

  return (
    <div>
      {/* <Header /> */}
      <SEO title="Home" />
      <div className="hero-image">
        <div className="hero-image__text">
          <h1>{letters}</h1>
          <p className="hero-image__paragraph">początki z programowaniem</p>
        </div>
        <Link className="hero-image__link" to="page-2">
          <span className="material-icons">expand_more</span>
        </Link>
      </div>
    </div>
  )
}

export default IndexPage
