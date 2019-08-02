import React from "react"
import PropTypes from "prop-types"
import { injectIntl } from "gatsby-plugin-intl"

import Header from "./header"
// import "./layout.css"

const Layout = ({ children, intl }) => {

  return (
    <>
      <Header siteTitle={intl.formatMessage({ id: "main_heading" })} />
      <div>
        <main>{children}</main>
        <footer>
          Footer
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default injectIntl(Layout)
