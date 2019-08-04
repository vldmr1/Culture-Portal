import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainPageInfo from "../components/MainPageInfo/MainPageInfo"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

const IndexPage = ({ intl }) => (
  <Layout>
    <SEO title="Home" />
    <MainPageInfo />
    <h2>
      <FormattedMessage id="author_of_the_day_title" />
    </h2>
  </Layout>
)

export default injectIntl(IndexPage)
