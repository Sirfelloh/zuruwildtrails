import React from 'react';
import { Star, ShieldCheck, MapPin } from 'lucide-react';

const ValueProposition = () => {
  return (
    <section className="value-prop-section" style={{ position: 'relative', zIndex: 10, marginTop: '-60px', padding: '0 20px', marginBottom: '40px' }}>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', textAlign: 'center' }}>
        
        <div className="value-item">
          <Star size={40} color="#001f3f" style={{ marginBottom: '15px' }} />
          <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', color: '#001f3f' }}>Top-Rated Reviews</h3>
          <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: '1.5' }}>Award-winning service trusted by thousands of travelers globally.</p>
        </div>

        <div className="value-item">
          <MapPin size={40} color="#001f3f" style={{ marginBottom: '15px' }} />
          <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', color: '#001f3f' }}>Tailor-Made Itineraries</h3>
          <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: '1.5' }}>Personalized safaris specifically curated for your unique dream adventure.</p>
        </div>

        <div className="value-item">
          <ShieldCheck size={40} color="#001f3f" style={{ marginBottom: '15px' }} />
          <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', color: '#001f3f' }}>Expert Local Guides</h3>
          <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: '1.5' }}>Travel safely with certified professionals who know the African wilderness.</p>
        </div>

      </div>
    </section>
  );
};

export default ValueProposition;
