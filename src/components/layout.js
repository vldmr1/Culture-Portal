import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
// import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
      <Header siteTitle={'Poets of Belarus'} />
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

export default Layout
