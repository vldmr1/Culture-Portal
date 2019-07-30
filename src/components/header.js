import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1>
        {siteTitle}
      </h1>
      <h2>
        <Link
            to="/poets" >
              Poets
        </Link>
      </h2>
      <h2>
        <Link
            to="/" >
              Home
        </Link>
      </h2>
      <h2>
        <Link
            to="/developers" >
              Our Team
        </Link>
      </h2>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
