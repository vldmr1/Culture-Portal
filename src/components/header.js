import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Button } from 'react-bootstrap';
import './bootstrap.min.css';

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
      <Link
        to="/poets" 
      >
        <Button variant="warning">Poets</Button>       
      </Link>

      <Link
        to="/"
        style={{
          margin: '1rem',
        }}
      >
        <Button variant="warning">Home</Button>       
      </Link>

      <Link
        to="/" 
      >
        <Button variant="warning">About us</Button>       
      </Link>
 
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