import {
  LOAD_USER,
} from './constants';

const initialState = {
  user: {},
};

export function reducer(state = initialState, action) {
  switch (action.type) {
  case LOAD_USER:
    return {
      ...state,
      user: action.data.user,
    };
  default:
    return state;
  }
}
