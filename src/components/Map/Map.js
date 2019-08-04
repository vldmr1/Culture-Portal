import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from "./Map.module.css";

const Map = (props) => {
  const url = "https://www.google.com/maps/d/embed?mid=" + props.id;
  return (
    <Container>
      <Row>
        <Col>
          <iframe className = {styles.sizeMap} title="poet's map" src={url}>
          </iframe>
        </Col>
      </Row>
    </Container>
  );
};

export default Map;
