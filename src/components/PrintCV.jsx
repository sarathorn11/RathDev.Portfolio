import React from 'react';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';
import profileImg from '../assets/profile.jpg';
import '../cv-print.css';


export default function PrintCV() {
  return (
    <div id="cv-print-template" className="cv-container">
      {/* Left Sidebar */}
      <div className="cv-left">
        <div className="cv-profile-pic-container">
          <img 
            src={profileImg} 
            alt="Sarath Orn" 
            className="cv-profile-pic" 
          />
        </div>

        
        <h1 className="cv-name">Sarath Orn</h1>
        <h2 className="cv-title">Web Developer</h2>

        <div className="cv-section">
          <h3 className="cv-heading-left">CONTACT</h3>
          <div className="cv-contact-item">
            <Phone size={14} className="cv-icon" />
            <span>+855 885 178 433</span>
          </div>
          <div className="cv-contact-item">
            <Mail size={14} className="cv-icon" />
            <span>sarathorn91@gmail.com</span>
          </div>
          <div className="cv-contact-item">
            <MapPin size={14} className="cv-icon" />
            <span>Phnom Penh, Cambodia</span>
          </div>
          <div className="cv-contact-item">
            <Globe size={14} className="cv-icon" />
            <span>rathdev.site</span>
          </div>
        </div>

        <div className="cv-section">
          <h3 className="cv-heading-left">SOCIALS</h3>
          <div className="cv-contact-item">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" className="cv-icon"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            <span>linkedin.com/in/sarathorn</span>
          </div>
          <div className="cv-contact-item">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" className="cv-icon"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            <span>github.com/rath-dev</span>
          </div>
        </div>


        <div className="cv-section">
          <h3 className="cv-heading-left">SKILLS</h3>
          <ul className="cv-list">
            <li>React & Vue.js</li>
            <li>Node.js & Express</li>
            <li>PHP & Laravel</li>
            <li>Python & Django</li>
            <li>PostgreSQL & MySQL</li>
            <li>Docker & AWS</li>
          </ul>
        </div>

        <div className="cv-section">
          <h3 className="cv-heading-left">LANGUAGES</h3>
          <ul className="cv-list cv-list-flex">
            <li><span>Khmer:</span> Native</li>
            <li><span>English:</span> Professional</li>
          </ul>
        </div>
      </div>

      {/* Right Content */}
      <div className="cv-right">
        <div className="cv-main-section">
          <h3 className="cv-heading-right">PROFESSIONAL SUMMARY</h3>
          <p className="cv-text">
            Deeply passionate Web Developer with experience in building full-stack applications. Specialized in modern JavaScript frameworks and robust backend systems. Proven track record in developing microservices, POS systems, and e-commerce platforms. Committed to writing clean, maintainable code and building systems that solve real-world problems.
          </p>
        </div>

        <div className="cv-main-section">
          <h3 className="cv-heading-right">WORK EXPERIENCE</h3>
          
          <div className="cv-job">
            <div className="cv-job-header">
              <div>
                <h4>Core Banking Developer</h4>
                <span className="cv-company">Freelance / Project – Cambodia</span>
              </div>
              <span className="cv-date">Jan 2023 – Present</span>
            </div>
            <ul className="cv-job-list">
              <li>Architected a microservices-based core banking platform supporting high-concurrency transfers.</li>
              <li>Integrated secure maker-checker approval workflows and comprehensive audit logging.</li>
              <li>Utilized Spring Boot and React to deliver a seamless, enterprise-grade user experience.</li>
            </ul>
          </div>

          <div className="cv-job">
            <div className="cv-job-header">
              <div>
                <h4>Full Stack Web Developer</h4>
                <span className="cv-company">Coffee Shop POS / E-Commerce</span>
              </div>
              <span className="cv-date">Jan 2022 – Dec 2022</span>
            </div>
            <ul className="cv-job-list">
              <li>Designed and implemented a high-performance POS system with real-time inventory tracking.</li>
              <li>Built custom e-commerce solutions featuring advanced cart logic and secure payment integrations.</li>
              <li>Optimized application performance, reducing initial load times by 40% through code splitting.</li>
            </ul>
          </div>
          
          <div className="cv-job">
            <div className="cv-job-header">
              <div>
                <h4>Web Developer Intern</h4>
                <span className="cv-company">Various Digital Projects</span>
              </div>
              <span className="cv-date">2021 – 2022</span>
            </div>
            <ul className="cv-job-list">
              <li>Enhanced ERP systems using Frappe Framework, automating complex financial reporting.</li>
              <li>Developed a comprehensive Student Leave Management system using Vue.js and Laravel.</li>
            </ul>
          </div>
        </div>

        <div className="cv-main-section">
          <h3 className="cv-heading-right">EDUCATION</h3>
          
          <div className="cv-edu">
            <div className="cv-edu-header">
              <h4>Associate Degree in IT</h4>
              <span className="cv-date">2020 – 2022</span>
            </div>
            <p className="cv-school">Passerelles Numeriques Cambodia (PNC)</p>
          </div>

          <div className="cv-edu">
            <div className="cv-edu-header">
              <h4>High School Diploma</h4>
              <span className="cv-date">2017 – 2020</span>
            </div>
            <p className="cv-school">Kralanh High School, Siem Reap</p>
          </div>
        </div>
      </div>
    </div>
  );
}

