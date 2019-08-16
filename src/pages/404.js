import React, { useState } from "react"

import SEO from "../components/seo"

const NotFoundPage = () => {
  const [amount, setAmout] = useState(0)

  return (
    <div>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>{amount}</p>
      <button onClick={() => setAmout(amount + 1)}>set amout!</button>
    </div>
  )
}

export default NotFoundPage
