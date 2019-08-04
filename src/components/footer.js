import React from "react"
import { Container, Row, Col } from 'react-bootstrap';

import './footer.css';

const Footer = () => {
    return (<>
        <footer>
            <Container>
                <Row>
                    <Col>
                        <div className="copy">
                            <span>&copy; 2019 Rolling Scopes School Team</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    </>)
}

export default Footer