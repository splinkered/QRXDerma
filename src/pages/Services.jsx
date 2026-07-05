import React from 'react';
import { Sparkles, MessageCircle, CheckCircle, ChevronRight, HelpCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

// Import image assets
import clinicalDermatology from '../assets/clinical_dermatology.png';
import aestheticProcedures from '../assets/aesthetic_procedures.png';
import hairRestoration from '../assets/hair_restoration.png';

export default function Services() {
  const handleWhatsAppInquiry = (serviceName) => {
    const text = encodeURIComponent(`Hi QRX Skin Clinic, I would like to inquire about ${serviceName}.`);
    window.open(`https://wa.me/917892653131?text=${text}`, '_blank');
  };

  const revealHero = useScrollReveal({ threshold: 0.05 });
  const revealCards = useScrollReveal();
  const revealCta = useScrollReveal();

  return (
    <main className="flex-1 w-full bg-[#F7F9FB] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16 md:space-y-24">
        {/* 1. HERO SECTION */}
        <section className="space-y-6 max-w-3xl reveal" ref={revealHero}>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#091426]">
            What we offer
          </h1>
          <p className="text-lg text-[#45474C] leading-relaxed">
            Medical dermatology for conditions that need proper diagnosis, aesthetic treatments for things you'd like to change, and hair &amp; scalp care, all under one roof.
          </p>
        </section>

        {/* 2. TREATMENT BENTO GRID */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8" ref={revealCards}>

          {/* Category: Clinical Dermatology (Spans 12 columns, layout row: text left, image right) */}
          <div className="reveal reveal-delay-1 lg:col-span-12 bg-white border border-[#C5C6CD]/30 rounded-xl p-8 md:p-12 shadow-[0_2px_8px_-2px_rgba(9,20,38,0.08),0_8px_24px_-4px_rgba(9,20,38,0.06)] flex flex-col lg:flex-row gap-12 items-center">

            {/* Left Content */}
            <div className="flex-1 space-y-6 w-full">
              <div className="flex items-center gap-2 text-[#006B5F]">
                <Sparkles className="w-5 h-5 fill-current" />
                <span className="text-xs font-bold tracking-widest uppercase">MEDICAL GRADE</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#091426]">Clinical Dermatology</h2>
              <p className="text-base text-[#45474C] leading-relaxed">
                Our dermatologists address skin conditions the right way, with a proper diagnosis first. We treat everything from acne and post-inflammatory scarring to pigmentation, rosacea, and eczema.
              </p>

              {/* Treatments list inside Clinical Dermatology */}
              <div className="space-y-4 pt-4 border-t border-[#ECEEF0]">
                {/* Treatment 1 */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-2">
                  <div>
                    <h3 className="text-lg font-bold text-[#191C1E]">Acne & Scar Management</h3>
                    <p className="text-xs text-[#45474C]">Duration: 45 - 60 mins</p>
                  </div>
                  <button
                    onClick={() => handleWhatsAppInquiry('Acne & Scar Management')}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#006B5F] hover:text-[#005249] transition-colors self-start sm:self-center"
                  >
                    Inquire via WhatsApp
                  </button>
                </div>

                <div className="border-t border-[#ECEEF0]" />

                {/* Treatment 2 */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-2">
                  <div>
                    <h3 className="text-lg font-bold text-[#191C1E]">Pigmentation Correction</h3>
                    <p className="text-xs text-[#45474C]">Duration: 30 - 45 mins</p>
                  </div>
                  <button
                    onClick={() => handleWhatsAppInquiry('Pigmentation Correction')}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#006B5F] hover:text-[#005249] transition-colors self-start sm:self-center"
                  >
                    Inquire via WhatsApp
                  </button>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2 max-w-md h-72 rounded-lg overflow-hidden border border-[#C5C6CD]/20 shadow-sm shrink-0">
              <img
                src={clinicalDermatology}
                alt="Clinical Dermatology Setup"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

          {/* Category: Aesthetic Procedures (Spans 6 columns, tall card) */}
          <div className="reveal reveal-delay-2 lg:col-span-6 bg-white border border-[#C5C6CD]/30 rounded-xl overflow-hidden shadow-[0_2px_8px_-2px_rgba(9,20,38,0.08),0_8px_24px_-4px_rgba(9,20,38,0.06)] hover:shadow-[0_4px_16px_-2px_rgba(9,20,38,0.12),0_12px_32px_-4px_rgba(9,20,38,0.09)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col">
            <div className="h-64 overflow-hidden border-b border-[#C5C6CD]/20">
              <img
                src={aestheticProcedures}
                alt="Aesthetic Procedures"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-[#006B5F]">
                  <Sparkles className="w-5 h-5 fill-current" />
                  <span className="text-xs font-bold tracking-widest uppercase">AESTHETICS</span>
                </div>
                <h2 className="text-2xl font-bold text-[#091426]">Aesthetic Procedures</h2>
                <p className="text-sm text-[#45474C] leading-relaxed">
                  Non-surgical treatments for people who want results without looking "done". We lean toward the conservative side, less is usually more.
                </p>

                {/* Items List */}
                <ul className="space-y-4 pt-4 border-t border-[#ECEEF0]">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#006B5F] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#191C1E]">Dermal Fillers & Anti-Wrinkle</h4>
                      <p className="text-xs text-[#45474C]">30 - 60 mins • Immediate Result</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#006B5F] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#191C1E]">Hydra-Facial Therapy</h4>
                      <p className="text-xs text-[#45474C]">45 mins • No Downtime</p>
                    </div>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => handleWhatsAppInquiry('Aesthetic Procedures')}
                className="w-full py-3.5 border border-[#006B5F] hover:bg-[#006B5F]/5 text-[#006B5F] font-semibold rounded-lg text-sm text-center transition-colors"
              >
                View All Aesthetic Services
              </button>
            </div>
          </div>

          {/* Category: Hair Restoration (Spans 6 columns, tall card) */}
          <div className="reveal reveal-delay-3 lg:col-span-6 bg-white border border-[#C5C6CD]/30 rounded-xl overflow-hidden shadow-[0_2px_8px_-2px_rgba(9,20,38,0.08),0_8px_24px_-4px_rgba(9,20,38,0.06)] hover:shadow-[0_4px_16px_-2px_rgba(9,20,38,0.12),0_12px_32px_-4px_rgba(9,20,38,0.09)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col">
            <div className="h-64 overflow-hidden border-b border-[#C5C6CD]/20">
              <img
                src={hairRestoration}
                alt="Hair Restoration Therapy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-[#006B5F]">
                  <Sparkles className="w-5 h-5 fill-current" />
                  <span className="text-xs font-bold tracking-widest uppercase">RESTORATION</span>
                </div>
                <h2 className="text-2xl font-bold text-[#091426]">Hair Restoration</h2>
                <p className="text-sm text-[#45474C] leading-relaxed">
                  Hair thinning treated properly, starting with figuring out what's actually causing it. PRP, growth factor therapy, and low-level laser where appropriate.
                </p>

                {/* Items List */}
                <ul className="space-y-4 pt-4 border-t border-[#ECEEF0]">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#006B5F] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#191C1E]">Growth Factor Therapy</h4>
                      <p className="text-xs text-[#45474C]">60 mins • Multi-session</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#006B5F] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#191C1E]">Laser Scalp Stimulation</h4>
                      <p className="text-xs text-[#45474C]">30 mins • Painless</p>
                    </div>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => handleWhatsAppInquiry('Hair Restoration')}
                className="w-full py-3.5 border border-[#006B5F] hover:bg-[#006B5F]/5 text-[#006B5F] font-semibold rounded-lg text-sm text-center transition-colors"
              >
                Explore Hair Solutions
              </button>
            </div>
          </div>

        </section>

        {/* 3. BOTTOM CTA SECTION */}
        <section className="bg-[#091426] text-white rounded-xl p-8 md:p-16 text-center space-y-8 relative overflow-hidden shadow-lg reveal" ref={revealCta}>
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
              <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="1" />
              <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="1" />
            </svg>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
              Don't know which treatment you need?
            </h2>
            <p className="text-[#8590A6] text-base md:text-lg leading-relaxed">
              That's fine, most people don't when they first come in. Book a consultation and we'll take a proper look at your skin before recommending anything.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button
                onClick={() => handleWhatsAppInquiry('General Treatment Advice')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#006B5F] hover:bg-[#005249] text-white font-bold rounded-lg shadow-sm transition-colors"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                Speak to a Doctor
              </button>
              <button
                onClick={() => handleWhatsAppInquiry('Price List Request')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/30 hover:bg-white/10 text-white font-bold rounded-lg transition-colors"
              >
                View Price List
              </button>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
