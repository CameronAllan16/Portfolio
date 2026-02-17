import '../assets/projects.css';
import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import CardGrid from './CardGrid';
import projectCards from '../assets/data/projectCards';

function ProjectPage() {
  return (
    <div className="Projects">
      <NavBar />
      <div className="content-wrapper">
        <div className="title">
          <div className="title-content">
            <h1>Projects</h1>
          </div>
        </div>
        {<CardGrid cards={projectCards} />}
      </div>
      <Footer />
    </div>
  );
}

export default ProjectPage;
