import React from 'react';
import {Container} from 'react-bootstrap';
import Group from './Group';

import "./WorksList.component.css";

const WorksList = ({worksList}) => (
    <Container>
    <div className={"worksList"}>
      {worksList.map(group=> <Group group={group}/>)}
    </div>
    </Container>
  );

export default WorksList;