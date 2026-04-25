import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import PrintCV from './components/PrintCV';

function App() {
  const [isExporting, setIsExporting] = useState(false);

  return (
    <div className={isExporting ? 'pdf-export-mode' : ''}>
      <Navbar isExporting={isExporting} setIsExporting={setIsExporting} />
      
      <main id="portfolio-content">
        <Hero isExporting={isExporting} />
        <Skills />
        <Projects isExporting={isExporting} />
        <Contact />
      </main>

      {!isExporting && (
        <footer>
          <div className="container">
            <p>&copy; {new Date().getFullYear()} RathDev. All rights reserved.</p>
          </div>
        </footer>
      )}

      {/* Hidden CV template for printing only - positioned off-screen but stays in DOM for capture */}
      <div 
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: isExporting ? '0' : '-9999px', 
          zIndex: isExporting ? 9999 : -100, 
          opacity: 1, // Keep opacity 1 for capture
          backgroundColor: 'white'
        }}
      >
        <PrintCV />
      </div>

    </div>
  );
}

export default App;
