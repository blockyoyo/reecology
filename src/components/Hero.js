import React from "react";
import Splash from "../assets/hero.png";
import ReecologyLogo from "../assets/ReEcology.svg";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <img
        alt="Reecology"
        loading="lazy"
        src={ReecologyLogo}
        className="hero-logo"
      />
      <div className="hero-content">
        <img
          alt="fonte da maia"
          loading="lazy"
          src={Splash}
          className="hero-splash"
        />
        <div className="hero-text">SMART</div>
        <div className="hero-ecological">ECOLOGICAL</div>
        <div className="hero-solutions">Solutions</div>
      </div>
    </div>
  );
}

export default Hero;
