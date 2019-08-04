import React from 'react';
import {Row, Col, Table} from 'react-bootstrap';

const Group = ({group}) => (
    <div>
        <Row>
            <Col lg={12}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th colspan={2}>{group.group}</th>
                        </tr>
                    </thead>
                    <tbody>
                    {group.works.map(work => 
                                <tr>
                                    <td>
                                        {work.name}
                                    </td>
                                    <td>
                                        {work.date}
                                    </td>
                                </tr>
                    )}
                    </tbody> 
                </Table> 
            </Col>
        </Row>
    </div>
  );

export default Group;