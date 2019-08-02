import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { injectIntl } from "gatsby-plugin-intl"

const Poets = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from Poets Page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <br />
    <Link to="/poets/poet">Great Poet</Link>
  </Layout>
)

export default injectIntl(Poets)
