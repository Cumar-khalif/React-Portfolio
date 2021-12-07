import React from 'react';
import  './About.css';
import aboutImg from "./img/about.jpg"

function About() {
    return (
      <div className="about component__space">
          <div className="container">
            <div className="row">
              <div className="col__2">
                <img src={about} alt="" className="about__img" />

              </div>

            </div>

          </div>
      </div>
    )
  }

export default About;

