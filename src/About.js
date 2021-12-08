import React from 'react';
import  './About.css';
import aboutImg from './imgs/about.png';

function About() {
    return (
      <div className="about component__space">
          <div className="container">
            <div className="row">
              <div className="col__2">
                <img src={aboutImg} alt="" className="about__img" />
              </div>
              <div className="col__2">
                <h1 className="about__heading">
                  About Me
                </h1>
                  <div className="about__meta">
                    <p className="about__text p__color">
                        lorem ipsum dolor sit amet, lorem ipsum dolor.lorem ipsum dolor sit amet, lorem ipsum dolor.lorem ipsum dolor sit amet, lorem ipsum dolor
                        lorem ipsum dolor sit amet, lorem ipsum dolor.lorem ipsum dolor sit amet, lorem ipsum dolor.lorem ipsum dolor sit amet, lorem ipsum dolor
                        lorem ipsum dolor sit amet, lorem ipsum dolor.lorem ipsum dolor sit amet, lorem ipsum dolor
                    </p>
                    <p className="about__text p__color">
                        lorem ipsum dolor sit amet, lorem ipsum dolor.lorem ipsum dolor sit amet, lorem ipsum dolor.lorem ipsum dolor sit amet, lorem ipsum dolor
                        lorem ipsum dolor sit amet, lorem ipsum dolor.lorem ipsum dolor sit amet, lorem ipsum dolor.lorem ipsum dolor sit amet, lorem ipsum dolor
                        lorem ipsum dolor sit amet, lorem ipsum dolor.lorem ipsum dolor sit amet, lorem ipsum dolor
                    </p>
                    <p className="about__text p__color">
                        lorem ipsum dolor sit amet, lorem ipsum dolor.lorem ipsum dolor sit amet, lorem ipsum dolor.lorem ipsum dolor sit amet, lorem ipsum dolor
                        lorem ipsum dolor sit amet, lorem ipsum dolor.lorem ipsum dolor sit amet, lorem ipsum dolor.lorem ipsum dolor sit amet, lorem ipsum dolor
                        lorem ipsum dolor sit amet, lorem ipsum dolor.lorem ipsum dolor sit amet, lorem ipsum dolor
                    </p>
                    <div className="about__button d__flex align__items__center">
                      <a href="#"><button className="about btn pointer">Resume</button></a>

                    </div>
                  </div>
              </div>

            </div>

          </div>
      </div>
    )
  }

export default About;

