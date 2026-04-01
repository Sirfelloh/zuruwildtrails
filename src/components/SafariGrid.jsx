import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const safarisData = [
  {
    id: 1,
    title: "Masai Mara Migration Safari",
    img: "/assets/images/Discover_The_Wonders_Of_Masai_Mara.jpg",
    destination: "kenya",
    duration: "4 Days",
    price: "From $1,200",
    status: "Available"
  },
  {
    id: 2,
    title: "Amboseli Elephant Trail",
    img: "/assets/images/hero__2_.jpg",
    destination: "kenya",
    duration: "3 Days",
    price: "From $950",
    status: "Available"
  },
  {
    id: 3,
    title: "Serengeti Great Migration",
    img: "/assets/images/Guepardo-durante-el-safari-en-kenia-masai-mara-1.jpg",
    destination: "tanzania",
    duration: "5 Days",
    price: "From $1,800",
    status: "Fully booked"
  },
  {
    id: 4,
    title: "Tsavo East & West Adventure",
    img: "/assets/images/elephants-on-a-game-drive-in-the-masai-mara.jpg",
    destination: "kenya",
    duration: "4 Days",
    price: "From $1,100",
    status: "Available"
  },
  {
    id: 5,
    title: "Ngorongoro Crater Tour",
    img: "/assets/images/buffalo.jpg",
    destination: "tanzania",
    duration: "3 Days",
    price: "From $1,400",
    status: "Available"
  },
  {
    id: 6,
    title: "Bwindi Gorilla Trek",
    img: "/assets/images/download.jpg",
    destination: "uganda",
    duration: "3 Days",
    price: "From $2,200",
    status: "Available"
  }
];

const SafariGrid = () => {
  const [filter, setFilter] = useState('all');

  const filteredSafaris = safarisData.filter(s => filter === 'all' || s.destination === filter);

  return (
    <section className="safaris" style={{ padding: '60px 0' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Our Curated Safaris</h2>
        <p className="intro" style={{ textAlign: 'center', marginBottom: '30px', color: '#666' }}>
          Choose from curated safari packages across Kenya, Tanzania, and Uganda. Tailored specifically for you!
        </p>

        <div className="controls" style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
          <div className="filters" role="tablist" aria-label="Filter safaris">
            <button className={`filter ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
            <button className={`filter ${filter === 'kenya' ? 'active' : ''}`} onClick={() => setFilter('kenya')}>Kenya</button>
            <button className={`filter ${filter === 'tanzania' ? 'active' : ''}`} onClick={() => setFilter('tanzania')}>Tanzania</button>
            <button className={`filter ${filter === 'uganda' ? 'active' : ''}`} onClick={() => setFilter('uganda')}>Uganda</button>
          </div>
        </div>

        <div className="cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
          {filteredSafaris.map(safari => (
            <article key={safari.id} className="card" style={{ background: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
              <img src={safari.img} alt={safari.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
              <div className="card-body" style={{ padding: '20px' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>{safari.title}</h3>
                <div className="meta" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', color: '#555', fontSize: '0.9rem' }}>
                  <span className="duration"><strong>Duration:</strong> {safari.duration}</span>
                  <span className="price" style={{ color: '#001f3f', fontWeight: 'bold', fontSize: '1.1rem' }}>{safari.price}</span>
                </div>
                <div className={`status ${safari.status === 'Available' ? 'available' : 'unavailable'}`} style={{ 
                  display: 'inline-block', padding: '5px 12px', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 'bold',
                  backgroundColor: safari.status === 'Available' ? '#e6f4ea' : '#fce8e6',
                  color: safari.status === 'Available' ? '#137333' : '#c5221f',
                  marginBottom: '15px' 
                }}>
                  {safari.status}
                </div>
                {safari.status === 'Available' ? (
                  <Link className="btn" to="/contact" style={{ display: 'block', textAlign: 'center', backgroundColor: '#001f3f', color: '#fff', padding: '12px', textDecoration: 'none', borderRadius: '6px', fontWeight: 'bold', transition: 'background-color 0.3s' }}>Inquire Now</Link>
                ) : (
                  <button className="btn disabled" disabled style={{ width: '100%', padding: '12px', border: 'none', backgroundColor: '#e0e0e0', color: '#777', borderRadius: '6px', fontWeight: 'bold' }}>Sold Out</button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafariGrid;
