import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/Header"
import "../styles/styles.scss"
import "../styles/home.scss"

const IndexPage = () => {
  const [letters, setLetters] = useState(
    "There are only 10 types of people in the world"
  )

  useEffect(() => {
    typeText()
  }, [])

  var iArrLength = letters.length
  let startPos = 0

  const typeText = () => {
    let newText = letters
    setLetters(letters.substring(0, startPos) + "|")
    if (startPos++ === newText.length) {
      startPos = 0
    } else {
      setTimeout(typeText, 100)
    }
  }

  return (
    <div>
      {/* <Header /> */}
      <SEO title="Home" />
      <div className="hero-image">
        <h1 className="hero-image__text">{letters}</h1>
      </div>
      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </div>
  )
}

export default IndexPage
