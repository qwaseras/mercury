import React, {Component} from 'react';

import Header from '../../components/Layout/Header';

export default class extends Component {
  render() {
    return (
      <div>
        <Header history={this.props.history}/>
        <div className="blog-wrapper section-padding-100 clearfix">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-12 col-lg-4">
                <div className="single-blog-area clearfix mb-100">
                  <div className="single-blog-content">
                    <div className="line"></div>
                    <a className="post-tag">Lifestyle</a>
                    <h4><a className="post-headline">Welcome to this Lifestyle blog</a></h4>
                    <p>Curabitur venenatis efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt. Morbi sodales, dolor id ultricies dictum</p>
                    <a className="btn original-btn">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="single-catagory-area clearfix mb-100">
                  <img src={require('../../img/blog-img/1.jpg')} alt=""/>
                  <div className="catagory-title">
                    <a>Lifestyle posts</a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="single-catagory-area clearfix mb-100">
                  <img src={require('../../img/blog-img/2.jpg')} alt=""/>
                  <div className="catagory-title">
                    <a>latest posts</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-9">

                <div className="single-blog-area blog-style-2 mb-50 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1000ms">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                      <div className="single-blog-thumbnail">
                        <img src={require('../../img/blog-img/3.jpg')} alt=""/>
                        <div className="post-date">
                          <a>12 <span>march</span></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="single-blog-content">
                        <div className="line"></div>
                        <a className="post-tag">Lifestyle</a>
                        <h4><a className="post-headline">Party people in the house</a></h4>
                        <p>Curabitur venenatis efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt.</p>
                        <div className="post-meta">
                          <p>By <a>james smith</a></p>
                          <p>3 comments</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="single-blog-area blog-style-2 mb-50 wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1000ms">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                      <div className="single-blog-thumbnail">
                        <img src={require('../../img/blog-img/4.jpg')} alt=""/>
                        <div className="post-date">
                          <a>12 <span>march</span></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="single-blog-content">
                        <div className="line"></div>
                        <a className="post-tag">Lifestyle</a>
                        <h4><a className="post-headline">We love colors in 2018</a></h4>
                        <p>Curabitur venenatis efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt.</p>
                        <div className="post-meta">
                          <p>By <a>james smith</a></p>
                          <p>3 comments</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="single-blog-area blog-style-2 mb-50 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="1000ms">
                  <div className="row">
                    <div className="col-12">
                      <div className="single-blog-thumbnail">
                        <img src={require('../../img/blog-img/7.jpg')} alt=""/>
                        <div className="post-date">
                          <a>10 <span>march</span></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="single-blog-content mt-50">
                        <div className="line"></div>
                        <a className="post-tag">Lifestyle</a>
                        <h4><a className="post-headline">10 Tips to organize the perfect party</a></h4>
                        <p>Curabitur venenatis efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt.</p>
                        <div className="post-meta">
                          <p>By <a>james smith</a></p>
                          <p>3 comments</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="single-blog-area blog-style-2 mb-50 wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1000ms">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                      <div className="single-blog-thumbnail">
                        <img src={require('../../img/blog-img/5.jpg')} alt=""/>
                        <div className="post-date">
                          <a>12 <span>march</span></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="single-blog-content">
                        <div className="line"></div>
                        <a className="post-tag">Lifestyle</a>
                        <h4><a className="post-headline">Party people in the house</a></h4>
                        <p>Curabitur venenatis efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt.</p>
                        <div className="post-meta">
                          <p>By <a>james smith</a></p>
                          <p>3 comments</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="single-blog-area blog-style-2 mb-50 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="1000ms">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                      <div className="single-blog-thumbnail">
                        <img src={require('../../img/blog-img/6.jpg')} alt=""/>
                        <div className="post-date">
                          <a>12 <span>march</span></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="single-blog-content">
                        <div className="line"></div>
                        <a className="post-tag">Lifestyle</a>
                        <h4><a className="post-headline">We love colors in 2018</a></h4>
                        <p>Curabitur venenatis efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt.</p>
                        <div className="post-meta">
                          <p>By <a>james smith</a></p>
                          <p>3 comments</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="load-more-btn mt-100 wow fadeInUp" data-wow-delay="0.7s" data-wow-duration="1000ms">
                  <a className="btn original-btn">Read More</a>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="post-sidebar-area">

                  <div className="sidebar-widget-area">
                    <form action="#" className="search-form">
                      <input type="search" name="search" id="searchForm" placeholder="Search"/>
                      <input type="submit" value="submit"/>
                    </form>
                  </div>

                  <div className="sidebar-widget-area">
                    <h5 className="title subscribe-title">Subscribe to my newsletter</h5>
                    <div className="widget-content">
                      <form action="#" className="newsletterForm">
                        <input type="email" name="email" id="subscribesForm" placeholder="Your e-mail here"/>
                        <button type="submit" className="btn original-btn">Subscribe</button>
                      </form>
                    </div>
                  </div>

                  <div className="sidebar-widget-area">
                    <h5 className="title">Advertisement</h5>
                    <a><img src={require('../../img/bg-img/add.gif')} alt=""/></a>
                  </div>

                  <div className="sidebar-widget-area">
                    <h5 className="title">Latest Posts</h5>

                    <div className="widget-content">

                      <div className="single-blog-post d-flex align-items-center widget-post">
                        <div className="post-thumbnail">
                          <img src={require('../../img/blog-img/lp1.jpg')} alt=""/>
                        </div>
                        <div className="post-content">
                          <a className="post-tag">Lifestyle</a>
                          <h4><a className="post-headline">Party people in the house</a></h4>
                          <div className="post-meta">
                            <p><a>12 March</a></p>
                          </div>
                        </div>
                      </div>

                      <div className="single-blog-post d-flex align-items-center widget-post">
                        <div className="post-thumbnail">
                          <img src={require('../../img/blog-img/lp2.jpg')} alt=""/>
                        </div>
                        <div className="post-content">
                          <a className="post-tag">Lifestyle</a>
                          <h4><a className="post-headline">A sunday in the park</a></h4>
                          <div className="post-meta">
                            <p><a>12 March</a></p>
                          </div>
                        </div>
                      </div>

                      <div className="single-blog-post d-flex align-items-center widget-post">
                        <div className="post-thumbnail">
                          <img src={require('../../img/blog-img/lp3.jpg')} alt=""/>
                        </div>
                        <div className="post-content">
                          <a className="post-tag">Lifestyle</a>
                          <h4><a className="post-headline">Party people in the house</a></h4>
                          <div className="post-meta">
                            <p><a>12 March</a></p>
                          </div>
                        </div>
                      </div>

                      <div className="post-thumbnail">
                        <div className="single-blog-post d-flex align-items-center widget-post">
                          <img src={require('../../img/blog-img/lp4.jpg')} alt=""/>
                        </div>
                        <div className="post-content">
                          <a className="post-tag">Lifestyle</a>
                          <h4><a className="post-headline">A sunday in the park</a></h4>
                          <div className="post-meta">
                            <p><a>12 March</a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-widget-area">
                    <h5 className="title">Tags</h5>
                    <div className="widget-content">
                      <ul className="tags">
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
        <footer className="footer-area text-center">
          <div className="container">
            <div className="row">
              <div className="col-12">

                <div className="classy-nav-container breakpoint-off">
                  <nav className="classy-navbar justify-content-center">

                    <div className="classy-navbar-toggler">
                      <span className="navbarToggler"><span></span><span></span><span></span></span>
                    </div>

                    <div className="classy-menu">

                      <div className="classycloseIcon">
                        <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                      </div>

                      <div className="classynav">
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

                <div className="footer-social-area mt-30">
                  <a data-toggle="tooltip" data-placement="top" title="Pinterest"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
                  <a data-toggle="tooltip" data-placement="top" title="Facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                  <a data-toggle="tooltip" data-placement="top" title="Twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                  <a data-toggle="tooltip" data-placement="top" title="Dribbble"><i className="fa fa-dribbble" aria-hidden="true"></i></a>
                  <a data-toggle="tooltip" data-placement="top" title="Behance"><i className="fa fa-behance" aria-hidden="true"></i></a>
                  <a data-toggle="tooltip" data-placement="top" title="Linkedin"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
          </div>

        </footer>
      </div>
    );
  }
}
