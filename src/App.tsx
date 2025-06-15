import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyPreva from './components/WhyPreva';
import ProactiveModel from './components/ProactiveModel';
import RiskSection from './components/RiskSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <WhyPreva />
      <ProactiveModel />
      <RiskSection />
      <Footer />
    </div>
  );
}

export default App;