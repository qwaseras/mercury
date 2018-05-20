import {
  SET_BLOG_ID,
  SET_PAGE_CONTENT,
  CREAT_PAGE,
} from './constants';

import http from '../../common/utils/http';

export function setBlogId(id) {
  return (dispatch) => dispatch({type: SET_BLOG_ID, data: {blogId: id}});
}

export function setPageContent(content) {
  return (dispatch) => dispatch({type: SET_PAGE_CONTENT, data: {content: content}});
}

export function createPage() {
  return async (dispatch, getState) => {
    const state = getState().blogPage;
    await http.post('/blog_pages', {
      blog_id: state.blogId,
      title: 'blog page',
      content: state.pageContent,
    } );
  };
}
