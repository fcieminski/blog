import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/Header"
import "../styles/styles.scss"

const IndexPage = () => {
  const [letters, setLetters] = useState("")
  const [count, setCount] = useState(0)

  useEffect(() => {
    typeText()
  }, [])

  const typeText = () => {
    let interval
    let count = 0
    let msg = "Witaj nieznajomy"
    let finalMsg = msg.split("")
    interval = setInterval(() => {
      setLetters(prevLetters => prevLetters.concat(finalMsg[count]))
      count++
      if (count === msg.length) {
        clearInterval(interval)
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
