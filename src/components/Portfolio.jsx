import '../assets/portfolio.css';
import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

function Portfolio() {
  return (
    <div className="app">
      <NavBar />

      <div className="content-wrapper">
        <div className="content">
          <div className="header-wrapper">
            <div className="header">
              <h1 className='header-content'>Services</h1>
            </div>
          </div>
          <div className="body-wrapper">
            <div className="body">
              <p className="body-content">This is a body</p>
            </div>
            <div className="body">
              <p className="body-content">This is a body</p>
            </div>
            <div className="body">
              <p className="body-content">This is a body</p>
            </div>
            <div className="body">
              <p className="body-content">This is a body</p>
            </div>
            <div className="body">
              <p className="body-content">This is a body</p>
            </div>
          </div>
          <div className='body-wrapper'>
            <div className='body'>
              <p className='body-content'>ong</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;
