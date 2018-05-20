import {
  LOAD_BLOG,
} from './constants';

import http from '../../common/utils/http';

export function loadBlog(id) {
  return async (dispatch) => {
    const blog = await http.get('/blogs/' + id );
    const pages = await http.get('/blog_pages', {blog_id: id});
    dispatch({type: LOAD_BLOG, data: {blog: blog.data, pages: pages.data}});
  };
}
