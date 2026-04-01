import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactUs = () => {
  return (
    <>
      <Header />
      <div className="hero" style={{ height: '70vh', minHeight: '400px' }}>
        <div style={{ backgroundImage: 'url("/assets/images/cebras-en-el-Parque-Nacional-de-Amboseli.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', height: '100%', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,31,63,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 20px' }}>
            <h1 style={{ color: '#fff', fontSize: 'clamp(2.5rem, 8vw, 4rem)', lineHeight: '1.2', textAlign: 'center', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Contact Us</h1>
          </div>
        </div>
      </div>
      <main className="container" style={{ padding: '48px 20px', maxWidth: '800px', margin: '0 auto', minHeight: '50vh' }}>
        <h2 style={{ marginBottom: '20px' }}>Get In Touch With Zuru Wild Trails</h2>
        <p style={{ lineHeight: '1.6', marginBottom: '30px' }}>
          For enquiries, bookings, or creating a bespoke safari itinerary, please reach out to our contact person, <strong>Mirriam Kamene</strong>. We aim to respond to all inquiries within 24-48 hours.
        </p>

        <form style={{ display: 'grid', gap: '15px' }}>
          <input placeholder="Your Name" required style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' }} />
          <input placeholder="Your Email Address" type="email" required style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' }} />
          <textarea placeholder="Tell us about your dream safari..." rows="6" required style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem', resize: 'vertical' }}></textarea>
          <button className="btn" type="submit" style={{ backgroundColor: '#001f3f', color: '#fff', padding: '14px 30px', border: 'none', borderRadius: '8px', fontSize: '1.05rem', fontWeight: 'bold', cursor: 'pointer', justifySelf: 'start', transition: 'all 0.3s' }}>Send Message</button>
        </form>

        <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
          <h3 style={{ marginBottom: '15px' }}>Direct Contact Info</h3>
          <p style={{ marginBottom: '10px' }}><strong>Email:</strong> <a href="mailto:info@zuruwildtrails.com">info@zuruwildtrails.com</a></p>
          <p style={{ marginBottom: '10px' }}><strong>Contact Person:</strong> Mirriam Kamene</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactUs;
