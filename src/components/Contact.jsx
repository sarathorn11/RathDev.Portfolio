import React from 'react';
import { MapPin, Phone, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="container">
      <h2 className="section-title animate-fade-in-up">Let's <span className="text-gradient">Connect</span></h2>
      
      <div className="bento-contact">
        
        {/* Main CTA Card - Spans 2 cols */}
        <div className="bento-card bento-main animate-fade-in-up delay-100 glass-card">
          <div className="bento-content">
            <h3 className="bento-heading">Ready to start a <br/>project together?</h3>
            <p className="bento-desc">I'm currently available for freelance work and full-time opportunities. Let's create something amazing.</p>
            <a href="mailto:sarathorn91@gmail.com" className="bento-email-btn">
              <span className="email-text">sarathorn91@gmail.com</span>
              <div className="btn-icon-circle">
                <ArrowUpRight size={24} />
              </div>
            </a>
          </div>
          <div className="bento-glow-bg"></div>
        </div>

        {/* Socials Card - Spans 1 col, 2 rows */}
        <div className="bento-card bento-socials animate-fade-in-up delay-200 glass-card">
          <h4 className="bento-small-heading">Social Profiles</h4>
          <div className="social-links-vertical">
            <a href="https://linkedin.com/in/sarathorn11" target="_blank" rel="noreferrer" className="social-bento-link">
              <div className="icon-box linkedin-box">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </div>
              <div className="social-bento-text">
                <span>LinkedIn</span>
                <p>Connect with me</p>
              </div>
              <ArrowUpRight size={18} className="arrow-icon" />
            </a>
            
            <a href="https://github.com/sarathorn11" target="_blank" rel="noreferrer" className="social-bento-link">
              <div className="icon-box github-box">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              </div>
              <div className="social-bento-text">
                <span>GitHub</span>
                <p>Follow my work</p>
              </div>
              <ArrowUpRight size={18} className="arrow-icon" />
            </a>

            <a href="https://www.facebook.com/rathdev2025" target="_blank" rel="noreferrer" className="social-bento-link">
              <div className="icon-box facebook-box">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </div>
              <div className="social-bento-text">
                <span>Facebook</span>
                <p>rathdev2025</p>
              </div>
              <ArrowUpRight size={18} className="arrow-icon" />
            </a>

            <a href="https://www.youtube.com/@rath_dev" target="_blank" rel="noreferrer" className="social-bento-link">
              <div className="icon-box youtube-box">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </div>
              <div className="social-bento-text">
                <span>YouTube</span>
                <p>@rath_dev</p>
              </div>
              <ArrowUpRight size={18} className="arrow-icon" />
            </a>
          </div>
        </div>

        {/* Location Card - Spans 1 col */}
        <div className="bento-card bento-location animate-fade-in-up delay-300 glass-card">
          <div className="bento-icon-circle blue-glow">
            <MapPin size={24} />
          </div>
          <div className="bento-text-block">
            <span>Location</span>
            <h4>Phnom Pehn, Cambodia</h4>
            <p>531 Adam Street</p>
          </div>
        </div>

        {/* Phone Card - Spans 1 col */}
        <div className="bento-card bento-phone animate-fade-in-up delay-400 glass-card">
          <div className="bento-icon-circle green-glow">
            <Phone size={24} />
          </div>
          <div className="bento-text-block">
            <span>Call Me</span>
            <h4>+855 885 178 433</h4>
            <p>Available Mon-Fri</p>
          </div>
          <a href="tel:+855885178433" className="full-link-overlay"></a>
        </div>

      </div>
    </section>
  );
}
