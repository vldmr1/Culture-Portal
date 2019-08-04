import React from "react"

import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

function getRandomColor() {
  var letters = '0123456789ABC';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 13)];
  }
  return color;
}

const TimeLine = (props) => (
    <Timeline lineColor={'#ddd'}>
      {props.info.map( (el, index) => {
        const generatedColor = getRandomColor();
        const textStyle = index % 2 == 0? '#ddd': 'inherit';
        return (
          <TimelineItem
            key={index}
            dateText={el.time}
            dateInnerStyle={{ background: generatedColor, color: "#fff" }}
            bodyContainerStyle={{ background: textStyle }}
            style={{ color: generatedColor }}>
          <h3>{el.title}</h3>
          <p>{el.desc}</p>
          </TimelineItem>
        )
      }
    )}
    </Timeline>)


export default TimeLine