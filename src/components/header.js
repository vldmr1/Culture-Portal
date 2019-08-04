import { Link, FormattedMessage, injectIntl } from "gatsby-plugin-intl"
import PropTypes from "prop-types"
import React from "react"
import { Button, Container, Row, Col } from 'react-bootstrap';
// import './bootstrap.min.css';
import Language from "./language"
import './header.css'

const Header = ({ siteTitle, intl }) => (
  <header className="page-header">
    <Container>
      <Row>
        <Col md={6} sm={12} >
          <h1>
            {siteTitle}
          </h1>
        </Col>
        <Col md={6} sm={12} className="my-auto page-header__menu">
          <Link style={{paddingRight: '20px'}}  to="/">
            <Button variant="info" >
              {intl.formatMessage({ id: "home_link" })}
            </Button>
          </Link>
          <Link style={{paddingRight: '20px'}} to="/poets">
            <Button variant="info">
              {intl.formatMessage({ id: "poets_link" })}
            </Button>
          </Link>
          <Link to="/developers">
            <Button variant="info">
            {intl.formatMessage({ id: "developers_link" })}
            </Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 4, offset: 8 }} sm={12} style={{textAlign: 'right'}} className="page-header__language-menu">
          <Language />
        </Col>
      </Row>

    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default injectIntl(Header)