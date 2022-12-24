import { GET_USER_LIST } from '@crema/constants/ActionTypes';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  usersList: [],
};

const userListReducer = createReducer(initialState, (builder) => {
  builder.addCase(GET_USER_LIST, (state, action) => {
    state.usersList = action.payload;
  });
});

export default userListReducer;
