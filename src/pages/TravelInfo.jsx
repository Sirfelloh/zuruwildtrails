import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// A stripped down version of the travel info for brevity, maintaining structure
const TravelInfo = () => {
  return (
    <>
      <Header />
      <div className="hero" style={{ height: '70vh', minHeight: '500px' }}>
        <div style={{ backgroundImage: 'url("/assets/images/hero__6_.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', height: '100%', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,31,63,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h1 style={{ color: '#fff', fontSize: '4rem', textAlign: 'center', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Destinations Guide</h1>
          </div>
        </div>
      </div>
      <main className="container travel-page" style={{ padding: '48px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <article className="travel-guide">
          <h2>East African Safari Destinations – Complete Guide</h2>
          <p style={{ lineHeight: '1.6', marginBottom: '20px' }}>From the vast savannahs of Kenya to the lush gorilla habitats of Uganda, East Africa's national parks and reserves provide unforgettable adventures for nature lovers, photographers, and explorers alike.</p>

          <hr style={{ margin: '30px 0', border: '1px solid #eee' }} />

          <section>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Maasai Mara National Reserve</h3>
            <p><strong>Location:</strong> South-Western Kenya</p>
            <p style={{ lineHeight: '1.6', marginTop: '10px' }}>The Maasai Mara National Reserve is Kenya’s most famous wildlife sanctuary and part of the greater Serengeti–Mara ecosystem. It is globally renowned for the <strong>Great Wildebeest Migration</strong>, which takes place between July and October.</p>
          </section>

          <hr style={{ margin: '30px 0', border: '1px solid #eee' }} />

          <section>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Amboseli National Park</h3>
            <p><strong>Location:</strong> Southern Kenya</p>
            <p style={{ lineHeight: '1.6', marginTop: '10px' }}>Amboseli National Park is celebrated for its breathtaking views of <strong>Mount Kilimanjaro</strong>. The park is especially famous for its large herds of free-roaming elephants.</p>
          </section>

          <hr style={{ margin: '30px 0', border: '1px solid #eee' }} />

          <section>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>General Visitor Information</h3>
            <ul style={{ listStyleType: 'disc', marginLeft: '20px', lineHeight: '1.6' }}>
              <li><strong>July – October:</strong> Excellent wildlife viewing and the Great Migration</li>
              <li><strong>January – March:</strong> Dry season with clear skies</li>
              <li><strong>April – May:</strong> Green season with fewer visitors</li>
            </ul>
          </section>

        </article>
      </main>
      <Footer />
    </>
  );
};

export default TravelInfo;
