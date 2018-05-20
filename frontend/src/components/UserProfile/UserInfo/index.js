import React, {Component} from 'react';
import moment from 'moment';

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
                  <button type="button" className="btn btn-labeled btn-info" href="#">
                    <span className="btn-label"><i className="fa fa-pencil"></i></span>Update</button>
                </div>
              </div>
              <div className="col-md-6 no-pad">
                <div className="user-image">
                  <img src="https://pp.userapi.com/c841230/v841230653/6f47b/-4nBQ0dCs4A.jpg" className="img-responsive thumbnail"/>
                </div>
              </div>
            </div>
            <div className="row overview">
              <div className="col-md-4 user-pad text-center">
                <h3>FOLLOWERS</h3>
                <h4>2,784</h4>
              </div>
              <div className="col-md-4 user-pad text-center">
                <h3>FOLLOWING</h3>
                <h4>456</h4>
              </div>
              <div className="col-md-4 user-pad text-center">
                <h3>APPRECIATIONS</h3>
                <h4>4,901</h4>
              </div>
            </div>
          </div>
          <div className="col-md-1 user-menu-btns">
            <div className="btn-group-vertical square" id="responsive">
              <a className="btn btn-block btn-default active">
                <i className="fa fa-bell-o fa-3x"></i>
              </a>
              <a className="btn btn-default">
                <i className="fa fa-envelope-o fa-3x"></i>
              </a>
              <a className="btn btn-default">
                <i className="fa fa-laptop fa-3x"></i>
              </a>
              <a className="btn btn-default">
                <i className="fa fa-cloud-upload fa-3x"></i>
              </a>
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
            <div className="user-menu-content">
              <h3>
                  Your Inbox
              </h3>
              <ul className="user-menu-list">
                <li>
                  <h4>From Roselyn Smith <small className="coral"><strong>NEW</strong> <i className="fa fa-clock-o"></i> 7:42 A.M.</small></h4>
                </li>
                <li>
                  <h4>From Jonathan Hawkins <small className="coral"><i className="fa fa-clock-o"></i> 10:42 A.M.</small></h4>
                </li>
                <li>
                  <h4>From Georgia Jennings <small className="coral"><i className="fa fa-clock-o"></i> 10:42 A.M.</small></h4>
                </li>
                <li>
                  <button type="button" className="btn btn-labeled btn-danger" href="#">
                    <span className="btn-label"><i className="fa fa-envelope-o"></i></span>View All Messages</button>
                </li>
              </ul>
            </div>
            <div className="user-menu-content">
              <h3>
                  Trending
              </h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="view">
                    <div className="caption">
                      <p>47LabsDesign</p>
                      <a href="" rel="tooltip" title="Appreciate"><span className="fa fa-heart-o fa-2x"></span></a>
                      <a href="" rel="tooltip" title="View"><span className="fa fa-search fa-2x"></span></a>
                    </div>
                    <img src="http://24.media.tumblr.com/273167b30c7af4437dcf14ed894b0768/tumblr_n5waxesawa1st5lhmo1_1280.jpg" className="img-responsive"/>
                  </div>
                  <div className="info">
                    <p className="small" style={{textOverflow: 'ellipsis'}}>An Awesome Title</p>
                    <p className="small coral text-right"><i className="fa fa-clock-o"></i> Posted Today | 10:42 A.M.</p>
                  </div>
                  <div className="stats turqbg">
                    <span className="fa fa-heart-o"> <strong>47</strong></span>
                    <span className="fa fa-eye pull-right"> <strong>137</strong></span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="view">
                    <div className="caption">
                      <p>47LabsDesign</p>
                      <a href="" rel="tooltip" title="Appreciate"><span className="fa fa-heart-o fa-2x"></span></a>
                      <a href="" rel="tooltip" title="View"><span className="fa fa-search fa-2x"></span></a>
                    </div>
                    <img src="http://24.media.tumblr.com/282fadab7d782edce9debf3872c00ef1/tumblr_n3tswomqPS1st5lhmo1_1280.jpg" className="img-responsive"/>
                  </div>
                  <div className="info">
                    <p className="small" style={{textOverflow: 'ellipsis'}}>An Awesome Title</p>
                    <p className="small coral text-right"><i className="fa fa-clock-o"></i> Posted Today | 10:42 A.M.</p>
                  </div>
                  <div className="stats turqbg">
                    <span className="fa fa-heart-o"> <strong>47</strong></span>
                    <span className="fa fa-eye pull-right"> <strong>137</strong></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="user-menu-content">
              <h2 className="text-center">
                  START SHARING
              </h2>
              <center><i className="fa fa-cloud-upload fa-4x"></i></center>
              <div className="share-links">
                <center><button type="button" className="btn btn-lg btn-labeled btn-success" href="#" style={{marginBottom: '15px'}}>
                  <span className="btn-label"><i className="fa fa-bell-o"></i></span>A FINISHED PROJECT
                </button></center>
                <center><button type="button" className="btn btn-lg btn-labeled btn-warning" href="#">
                  <span className="btn-label"><i className="fa fa-bell-o"></i></span>A WORK IN PROGRESS
                </button></center>
              </div>
            </div>
          </div>
        </div>
        <h4>My Blogs</h4>
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
