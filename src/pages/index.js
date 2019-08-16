import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/Header"
import "../styles/styles.scss"

const IndexPage = () => {
  const [letters, setLetters] = useState("")

  useEffect(() => {
    typeText()
  }, [])

  const typeText = () => {
    let count = 0
    let msg = "Witaj nieznajomy"
    let finalMsg = msg.split("")
    let typeWrite = setInterval(() => {
      setLetters(prevLetters => prevLetters.concat(finalMsg[count]))
      count++
      if (count === msg.length) {
        clearInterval(typeWrite)
      }
    }, 100)
  }

  return (
    <div>
      <Header />
      <SEO title="Home" />
      <div className="hero-image">
        <h1 className="hero-image__text">{letters}</h1>
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  )
}

export default IndexPage
