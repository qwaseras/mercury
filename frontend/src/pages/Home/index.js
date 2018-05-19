import React, {Component} from 'react';

import Header from '../../components/Layout/Header';
import {isLoggedIn, getUserNickname, logout} from '../../common/utils/auth';
import Carousel from '../../components/Home/Carousel';

export default class extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Carousel/>
        <div class="blog-wrapper section-padding-100 clearfix">
          <div class="container">
            <div class="row align-items-end">
              <div class="col-12 col-lg-4">
                <div class="single-blog-area clearfix mb-100">
                  <div class="single-blog-content">
                    <div class="line"></div>
                    <a class="post-tag">Lifestyle</a>
                    <h4><a class="post-headline">Welcome to this Lifestyle blog</a></h4>
                    <p>Curabitur venenatis efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt. Morbi sodales, dolor id ultricies dictum</p>
                    <a class="btn original-btn">Read More</a>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4">
                <div class="single-catagory-area clearfix mb-100">
                  <img src={require('../../img/blog-img/1.jpg')} alt=""/>
                  <div class="catagory-title">
                    <a>Lifestyle posts</a>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4">
                <div class="single-catagory-area clearfix mb-100">
                  <img src={require('../../img/blog-img/2.jpg')} alt=""/>
                  <div class="catagory-title">
                    <a>latest posts</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="row">
              <div class="col-12 col-lg-9">

                <div class="single-blog-area blog-style-2 mb-50 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1000ms">
                  <div class="row align-items-center">
                    <div class="col-12 col-md-6">
                      <div class="single-blog-thumbnail">
                        <img src={require('../../img/blog-img/3.jpg')} alt=""/>
                        <div class="post-date">
                          <a>12 <span>march</span></a>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="single-blog-content">
                        <div class="line"></div>
                        <a class="post-tag">Lifestyle</a>
                        <h4><a class="post-headline">Party people in the house</a></h4>
                        <p>Curabitur venenatis efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt.</p>
                        <div class="post-meta">
                          <p>By <a>james smith</a></p>
                          <p>3 comments</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="single-blog-area blog-style-2 mb-50 wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1000ms">
                  <div class="row align-items-center">
                    <div class="col-12 col-md-6">
                      <div class="single-blog-thumbnail">
                        <img src={require('../../img/blog-img/4.jpg')} alt=""/>
                        <div class="post-date">
                          <a>12 <span>march</span></a>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="single-blog-content">
                        <div class="line"></div>
                        <a class="post-tag">Lifestyle</a>
                        <h4><a class="post-headline">We love colors in 2018</a></h4>
                        <p>Curabitur venenatis efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt.</p>
                        <div class="post-meta">
                          <p>By <a>james smith</a></p>
                          <p>3 comments</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="single-blog-area blog-style-2 mb-50 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="1000ms">
                  <div class="row">
                    <div class="col-12">
                      <div class="single-blog-thumbnail">
                        <img src={require('../../img/blog-img/7.jpg')} alt=""/>
                        <div class="post-date">
                          <a>10 <span>march</span></a>
                        </div>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="single-blog-content mt-50">
                        <div class="line"></div>
                        <a class="post-tag">Lifestyle</a>
                        <h4><a class="post-headline">10 Tips to organize the perfect party</a></h4>
                        <p>Curabitur venenatis efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt.</p>
                        <div class="post-meta">
                          <p>By <a>james smith</a></p>
                          <p>3 comments</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="single-blog-area blog-style-2 mb-50 wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1000ms">
                  <div class="row align-items-center">
                    <div class="col-12 col-md-6">
                      <div class="single-blog-thumbnail">
                        <img src={require('../../img/blog-img/5.jpg')} alt=""/>
                        <div class="post-date">
                          <a>12 <span>march</span></a>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="single-blog-content">
                        <div class="line"></div>
                        <a class="post-tag">Lifestyle</a>
                        <h4><a class="post-headline">Party people in the house</a></h4>
                        <p>Curabitur venenatis efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt.</p>
                        <div class="post-meta">
                          <p>By <a>james smith</a></p>
                          <p>3 comments</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="single-blog-area blog-style-2 mb-50 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="1000ms">
                  <div class="row align-items-center">
                    <div class="col-12 col-md-6">
                      <div class="single-blog-thumbnail">
                        <img src={require('../../img/blog-img/6.jpg')} alt=""/>
                        <div class="post-date">
                          <a>12 <span>march</span></a>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="single-blog-content">
                        <div class="line"></div>
                        <a class="post-tag">Lifestyle</a>
                        <h4><a class="post-headline">We love colors in 2018</a></h4>
                        <p>Curabitur venenatis efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt.</p>
                        <div class="post-meta">
                          <p>By <a>james smith</a></p>
                          <p>3 comments</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="load-more-btn mt-100 wow fadeInUp" data-wow-delay="0.7s" data-wow-duration="1000ms">
                  <a class="btn original-btn">Read More</a>
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

                      <div class="post-thumbnail">
                        <div class="single-blog-post d-flex align-items-center widget-post">
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
        <footer class="footer-area text-center">
          <div class="container">
            <div class="row">
              <div class="col-12">

                <div class="classy-nav-container breakpoint-off">
                  <nav class="classy-navbar justify-content-center">

                    <div class="classy-navbar-toggler">
                      <span class="navbarToggler"><span></span><span></span><span></span></span>
                    </div>

                    <div class="classy-menu">

                      <div class="classycloseIcon">
                        <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
                      </div>

                      <div class="classynav">
                        <ul>
                          <li><a>Home</a></li>
                          <li><a>About Us</a></li>
                          <li><a>Lifestyle</a></li>
                          <li><a>travel</a></li>
                          <li><a>Music</a></li>
                          <li><a>Contact</a></li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>

                <div class="footer-social-area mt-30">
                  <a data-toggle="tooltip" data-placement="top" title="Pinterest"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
                  <a data-toggle="tooltip" data-placement="top" title="Facebook"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                  <a data-toggle="tooltip" data-placement="top" title="Twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                  <a data-toggle="tooltip" data-placement="top" title="Dribbble"><i class="fa fa-dribbble" aria-hidden="true"></i></a>
                  <a data-toggle="tooltip" data-placement="top" title="Behance"><i class="fa fa-behance" aria-hidden="true"></i></a>
                  <a data-toggle="tooltip" data-placement="top" title="Linkedin"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
          </div>

        </footer>
      </div>
    );
  }
}
