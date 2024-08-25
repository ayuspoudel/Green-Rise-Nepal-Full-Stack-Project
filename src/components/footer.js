import React from 'react';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import StyledComponents from '../assets/wrappers/footer'; // Import the styled component

const Footer = () => {
  return (
    <StyledComponents>
      <div className="footer">
        <div className="cta">
          <h2>Join Our Newsletter</h2>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>Phone: +977 9802821400</p>
          <p>Email: Greenyouths68@gmail.com</p>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <button type="button" onClick={() => alert('Terms of Service')}>Terms of Service</button>
          <button type="button" onClick={() => alert('Privacy Policy')}>Privacy Policy</button>
        </div>

        <div className="legal-info">
          <p>&copy; 2024 Green Youth. All Rights Reserved.</p>
        </div>
      </div>
    </StyledComponents>
  );
};

export default Footer;
