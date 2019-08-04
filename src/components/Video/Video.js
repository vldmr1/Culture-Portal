import React, { Component} from 'react';
import { Button, Modal, Container, Row, Col  } from 'react-bootstrap';
import './Video.css';
import { injectIntl } from "gatsby-plugin-intl"

class VideoAboutAuthor extends Component {
    state = {
        isModalOpen : false,
    }

    toggleModalWindow = () => {
        this.setState( {isModalOpen: !this.state.isModalOpen} )
    }

    render(){
        const {isModalOpen} = this.state;
        const {id} = this.props;
        const {intl} = this.props;
        const url = "https://www.youtube.com/embed/" + id;


        return(
            <>
                <Container>
                    <Row>
                        <Col>
                            <div className="video-block">
                                <Button variant="primary" onClick={this.toggleModalWindow}>
                                    {this.props.intl.formatMessage({ id: "video_button" })}
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Modal show={isModalOpen} onHide={this.toggleModalWindow}>
                <Modal.Header closeButton>
                    <Modal.Title>Video about author</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe title={id} width="100%" height="360" src={url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                </Modal.Body>
      </Modal>
    </>
        )
    }
}

export default injectIntl(VideoAboutAuthor);