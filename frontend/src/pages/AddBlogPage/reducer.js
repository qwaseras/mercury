import {
  SET_BLOG_ID,
  SET_PAGE_CONTENT,
} from './constants';

const initialState = {
  blogId: 0,
  pageContent: '',
};

export function reducer(state = initialState, action) {
  switch (action.type) {
  case SET_BLOG_ID:
    return {
      ...state,
      blogId: action.data.blogId,
    };
  case SET_PAGE_CONTENT:
    return {
      ...state,
      pageContent: action.data.content,
    };
  default:
    return state;
  }
}
