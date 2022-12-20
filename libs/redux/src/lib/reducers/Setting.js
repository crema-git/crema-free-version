import { SET_INITIAL_PATH } from '@crema/constants/ActionTypes';

const initialSettings = {
  initialPath: '/',
};

const settingsReducer = (state = initialSettings, action) => {
  switch (action.type) {
    case SET_INITIAL_PATH:
      return {
        ...state,
        initialPath: action.payload,
      };

    default:
      return state;
  }
};

export default settingsReducer;
