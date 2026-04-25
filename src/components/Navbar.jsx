import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import html2pdf from 'html2pdf.js';

export default function Navbar({ isExporting, setIsExporting }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadPdf = () => {
    setIsExporting(true);
    
    // Allow React state to update the DOM before capturing
    setTimeout(() => {
      const element = document.getElementById('cv-print-template');
      
      const opt = {
        margin: 0,
        filename: 'RathDev_CV.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, scrollY: 0, windowWidth: 794 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };

      html2pdf().set(opt).from(element).save().then(() => {
        setIsExporting(false);
      });
    }, 500);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo text-gradient">RathDev.</a>
        
        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          
          <button 
            onClick={handleDownloadPdf}
            className="btn btn-outline"
            style={{ padding: '8px 16px', fontSize: '0.9rem' }}
          >
            {isExporting ? 'Generating...' : <><Download size={18} /> Export Resume</>}
          </button>
        </div>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
}
