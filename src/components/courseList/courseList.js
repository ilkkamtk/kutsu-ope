import React from 'react';
import {ListGroup} from 'reactstrap';
import CourseItem from '../courseItem/courseItem';
import {connect} from 'react-redux';

const CourseList = ({courses, toggle, setCourse, interval}) => {

  return (
      <ListGroup>
        {courses.map((course) => {
          return <CourseItem key={course.cID} course={course}
                             toggle={toggle}
                             setCourse={setCourse} interval={interval}/>;
        })}
      </ListGroup>
  );
};

const mapStateToProps = (store) => {
  return {
    courses: store.kutsuApiState.courses,
  };
};

export default connect(mapStateToProps)(CourseList);
