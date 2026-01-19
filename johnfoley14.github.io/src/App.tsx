import { useState, useEffect, useRef } from 'react'
import './App.css'
import profile from './assets/trimmed_profile.png'

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isContactLocked, setIsContactLocked] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsContactLocked(false);
        setIsContactOpen(false);
      }
    };
    if (isContactLocked) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isContactLocked]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // We scroll to the top of the section container
      const offset = element.offsetTop;
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-left">
          <button onClick={() => scrollToSection('about')} className="nav-button">About me</button>
          <button onClick={() => scrollToSection('experience')} className="nav-button">Experience</button>
          <button onClick={() => scrollToSection('projects')} className="nav-button">Projects</button>
        </div>
        <div className="nav-right">
          <div 
            ref={dropdownRef}
            className="contact-dropdown"
            onMouseEnter={() => !isContactLocked && setIsContactOpen(true)}
            onMouseLeave={() => !isContactLocked && setIsContactOpen(false)}
          >
            <button 
              onClick={() => { setIsContactLocked(!isContactLocked); setIsContactOpen(!isContactLocked); }} 
              className="nav-button"
            >
              Contact
            </button>
            {isContactOpen && (
              <div className="dropdown-menu">
                <a href="#" className="dropdown-item">LinkedIn</a>
                <a href="#" className="dropdown-item">Email</a>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* --- SECTION 1: INTRO (Bottom Layer) --- */}
      <section id="intro" className="stacking-section intro-section">
        <div className="hero-container">
          <div className="hero-image-wrapper">
             <img src={profile} className="hero-image" alt="Profile" />
          </div>
          <div className="hero-content">
             <h1 className="hero-name">John Foley</h1>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: ABOUT (Slides OVER Intro) --- */}
      <section id="about" className="stacking-section about-section">
        <div className="section-inner">
          <div className="section-content-wrapper">
            <h2>About Me</h2>
            <p>This section slides up and covers the profile picture.</p>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: EXPERIENCE (Slides OVER About) --- */}
      <section id="experience" className="stacking-section experience-section">
        <div className="section-inner">
          <div className="section-content-wrapper">
            <h2>Experience</h2>
            <div className="experience-item">
              <h3>Role Name</h3>
              <p>Company • 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: PROJECTS (Slides OVER Experience) --- */}
      <section id="projects" className="stacking-section projects-section">
        <div className="section-inner">
           <div className="section-content-wrapper">
             <h2>Projects</h2>
             <div className="project-item">
               <h3>Project A</h3>
               <p>Description here.</p>
             </div>
           </div>
        </div>
      </section>

    </div>
  )
}

export default App