import { Routes, Route } from 'react-router-dom'
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from './context/ThemeContext';
import Home from './pages/Home'
import ProjectDetails from "./pages/ProjectDetails"
import About from './pages/About'
import StudentsDetails from './pages/StudentsDetails'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import SocialDetails from './pages/SocialDetails'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={ theme === 'dark' ? 'dark' : 'light'}>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/projects/:id" element={<ProjectDetails />} />
      <Route path="/about" element={<About/>} />
      <Route path="/Students/:id" element={<StudentsDetails />} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/social/:id" element={<SocialDetails />} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    </div>
  );
}

export default App;
