import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
  GET_BLOGS_LIST,
  GET_BLOGS_DETAIL,
  ADD_NEW_BLOG,
  EDIT_BLOG,
} from '@crema/constants/ActionTypes';
import { appIntl } from '@crema/helpers';
import jwtAxios from '@crema/services/auth/JWT';

export const getBlogList = () => {
  const { messages } = appIntl();
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .get('/pages/blogs')
      .then((data) => {
        if (data.status === 200) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: GET_BLOGS_LIST, payload: data.data });
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
export const getBlogDetail = (id) => {
  const { messages } = appIntl();
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .get('/pages/blogs/detail', {
        params: {
          id,
        },
      })
      .then((data) => {
        if (data.status === 200) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: GET_BLOGS_DETAIL, payload: data.data });
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

export const onAddBlog = (blog) => {
  const { messages } = appIntl();
  return (dispatch) => {
    jwtAxios
      .post('/pages/blogs', { blog })
      .then((data) => {
        if (data.status === 200) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({
            type: ADD_NEW_BLOG,
            payload: data.data,
          });
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

export const onEditBlog = (blog) => {
  const { messages } = appIntl();
  return (dispatch) => {
    jwtAxios
      .put('/pages/blogs', { blog })
      .then((data) => {
        if (data.status === 200) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({
            type: EDIT_BLOG,
            payload: data.data,
          });
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
