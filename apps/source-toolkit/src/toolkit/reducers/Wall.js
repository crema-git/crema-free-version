import {
  CREATE_NEW_POST,
  GET_FEED_POSTS,
  GET_WALL_DATA,
  UPDATE_POST,
} from '@crema/constants/ActionTypes';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  wallData: null,
  postList: [],
};
const wallReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(GET_WALL_DATA, (state, action) => {
      state.wallData = action.payload;
    })
    .addCase(GET_FEED_POSTS, (state, action) => {
      state.postList = action.payload;
    })
    .addCase(CREATE_NEW_POST, (state, action) => {
      state.postList = action.payload;
    })
    .addCase(UPDATE_POST, (state, action) => {
      state.postList = action.payload;
    });
});

export default wallReducer;
