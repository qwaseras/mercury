import {
  LOAD_BLOG_PAGE,
} from './constants';

const initialState = {
  blogPage: {},
};

export function reducer(state = initialState, action) {
  switch (action.type) {
  case LOAD_BLOG_PAGE:
    return {
      ...state,
      blogPage: action.data.blogPage,
    };
  default:
    return state;
  }
}
