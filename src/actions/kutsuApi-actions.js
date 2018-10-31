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

export const getKutsuApiCallsAction = (id) => {
  return (dispatch) => {
    fetchGetJSON(`${kutsuApiUrl}/calls/${id}`).then((calls) => {
      calls.sort((a, b) => (a.kID - b.kID));
      dispatch({
        type: actionTypes.GET_CALLS,
        calls,
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

export const refreshCallList = (calls, id) => {
  calls = calls.filter(call => call.kID !== id);
  console.log(calls);
  calls.sort((a, b) => (a.kID - b.kID));
  console.log(calls);
  return (dispatch) => {
    dispatch({
      type: actionTypes.REFRESH_CALL_LIST,
      calls,
    });
  };
};