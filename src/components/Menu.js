import React, { useState, useEffect } from "react";
import "./Menu.css";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('en');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'pt', label: 'Português' }
  ];

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      // Close mobile menu when resizing to desktop
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.menu-wrapper')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="menu-wrapper">
      <div className="menu-container">
        {isMobile && (
          <button 
            className="menu-toggle" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        )}

        <div className={`menu-items ${isOpen ? 'open' : ''}`}>
          <a href="#projects" className="menu-item" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#about" className="menu-item" onClick={() => setIsOpen(false)}>About us</a>
          <a href="#process" className="menu-item" onClick={() => setIsOpen(false)}>Our process</a>
          <a href="#stories" className="menu-item" onClick={() => setIsOpen(false)}>Stories</a>
          <a href="#contact" className="menu-item" onClick={() => setIsOpen(false)}>Contact</a>
        </div>

        <div className="language-selector">
          <div 
            className="language-button"
            onClick={() => setIsOpen(!isOpen)}
            onKeyDown={(e) => e.key === 'Enter' && setIsOpen(!isOpen)}
            tabIndex={0}
            role="button"
            aria-expanded={isOpen}
            aria-haspopup="true"
          >
            <span>{selectedLang}</span>
            <svg 
              className={`dropdown-arrow ${isOpen ? 'open' : ''}`} 
              width="10" 
              height="6" 
              viewBox="0 0 10 6" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </div>
          {isOpen && (
            <div className="language-dropdown">
              {languages.map((lang) => (
                <div
                  key={lang.code}
                  className="language-option"
                  onClick={() => {
                    setSelectedLang(lang.code);
                    setIsOpen(false);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      setSelectedLang(lang.code);
                      setIsOpen(false);
                    }
                  }}
                  tabIndex={0}
                  role="menuitem"
                >
                  {lang.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Menu;
