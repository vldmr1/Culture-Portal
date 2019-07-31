import React from 'react';

const videoAboutAuthor = (props) => {
    console.log('id', props);
    
    const url = "https://www.youtube.com/embed/" + props.id;
    return <iframe width="640" height="360" src={url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
}

export default videoAboutAuthor;