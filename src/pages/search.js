import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Search from "../components/Search/Search"
import { injectIntl } from "gatsby-plugin-intl"

const autorsList = [
    "Пимен Емельянович Панченко",
    "Рыгор (Григорий) Иванович Бородулин",
    "Якуб Колас",
    "Янка Купала",
    "Максим Адамович Богданович"
];

const SearchPage = () => (
  <Layout>
    <SEO title="Search" />
    <Search autorsList={autorsList}/>
  </Layout>
)

export default injectIntl(SearchPage);
