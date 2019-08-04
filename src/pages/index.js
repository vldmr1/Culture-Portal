import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

const IndexPage = ({ intl }) => (
  <Layout>
    <SEO title="Home" />
    <h1 style={{
      textAlign: `center`
    }}>
      <FormattedMessage id="main_page_header" />
    </h1>
    <p style={{
      textAlign: `justify`,
      padding: `0 5rem`
    }}>
      <FormattedMessage id="main_page_introduction" />
    </p>
    <h2>
      <FormattedMessage id="author_of_the_day_title" />
    </h2>
  </Layout>
)

export default injectIntl(IndexPage)
