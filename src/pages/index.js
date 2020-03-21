import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Albums from "../components/albums/albums"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Albums />
    </Layout>
  )
}

export default IndexPage
