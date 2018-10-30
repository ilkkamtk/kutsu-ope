import React from 'react';
import {ListGroupItem} from 'reactstrap';
// import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setCourseAction} from '../../actions/course-actions';
import {getKutsuApiCallsAction} from '../../actions/kutsuApi-actions';

const CourseItem = ({course, setCourseAction, toggle, getKutsuApiCallsAction, interval}) => {
  const handler = (event) => {
    event.preventDefault();
    toggle('2');
    setCourseAction(course);
    getKutsuApiCallsAction(course.cID);
    interval = setInterval(()=>{
      getKutsuApiCallsAction(course.cID);
    }, 10000);
  };

  return (
      <ListGroupItem tag="button" action
                     onClick={handler}>{course.cName}</ListGroupItem>
  );
};

const mapStateToProps = (store) => ({
  selectedCourse: store.userEventsState.selectedCourse,
});

export default connect(mapStateToProps,
    {setCourseAction, getKutsuApiCallsAction})(CourseItem);
