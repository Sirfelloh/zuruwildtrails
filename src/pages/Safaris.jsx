import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SafariGrid from '../components/SafariGrid';

const Safaris = () => {
  return (
    <>
      <Header />
      <div className="hero" style={{ height: '70vh', minHeight: '400px' }}>
        <div style={{ backgroundImage: 'url("/assets/images/hero__5_.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', height: '100%', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,31,63,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 20px' }}>
            <h1 style={{ color: '#fff', fontSize: 'clamp(2.5rem, 8vw, 4rem)', lineHeight: '1.2', textAlign: 'center', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Our Safaris</h1>
          </div>
        </div>
      </div>
      <main style={{ minHeight: '40vh' }}>
        <SafariGrid />
      </main>
      <Footer />
    </>
  );
};

export default Safaris;
