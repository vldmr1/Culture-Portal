import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  // const que = useStaticQuery(graphql`
  //   query Poets {
  //     allPoetsJson {
  //       edges {
  //         node {
  //           id
  //         }
  //       }
  //     }
  //   }
  // `)

  // console.log(que);

  return (
    <Layout>
      <SEO title="Home" />
      <h1>This page is about Belorussian poets</h1>
      <p>Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer
        took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged. It was popularised in the 1960s
        with the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.</p>
      <h2>Author of the day</h2>
    </Layout>
  )
}

export default IndexPage
