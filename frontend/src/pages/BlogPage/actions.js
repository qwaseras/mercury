import {
  LOAD_BLOG_PAGE,
} from './constants';

import http from '../../common/utils/http';

export function loadBlogPage(id) {
  return async (dispatch, getState) => {
    const response = await http.get('/blog_pages/' + id );
    dispatch({type: LOAD_BLOG_PAGE, data: {blogPage: response.data}});
  };
}
