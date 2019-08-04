import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Search from "../components/Search/Search"
import getAutorsList from "../utilities/getAutorsList/getAuthorsList"
import { injectIntl } from "gatsby-plugin-intl"

const SearchPage = ({ intl }) => {
  const autorsList = getAutorsList().map(function(item) {
    return {
      id: item.id,
      be: `${item.be.name}, ${item.be.location}`,
      en: `${item.en.name}, ${item.en.location}`, 
      ru: `${item.ru.name}, ${item.ru.location}`
    }
  });
  return (
    <Layout>
      <SEO title="Search" />
      <Search autorsList={autorsList} locale={intl.locale}/>
    </Layout>
  )
}

export default injectIntl(SearchPage);
