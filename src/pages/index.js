import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"
import AuthorOfTheDay from '../components/AuthorOfTheDay/AuthorOfTheDay';

const IndexPage = ({ intl }) => (
  <Layout>
    <SEO title="Home" />
    <h1>
      <FormattedMessage id="main_page_header" />
    </h1>
    <p>
      <FormattedMessage id="main_page_introduction" />
    </p>
    <h2>
      <FormattedMessage id="author_of_the_day_title" />
      <AuthorOfTheDay/>
    </h2>
  </Layout>
)

export default injectIntl(IndexPage)
