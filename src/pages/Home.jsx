import React from 'react';
import { ArrowRight, Star, Award, Shield, FileText, Calendar } from 'lucide-react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

// Import local image assets
import heroBg from '../assets/hero_bg.png';
import serviceClinical from '../assets/service_clinical.png';
import serviceAesthetic from '../assets/service_aesthetic.png';
import serviceHair from '../assets/service_hair.png';
import trust1 from '../assets/trust_1.png';
import trust2 from '../assets/trust_2.png';
import trust3 from '../assets/trust_3.png';
import trust4 from '../assets/trust_4.png';

export default function Home({ setActivePage }) {
  const handleWhatsAppInquiry = (serviceName) => {
    const text = encodeURIComponent(`Hi QRX Skin Clinic, I would like to book an Expert Consultation.`);
    window.open(`https://wa.me/917892653131?text=${text}`, '_blank');
  };

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: 'Patient 2',
      initials: 'P2',
      text: '"The anti-aging treatments are incredibly subtle. No one knew I had anything done, they just kept saying I looked well-rested!"',
      stars: 5
    },
    {
      id: 2,
      name: 'Patient 3',
      initials: 'P3',
      text: '"QRX has the best laser equipment in the city. Professional, painless, and highly effective for my pigmentation issues."',
      stars: 4
    }
  ];

  // Steps data
  const steps = [
    {
      number: '1',
      title: 'DIGITAL CONSULTATION',
      desc: 'Secure, easy booking and initial screening from home.'
    },
    {
      number: '2',
      title: 'SKIN MAPPING',
      desc: 'High-precision diagnostic imaging and expert analysis.'
    },
    {
      number: '3',
      title: 'TARGETED TREATMENT',
      desc: 'Customized therapeutic or aesthetic procedures.'
    },
    {
      number: '4',
      title: 'POST-CARE SUPPORT',
      desc: 'Ongoing maintenance and 24/7 specialist access.'
    }
  ];

  return (
    <main className="flex-1 w-full bg-[#F7F9FB]">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Clinic Care"
            className="w-full h-full object-cover object-right md:object-center"
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F7F9FB] via-[#F7F9FB]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full grid grid-cols-1 lg:grid-cols-2">
          <div className="max-w-xl space-y-8">
            {/* Expertise Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#6DF5E1] rounded-full border border-[#006B5F]/20">
              <span className="text-xs font-bold text-[#006F64] tracking-wide uppercase">
                Expert Dermatological Care
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#091426] leading-tight">
              Advanced Dermatological Care for Radiantly Healthy Skin.
            </h1>

            {/* Paragraph */}
            <p className="text-lg text-[#45474C] leading-relaxed">
              Personalized, expert skin treatments tailored to your unique needs. Experience the precision of medical science and the art of aesthetics.
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
              Trusted by <span className="text-[#006B5F] font-bold">5000+</span> Happy Patients
            </p>
          </div>


        </div>
      </section>

      {/* 3. SERVICES PREVIEW SECTION */}
      <section id="services-preview" className="py-20 md:py-28 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#091426]">
            Precision Skin Solutions
          </h2>
          <p className="text-lg text-[#45474C] leading-relaxed">
            From clinical pathology to aesthetic enhancement, we provide a holistic approach to skin health.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Service 1 */}
          <div className="flex flex-col bg-white border border-[#C5C6CD]/40 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
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
                  Specialized care for chronic conditions like acne, eczema, and psoriasis using evidence-based protocols.
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
          <div className="flex flex-col bg-white border border-[#006B5F]/20 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
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
                  Advanced laser therapies, Botox, and dermal fillers designed to rejuvenate and maintain your natural beauty.
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
          <div className="flex flex-col bg-white border border-[#C5C6CD]/40 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
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
                  Innovative treatments for hair thinning and scalp health, restoring confidence through scientific restoration.
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* Feature 1 */}
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#006B5F]/10 flex items-center justify-center text-[#006B5F]">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#091426]">
                Board-Certified Experts
              </h3>
              <p className="text-base text-[#45474C] leading-relaxed">
                Our team consists of internationally recognized dermatologists with decades of combined clinical experience.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#006B5F]/10 flex items-center justify-center text-[#006B5F]">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#091426]">
                State-of-the-Art Tech
              </h3>
              <p className="text-base text-[#45474C] leading-relaxed">
                We utilize the latest FDA-approved diagnostic and treatment technologies for safer, more effective outcomes.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#006B5F]/10 flex items-center justify-center text-[#006B5F]">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#091426]">
                Tailored Plans
              </h3>
              <p className="text-base text-[#45474C] leading-relaxed">
                No two skins are the same. We craft personalized treatment journeys mapped to your genetic profile and goals.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. PATIENT JOURNEY SECTION */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#091426]">
            Your Journey to Radiance
          </h2>
          <p className="text-lg text-[#45474C] leading-relaxed">
            A seamless, medical-grade process designed for your comfort.
          </p>
        </div>

        {/* Steps Journey Grid */}
        <div className="relative">
          {/* Progress Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-1/8 right-1/8 h-0.5 bg-[#C5C6CD]/40 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center p-6 bg-white border border-[#C5C6CD]/30 rounded-xl shadow-sm hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-[#006B5F] text-white font-bold flex items-center justify-center text-lg mb-6 shadow-md border-4 border-[#F7F9FB]">
                  {step.number}
                </div>
                <h4 className="text-sm font-bold tracking-wider text-[#091426] mb-3 uppercase">
                  {step.title}
                </h4>
                <p className="text-sm text-[#45474C] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PATIENT RESULTS / TESTIMONIALS BENTO */}
      <section id="results" className="bg-[#F2F4F6] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#091426]">
              Patient Results
            </h2>
            <p className="text-lg text-[#45474C] leading-relaxed">
              Real stories and clinical outcomes from our QRX community.
            </p>
          </div>

          {/* Testimonial Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

            {/* Highlight Case: Before/After acne comparison (spans 2 cols, 2 rows) */}
            <div className="lg:col-span-2 lg:row-span-2 flex flex-col bg-white border border-[#C5C6CD]/40 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              {/* Image comparison slider */}
              <BeforeAfterSlider />

              {/* Patient details & quote */}
              <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#091426] rounded-full text-[10px] font-bold text-[#71F8E4] tracking-widest uppercase">
                    3 Months Progress
                  </div>
                  <p className="text-lg italic text-[#091426] leading-relaxed">
                    "The acne protocol changed my life. I finally feel confident in my own skin again. The team at QRX is world-class."
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#006B5F]/10 flex items-center justify-center font-bold text-[#006B5F]">
                    SJ
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#091426]">Patient 1</h4>
                    <p className="text-xs text-[#8590A6]">Acne Management Patient</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Standard Review Cards */}
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="lg:col-span-2 bg-white border border-[#C5C6CD]/40 rounded-xl p-8 flex flex-col justify-between gap-6 shadow-sm hover:shadow-md transition-shadow"
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

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Ready to Transform Your Skin?
          </h2>
          <p className="text-base md:text-lg text-[#8590A6] max-w-2xl mx-auto leading-relaxed">
            Join thousands of patients who have achieved their best skin health with QRX. Your transformation starts with a single consultation.
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
