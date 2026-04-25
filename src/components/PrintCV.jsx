import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function PrintCV() {
  return (
    <div id="cv-print-template" className="cv-container">
      {/* Left Sidebar */}
      <div className="cv-left">
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
            <span>St. 371, Khan Sen Sok, Phnom Penh</span>
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
          </ul>
        </div>

        <div className="cv-section">
          <h3 className="cv-heading-left">LANGUAGES</h3>
          <ul className="cv-list cv-list-flex">
            <li><span>Khmer:</span> Native Tongue</li>
            <li><span>English:</span> Good (speaking, listening, reading, writing)</li>
          </ul>
        </div>

        <div className="cv-section">
          <h3 className="cv-heading-left">HOBBIES</h3>
          <ul className="cv-list">
            <li>Coding</li>
            <li>YouTube Creation</li>
            <li>Volunteering</li>
          </ul>
        </div>
      </div>

      {/* Right Content */}
      <div className="cv-right">
        <div className="cv-main-section">
          <h3 className="cv-heading-right">PROFILE</h3>
          <p className="cv-text">
            Hello, my name is Sarath Orn. I come from Siem Reap province and am currently living in Phnom Penh City. I am deeply passionate about information technology and my goal is to be a versatile Full-Stack Developer. I currently work as a Web Developer and also create YouTube videos to share my technical knowledge with others. I am highly motivated, communicative, and enjoy building systems that solve real-world problems.
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
              <li>Developed a microservices-based core banking platform supporting real-time account transfers.</li>
              <li>Implemented maker-checker approval workflows and full audit trails using Spring Boot and React.</li>
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
              <li>Built a modern, high-density Point of Sale (POS) application tailored for coffee shops with dynamic analytics.</li>
              <li>Developed robust digital storefronts offering complete product catalogs, cart management, and seamless checkout experiences using React and Node.js.</li>
            </ul>
          </div>
          
          <div className="cv-job">
            <div className="cv-job-header">
              <div>
                <h4>Web Developer Intern</h4>
                <span className="cv-company">Various Projects</span>
              </div>
              <span className="cv-date">2021 – 2022</span>
            </div>
            <ul className="cv-job-list">
              <li>Supported an ERP system using the Frappe Framework and built asset reports.</li>
              <li>Developed Student Follow-Up and Leave Management systems using Vue JS, Laravel, and MySQL.</li>
            </ul>
          </div>
        </div>

        <div className="cv-main-section">
          <h3 className="cv-heading-right">EDUCATION</h3>
          
          <div className="cv-edu">
            <h4>Associate Degree in Information Technology</h4>
            <span className="cv-date">2020 – 2022</span>
            <p className="cv-school">Passerelles Numeriques Cambodia (PNC), Phnom Penh</p>
          </div>

          <div className="cv-edu">
            <h4>High School Diploma</h4>
            <span className="cv-date">2017 – 2020</span>
            <p className="cv-school">Kralanh High School, Siem Reap Province</p>
          </div>
        </div>
      </div>
    </div>
  );
}
