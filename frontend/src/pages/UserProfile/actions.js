import {
  LOAD_USER,
  LOAD_USERS_BLOGS,
} from './constants';

import http from '../../common/utils/http';

export function loadUser(nickname) {
  return async (dispatch) => {
    const response = await http.get('/users?nickname=' + nickname);
    dispatch({type: LOAD_USER, data: {user: response.data}});
  };
}

export function loadUsersBlogs(nickname) {
  return async (dispatch) => {
    const response = await http.get('/blogs?nickname=' + nickname);
    dispatch({type: LOAD_USERS_BLOGS, data: {blogs: response.data}});
  };
}
