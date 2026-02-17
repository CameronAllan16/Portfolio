import '../assets/styles/about.css';
import React from 'react';
import ProfileImage from '../assets/data/pic-of-me.JPG';
import NavBar from './NavBar';
import Footer from './Footer';

function AboutPage() {
  return (
    <div className="about">
      <NavBar />
      <div className="content-wrapper">
        <div className="col">
          <div className="col-content-wrapper" id="about-01">
            <div className="col-md-6">
              <img className="profile-image" src={ProfileImage} alt="Cameron Allan" />
            </div>
            <div className="col-md-6">
              <h1 className="about-header">
                Hi, <br></br> I'm Cameron
              </h1>
              <p>I'm a developer from Noblesville, Indiana.</p>
              <p>
                I specialize in creating clean and modern user interfaces using ReactJS and VueJS.
              </p>
              <p>
                When I'm not coding, you can find me spending time with my family, playing video
                games, and exploring the world of photography.
              </p>
            </div>
          </div>
          <div className="col">
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;
