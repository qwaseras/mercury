import {
  SET_PAGE_CONTENT,
  LOAD_BLOG,
} from './constants';

const initialState = {
  blog: {},
  pageContent: '',
};

export function reducer(state = initialState, action) {
  switch (action.type) {
  case SET_PAGE_CONTENT:
    return {
      ...state,
      pageContent: action.data.content,
    };
  case LOAD_BLOG:
    return {
      ...state,
      blog: action.data.blog,
    };
  default:
    return state;
  }
}
