import React, {Component} from 'react';
import moment from 'moment';
import {getUserNickname} from '../../../common/utils/auth';

import './index.css';

export default class extends Component {
  componentWillMount() {
    this.props.loadUser();
  }
  render() {
    const user = this.props.user;
    return (
      <div className="container">
        <div className="row user-menu-container square">
          <div className="col-md-7 user-details">
            <div className="row coralbg white">
              <div className="col-md-6 no-pad">
                <div className="user-pad">
                  <h3>{user.first_name} {user.last_name}</h3>
                  <h4 className="white"><i className="fa fa-envelope"></i>{user.email}</h4>
                  <h4 className="white"><i className="fa fa-user-circle-o"></i>{user.nickname}</h4>
                  {
                    getUserNickname() == user.nickname ? (
                      <button type="button" className="btn btn-labeled btn-info">
                        <span className="btn-label"><i className="fa fa-pencil"></i></span>
                        Update
                      </button>
                    ) : (
                      <button type="button" className="btn btn-labeled btn-secondary">
                      Subscribe
                      </button>
                    )
                  }
                </div>
              </div>
              <div className="col-md-6 no-pad">
                <div className="user-image">
                  <img src="https://pp.userapi.com/c841230/v841230653/6f47b/-4nBQ0dCs4A.jpg" className="img-responsive thumbnail"/>
                </div>
              </div>
            </div>
            <div className="row overview">
              <div className="col-md-6 user-pad text-center">
                <h3>FOLLOWERS</h3>
                <h4>2,784</h4>
              </div>
              <div className="col-md-6 user-pad text-center">
                <h3>FOLLOWING</h3>
                <h4>456</h4>
              </div>
            </div>
          </div>
          <div className="col-md-4 user-menu user-pad">
            <div className="user-menu-content active">
              <h3>
                  Recent Interactions
              </h3>
              <ul className="user-menu-list">
                <li>
                  <h4><i className="fa fa-user coral"></i> Roselynn Smith followed you.</h4>
                </li>
                <li>
                  <h4><i className="fa fa-heart-o coral"></i> Jonathan Hawkins followed you.</h4>
                </li>
                <li>
                  <h4><i className="fa fa-paper-plane-o coral"></i> Gracie Jenkins followed you.</h4>
                </li>
                <li>
                  <button type="button" className="btn btn-labeled btn-success" href="#">
                    <span className="btn-label"><i className="fa fa-bell-o"></i></span>View all activity</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {
          getUserNickname() == user.nickname ? (
            <div className="blogs-title">
              <h4>My Blogs</h4>
              <button type="button" className="btn btn-labeled btn-info"
                onClick={() => this.props.history.push('/add-blog')}>
                <span className="btn-label"><i className="fa fa-book"></i></span>Create new blog</button>
            </div>
          ) : (
            <div className="blogs-title">
              <h4>Blogs</h4>
            </div>
          )
        }
        {
          this.props.blogs.map((blog, index) => (
            <div key={index} className="single-blog-area blog-style-2 mb-50 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="1000ms">
              <div className="row">
                <div className="col-12">
                  <div className="single-blog-thumbnail">
                    <img src={require('../../../img/blog-img/7.jpg')} alt=""/>
                    <div className="post-date">
                      <p>created</p>
                      <a>{moment(blog.created_at).format('DD')}
                        <span>{moment(blog.created_at).format('MMM')}</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="single-blog-content mt-50">
                    <div className="line"></div>
                    <a className="post-tag">Lifestyle</a>
                    <h4>
                      <a
                        onClick={() => this.props.history.push('/blog/'+blog.id)}
                        className="post-headline"
                      >
                        {blog.title}
                      </a>
                    </h4>
                    <p>{blog.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}
