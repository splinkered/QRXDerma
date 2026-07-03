import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, onScrollToSection }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { label: 'Home', value: 'home' },
    { label: 'Services', value: 'services' },
    { label: 'About Us', value: 'about' },
    { label: 'Results', value: 'results' },
  ];

  // URL-encoded WhatsApp configuration
  const WHATSAPP_NUMBER = "917892653131"; // Cleaned format without spaces/plus signs
  const WHATSAPP_MESSAGE = encodeURIComponent("Hi QRX Skin Clinic, I would like to book an Expert Consultation.");
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  const handleNavClick = (link) => {
    setIsOpen(false);
    if (link.value === 'about' || link.value === 'results') {
      setActivePage('home');
      // Small timeout to allow Home page to mount before scrolling
      setTimeout(() => {
        onScrollToSection(link.value);
      }, 100);
    } else {
      setActivePage(link.value);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleWhatsAppRedirect = () => {
    setIsOpen(false);
    window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F7F9FB]/90 backdrop-blur-md border-b border-[#C5C6CD]/40 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick({ value: 'home' })}
          className="text-2xl font-bold tracking-tight text-[#091426] hover:opacity-85 transition-opacity"
        >
          QRX Skin Clinic
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isLinkActive =
              (link.value === activePage) ||
              (link.value === 'about' && activePage === 'home' && false) ||
              (link.value === 'results' && activePage === 'home' && false);

            return (
              <button
                key={link.label}
                onClick={() => handleNavClick(link)}
                className={`relative py-1 text-sm font-semibold tracking-wide transition-colors ${isLinkActive
                  ? 'text-[#006B5F] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#006B5F]'
                  : 'text-[#45474C] hover:text-[#006B5F]'
                  }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right side CTA - WhatsApp Link */}
        <div className="hidden md:block">
          <button
            onClick={handleWhatsAppRedirect}
            className="px-5 py-2.5 bg-[#006B5F] hover:bg-[#005249] text-white text-sm font-semibold rounded-lg shadow-sm transition-all duration-200"
          >
            Book Consultation
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#091426] hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-[#C5C6CD]/30 bg-[#F7F9FB] px-6 py-4 space-y-3 shadow-lg absolute w-full left-0 animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link)}
              className="block w-full text-left py-2 text-base font-medium text-[#45474C] hover:text-[#006B5F] transition-colors"
            >
              {link.label}
            </button>
          ))}
          {/* Mobile CTA - WhatsApp Link */}
          <button
            onClick={handleWhatsAppRedirect}
            className="block w-full text-center py-3 bg-[#006B5F] hover:bg-[#005249] text-white font-semibold rounded-lg shadow-sm transition-all duration-200"
          >
            Book Consultation
          </button>
        </div>
      )}
    </header>
  );
}