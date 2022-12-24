import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  GET_USER_LIST,
} from '@crema/constants/ActionTypes';
import { appIntl } from '@crema/helpers';
import jwtAxios from '@crema/services/auth/JWT';

export const onGetUserList = () => {
  return (dispatch) => {
    const { messages } = appIntl();
    dispatch({ type: FETCH_START });
    jwtAxios
      .get('/api/user/list')
      .then((data) => {
        if (data.status === 200) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: GET_USER_LIST, payload: data.data });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: messages['message.somethingWentWrong'],
          });
        }
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };
};
