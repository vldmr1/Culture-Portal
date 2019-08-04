import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Search from "../components/Search/Search"
import getAutorsList from "../utilities/getAutorsList/getAuthorsList"
import { injectIntl } from "gatsby-plugin-intl"

const autorsList = [
    "Пимен Емельянович Панченко",
    "Рыгор (Григорий) Иванович Бородулин",
    "Якуб Колас",
    "Янка Купала",
    "Максим Адамович Богданович"
];

const SearchPage = ({ intl }) => {
  const poetList = getAutorsList();
  console.log(poetList);

  return (
    <Layout>
      <SEO title="Search" />
      <Search autorsList={autorsList}/>
    </Layout>
  )
}

export default injectIntl(SearchPage);
