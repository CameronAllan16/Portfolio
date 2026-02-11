import '../assets/projects.css';
import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

function Projects() {
  return (
    <div className="Projects">
      <NavBar />
      <div className="content-wrapper">
        <div className='title'>
          <div className='title-content'>
              <h1>Projects</h1>
          </div>
        </div>
        <div className="row">
          <div className="card">
            <div className="card-content">
              <h3>Estate Vault</h3>
              <p>
                EstateVault is an all-in-on estate management system where estate owners can store
                and manage their important estate documents, such as wills, power of attorney, but
                also a place to store external account information like Facebook login information.
                The system also allows for users to upload and share estate documents with approved
                connections with the user.
              </p>
            </div>
            <div className="go-button">
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="card-content">
                <h3>Portfolio</h3>
              </div>
            </div>
            <div className="go-button">
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
