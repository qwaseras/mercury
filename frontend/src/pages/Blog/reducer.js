import {
  LOAD_BLOG,
} from './constants';

const initialState = {
  blog: {},
  pages: [],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
  case LOAD_BLOG:
    return {
      ...state,
      blog: action.data.blog,
      pages: action.data.pages,
    };
  default:
    return state;
  }
}
