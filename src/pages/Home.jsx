import React from 'react';
import { ArrowRight, Star, Award, Shield, FileText, Calendar } from 'lucide-react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { useParallax } from '../hooks/useParallax';
import { useScrollReveal } from '../hooks/useScrollReveal';

// Import local image assets
import heroBg from '../assets/hero_bg.jpg';
import serviceClinical from '../assets/service_clinical.jpeg';
import serviceAesthetic from '../assets/service_aesthetic.png';
import serviceHair from '../assets/service_hair.jpg';

export default function Home({ setActivePage }) {
  const handleWhatsAppInquiry = (serviceName) => {
    const text = encodeURIComponent(`Hi QRX Skin Clinic, I would like to book an Expert Consultation.`);
    window.open(`https://wa.me/917892653131?text=${text}`, '_blank');
  };

  // Parallax ref for hero background image
  const parallaxBgRef = useParallax(0.35);

  // Scroll-reveal refs for each section group
  const revealServices = useScrollReveal();
  const revealAbout = useScrollReveal();
  const revealTestimonials = useScrollReveal();
  const revealCta = useScrollReveal();

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: 'Ananya R.',
      initials: 'AR',
      text: '"The results were so natural, friends kept asking if I\'d been on holiday. Nobody could tell I\'d had anything done, which was exactly what I wanted."',
      stars: 5
    },
    {
      id: 2,
      name: 'Karthik M.',
      initials: 'KM',
      text: '"Dealt with pigmentation for years before coming here. Three sessions in and the difference is obvious. The doctor actually explained what was causing it instead of just treating the surface."',
      stars: 4
    }
  ];

  return (
    <main className="flex-1 w-full bg-[#F7F9FB]">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            ref={parallaxBgRef}
            src={heroBg}
            alt="Clinic Care"
            className="parallax-img w-full h-[130%] object-cover object-right md:object-center -top-[15%] absolute"
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F7F9FB] via-[#F7F9FB]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full grid grid-cols-1 lg:grid-cols-2">
          <div className="max-w-xl space-y-8">

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#091426] leading-tight">
              Skin care that actually works.
            </h1>

            {/* Paragraph */}
            <p className="text-lg text-[#45474C] leading-relaxed">
              QRX brings together medical dermatology and aesthetic care under one roof. No generic protocols, just treatment built around your skin.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => setActivePage('services')}
                className="px-6 py-4 bg-[#006B5F] hover:bg-[#005249] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-center"
              >
                Book Free Consultation
              </button>
              <button
                onClick={() => setActivePage('services')}
                className="px-6 py-4 border border-[#75777D] hover:bg-[#091426]/5 text-[#091426] font-semibold rounded-lg transition-all duration-200 text-center"
              >
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR SECTION */}
      <section className="bg-[#F2F4F6] border-y border-[#C5C6CD]/40 py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Star review trigger */}
          <div className="flex items-center justify-center gap-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#FFB800] text-[#FFB800]" />
              ))}
            </div>
            <p className="text-base font-semibold text-[#091426]">
              <span className="text-[#006B5F] font-bold">5,000+</span> patients treated across Karnataka
            </p>
          </div>


        </div>
      </section>

      {/* 3. SERVICES PREVIEW SECTION */}
      <section id="services-preview" className="py-20 md:py-28 max-w-7xl mx-auto px-6 lg:px-8" ref={revealServices}>
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#091426]">
            What we treat
          </h2>
          <p className="text-lg text-[#45474C] leading-relaxed">
            Whether it's a medical condition or something you'd just like to address, we handle both.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Service 1 */}
          <div className="reveal reveal-delay-1 flex flex-col bg-white border border-[#C5C6CD]/30 rounded-xl overflow-hidden shadow-[0_2px_8px_-2px_rgba(9,20,38,0.08),0_8px_24px_-4px_rgba(9,20,38,0.06)] hover:shadow-[0_4px_16px_-2px_rgba(9,20,38,0.12),0_12px_32px_-4px_rgba(9,20,38,0.09)] hover:-translate-y-0.5 transition-all duration-300 group">
            <div className="h-56 overflow-hidden">
              <img
                src={serviceClinical}
                alt="Clinical Dermatology"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-bold text-[#006B5F] tracking-widest uppercase">
                  THERAPEUTIC
                </span>
                <h3 className="text-xl font-bold text-[#091426]">
                  Clinical Dermatology
                </h3>
                <p className="text-sm text-[#45474C] leading-relaxed">
                  Acne, eczema, psoriasis, and other skin conditions treated with proper diagnosis, not guesswork.
                </p>
              </div>
              <button
                onClick={() => setActivePage('services')}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#006B5F] hover:text-[#005249] transition-colors self-start group/link"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Service 2 */}
          <div className="reveal reveal-delay-2 flex flex-col bg-white border border-[#006B5F]/20 rounded-xl overflow-hidden shadow-[0_2px_8px_-2px_rgba(9,20,38,0.08),0_8px_24px_-4px_rgba(9,20,38,0.06)] hover:shadow-[0_4px_16px_-2px_rgba(9,20,38,0.12),0_12px_32px_-4px_rgba(9,20,38,0.09)] hover:-translate-y-0.5 transition-all duration-300 group">
            <div className="h-56 overflow-hidden">
              <img
                src={serviceAesthetic}
                alt="Aesthetic & Anti-Aging"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-bold text-[#006B5F] tracking-widest uppercase">
                  ENHANCEMENT
                </span>
                <h3 className="text-xl font-bold text-[#091426]">
                  Aesthetic & Anti-Aging
                </h3>
                <p className="text-sm text-[#45474C] leading-relaxed">
                  Laser therapy, Botox, and fillers, done conservatively. We're not here to change how you look, just to help you look like yourself.
                </p>
              </div>
              <button
                onClick={() => setActivePage('services')}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#006B5F] hover:text-[#005249] transition-colors self-start group/link"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Service 3 */}
          <div className="reveal reveal-delay-3 flex flex-col bg-white border border-[#C5C6CD]/30 rounded-xl overflow-hidden shadow-[0_2px_8px_-2px_rgba(9,20,38,0.08),0_8px_24px_-4px_rgba(9,20,38,0.06)] hover:shadow-[0_4px_16px_-2px_rgba(9,20,38,0.12),0_12px_32px_-4px_rgba(9,20,38,0.09)] hover:-translate-y-0.5 transition-all duration-300 group">
            <div className="h-56 overflow-hidden">
              <img
                src={serviceHair}
                alt="Hair & Scalp Restoration"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-bold text-[#006B5F] tracking-widest uppercase">
                  RESTORATION
                </span>
                <h3 className="text-xl font-bold text-[#091426]">
                  Hair & Scalp Restoration
                </h3>
                <p className="text-sm text-[#45474C] leading-relaxed">
                  Hair thinning and scalp conditions treated with growth factor therapy and low-level laser, approaches that have a real evidence base.
                </p>
              </div>
              <button
                onClick={() => setActivePage('services')}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#006B5F] hover:text-[#005249] transition-colors self-start group/link"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. THE QRX DIFFERENCE SECTION */}
      <section id="about" className="bg-[#F2F4F6] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12" ref={revealAbout}>

            {/* Feature 1 */}
            <div className="reveal reveal-delay-1 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#006B5F]/10 flex items-center justify-center text-[#006B5F]">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#091426]">
                Qualified dermatologists
              </h3>
              <p className="text-base text-[#45474C] leading-relaxed">
                Every treatment at QRX is overseen by a trained dermatologist, not a technician following a protocol sheet.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="reveal reveal-delay-2 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#006B5F]/10 flex items-center justify-center text-[#006B5F]">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#091426]">
                Equipment that matters
              </h3>
              <p className="text-base text-[#45474C] leading-relaxed">
                We invest in FDA-cleared devices because the hardware genuinely affects outcomes. No shortcuts on the things that count.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="reveal reveal-delay-3 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#006B5F]/10 flex items-center justify-center text-[#006B5F]">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#091426]">
                Your skin, not a template
              </h3>
              <p className="text-base text-[#45474C] leading-relaxed">
                We don't have a standard package for every patient. The plan we build is based on what's actually happening with your skin.
              </p>
            </div>

          </div>
        </div>
      </section>



      {/* 6. PATIENT RESULTS / TESTIMONIALS BENTO */}
      <section id="results" className="bg-[#F2F4F6] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16" ref={revealTestimonials}>
          <div className="max-w-3xl space-y-4 reveal">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#091426]">
              What patients say
            </h2>
            <p className="text-lg text-[#45474C] leading-relaxed">
              A few words from people who've been through treatment here.
            </p>
          </div>

          {/* Testimonial Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

            {/* Highlight Case: Before/After acne comparison (spans 2 cols, 2 rows) */}
            <div className="reveal reveal-delay-1 lg:col-span-2 lg:row-span-2 flex flex-col bg-white border border-[#C5C6CD]/30 rounded-xl overflow-hidden shadow-[0_2px_8px_-2px_rgba(9,20,38,0.08),0_8px_24px_-4px_rgba(9,20,38,0.06)] hover:shadow-[0_4px_16px_-2px_rgba(9,20,38,0.12),0_12px_32px_-4px_rgba(9,20,38,0.09)] transition-shadow">
              {/* Image comparison slider */}
              <BeforeAfterSlider />

              {/* Patient details & quote */}
              <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#091426] rounded-full text-[10px] font-bold text-[#71F8E4] tracking-widest uppercase">
                    3-month result
                  </div>
                  <p className="text-lg italic text-[#091426] leading-relaxed">
                    "I'd tried everything before coming here. After three months on the acne protocol, my skin looked better than it did in school. I actually stopped wearing foundation."
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#006B5F]/10 flex items-center justify-center font-bold text-[#006B5F]">
                    SR
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#091426]">Shreya R.</h4>
                    <p className="text-xs text-[#8590A6]">Acne & scar treatment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Standard Review Cards */}
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="reveal reveal-delay-2 lg:col-span-2 bg-white border border-[#C5C6CD]/30 rounded-xl p-8 flex flex-col justify-between gap-6 shadow-[0_2px_8px_-2px_rgba(9,20,38,0.08),0_8px_24px_-4px_rgba(9,20,38,0.06)] hover:shadow-[0_4px_16px_-2px_rgba(9,20,38,0.12),0_12px_32px_-4px_rgba(9,20,38,0.09)] transition-shadow"
              >
                <div className="space-y-4">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFB800] text-[#FFB800]" />
                    ))}
                  </div>
                  <p className="text-base text-[#45474C] leading-relaxed">
                    {testimonial.text}
                  </p>
                </div>
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#006B5F]/10 flex items-center justify-center font-bold text-[#006B5F]">
                    {testimonial.initials}
                  </div>
                  <h4 className="text-sm font-bold text-[#091426]">{testimonial.name}</h4>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* 7. GLOBAL CTA SECTION */}
      <section className="bg-[#091426] text-white py-20 md:py-24 relative overflow-hidden">
        {/* Subtle background graphic */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,50 Q25,70 50,50 T100,50" fill="none" stroke="white" strokeWidth="0.5" />
            <path d="M0,60 Q25,80 50,60 T100,60" fill="none" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8 reveal" ref={revealCta}>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Not sure where to start?
          </h2>
          <p className="text-base md:text-lg text-[#8590A6] max-w-2xl mx-auto leading-relaxed">
            Book a consultation and we'll figure it out together. No pressure, no upselling, just an honest look at what's going on with your skin.
          </p>
          <div className="pt-2">
            <button
              onClick={handleWhatsAppInquiry}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#71F8E4] hover:bg-[#5cecd7] text-[#00201C] font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
            >
              <Calendar className="w-5 h-5" />
              Book Your Expert Consultation
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
