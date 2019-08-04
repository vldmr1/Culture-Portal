import React from "react";
import Slider from "react-slick";

import { Container, Row, Col } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "../Image/Image"
import "./Gallery.css"


const Gallery = (props) => {
  const settings = {
      dots: true,
      className: 'slide-component',
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      // centerMode: true,
      adaptiveHeight: true,
      autoplay: true,
    };
  return (
    <Container>
      <Row>
        <Col>
          <Slider {...settings}>
            {props.images.map( (index) => {
              return (
                <div>
                  <Image src={index}/>
                </div>
              )
            })}
          </Slider>
        </Col>
      </Row>
    </Container>
  );
};

export default Gallery;
