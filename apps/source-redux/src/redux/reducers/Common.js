import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  HIDE_MESSAGE,
  SHOW_MESSAGE,
  TOGGLE_APP_DRAWER,
} from '@crema/constants/ActionTypes';

const INIT_STATE = {
  error: '',
  loading: true,
  isAppDrawerOpen: false,
  message: '',
};

const commonReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_START: {
      return { ...state, error: '', message: '', loading: true };
    }
    case FETCH_SUCCESS: {
      return {
        ...state,
        error: '',
        message: '',
        loading: false,
      };
    }
    case SHOW_MESSAGE: {
      return {
        ...state,
        error: '',
        message: action.payload,
        loading: false,
      };
    }
    case FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
        message: '',
      };
    }
    case HIDE_MESSAGE: {
      return {
        ...state,
        loading: false,
        error: '',
        message: '',
      };
    }
    case TOGGLE_APP_DRAWER: {
      return {
        ...state,
        isAppDrawerOpen: !state.isAppDrawerOpen,
      };
    }
    default:
      return state;
  }
};
export default commonReducer;
