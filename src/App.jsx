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

      {/* Hidden CV template for printing only */}
      <div style={{ position: 'absolute', top: 0, left: 0, zIndex: -100, opacity: isExporting ? 1 : 0, pointerEvents: 'none' }}>
        <PrintCV />
      </div>
    </div>
  );
}

export default App;
