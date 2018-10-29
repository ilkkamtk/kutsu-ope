import * as actionTypes from '../constants/action-types';
import {kutsuApiUrl} from '../constants/config';
import fetchGetJSON from '../util/fetchGetJson';
import fetchDeleteJson from '../util/fetchDeleteJson';

export const getKutsuApiCoursesAction = () => {
  return (dispatch) => {
    fetchGetJSON(`${kutsuApiUrl}/courses`).then((courses) => {
      dispatch({
        type: actionTypes.GET_COURSES,
        courses,
      });
    });
  };
};

export const getKutsuApiCallsAction = () => {
  return (dispatch) => {
    fetchGetJSON(`${kutsuApiUrl}/calls`).then((courses) => {
      dispatch({
        type: actionTypes.GET_CALLS,
        courses,
      });
    });
  };
};

export const deleteKutsuApiCallAction = (id) => {
  console.log(`${kutsuApiUrl}/call/${id}`);

  return (dispatch) => {

    fetchDeleteJson(`${kutsuApiUrl}/call/${id}`).then((call) => {
      dispatch({
        type: actionTypes.DELETE__CALL,
        call,
      });
    });
  };
};