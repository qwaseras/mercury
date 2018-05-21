import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import moment from 'moment';

import {getUserId} from '../../common/utils/auth';
import Header from '../../components/Layout/Header';

import {
  loadBlog,
} from './actions';

class BlogPage extends Component {
  componentWillMount() {
    const id = this.props.match.params.id;
    this.props.actions.loadBlog(id);
  }
  render() {
    const {
      blog,
      pages,
    } = this.props;
    return (
      <div>
        <Header
          history={this.props.history}
          hideImg={true}
          loadUser={this.handleUserLoad}
        />
        <div className="container">
          <h2>{blog.title}</h2>
          {
            getUserId() === blog.user_id ? (
              <a onClick={() => (
                this.props.history.push({pathname: '/add-page/' + blog.id})
              )}>add a page</a>
            ) : ''
          }
          {
            pages.map((page) => (
              <div className="single-blog-area blog-style-2 mb-50 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1000ms">
                <div className="row align-items-center">
                  <div className="col-12 col-md-6">
                    <div className="single-blog-thumbnail">
                      <img src={require('../../img/blog-img/3.jpg')} alt=""/>
                      <div className="post-date">
                        <a>
                          {moment(page.created_ad).format('DD')}
                          <span>{moment(page.created_ad).format('MMM')}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="single-blog-content">
                      <div className="line"></div>
                      <a className="post-tag">Lifestyle</a>
                      <h4>
                        <a
                          onClick={() => this.props.history.push('/blog-page/' + page.id)}
                          className="post-headline">
                          {page.title}
                        </a>
                      </h4>
                      <p>{page.description}</p>
                      <div className="post-meta">
                        <p>By <a>james smith</a></p>
                        <p>3 comments</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.blog,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        loadBlog,
      },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage);
