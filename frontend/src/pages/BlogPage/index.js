import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Header from '../../components/Layout/Header';
import Editor from '../../components/AddBlogPage/Editor';
import {getUserId} from '../../common/utils/auth';

import {
  loadBlogPage,
} from './actions';

class BlogPage extends Component {
  async componentWillMount() {
    const id = this.props.match.params.pageId;
    await this.props.actions.loadBlogPage(id);
  }
  render() {
    const {
      blogPage,
    } = this.props;
    return (
      <div>
        <Header
          history={this.props.history}
          hideImg={true}
          loadUser={this.handleUserLoad}
        />
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-9">
              <div class="single-blog-area blog-style-2 mb-50">
                <div class="single-blog-content">
                  <div class="line"></div>
                  <a class="post-tag">Lifestyle</a>
                  <h4><a class="post-headline mb-0">{blogPage.title}</a></h4>
                  <div class="post-meta mb-50">
                    <p>By <a>james smith</a></p>
                    <p>3 comments</p>
                  </div>
                  <div className="content" dangerouslySetInnerHTML={{__html: blogPage.content}}></div>
                </div>
              </div>

              <div class="blog-post-author mt-100 d-flex">
                <div class="author-thumbnail">
                  <img src={require('../../img/bg-img/b6.jpg')} alt=""/>
                </div>
                <div class="author-info">
                  <div class="line"></div>
                  <span class="author-role">Author</span>
                  <h4><a class="author-name">James Morrison</a></h4>
                  <p>Curabitur venenatis efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero.</p>
                </div>
              </div>

              <div class="comment_area clearfix mt-70">
                <h5 class="title">Comments</h5>

                <ol>
                  <li class="single_comment_area">
                    <div class="comment-content d-flex">
                      <div class="comment-author">
                        <img src={require('../../img/bg-img/b7.jpg')} alt="author"/>
                      </div>
                      <div class="comment-meta">
                        <a class="post-date">March 12</a>
                        <p><a class="post-author">William James</a></p>
                        <p>Efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt.</p>
                        <a class="comment-reply">Reply</a>
                      </div>
                    </div>
                    <ol class="children">
                      <li class="single_comment_area">
                        <div class="comment-content d-flex">
                          <div class="comment-author">
                            <img src={require('../../img/bg-img/b7.jpg')} alt="author"/>
                          </div>
                          <div class="comment-meta">
                            <a class="post-date">March 12</a>
                            <p><a class="post-author">William James</a></p>
                            <p>Efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt.</p>
                            <a class="comment-reply">Reply</a>
                          </div>
                        </div>
                      </li>
                    </ol>
                  </li>

                  <li class="single_comment_area">
                    <div class="comment-content d-flex">
                      <div class="comment-author">
                        <img src={require('../../img/bg-img/b7.jpg')} alt="author"/>
                      </div>
                      <div class="comment-meta">
                        <a class="post-date">March 12</a>
                        <p><a class="post-author">William James</a></p>
                        <p>Efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt.</p>
                        <a class="comment-reply">Reply</a>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>

              <div class="post-a-comment-area mt-70">
                <h5>Leave a reply</h5>
                <form action="#" method="post">
                  <div class="row">
                    <div class="col-12 col-md-6">
                      <div class="group">
                        <input type="text" name="name" id="name" required/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Name</label>
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="group">
                        <input type="email" name="email" id="email" required/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Email</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="group">
                        <input type="text" name="subject" id="subject" required/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Subject</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="group">
                        <textarea name="message" id="message" required></textarea>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Comment</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <button type="submit" class="btn original-btn">Reply</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div class="col-12 col-md-4 col-lg-3">
              <div class="post-sidebar-area">

                <div class="sidebar-widget-area">
                  <form action="#" class="search-form">
                    <input type="search" name="search" id="searchForm" placeholder="Search"/>
                    <input type="submit" value="submit"/>
                  </form>
                </div>

                <div class="sidebar-widget-area">
                  <h5 class="title subscribe-title">Subscribe to my newsletter</h5>
                  <div class="widget-content">
                    <form action="#" class="newsletterForm">
                      <input type="email" name="email" id="subscribesForm" placeholder="Your e-mail here"/>
                      <button type="submit" class="btn original-btn">Subscribe</button>
                    </form>
                  </div>
                </div>

                <div class="sidebar-widget-area">
                  <h5 class="title">Advertisement</h5>
                  <a><img src={require('../../img/bg-img/add.gif')} alt=""/></a>
                </div>

                <div class="sidebar-widget-area">
                  <h5 class="title">Latest Posts</h5>

                  <div class="widget-content">

                    <div class="single-blog-post d-flex align-items-center widget-post">
                      <div class="post-thumbnail">
                        <img src={require('../../img/blog-img/lp1.jpg')} alt=""/>
                      </div>
                      <div class="post-content">
                        <a class="post-tag">Lifestyle</a>
                        <h4><a class="post-headline">Party people in the house</a></h4>
                        <div class="post-meta">
                          <p><a>12 March</a></p>
                        </div>
                      </div>
                    </div>

                    <div class="single-blog-post d-flex align-items-center widget-post">
                      <div class="post-thumbnail">
                        <img src={require('../../img/blog-img/lp2.jpg')} alt=""/>
                      </div>
                      <div class="post-content">
                        <a class="post-tag">Lifestyle</a>
                        <h4><a class="post-headline">A sunday in the park</a></h4>
                        <div class="post-meta">
                          <p><a>12 March</a></p>
                        </div>
                      </div>
                    </div>

                    <div class="single-blog-post d-flex align-items-center widget-post">
                      <div class="post-thumbnail">
                        <img src={require('../../img/blog-img/lp3.jpg')} alt=""/>
                      </div>
                      <div class="post-content">
                        <a class="post-tag">Lifestyle</a>
                        <h4><a class="post-headline">Party people in the house</a></h4>
                        <div class="post-meta">
                          <p><a>12 March</a></p>
                        </div>
                      </div>
                    </div>

                    <div class="single-blog-post d-flex align-items-center widget-post">
                      <div class="post-thumbnail">
                        <img src={require('../../img/blog-img/lp4.jpg')} alt=""/>
                      </div>
                      <div class="post-content">
                        <a class="post-tag">Lifestyle</a>
                        <h4><a class="post-headline">A sunday in the park</a></h4>
                        <div class="post-meta">
                          <p><a>12 March</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="sidebar-widget-area">
                  <h5 class="title">Tags</h5>
                  <div class="widget-content">
                    <ul class="tags">
                      <li><a>design</a></li>
                      <li><a>fashion</a></li>
                      <li><a>travel</a></li>
                      <li><a>music</a></li>
                      <li><a>party</a></li>
                      <li><a>video</a></li>
                      <li><a>photography</a></li>
                      <li><a>adventure</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.blogPage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        loadBlogPage,
      },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage);
