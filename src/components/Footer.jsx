import React from 'react';
import { Share2, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer({ setActivePage, onScrollToSection }) {
  const handleNavClick = (page, sectionId) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (sectionId) {
      setTimeout(() => {
        onScrollToSection(sectionId);
      }, 100);
    }
  };

  return (
    <footer className="w-full bg-[#F2F4F6] border-t border-[#C5C6CD] text-[#45474C] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="space-y-6">
          <h4 className="text-xl font-bold text-[#091426]">QRX Skin Clinic</h4>
          <p className="text-sm leading-relaxed text-[#45474C]">
            A dermatology clinic in Karnataka focused on doing things properly, medical-grade diagnosis, honest advice, and treatments that are right for you.
          </p>
          {/* Social / Contact Icons */}
          <div className="flex gap-4">
            <a
              href="https://wa.me/917892653131"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-[#C5C6CD] flex items-center justify-center text-[#45474C] hover:text-[#006B5F] hover:border-[#006B5F] hover:bg-white transition-all duration-200"
              aria-label="WhatsApp"
            >
              <Share2 className="w-4 h-4" />
            </a>
            <button
              onClick={() => handleNavClick('home', 'about')}
              className="w-10 h-10 rounded-full border border-[#C5C6CD] flex items-center justify-center text-[#45474C] hover:text-[#006B5F] hover:border-[#006B5F] hover:bg-white transition-all duration-200"
              aria-label="Location"
            >
              <MapPin className="w-4 h-4" />
            </button>
            <a
              href="mailto:qruxstudio@gmail.com"
              className="w-10 h-10 rounded-full border border-[#C5C6CD] flex items-center justify-center text-[#45474C] hover:text-[#006B5F] hover:border-[#006B5F] hover:bg-white transition-all duration-200"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Services Column */}
        <div className="space-y-4">
          <h5 className="text-sm font-semibold tracking-wider text-[#091426] uppercase">Clinic Services</h5>
          <ul className="space-y-2.5 text-sm">
            <li>
              <button onClick={() => handleNavClick('services')} className="hover:text-[#006B5F] transition-colors">
                Clinical Dermatology
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('services')} className="hover:text-[#006B5F] transition-colors">
                Aesthetic Procedures
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('services')} className="hover:text-[#006B5F] transition-colors">
                Hair Restoration
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('services')} className="hover:text-[#006B5F] transition-colors">
                Laser Skin Care
              </button>
            </li>
          </ul>
        </div>

        {/* Information Column */}
        <div className="space-y-4">
          <h5 className="text-sm font-semibold tracking-wider text-[#091426] uppercase">Information</h5>
          <ul className="space-y-2.5 text-sm">
            <li>
              <button onClick={() => handleNavClick('home', 'about')} className="hover:text-[#006B5F] transition-colors">
                About Us
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('home', 'results')} className="hover:text-[#006B5F] transition-colors">
                Patient Results
              </button>
            </li>
            <li>
              <a href="#privacy" className="hover:text-[#006B5F] transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:text-[#006B5F] transition-colors">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="space-y-4">
          <h5 className="text-sm font-semibold tracking-wider text-[#091426] uppercase">Contact</h5>
          <p className="text-sm text-[#45474C] leading-relaxed">
            Visit our flagship clinic or reach out online.
          </p>
          <ul className="space-y-3 text-sm text-[#45474C]">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#006B5F] mt-0.5 shrink-0" />
              <span>Address 1, Address 2, Karnataka, India</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#006B5F] shrink-0" />
              <a href="tel:+917892653131" className="hover:text-[#006B5F] transition-colors">+91 7892 653131</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#006B5F] shrink-0" />
              <a href="mailto:qruxstudio@gmail.com" className="hover:text-[#006B5F] transition-colors">qruxstudio@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12 pt-6 border-t border-[#C5C6CD]/30 text-center text-xs text-[#8590A6]">
        <p>© 2026 <a href='https://www.qruxstudios.in/' target='_blank' className='hover:text-[#006B5F] transition-colors'>QRUX Studios</a>. All rights reserved.</p>
      </div>
    </footer>
  );
}
