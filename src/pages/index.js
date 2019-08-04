import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainPageInfo from "../components/MainPageInfo/MainPageInfo"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"
import AuthorOfTheDay from '../components/AuthorOfTheDay/AuthorOfTheDay';

const IndexPage = ({ intl }) => (
  <Layout>
    <SEO title="Home" />
    <MainPageInfo />
    <AuthorOfTheDay
      intl={intl}
      message={<FormattedMessage id="author_of_the_day_title" />}
    />
  </Layout>
)

export default injectIntl(IndexPage)
