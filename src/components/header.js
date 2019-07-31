import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Button, Container, Row, Col } from 'react-bootstrap';
import './bootstrap.min.css';

const Header = ({ siteTitle }) => (
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
            <Button variant="info">Home</Button>       
          </Link>
          <Link style={{paddingRight: '20px'}} to="/poets">
            <Button variant="info">Poets</Button>       
          </Link>
          <Link style={{paddingRight: '20px'}} to="/poets">
            <Button variant="info">About us</Button>       
          </Link>
        </Col>
        <Col md={{ span: 4, offset: 2 }} sm={12} style={{textAlign: 'right'}}>
          Language: 
          <Button style={{margin: '5px'}} variant="primary" size="sm">en</Button>
          <Button style={{margin: '5px'}} variant="primary" size="sm">ru</Button>
          <Button style={{margin: '5px'}} variant="primary" size="sm">by</Button>
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

export default Header