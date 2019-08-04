import React from 'react'
import { FormattedMessage} from "gatsby-plugin-intl"
import { Container, Row, Col, Table } from 'react-bootstrap';

const MainPageInfo = () => (
  <Container>
    <Row>
      <Col>
        <h1 style={{
          textAlign: `center`,
          margin: '0 auto',
          width: 'fit-content',
          padding: '25px 0'
        }}>
          <FormattedMessage id="main_page_header" />
        </h1>
      </Col>
    </Row>
    <Row>
      <Col  lg={{ span: 10, offset: 1}}>
        <p style={{textAlign: 'center'}}>
          <FormattedMessage id="main_page_introduction" />
        </p>
      </Col>
    </Row>
  </Container>
)

export default MainPageInfo;