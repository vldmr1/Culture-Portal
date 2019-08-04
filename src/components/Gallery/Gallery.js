import React from "react";
import Slider from "react-slick";

import { Container, Row, Col } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./Gallery.module.css"

const Gallery = (props) => {
  const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  return (
    <Container>
      <Row>
        <Col>
          <Slider {...settings}>
            {props.images.map( (index) => {
              return (
                <div>
                  <img src={index} alt="" className={style.imgSize}/>
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
