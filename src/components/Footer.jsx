import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="site-footer">
      {/* Window title bar */}
      <div style={{
        background: 'linear-gradient(to right, #000080, #1084d0)',
        color: '#fff',
        fontSize: '12px',
        fontWeight: 700,
        padding: '3px 8px',
        fontFamily: 'Tahoma, Arial, sans-serif',
      }}>
        📁 Zuru Wild Trails — Contact &amp; Info
      </div>

      <div className="footer-grid">
        <div className="footer-about">
          <h3>Zuru Wild Trails</h3>
          <p>Passionate about responsible safaris across Africa. Local guides, small groups, unforgettable wildlife encounters. Led by our expert, Mirriam Kamene.</p>
        </div>
        
        <div className="footer-contact">
          <h4>Contact &amp; Info</h4>
          <p>Email: <a href="mailto:info@zuruwildtrails.com">info@zuruwildtrails.com</a></p>
          <p>Contact: Mirriam Kamene</p>
          <p>Phone: <a href="tel:+254700000000">+254 700 000 000</a></p>
          <p>Address: Nairobi, Kenya</p>
        </div>
        
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#" aria-label="Facebook" className="social facebook">Facebook</a>
            <a href="#" aria-label="Instagram" className="social instagram">Instagram</a>
            <a href="#" aria-label="X" className="social x">X (Twitter)</a>
            <a href="#" aria-label="YouTube" className="social youtube">YouTube</a>
          </div>
        </div>
        
        <div className="footer-legal">
          <h4>Legal</h4>
          <p><Link to="#">Privacy Policy</Link></p>
          <p><Link to="#">Terms of Service</Link></p>
        </div>
      </div>

      {/* Win2K taskbar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Zuru Wild Trails. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
