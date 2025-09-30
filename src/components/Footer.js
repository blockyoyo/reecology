import React from "react";
import FooterLogo from "../assets/ReEcology.svg";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <img
            alt="Reecology"
            loading="lazy"
            src={FooterLogo}
            className="footer__logo"
          />
          <div className="footer__tagline">
            <div className="footer__tagline-smart">SMART</div>
            <div className="footer__tagline-ecological">ECOLOGICAL</div>
            <div className="footer__tagline-solutions">Solutions</div>
          </div>

          <div className="footer__contact">
            <div className="footer__email">hello@reecology.org</div>
          </div>
          <div className="footer__join">
            <div className="footer__join-text">Join us</div>
            <div className="footer__divider" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
