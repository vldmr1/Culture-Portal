import React from "react"

import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const TimeLine = (props) => (
    <Timeline lineColor={'#ddd'}>
      {props.info.map( (el, index) => {
        const generatedColor = getRandomColor();
        return (
          <TimelineItem
            key={index}
            dateText={el.date}
            dateInnerStyle={{ background: generatedColor, color: "#fff" }}
            style={{ color: generatedColor }}>
          <p>{el.text}</p>
          </TimelineItem>
        )
      }
    )}
    </Timeline>)


export default TimeLine