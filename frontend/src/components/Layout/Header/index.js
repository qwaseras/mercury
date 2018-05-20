import React from 'react';
import {isLoggedIn, getUserNickname, logout} from '../../../common/utils/auth';
export default ({history, hideImg, loadUser}) => (
  <div>
    <div className="subscribe-newsletter-area">
      <div className="modal fade" id="subsModal" tabIndex="-1" role="dialog" aria-labelledby="subsModal" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <div className="modal-body">
              <h5 className="title">Subscribe to my newsletter</h5>
              <form action="#" className="newsletterForm" method="post">
                <input type="email" name="email" id="subscribesForm2" placeholder="Your e-mail here"/>
                <button type="submit" className="btn original-btn">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <header className="header-area">

      <div className="top-header">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 col-sm-4">
              {
                isLoggedIn() ? (
                  <span>
                    {getUserNickname()}
                    <a data-toggle="tooltip"
                      data-placement="bottom"
                      onClick={logout}>
                      <i className="fa fa-sign-out" aria-hidden="true"></i>
                    </a>
                  </span>) :
                  <a data-toggle="tooltip"
                    onClick={() => history.push('/signin')}
                    data-placement="bottom">
                    <i className="fa fa-sign-in" aria-hidden="true"></i>
                  </a>
              }
            </div>
          </div>
        </div>
      </div>

      {
        hideImg ? '' : (
          <div className="logo-area text-center">
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12">
                  <a className="original-logo">
                    <img src="https://fontmeme.com/permalink/180519/519695b392528dd4bf03cbe5ebc760e6.png" alt="mercury" border="0"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      }

      <div className="original-nav-area" id="stickyNav">
        <div className="classy-nav-container breakpoint-off">
          <div className="container">
            <nav className="classy-navbar justify-content-between">

              <div className="subscribe-btn">
                <a className="btn subscribe-btn" data-toggle="modal" data-target="#subsModal">Subscribe</a>
              </div>

              <div className="classy-navbar-toggler">
                <span className="navbarToggler"><span></span><span></span><span></span></span>
              </div>

              <div className="classy-menu" id="originalNav">
                <div className="classycloseIcon">
                  <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                </div>

                <div className="classynav">
                  <ul>
                    {
                      isLoggedIn() ?
                        <li>
                          <a onClick={() => {
                            history.push('/profile');
                          }}>
                        My Profile
                          </a>
                        </li> : ''
                    }
                    <li><a onClick={() => history.push('/')}>Home</a></li>
                    <li><a>Categories</a></li>
                    <li><a onClick={() => history.push('/about')}>About Us</a></li>
                  </ul>
                  <div id="search-wrapper">
                    <form action="#">
                      <input type="text" id="search" placeholder="Search something..."/>
                      <div id="close-icon"></div>
                      <input className="d-none" type="submit" value=""/>
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
