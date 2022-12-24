import { SET_INITIAL_PATH } from '@crema/constants/ActionTypes';
import { createReducer } from '@reduxjs/toolkit';

const initialSettings = {
  initialPath: '/',
};

const settingsReducer = createReducer(initialSettings, (builder) => {
  builder.addCase(SET_INITIAL_PATH, (state, action) => {
    state.initialPath = action.payload;
  });
});

export default settingsReducer;
