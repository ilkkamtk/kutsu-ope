import * as actionTypes from '../constants/action-types';

const initialState = {
  selectedCourse: {},
};

export default (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.SELECT_COURSE:
      return {
        ...state,
        selectedCourse: action.selectedCourse,
      };
    default:
      return state;
  }
}
