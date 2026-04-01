import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const fullTextPart1 = "Zuru Wild ";
  const fullTextPart2 = "Trails";
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  useEffect(() => {
    let current1 = "";
    let current2 = "";
    let i = 0;
    
    const interval = setInterval(() => {
      if (i < fullTextPart1.length) {
        current1 += fullTextPart1[i];
        setText1(current1);
      } else if (i < fullTextPart1.length + fullTextPart2.length) {
        current2 += fullTextPart2[i - fullTextPart1.length];
        setText2(current2);
      } else {
        clearInterval(interval);
      }
      i++;
    }, 200);
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar overlay-navbar">
      <div className="logo">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <h1 className="logo-text">
            <span style={{ color: '#fff', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>{text1}</span>
            <span style={{ color: '#001f3f', textShadow: '2px 2px 0px #fff, -1px -1px 0 #fff' }}>{text2}</span>
            <span className="cursor">|</span>
          </h1>
        </Link>
      </div>
      
      <button 
        className="nav-toggle" 
        onClick={toggleMenu} 
        aria-label="Open menu" 
        aria-expanded={menuOpen}
        style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff' }}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
      
      <div className={`links ${menuOpen ? 'active' : ''}`} style={{ display: menuOpen ? 'block' : undefined }}>
        <ul>
          <li><Link to="/" className="nav-btn" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" className="nav-btn" onClick={() => setMenuOpen(false)}>About Us</Link></li>
          <li><Link to="/safaris" className="nav-btn" onClick={() => setMenuOpen(false)}>Safaris</Link></li>
          <li><Link to="/travel-info" className="nav-btn" onClick={() => setMenuOpen(false)}>Travel Info</Link></li>
          <li><Link to="/contact" className="nav-btn" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
