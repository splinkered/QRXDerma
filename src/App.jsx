import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import Home from './pages/Home';
import Services from './pages/Services';

function App() {
  const [activePage, setActivePage] = useState('home');

  const handleScrollToSection = (sectionId) => {
    // Scroll to section with a smooth behavior
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F9FB] font-sans antialiased text-[#091426]">
      {/* Sticky Header Navigation */}
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        onScrollToSection={handleScrollToSection}
      />

      {/* Main Page Content */}
      {activePage === 'home' ? (
        <Home setActivePage={setActivePage} />
      ) : (
        <Services />
      )}

      {/* Floating WhatsApp Widget */}
      <WhatsAppFloat />

      {/* Footer */}
      <Footer 
        setActivePage={setActivePage} 
        onScrollToSection={handleScrollToSection}
      />
    </div>
  );
}

export default App;
