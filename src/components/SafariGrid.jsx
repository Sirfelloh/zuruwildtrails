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
  const [selected, setSelected] = useState(null);

  const filteredSafaris = safarisData.filter(s => filter === 'all' || s.destination === filter);

  return (
    <section className="safaris">
      <div className="container">
        {/* Address / toolbar bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '3px 8px',
          background: 'var(--win-face)',
          borderBottom: '1px solid var(--win-shadow)',
          fontSize: '11px',
          fontFamily: 'Tahoma, Arial, sans-serif',
        }}>
          <span style={{ fontWeight: 700 }}>Address:</span>
          <div style={{
            flex: 1,
            background: 'white',
            borderTop: '1px solid var(--win-dark-shadow)',
            borderLeft: '1px solid var(--win-dark-shadow)',
            borderRight: '1px solid var(--win-highlight)',
            borderBottom: '1px solid var(--win-highlight)',
            padding: '1px 6px',
            fontSize: '11px',
            fontFamily: 'Tahoma, Arial, sans-serif',
          }}>
            🌍 C:\ZuruWildTrails\Safaris\
          </div>
        </div>

        {/* Intro text */}
        <p className="intro">
          Choose from curated safari packages across Kenya, Tanzania, and Uganda. Tailored specifically for you!
        </p>

        {/* Filter toolbar */}
        <div className="controls">
          <div className="filters" role="tablist" aria-label="Filter safaris">
            <button className={`filter ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>
              🗂 All
            </button>
            <button className={`filter ${filter === 'kenya' ? 'active' : ''}`} onClick={() => setFilter('kenya')}>
              🇰🇪 Kenya
            </button>
            <button className={`filter ${filter === 'tanzania' ? 'active' : ''}`} onClick={() => setFilter('tanzania')}>
              🇹🇿 Tanzania
            </button>
            <button className={`filter ${filter === 'uganda' ? 'active' : ''}`} onClick={() => setFilter('uganda')}>
              🇺🇬 Uganda
            </button>
          </div>
        </div>

        {/* Cards grid */}
        <div className="cards">
          {filteredSafaris.map(safari => (
            <article
              key={safari.id}
              className="card"
              onClick={() => setSelected(safari.id === selected ? null : safari.id)}
              style={{
                outline: selected === safari.id ? '2px dotted var(--win-titlebar)' : 'none',
                outlineOffset: '-2px',
              }}
            >
              <img src={safari.img} alt={safari.title} />
              <div className="card-body">
                <h3>{safari.title}</h3>
                <div className="meta">
                  <span>📅 {safari.duration}</span>
                  <span className="price">💲{safari.price.replace('From $', '')}</span>
                </div>
                <span className={`status ${safari.status === 'Available' ? 'available' : 'unavailable'}`}>
                  {safari.status === 'Available' ? '✔ Available' : '✖ Fully Booked'}
                </span>
                {safari.status === 'Available' ? (
                  <Link className="btn" to="/contact">
                    Inquire Now
                  </Link>
                ) : (
                  <button className="btn disabled" disabled>
                    Sold Out
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Win2K status bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2px',
          padding: '2px 8px',
          background: 'var(--win-face)',
          borderTop: '2px solid var(--win-dark-shadow)',
          fontSize: '11px',
          fontFamily: 'Tahoma, Arial, sans-serif',
        }}>
          <div style={{
            flex: 2,
            borderTop: '1px solid var(--win-dark-shadow)',
            borderLeft: '1px solid var(--win-dark-shadow)',
            borderRight: '1px solid var(--win-highlight)',
            borderBottom: '1px solid var(--win-highlight)',
            padding: '1px 6px',
          }}>
            {filteredSafaris.length} object(s)
          </div>
          <div style={{
            flex: 1,
            borderTop: '1px solid var(--win-dark-shadow)',
            borderLeft: '1px solid var(--win-dark-shadow)',
            borderRight: '1px solid var(--win-highlight)',
            borderBottom: '1px solid var(--win-highlight)',
            padding: '1px 6px',
          }}>
            {filteredSafaris.filter(s => s.status === 'Available').length} available
          </div>
          <div style={{
            flex: 1,
            borderTop: '1px solid var(--win-dark-shadow)',
            borderLeft: '1px solid var(--win-dark-shadow)',
            borderRight: '1px solid var(--win-highlight)',
            borderBottom: '1px solid var(--win-highlight)',
            padding: '1px 6px',
          }}>
            🖥 Nairobi, Kenya
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafariGrid;
