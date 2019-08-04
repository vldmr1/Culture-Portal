import React, { Component} from 'react';
import { Button, Modal } from 'react-bootstrap';

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
        const url = "https://www.youtube.com/embed/" + id;


        return(
            <>
                <Button variant="primary" onClick={this.toggleModalWindow}>
                    Watch video
                </Button>
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

export default VideoAboutAuthor;