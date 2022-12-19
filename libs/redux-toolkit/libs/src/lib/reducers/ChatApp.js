import {
  ADD_NEW_MESSAGE,
  DELETE_MESSAGE,
  DELETE_USER_MESSAGES,
  EDIT_MESSAGE,
  GET_CONNECTIONS_LIST,
  GET_USER_MESSAGES,
  SELECT_USER,
  TOGGLE_CHAT_DRAWER,
} from '@crema/constants/ActionTypes';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  connectionList: [],
  chatDrawer: false,
  userMessages: null,
  selectedUser: null,
};

const chatReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(GET_CONNECTIONS_LIST, (state, action) => {
      state.connectionList = action.payload;
    })
    .addCase(TOGGLE_CHAT_DRAWER, (state, action) => {
      state.chatDrawer = !state.chatDrawer;
    })
    .addCase(GET_USER_MESSAGES, (state, action) => {
      state.userMessages = action.payload;
    })
    .addCase(ADD_NEW_MESSAGE, (state, action) => {
      state.connectionList = state.connectionList.map((item) =>
        item.id === action.payload.data.user.id
          ? action.payload.data.user
          : item
      );
      state.userMessages = action.payload.data.userMessages;
    })
    .addCase(EDIT_MESSAGE, (state, action) => {
      state.connectionList = state.connectionList.map((item) =>
        item.id === action.payload.data.user.id
          ? action.payload.data.user
          : item
      );
      state.userMessages = action.payload.data.userMessages;
    })
    .addCase(DELETE_MESSAGE, (state, action) => {
      state.connectionList = state.connectionList.map((item) =>
        item.id === action.payload.user.id ? action.payload.user : item
      );
      state.userMessages = action.payload.userMessages;
    })
    .addCase(DELETE_USER_MESSAGES, (state, action) => {
      state.connectionList = state.connectionList.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      state.userMessages = null;
      state.selectedUser = null;
    })
    .addCase(SELECT_USER, (state, action) => {
      state.selectedUser = action.payload;
      state.userMessages = null;
    });
});

// const chatReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_CONNECTIONS_LIST:
//       return {
//         ...state,
//         connectionList: action.payload,
//       };

//     case TOGGLE_CHAT_DRAWER:
//       return {
//         ...state,
//         chatDrawer: !state.chatDrawer,
//       };

//     case GET_USER_MESSAGES:
//       return {
//         ...state,
//         userMessages: action.payload,
//       };

//     case ADD_NEW_MESSAGE: {
//       return {
//         ...state,
//         connectionList: state.connectionList.map((item) =>
//           item.id === action.payload.data.user.id
//             ? action.payload.data.user
//             : item
//         ),
//         userMessages: action.payload.data.userMessages,
//       };
//     }

//     case EDIT_MESSAGE: {
//       return {
//         ...state,
//         connectionList: state.connectionList.map((item) =>
//           item.id === action.payload.data.user.id
//             ? action.payload.data.user
//             : item
//         ),
//         userMessages: action.payload.data.userMessages,
//       };
//     }

//     case DELETE_MESSAGE: {
//       return {
//         ...state,
//         connectionList: state.connectionList.map((item) =>
//           item.id === action.payload.user.id ? action.payload.user : item
//         ),
//         userMessages: action.payload.userMessages,
//       };
//     }

//     case DELETE_USER_MESSAGES: {
//       return {
//         ...state,
//         connectionList: state.connectionList.map((item) =>
//           item.id === action.payload.id ? action.payload : item
//         ),
//         userMessages: null,
//         selectedUser: null,
//       };
//     }

//     case SELECT_USER: {
//       return {
//         ...state,
//         selectedUser: action.payload,
//         userMessages: null,
//       };
//     }

//     default:
//       return state;
//   }
// };
export default chatReducer;
