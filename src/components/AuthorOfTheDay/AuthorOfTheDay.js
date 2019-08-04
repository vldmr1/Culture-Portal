import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from "gatsby-plugin-intl"

import AboutAuthor from '../AboutAuthor/AboutAuthor';
import Video from '../Video/Video';

const AuthorOfTheDay = (props) => {
    console.log('prps--', props);
    
   return (
    <>
        <Card border="primary" style={{ width: '50%', margin: '0 auto' }}>
            <Card.Header><h2>{props.message}</h2></Card.Header>
            <Card.Body>
                <Card.Title>
                    <AboutAuthor
                        picture=''
                        name='Yakub Kolos'
                        date='1882-1956'
                        description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                    />
                </Card.Title>
                <Video
                    id="FRfHUhw9KkI"
                />
                <Link style={{paddingRight: '20px'}} to="/">
                    <Button variant="info">
                        {props.intl.formatMessage({ id:"go_to" })}
                    </Button>
                </Link>
            </Card.Body>
        </Card>
            
        
    </>
    )
}

export default AuthorOfTheDay;