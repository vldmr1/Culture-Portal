import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import styles from "./AboutAuthor.module.css";
import Image from "../Image/Image"

const AboutAuthor = ({ picture, name, date, description }) => (
    <Container>
      <Row>
        <Col className = {styles.poetContent}>
      <div className = {styles.poetImage}>
        <Image src={picture} />
      </div>
      <div className = {styles.poetTitle}>
        {name}
      </div>
      <div>
        {date}
      </div>
      <div className = {styles.poetDescription}>
        {description}
      </div>
        </Col>
      </Row>
    </Container>
  );

export default AboutAuthor;
