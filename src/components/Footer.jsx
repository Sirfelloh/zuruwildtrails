import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <h3>Zuru Wild Trails</h3>
          <p>Passionate about responsible safaris across Africa. Local guides, small groups, unforgettable wildlife encounters. Led by our expert, Mirriam Kamene.</p>
        </div>
        
        <div className="footer-contact">
          <h4>Contact & Info</h4>
          <p>Email: <a href="mailto:info@zuruwildtrails.com">info@zuruwildtrails.com</a></p>
          <p>Contact Person: Mirriam Kamene</p>
          <p>Phone: <a href="tel:+254700000000">+254 700 000 000</a></p>
          <p>Address: Nairobi, Kenya</p>
        </div>
        
        <div className="footer-social">
          <h4>Follow us</h4>
          <div className="social-links">
             {/* Note: In a real app we'd load SVGs, keeping structure identical to old site */}
            <a href="#" aria-label="Facebook" className="social facebook">Facebook</a>
            <a href="#" aria-label="Instagram" className="social instagram">Instagram</a>
            <a href="#" aria-label="X" className="social x">X</a>
            <a href="#" aria-label="YouTube" className="social youtube">YouTube</a>
          </div>
        </div>
        
        <div className="footer-legal">
          <h4>Legal</h4>
          <Link to="#">Privacy</Link><br />
          <Link to="#">Terms</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Zuru Wild Trails. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
