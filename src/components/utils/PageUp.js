import React from "react"

const PageUp = props => {
  const goUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <div onClick={goUp} style={props.style} className="page-up__button">
        <i className="material-icons">arrow_upward</i>
      </div>
    </>
  )
}

export default PageUp
