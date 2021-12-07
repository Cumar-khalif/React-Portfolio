import React from 'react'
import './Home.css';
import logo from './imgs/logo.png';

function Home() {
  return (
    <div className="home">
     <div className=".home__bg">
         <div className="header d__flex align__items__center pxy__30">
         <div className="logo">
             <img src={logo} alt="" />
             <div className="navigation pxy__30">
                 <ul className="navbar d__flex">
                    <a href="#Home"><li className="nav__items mx__15">Home</li></a>
                    <a href="#About"><li className="nav__items mx__15">About</li></a>
                    <a href="#Portfolio"><li className="nav__items mx__15">Portfolio</li></a>
                    <a href="#Resume"><li className="nav__items mx__15">Resume</li></a>
                    <a href="#Contact"><li className="nav__items mx__15">Contact</li></a>

                 </ul>
             </div>
          </div>
          <div className="container">
            <div className="home-content">
                <div className="home__meta">
                    <h1 className="home__text pz__10">
                        Here is my portfolio.
                    </h1>
                    <h2 className="home__text pz__10">
                       Hi, I'm Omar Abdirahman
                    </h2>
                    <h3 className="home__text sweet pz__10">
                       Full Stack Web Developer.
                    </h3>
                </div>
            </div>
          </div>
        </div>
     </div>
    </div>
  )
}

export default Home;
