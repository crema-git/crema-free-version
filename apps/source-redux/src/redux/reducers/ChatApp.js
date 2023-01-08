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

const initialState = {
  connectionList: [],
  chatDrawer: false,
  userMessages: null,
  selectedUser: null,
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONNECTIONS_LIST:
      return {
        ...state,
        connectionList: action.payload,
      };

    case TOGGLE_CHAT_DRAWER:
      return {
        ...state,
        chatDrawer: !state.chatDrawer,
      };

    case GET_USER_MESSAGES:
      return {
        ...state,
        userMessages: action.payload,
      };

    case ADD_NEW_MESSAGE: {
      return {
        ...state,
        connectionList: state.connectionList.map((item) =>
          item.id === action.payload.data.connectionData.id
            ? action.payload.data.connectionData
            : item
        ),
        userMessages: action.payload.data.userMessages,
      };
    }

    case EDIT_MESSAGE: {
      return {
        ...state,
        connectionList: state.connectionList.map((item) =>
          item.id === action.payload.data.connectionData.id
            ? action.payload.data.connectionData
            : item
        ),
        userMessages: action.payload.data.userMessages,
      };
    }

    case DELETE_MESSAGE: {
      return {
        ...state,
        connectionList: state.connectionList.map((item) =>
          item.id === action.payload.connectionData.id
            ? action.payload.connectionData
            : item
        ),
        userMessages: action.payload.userMessages,
      };
    }

    case DELETE_USER_MESSAGES: {
      return {
        ...state,
        connectionList: state.connectionList.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
        userMessages: null,
        selectedUser: null,
      };
    }

    case SELECT_USER: {
      return {
        ...state,
        selectedUser: action.payload,
        userMessages: null,
      };
    }

    default:
      return state;
  }
};
export default chatReducer;
