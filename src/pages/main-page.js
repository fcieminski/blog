import React from "react"

import SEO from "../components/seo"
import MainPage from "../components/MainPage"
import Layout from "../components/Layout"

const Home = () => {
  return (
    <>
      <SEO title="Page two" />
      <Layout>
        <MainPage />
      </Layout>
    </>
  )
}

export default Home
