import {
  GET_BLOGS_LIST,
  GET_BLOGS_DETAIL,
  ADD_NEW_BLOG,
  EDIT_BLOG,
} from '@crema/constants/ActionTypes';

const initialState = {
  blogLists: [],
  selectedBlog: null,
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BLOGS_LIST:
      return {
        ...state,
        blogLists: action.payload,
      };

    case GET_BLOGS_DETAIL:
      return {
        ...state,
        selectedBlog: action.payload,
      };

    case ADD_NEW_BLOG:
      return {
        ...state,
        blogLists: action.payload,
      };

    case EDIT_BLOG:
      return {
        ...state,
        blogLists: action.payload,
      };

    default:
      return state;
  }
};
export default blogReducer;
