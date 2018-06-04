import {
  CREATE_BLOG,
} from './constants';

import http from '../../common/utils/http';

export function createBlog(title, description) {
  return async () => {
    await http.post('/blogs', {blog: {title: title, description: description}} );
  };
}
