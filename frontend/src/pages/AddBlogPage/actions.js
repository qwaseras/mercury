import {
  SET_PAGE_CONTENT,
  LOAD_BLOG,
} from './constants';

import http from '../../common/utils/http';

export function setPageContent(content) {
  return (dispatch) => dispatch({
    type: SET_PAGE_CONTENT,
    data: {content: content},
  });
}

export function createPage() {
  return async (dispatch, getState) => {
    const state = getState().blogPage;
    await http.post('/blog_pages', {
      blog_id: state.blog.id,
      title: 'blog page',
      content: state.pageContent,
    } );
  };
}
export function loadBlog(id) {
  return async (dispatch) => {
    const blog = await http.get('/blogs/' + id );
    dispatch({type: LOAD_BLOG, data: {blog: blog.data}});
  };
}
