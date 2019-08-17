import React, { useState, useEffect } from "react"
import SEO from "../components/seo"
import "../styles/styles.scss"
import "../styles/home.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const IndexPage = () => {
  const [letters, setLetters] = useState("Front-end okiem Juniora")

  useEffect(() => {
    typeText()
    return () => {
      typeText()
    }
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
      <SEO title="Home" />
      <div className="hero-image">
        <div className="hero-image__text">
          <h1>{letters}</h1>
          <p className="hero-image__paragraph">początki z programowaniem</p>
        </div>
        <AniLink
          cover
          to="/page-2/"
          direction="up"
          duration={1}
          bg="black"
          className="hero-image__link"
        >
          <span className="material-icons">expand_more</span>
        </AniLink>
      </div>
    </div>
  )
}

export default IndexPage
