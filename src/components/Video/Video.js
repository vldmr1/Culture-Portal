import React from 'react';

const videoAboutAuthor = (props) => {
    const url = "https://www.youtube.com/embed/" + props.id;
    return <iframe width="640" height="360" src={url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
}

export default videoAboutAuthor;