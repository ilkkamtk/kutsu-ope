import * as actionTypes from '../constants/action-types';

const initialState = {
  courses: [
    {
      cID: '1',
      cName: 'Kurssi 1',
    }],
  calls: [
    {
      kID: 0,
      kName: 'default',
      kType: -1,
      kcID: 0,
    }],
};

export default (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.GET_COURSES:
      return {
        ...state,
        courses: action.courses,
      };
    case actionTypes.GET_CALLS:
      return {
        ...state,
        calls: action.calls,
      };
    case actionTypes.DELETE__CALL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
