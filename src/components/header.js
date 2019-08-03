import { Link, FormattedMessage, injectIntl } from "gatsby-plugin-intl"
import PropTypes from "prop-types"
import React from "react"
import { Button, Container, Row, Col } from 'react-bootstrap';
import './bootstrap.min.css';
import Language from "./language"

const Header = ({ siteTitle, intl }) => (
  <header
    style={{
      background: `rebeccapurple`,
      color: 'white',
      marginBottom: `1.45rem`,
    }}
  >
    <Container>
      <Row>
        <Col>
          <h1>
            {siteTitle}
          </h1>
        </Col>
      </Row>
      <Row>
        <Col md={6} sm={12}>
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
          <Link style={{paddingRight: '20px'}} to="/developers">
            <Button variant="info">
            {intl.formatMessage({ id: "developers_link" })}
            </Button>
          </Link>
        </Col>
        <Col md={{ span: 4, offset: 2 }} sm={12} style={{textAlign: 'right'}}>
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