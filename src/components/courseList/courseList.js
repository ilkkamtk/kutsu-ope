import React, {Component} from 'react';
import {ListGroup} from 'reactstrap';
import CourseItem from '../courseItem/courseItem';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getKutsuApiCoursesAction} from '../../actions/kutsuApi-actions';

const CourseList = ({courses, toggle, setCourse, getKutsuApiCoursesAction}) => {

  const componentDidMount = () => {
    getCourses();
  };

  const getCourses = () => {
    console.log('kutsuttu');
    getKutsuApiCoursesAction();
  };

  return (
      <ListGroup>
        {courses.map((course) => {
          console.log(course);
          return <CourseItem key={course.cID} course={course}
                             toggle={toggle}
                             setCourse={setCourse}/>;
        })}
      </ListGroup>
  );
};

const mapStateToProps = (store) => {
  return {
    courses: store.kutsuApiState.courses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getKutsuApiCoursesAction: bindActionCreators(
        getKutsuApiCoursesAction,
        dispatch,
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
