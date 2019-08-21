import React, { useState, useEffect } from "react"
import SEO from "../components/seo"
import "../styles/styles.scss"
import "../styles/home.scss"
import Transition from "../components/Transition"

const IndexPage = () => {
  const [letters, setLetters] = useState("Front-end okiem Juniora")

  useEffect(() => {
    typeText()
    return () => {
      clearTimeout(typed)
    }
  }, [])

  let startPos = 0
  let typed
  const typeText = () => {
    let cursor = "|"
    let newText = letters
    setLetters(letters.substring(0, startPos) + cursor)
    if (startPos++ === newText.length) {
      startPos = 0
      setLetters(letters.substring(0, letters.length))
    } else {
      typed = setTimeout(typeText, 100)
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
        <Transition
          to="/main-page/"
          direction="up"
          duration={1}
          bg="#141721"
          secondBg="#6aa8b1"
          className="hero-image__link"
        >
          <span className="material-icons material-icons--light">
            expand_more
          </span>
        </Transition>
      </div>
    </div>
  )
}

export default IndexPage
