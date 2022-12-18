import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  HIDE_MESSAGE,
  SHOW_MESSAGE,
  TOGGLE_APP_DRAWER,
  UPDATING_CONTENT,
} from '@crema/constants/ActionTypes';
import { createReducer } from '@reduxjs/toolkit';

const INIT_STATE = {
  error: '',
  loading: false,
  isAppDrawerOpen: false,
  updatingContent: false,
  message: '',
};

const commonReducer = createReducer(INIT_STATE, (builder) => {
  builder
    .addCase(FETCH_START, (state, action) => {
      state.error = '';
      state.message = '';
      state.loading = true;
    })
    .addCase(UPDATING_CONTENT, (state, action) => {
      state.error = '';
      state.message = '';
      state.updatingContent = true;
    })
    .addCase(FETCH_SUCCESS, (state, action) => {
      state.error = '';
      state.message = '';
      state.loading = false;
      state.updatingContent = false;
    })
    .addCase(SHOW_MESSAGE, (state, action) => {
      state.error = '';
      state.message = action.payload;
      state.loading = false;
      state.updatingContent = false;
    })
    .addCase(FETCH_ERROR, (state, action) => {
      state.error = action.payload;
      state.message = '';
      state.loading = false;
      state.updatingContent = false;
    })
    .addCase(HIDE_MESSAGE, (state, action) => {
      state.error = '';
      state.message = '';
      state.loading = false;
      state.updatingContent = false;
    })
    .addCase(TOGGLE_APP_DRAWER, (state, action) => {
      state.isAppDrawerOpen = !state.isAppDrawerOpen;
    });
});

// const commonReducer = (state = INIT_STATE, action) => {
//   switch (action.type) {
//     case FETCH_START: {
//       return { ...state, error: '', message: '', loading: true };
//     }
//     case UPDATING_CONTENT: {
//       return { ...state, error: '', message: '', updatingContent: true };
//     }
//     case FETCH_SUCCESS: {
//       return {
//         ...state,
//         error: '',
//         message: '',
//         loading: false,
//         updatingContent: false,
//       };
//     }
//     case SHOW_MESSAGE: {
//       return {
//         ...state,
//         error: '',
//         message: action.payload,
//         loading: false,
//         updatingContent: false,
//       };
//     }
//     case FETCH_ERROR: {
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//         message: '',
//         updatingContent: false,
//       };
//     }
//     case HIDE_MESSAGE: {
//       return {
//         ...state,
//         loading: false,
//         error: '',
//         message: '',
//         updatingContent: false,
//       };
//     }
//     case TOGGLE_APP_DRAWER: {
//       return {
//         ...state,
//         isAppDrawerOpen: !state.isAppDrawerOpen,
//       };
//     }
//     default:
//       return state;
//   }
// };
export default commonReducer;
