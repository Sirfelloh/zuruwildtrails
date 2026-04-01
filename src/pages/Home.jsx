import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ValueProposition from '../components/ValueProposition';
import SafariGrid from '../components/SafariGrid';

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ValueProposition />
      <SafariGrid />
      <Footer />
    </>
  );
};

export default Home;
