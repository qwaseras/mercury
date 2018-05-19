import React from 'react';

import bgImg1 from '../../../img//bg-img/b1.jpg';
import bgImg2 from '../../../img//bg-img/b2.jpg';
import bgImg3 from '../../../img//bg-img/b3.jpg';

export default () => (
  <div className="hero-area">
    <div className="hero-slides owl-carousel">
      <div className="single-hero-slide bg-img" style={{backgroundImage: `url(${bgImg1})`}}>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="slide-content text-center">
                <div className="post-tag">
                  <a data-animation="fadeInUp">lifestyle</a>
                </div>
                <h2 data-animation="fadeInUp" data-delay="250ms"><a href="single-post.html">Take a look at last night’s party!</a></h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single-hero-slide bg-img" style={{backgroundImage: `url(${bgImg2})`}}>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="slide-content text-center">
                <div className="post-tag">
                  <a data-animation="fadeInUp">lifestyle</a>
                </div>
                <h2 data-animation="fadeInUp" data-delay="250ms"><a href="single-post.html">Take a look at last night’s party!</a></h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single-hero-slide bg-img" style={{backgroundImage: `url(${bgImg3})`}}>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="slide-content text-center">
                <div className="post-tag">
                  <a data-animation="fadeInUp">lifestyle</a>
                </div>
                <h2 data-animation="fadeInUp" data-delay="250ms"><a href="single-post.html">Take a look at last night’s party!</a></h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
