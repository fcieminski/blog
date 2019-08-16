import React, { useState } from "react"
import { Link } from "gatsby"
import "../styles/header.scss"

const Header = () => {
  return (
    <div className="header">
      <nav>
        <Link>Hello</Link>
        <Link>Hello</Link>
        <Link>Hello</Link>
      </nav>
    </div>
  )
}

export default Header
