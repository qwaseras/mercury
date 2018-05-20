import {
  LOAD_USER,
  LOAD_USERS_BLOGS,
} from './constants';

const initialState = {
  user: {},
  blogs: [],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
  case LOAD_USER:
    return {
      ...state,
      user: action.data.user,
    };
  case LOAD_USERS_BLOGS:
    return {
      ...state,
      blogs: action.data.blogs,
    };
  default:
    return state;
  }
}
