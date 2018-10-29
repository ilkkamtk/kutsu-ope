import React from 'react';
import {ListGroupItem} from 'reactstrap';
// import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setCourseAction} from '../../actions/course-actions';

const CourseItem = ({course, selectedCourse, selectCourseAction, toggle, key}) => {
  const handler = (event) => {
    event.preventDefault();
    toggle('2');
    console.log(course);
    selectCourseAction(course);
  };

  return (
      <ListGroupItem tag="button" action
                     onClick={handler}>{course.cName}</ListGroupItem>
  );
};

const mapStateToProps = (store) => ({
  selectedCourse: store.userEventsState.selectedCourse,
});

export default connect(mapStateToProps, {selectCourseAction: setCourseAction})(CourseItem);
