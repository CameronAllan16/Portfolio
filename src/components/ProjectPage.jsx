import '../assets/projectPage.css';
import React from 'react';
import { useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Modal from './Modal';
import ProjectCard from './ProjectCard';
import projects from '../assets/data/projectCards.jsx';

function ProjectPage() {

  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <div className="Projects">
      <NavBar />
      <div className="content-wrapper">
        <div className="title">
          <div className="title-content">
            <h1>Projects</h1>
          </div>
        </div>
        {
          <>
            <div className="projects-grid">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />
              ))}
            </div>

            <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
              {selectedProject && (
                <>
                  <h2>{selectedProject.title}</h2>
                  <p>{selectedProject.longDescription}</p>
                  <ul>
                    {selectedProject.tech.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>
                </>
              )}
            </Modal>
          </>
        }
      </div>
      <Footer />
    </div>
  );
}

export default ProjectPage;
