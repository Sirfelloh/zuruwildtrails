import React from 'react';
import { Star, ShieldCheck, MapPin } from 'lucide-react';

const ValueProposition = () => {
  return (
    <section className="value-prop-section">
      <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
        
        <div className="value-item" style={{ textAlign: 'center' }}>
          <Star size={28} color="#000080" style={{ marginBottom: '8px' }} />
          <h3 style={{ fontSize: '12px', marginBottom: '6px', fontFamily: 'Tahoma, Arial, sans-serif' }}>Top-Rated Reviews</h3>
          <p style={{ fontSize: '11px', lineHeight: '1.5', fontFamily: 'Tahoma, Arial, sans-serif', margin: 0 }}>Award-winning service trusted by thousands of travelers globally.</p>
        </div>

        <div className="value-item" style={{ textAlign: 'center' }}>
          <MapPin size={28} color="#000080" style={{ marginBottom: '8px' }} />
          <h3 style={{ fontSize: '12px', marginBottom: '6px', fontFamily: 'Tahoma, Arial, sans-serif' }}>Tailor-Made Itineraries</h3>
          <p style={{ fontSize: '11px', lineHeight: '1.5', fontFamily: 'Tahoma, Arial, sans-serif', margin: 0 }}>Personalized safaris specifically curated for your unique dream adventure.</p>
        </div>

        <div className="value-item" style={{ textAlign: 'center' }}>
          <ShieldCheck size={28} color="#000080" style={{ marginBottom: '8px' }} />
          <h3 style={{ fontSize: '12px', marginBottom: '6px', fontFamily: 'Tahoma, Arial, sans-serif' }}>Expert Local Guides</h3>
          <p style={{ fontSize: '11px', lineHeight: '1.5', fontFamily: 'Tahoma, Arial, sans-serif', margin: 0 }}>Travel safely with certified professionals who know the African wilderness.</p>
        </div>

      </div>
    </section>
  );
};

export default ValueProposition;
