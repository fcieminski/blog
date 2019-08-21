import React, { useState } from "react"
import { Link } from "gatsby"
import "../styles/header.scss"
import me from "../images/12.png"

const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <div className="header-nav__me">
          <div className="header-nav__photo-box">
            <img src={me} />
          </div>
          <p className="header-nav__title">Front-end okiem Juniora</p>
        </div>
        <div className="header-nav__links">
          <Link to="#">Hello</Link>
          <Link to="#">Hello</Link>
          <Link to="#">Hello</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
