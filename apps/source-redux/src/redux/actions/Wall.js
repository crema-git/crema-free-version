import {
  CREATE_NEW_POST,
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  GET_FEED_POSTS,
  GET_WALL_DATA,
  UPDATE_POST,
} from '@crema/constants/ActionTypes';
import IntlMessages from '@crema/helpers/IntlMessages';
import React from 'react';
import jwtAxios from '@crema/services/auth/JWT';

export const onGetWallData = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .get('/wall')
      .then((data) => {
        if (data.status === 200) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: GET_WALL_DATA, payload: data.data });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: <IntlMessages id='message.somethingWentWrong' />,
          });
        }
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };
};

export const onGetPostsList = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .get('/wall/posts')
      .then((data) => {
        if (data.status === 200) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: GET_FEED_POSTS, payload: data.data });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: <IntlMessages id="message.somethingWentWrong" />,
          });
        }
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };
};

export const onCreateNewPost = (post) => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .post('/wall/posts', { post })
      .then((data) => {
        if (data.status === 200) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: CREATE_NEW_POST, payload: data.data });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: <IntlMessages id="message.somethingWentWrong" />,
          });
        }
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };
};

export const onUpdatePostStatus = (postId, status) => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .put('/wall/posts', { postId, status })
      .then((data) => {
        if (data.status === 200) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({
            type: UPDATE_POST,
            payload: data.data,
          });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: <IntlMessages id="message.somethingWentWrong" />,
          });
        }
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };
};

export const onAddNewComment = (postId, comment) => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .post('/wall/posts/comments', { postId, comment })
      .then((data) => {
        if (data.status === 200) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: UPDATE_POST, payload: data.data });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: <IntlMessages id="message.somethingWentWrong" />,
          });
        }
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };
};
