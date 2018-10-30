import React from 'react';
import connect from 'react-redux/es/connect/connect';
import {Row, Col, Table, Button} from 'reactstrap';
import {
  deleteKutsuApiCallAction,
  refreshCallList,
} from '../../actions/kutsuApi-actions';
import Moment from 'react-moment';

const CallList = ({calls, deleteKutsuApiCallAction, refreshCallList}) => {
  const handler = (event) => {
    console.log(event.target.dataset.kid);
    const id = event.target.dataset.kid;
    deleteKutsuApiCallAction(id);
    refreshCallList(calls, id);
    console.log(calls);
  };

  const checkID = (call, type) => {
    if (+call.kType === type) {
      return (
          <tr key={call.kID}>
            <td>
              {call.kName}
            </td>
            <td>
              <Moment format="HH.mm">{call.kTime}</Moment>
            </td>
            <td>
              <Button data-kid={call.kID}
                      onClick={handler}>Done</Button>
            </td>
          </tr>
      );
    }
  };

  return (
      <Row className={'pt-2'}>
        <Col>
          <h4>Code problem</h4>
          <Table>
            <thead>
            <tr>
              <th>Name</th>
              <th colSpan={2}>Time</th>
            </tr>
            {(calls.map((call) => {
              return checkID(call, 0);
            }))}
            </thead>
          </Table>
        </Col>

        <Col>
          <h4>Submit tasks</h4>
          <Table>
            <thead>
            <tr>
              <th>Name</th>
              <th colSpan={2}>Time</th>
            </tr>
            {(calls.map((call) => {
              return checkID(call, 1);
            }))}
            </thead>
          </Table>
        </Col>
      </Row>
  );
};

const mapStateToProps = (store) => {
  return {
    calls: store.kutsuApiState.calls,
  };
};

export default connect(mapStateToProps,
    {deleteKutsuApiCallAction, refreshCallList})(CallList);
