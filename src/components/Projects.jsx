import React from 'react';
import { ExternalLink, Code } from 'lucide-react';

import typingGameImg from '../assets/projects/typing-game.jpg';
import coffeeShopImg from '../assets/projects/coffee-shop.jpg';
import ecommerceImg from '../assets/projects/ecommerce.jpg';
import schoolManagementImg from '../assets/projects/school-management.jpg';
import portfolioImg from '../assets/projects/portfolio.jpg';
import iconCreatorImg from '../assets/projects/icon-creator.jpg';

export default function Projects({ isExporting }) {
  const projects = [
    {
      title: 'Typing Game',
      description: 'An interactive browser-based typing speed test application that measures WPM and accuracy in real-time with an engaging interface.',
      image: typingGameImg,
      tech: ['JavaScript', 'HTML5', 'CSS3', 'DOM API'],
      live: 'https://typing-game-rosy-zeta.vercel.app/',
      github: 'https://github.com/sarathorn11/Typing-Game'
    },
    {
      title: 'Coffee Shop POS System',
      description: 'A modern, high-density Point of Sale (POS) application tailored for coffee shops, featuring advanced order management and dynamic analytics.',
      image: coffeeShopImg,
      tech: ['React', 'TailwindCSS', 'Node.js', 'Recharts'],
      live: 'https://coffee-shop-29xz.vercel.app/',
      github: 'https://github.com/sarathorn11/Coffee-Shop'
    },
    {
      title: 'E-Commerce Platform',
      description: 'A robust digital storefront offering complete product catalogs, cart management, and seamless checkout experiences.',
      image: ecommerceImg,
      tech: ['React', 'Node.js', 'MongoDB', 'Redux'],
      live: 'https://html-project-aeu-group7-omega.vercel.app/',
      github: 'https://github.com/sarathorn11/e_comerce_website'
    },
    {
      title: 'School Management System',
      description: 'A comprehensive educational management platform handling student records, attendance tracking, and administrative tasks.',
      image: schoolManagementImg,
      tech: ['Java', 'Spring Boot', 'MySQL', 'React'],
      live: 'https://sms-goahead.vercel.app/',
      github: 'https://github.com/sarathorn11/school_management_system'
    },
    {
      title: 'Portfolio Project',
      description: 'A modern, highly interactive personal developer portfolio featuring glassmorphism aesthetics, smooth animations, and an advanced Bento Box layout.',
      image: portfolioImg,
      tech: ['React', 'Vite', 'TailwindCSS', 'CSS3'],
      live: 'https://sarath-website.vercel.app/',
      github: 'https://github.com/sarathorn11/RathDev.Portfolio'
    },
    {
      title: 'Icon Creator Tool',
      description: 'A dedicated web application for generating, customizing, and exporting high-quality app icons and vector graphics.',
      image: iconCreatorImg,
      tech: ['React', 'JavaScript', 'TailwindCSS', 'Canvas API'],
      live: 'https://creating-icon-app-6gn1.vercel.app/',
      github: 'https://github.com/sarathorn11/Creating_icon_app'
    }
  ];

  return (
    <section id="projects" className="container">
      <h2 className="section-title animate-fade-in-up">Featured <span className="text-gradient">Projects</span></h2>
      <div className="projects-grid">
        {projects.map((project, index) => {
          const delayClass = `delay-${(index % 3 + 1) * 200}`;
          return (
            <div key={index} className={`project-card glass-card animate-fade-in-up ${delayClass}`}>
              <div className="project-image">
                <img src={project.image} alt={project.title} crossOrigin="anonymous" />
              </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.live} className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.9rem', flex: 1 }}>
                  <ExternalLink size={16} /> Live Demo
                </a>
                <a href={project.github} className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '0.9rem', flex: 1 }}>
                  <Code size={16} /> Code
                </a>
              </div>
            </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
