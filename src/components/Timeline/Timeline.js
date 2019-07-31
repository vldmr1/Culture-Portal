import React from "react"

import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

function getRandomColor() {
  var letters = '01234567';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 8)];
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
            dateText={el.date}
            dateInnerStyle={{ background: generatedColor, color: "#fff" }}
            bodyContainerStyle={{ background: textStyle }}
            style={{ color: generatedColor }}>
          <p>{el.desc}</p>
          </TimelineItem>
        )
      }
    )}
    </Timeline>)


export default TimeLine