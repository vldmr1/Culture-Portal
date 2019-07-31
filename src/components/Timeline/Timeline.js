import React from "react"

import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

const TimeLine = (props) => (
    <Timeline lineColor={'#ddd'}>
      {props.info.map( (el, index) => (
        <TimelineItem
          key={index}
          dateText={el.date}
          style={{ color: '#e86971' }}>
        <p>{el.text}</p>
        </TimelineItem>
      )
    )}
    </Timeline>)


export default TimeLine