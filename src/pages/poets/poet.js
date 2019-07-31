import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Video from "../../components/Video/Video"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi, this is poet card</h1>
    <Video
      id="fvkncCBSxFI"
    />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage
