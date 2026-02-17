import { Routes, Route } from 'react-router-dom';
import './assets/App.css';
import React from 'react';
import ServicesPage from './components/ServicesPage';
import ProjectPage from './components/ProjectPage';
import AboutPage from './components/AboutPage';


export default function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<AboutPage/>}/>
          <Route path="/projects" element={<ProjectPage/>}/>
          <Route path="/services" element={<ServicesPage/>}/>
      </Routes>
    </>
  );
}
