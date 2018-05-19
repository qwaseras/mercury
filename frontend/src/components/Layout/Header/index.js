import React, {Component} from 'react';
import {isLoggedIn, getUserNickname, logout} from '../../../common/utils/auth';
export default () => (
  <div>
    <div class="subscribe-newsletter-area">
      <div class="modal fade" id="subsModal" tabindex="-1" role="dialog" aria-labelledby="subsModal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <div class="modal-body">
              <h5 class="title">Subscribe to my newsletter</h5>
              <form action="#" class="newsletterForm" method="post">
                <input type="email" name="email" id="subscribesForm2" placeholder="Your e-mail here"/>
                <button type="submit" class="btn original-btn">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <header class="header-area">

      <div class="top-header">
        <div class="container h-100">
          <div class="row h-100 align-items-center">
            <div class="col-12 col-sm-4">
              {
                isLoggedIn() ? (
                  <span>
                    {getUserNickname()}
                    <a data-toggle="tooltip"
                      data-placement="bottom"
                      onClick={logout}>
                      <i class="fa fa-sign-out" aria-hidden="true"></i>
                    </a>
                  </span>) :
                  <a data-toggle="tooltip"
                    onClick={() => this.props.history.push('/signin')}
                    data-placement="bottom">
                    <i class="fa fa-sign-in" aria-hidden="true"></i>
                  </a>
              }
            </div>
          </div>
        </div>
      </div>

      <div class="logo-area text-center">
        <div class="container h-100">
          <div class="row h-100 align-items-center">
            <div class="col-12">
              <a className="original-logo">
                <img src="https://fontmeme.com/permalink/180519/519695b392528dd4bf03cbe5ebc760e6.png" alt="mercury" border="0"/>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="original-nav-area" id="stickyNav">
        <div class="classy-nav-container breakpoint-off">
          <div class="container">
            <nav class="classy-navbar justify-content-between">

              <div class="subscribe-btn">
                <a class="btn subscribe-btn" data-toggle="modal" data-target="#subsModal">Subscribe</a>
              </div>

              <div class="classy-navbar-toggler">
                <span class="navbarToggler"><span></span><span></span><span></span></span>
              </div>

              <div class="classy-menu" id="originalNav">
                <div class="classycloseIcon">
                  <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
                </div>

                <div class="classynav">
                  <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a>Pages</a>
                      <ul class="dropdown">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about-us.html">About Us</a></li>
                        <li><a href="single-post.html">Single Post</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="coming-soon.html">Coming Soon</a></li>
                      </ul>
                    </li>
                    <li><a>Catagory</a>
                      <ul class="dropdown">
                        <li><a>Catagory 1</a></li>
                        <li><a>Catagory 1</a></li>
                        <li><a>Catagory 1</a>
                          <ul class="dropdown">
                            <li><a>Catagory 2</a></li>
                            <li><a>Catagory 2</a></li>
                            <li><a>Catagory 2</a>
                              <ul class="dropdown">
                                <li><a>Catagory 3</a></li>
                                <li><a>Catagory 3</a></li>
                                <li><a>Catagory 3</a></li>
                                <li><a>Catagory 3</a></li>
                                <li><a>Catagory 3</a></li>
                              </ul>
                            </li>
                            <li><a>Catagory 2</a></li>
                            <li><a>Catagory 2</a></li>
                          </ul>
                        </li>
                        <li><a>Catagory 1</a></li>
                        <li><a>Catagory 1</a></li>
                      </ul>
                    </li>
                    <li><a href="about-us.html">About Us</a></li>
                    <li><a>Megamenu</a>
                      <div class="megamenu">
                        <ul class="single-mega cn-col-4">
                          <li class="title">Headline 1</li>
                          <li><a>Mega Menu Item 1</a></li>
                          <li><a>Mega Menu Item 2</a></li>
                          <li><a>Mega Menu Item 3</a></li>
                          <li><a>Mega Menu Item 4</a></li>
                          <li><a>Mega Menu Item 5</a></li>
                        </ul>
                        <ul class="single-mega cn-col-4">
                          <li class="title">Headline 2</li>
                          <li><a>Mega Menu Item 1</a></li>
                          <li><a>Mega Menu Item 2</a></li>
                          <li><a>Mega Menu Item 3</a></li>
                          <li><a>Mega Menu Item 4</a></li>
                          <li><a>Mega Menu Item 5</a></li>
                        </ul>
                        <ul class="single-mega cn-col-4">
                          <li class="title">Headline 3</li>
                          <li><a>Mega Menu Item 1</a></li>
                          <li><a>Mega Menu Item 2</a></li>
                          <li><a>Mega Menu Item 3</a></li>
                          <li><a>Mega Menu Item 4</a></li>
                          <li><a>Mega Menu Item 5</a></li>
                        </ul>
                        <ul class="single-mega cn-col-4">
                          <li class="title">Headline 4</li>
                          <li><a>Mega Menu Item 1</a></li>
                          <li><a>Mega Menu Item 2</a></li>
                          <li><a>Mega Menu Item 3</a></li>
                          <li><a>Mega Menu Item 4</a></li>
                          <li><a>Mega Menu Item 5</a></li>
                        </ul>
                      </div>
                    </li>
                    <li><a href="contact.html">Contact</a></li>
                  </ul>
                  <div id="search-wrapper">
                    <form action="#">
                      <input type="text" id="search" placeholder="Search something..."/>
                      <div id="close-icon"></div>
                      <input class="d-none" type="submit" value=""/>
                    </form>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  </div>
);
