import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

export default function Hero({ isExporting }) {
  return (
    <section id="about" className="hero container">
      <div className="hero-content">
        <div className="hero-text animate-fade-in-up">
          <span className="hero-greeting">Hello, I'm</span>
          <h1 className="hero-title">RathDev<span className="text-gradient">.</span></h1>
          <h2 className="hero-subtitle">Frontend Web Developer</h2>
          <p className="hero-desc">
            I craft beautiful, responsive, and highly interactive web applications. 
            Passionate about modern design, progressive web apps, and delivering exceptional user experiences.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Work <ArrowRight size={20} />
            </a>
            {!isExporting && (
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            )}
          </div>
        </div>
        <div className="hero-image animate-fade-in-up delay-300">
          <div className="hero-image-wrapper">
            <div className="hero-image-inner">
              <img 
                src={profileImg} 
                alt="RathDev Profile" 
                crossOrigin="anonymous"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
