import React from 'react';
import { Link } from "gatsby-plugin-intl"
import { Container, Row, Col } from 'react-bootstrap';
import Image from "../Image/Image"
import GetAuthorsList from '../../utilities/getAutorsList/getAuthorsList'

import './AuthorOfTheDay.css'


function getList(){
    const getList = GetAuthorsList();
    const today = new Date().getDate();
    let index = 2;

    if ( today < getList.length){
        index = today;
    }
    else{
       index = Math.floor((today / getList.length)-1);
    }
    return getList[index];
}


const AuthorOfTheDay = (props) => {
    const todayAuthor = getList();
    const pictureUrl = '../../assets/images/uploads/'+todayAuthor.photo;

   return (
    <>
        <Container>
            <Row className="about-autor">
                <Col md={{ span: 5, offset: 1 }} sm={12}>
                    <div className="about-autor__image  ">
                        <Image src={todayAuthor.photo}/>
                    </div>
                </Col>
                <Col md={5} sm={12} className="my-auto about-autor__wrap">
                    <h3 className="about-autor__name">
                        {todayAuthor[props.intl.locale].name} 
                    </h3>
                    <span className="about-autor__date">
                        {todayAuthor.yearsOfLife}
                    </span>
                    <p className="about-autor__desc">
                        {todayAuthor[props.intl.locale].bio}
                    </p>
                    <Link to={`/${todayAuthor.id}`}>
                        {props.intl.formatMessage({ id:"go_to" })}
                    </Link>
                </Col>
            </Row>
        </Container>
    </>
    )
}

export default AuthorOfTheDay;