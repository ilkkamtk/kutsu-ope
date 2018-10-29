import * as actionTypes from '../constants/action-types';

const setCourse = selectedCourse => ({
  type: actionTypes.SELECT_COURSE,
  selectedCourse,
});

export const setCourseAction = selectedCourse => dispatch => {
  dispatch(setCourse(selectedCourse));
};
