import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DevTeam from "../components/DevelopmentTeam/DevelopmentTeam"

const SecondPage = () => (
  <Layout>
    <SEO title="Our Team" />
    <h1>Rolling Scopes School #27</h1>
    <DevTeam />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage