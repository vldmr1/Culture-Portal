import React from "react"
import PropTypes from "prop-types"
import { injectIntl } from "gatsby-plugin-intl"

import Header from "./header"
import Footer from "./footer"
// import "./layout.css"

const Layout = ({ children, intl }) => {

  return (
    <>
      <div className="body-page">
        <Header siteTitle={intl.formatMessage({ id: "main_heading" })} />
        <main style={{}}>{children}</main>
        <Footer></Footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default injectIntl(Layout)
