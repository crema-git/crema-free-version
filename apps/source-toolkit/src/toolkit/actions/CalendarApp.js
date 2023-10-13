import {
  CREATE_NEW_TASK,
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  GET_TASK_DETAIL,
  GET_TASK_LIST,
  GET_TODO_PRIORITY_LIST,
  GET_TODO_STATUS_LIST,
  SHOW_MESSAGE,
  UPDATE_TASK_DETAIL,
} from '@crema/constants/ActionTypes';
import { appIntl } from '@crema/helpers';
import jwtAxios from '@crema/services/auth/JWT';

export const onGetCalTaskList = (type, name, currentPage) => {
  const { messages } = appIntl();
  const page = currentPage ? currentPage : null;
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .get('/api/calendar/task/list', {
        params: {
          type: type,
          name: name,
          page: page,
        },
      })
      .then((data) => {
        if (data.status === 200) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: GET_TASK_LIST, payload: data.data });
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

export const onGetCalPriorityList = () => {
  const { messages } = appIntl();
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .get('/api/calendar/priority/list')
      .then((data) => {
        if (data.status === 200) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: GET_TODO_PRIORITY_LIST, payload: data.data });
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

export const onGetCalStatusList = () => {
  const { messages } = appIntl();
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .get('/api/calendar/status/list')
      .then((data) => {
        if (data.status === 200) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: GET_TODO_STATUS_LIST, payload: data.data });
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

export const onCreateCalTask = (task) => {
  const { messages } = appIntl();
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .post('/api/calendar/compose', { task })
      .then((data) => {
        if (data.status === 200) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: CREATE_NEW_TASK, payload: data.data });
          dispatch({
            type: SHOW_MESSAGE,
            payload: messages['task.created'],
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

export const onGetSelectedCalTask = (id) => {
  const { messages } = appIntl();
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .get(`/api/calendar/task/`, {
        params: {
          id: id,
        },
      })
      .then((data) => {
        if (data.status === 200) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: GET_TASK_DETAIL, payload: data.data });
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

export const onUpdateSelectedCalTask = (task) => {
  const { messages } = appIntl();
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .put('/api/calendar/task/', { task })
      .then((data) => {
        if (data.status === 200) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({
            type: UPDATE_TASK_DETAIL,
            payload: { data: data.data, task },
          });
          dispatch({
            type: SHOW_MESSAGE,
            payload:
              task.folderValue === 126
                ? messages['task.deleted']
                : messages['task.updated'],
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
