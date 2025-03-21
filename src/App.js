import { Routes, Route } from 'react-router-dom';
import './assets/App.css';

import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
import About from './components/About';
import Experience from './components/Experience';


export default function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Portfolio/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/experience" element={<Experience/>}/>
      </Routes>
    </>
  );
}
