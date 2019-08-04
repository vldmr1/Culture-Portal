import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from "gatsby-plugin-intl"

import AboutAuthor from '../AboutAuthor/AboutAuthor';
import Video from '../Video/Video';
import GetAuthorsList from '../../utilities/getAutorsList/getAuthorsList'


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
        <Card border="primary" style={{ width: '50%', margin: '0 auto' }}>
            <Card.Header><h2>{props.message}</h2></Card.Header>
            <Card.Body>
                <Card.Title>
                    <AboutAuthor
                        picture={todayAuthor.photo}
                        name={todayAuthor[props.intl.locale].name}
                        date={todayAuthor.yearsOfLife}
                        description={todayAuthor[props.intl.locale].bio}
                    />
                </Card.Title>
                <Video
                    intl={props.intl}
                    id={todayAuthor.video}
                />
                <Link style={{paddingRight: '20px'}}>
                    <Button variant="info">
                        <Link to={`/${todayAuthor.id}`}>
                            {props.intl.formatMessage({ id:"go_to" })}
                        </Link>
                    </Button>
                </Link>
            </Card.Body>
        </Card>
    </>
    )
}

export default AuthorOfTheDay;