import React, { useState } from "react";
import "./Menu.css";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('en');

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'pt', label: 'Português' },
    { code: 'es', label: 'Español' }
  ];

  return (
    <div className="menu-wrapper">
      <div className="menu-container">
        <div className="menu-items">
          <div className="menu-item">Projects</div>
          <div className="menu-item">About us</div>
          <div className="menu-item">Our process</div>
          <div className="menu-item">Stories</div>
          <div className="menu-item">Contact</div>
        </div>
        <div className="language-selector">
          <div 
            className="language-button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>{selectedLang}</span>
            <svg 
              className={`dropdown-arrow ${isOpen ? 'open' : ''}`} 
              width="10" 
              height="6" 
              viewBox="0 0 10 6" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
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
