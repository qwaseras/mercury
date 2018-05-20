import React, {Component} from 'react';

import './index.css';

export default class extends Component {
  componentWillMount() {
    this.props.loadUser();
  }
  render() {
    const user = this.props.user;
    return (
      <div class="container">
        <div class="row user-menu-container square">
          <div class="col-md-7 user-details">
            <div class="row coralbg white">
              <div class="col-md-6 no-pad">
                <div class="user-pad">
                  <h3>{user.first_name} {user.last_name}</h3>
                  <h4 class="white"><i class="fa fa-envelope"></i>{user.email}</h4>
                  <h4 class="white"><i class="fa fa-user-circle-o"></i>{user.nickname}</h4>
                  <button type="button" class="btn btn-labeled btn-info" href="#">
                    <span class="btn-label"><i class="fa fa-pencil"></i></span>Update</button>
                </div>
              </div>
              <div class="col-md-6 no-pad">
                <div class="user-image">
                  <img src="https://pp.userapi.com/c841230/v841230653/6f47b/-4nBQ0dCs4A.jpg" class="img-responsive thumbnail"/>
                </div>
              </div>
            </div>
            <div class="row overview">
              <div class="col-md-4 user-pad text-center">
                <h3>FOLLOWERS</h3>
                <h4>2,784</h4>
              </div>
              <div class="col-md-4 user-pad text-center">
                <h3>FOLLOWING</h3>
                <h4>456</h4>
              </div>
              <div class="col-md-4 user-pad text-center">
                <h3>APPRECIATIONS</h3>
                <h4>4,901</h4>
              </div>
            </div>
          </div>
          <div class="col-md-1 user-menu-btns">
            <div class="btn-group-vertical square" id="responsive">
              <a href="#" class="btn btn-block btn-default active">
                <i class="fa fa-bell-o fa-3x"></i>
              </a>
              <a href="#" class="btn btn-default">
                <i class="fa fa-envelope-o fa-3x"></i>
              </a>
              <a href="#" class="btn btn-default">
                <i class="fa fa-laptop fa-3x"></i>
              </a>
              <a href="#" class="btn btn-default">
                <i class="fa fa-cloud-upload fa-3x"></i>
              </a>
            </div>
          </div>
          <div class="col-md-4 user-menu user-pad">
            <div class="user-menu-content active">
              <h3>
                  Recent Interactions
              </h3>
              <ul class="user-menu-list">
                <li>
                  <h4><i class="fa fa-user coral"></i> Roselynn Smith followed you.</h4>
                </li>
                <li>
                  <h4><i class="fa fa-heart-o coral"></i> Jonathan Hawkins followed you.</h4>
                </li>
                <li>
                  <h4><i class="fa fa-paper-plane-o coral"></i> Gracie Jenkins followed you.</h4>
                </li>
                <li>
                  <button type="button" class="btn btn-labeled btn-success" href="#">
                    <span class="btn-label"><i class="fa fa-bell-o"></i></span>View all activity</button>
                </li>
              </ul>
            </div>
            <div class="user-menu-content">
              <h3>
                  Your Inbox
              </h3>
              <ul class="user-menu-list">
                <li>
                  <h4>From Roselyn Smith <small class="coral"><strong>NEW</strong> <i class="fa fa-clock-o"></i> 7:42 A.M.</small></h4>
                </li>
                <li>
                  <h4>From Jonathan Hawkins <small class="coral"><i class="fa fa-clock-o"></i> 10:42 A.M.</small></h4>
                </li>
                <li>
                  <h4>From Georgia Jennings <small class="coral"><i class="fa fa-clock-o"></i> 10:42 A.M.</small></h4>
                </li>
                <li>
                  <button type="button" class="btn btn-labeled btn-danger" href="#">
                    <span class="btn-label"><i class="fa fa-envelope-o"></i></span>View All Messages</button>
                </li>
              </ul>
            </div>
            <div class="user-menu-content">
              <h3>
                  Trending
              </h3>
              <div class="row">
                <div class="col-md-6">
                  <div class="view">
                    <div class="caption">
                      <p>47LabsDesign</p>
                      <a href="" rel="tooltip" title="Appreciate"><span class="fa fa-heart-o fa-2x"></span></a>
                      <a href="" rel="tooltip" title="View"><span class="fa fa-search fa-2x"></span></a>
                    </div>
                    <img src="http://24.media.tumblr.com/273167b30c7af4437dcf14ed894b0768/tumblr_n5waxesawa1st5lhmo1_1280.jpg" class="img-responsive"/>
                  </div>
                  <div class="info">
                    <p class="small" style={{textOverflow: 'ellipsis'}}>An Awesome Title</p>
                    <p class="small coral text-right"><i class="fa fa-clock-o"></i> Posted Today | 10:42 A.M.</p>
                  </div>
                  <div class="stats turqbg">
                    <span class="fa fa-heart-o"> <strong>47</strong></span>
                    <span class="fa fa-eye pull-right"> <strong>137</strong></span>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="view">
                    <div class="caption">
                      <p>47LabsDesign</p>
                      <a href="" rel="tooltip" title="Appreciate"><span class="fa fa-heart-o fa-2x"></span></a>
                      <a href="" rel="tooltip" title="View"><span class="fa fa-search fa-2x"></span></a>
                    </div>
                    <img src="http://24.media.tumblr.com/282fadab7d782edce9debf3872c00ef1/tumblr_n3tswomqPS1st5lhmo1_1280.jpg" class="img-responsive"/>
                  </div>
                  <div class="info">
                    <p class="small" style={{textOverflow: 'ellipsis'}}>An Awesome Title</p>
                    <p class="small coral text-right"><i class="fa fa-clock-o"></i> Posted Today | 10:42 A.M.</p>
                  </div>
                  <div class="stats turqbg">
                    <span class="fa fa-heart-o"> <strong>47</strong></span>
                    <span class="fa fa-eye pull-right"> <strong>137</strong></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="user-menu-content">
              <h2 class="text-center">
                  START SHARING
              </h2>
              <center><i class="fa fa-cloud-upload fa-4x"></i></center>
              <div class="share-links">
                <center><button type="button" class="btn btn-lg btn-labeled btn-success" href="#" style={{marginBottom: '15px'}}>
                  <span class="btn-label"><i class="fa fa-bell-o"></i></span>A FINISHED PROJECT
                </button></center>
                <center><button type="button" class="btn btn-lg btn-labeled btn-warning" href="#">
                  <span class="btn-label"><i class="fa fa-bell-o"></i></span>A WORK IN PROGRESS
                </button></center>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
