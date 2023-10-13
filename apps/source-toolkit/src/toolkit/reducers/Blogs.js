import {
  GET_BLOGS_LIST,
  GET_BLOGS_DETAIL,
  ADD_NEW_BLOG,
  EDIT_BLOG,
} from '@crema/constants/ActionTypes';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  blogLists: [],
  selectedBlog: null,
};

const blogReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(GET_BLOGS_LIST, (state, action) => {
      state.blogLists = action.payload;
    })
    .addCase(GET_BLOGS_DETAIL, (state, action) => {
      state.selectedBlog = action.payload;
    })
    .addCase(ADD_NEW_BLOG, (state, action) => {
      state.blogLists = action.payload;
    })
    .addCase(EDIT_BLOG, (state, action) => {
      state.blogLists = action.payload;
    });
});

export default blogReducer;
