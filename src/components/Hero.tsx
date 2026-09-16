import React from 'react';
import { MapPin, MessageSquare, Calendar, Phone, Sparkles, ChevronDown } from 'lucide-react';
import { STUDIO_INFO } from '../data/photographyData.ts';

interface HeroProps {
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  const scrollToServices = () => {
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 lg:py-0"
    >
      {/* Cinematic Background with Dark Vignette and Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85"
          alt="Cinematic wedding photography atmosphere by Ahmad Photo Studio"
          className="w-full h-full object-cover object-center filter brightness-[0.32] contrast-[1.08] scale-105 transform duration-1000 ease-out"
          loading="eager"
        />
        {/* Deep cinematic overlay layers */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-[#0b0c10]/70 to-[#0b0c10]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0c10]/95 via-transparent to-[#0b0c10]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_#0b0c10_85%)]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-6 sm:mt-10">
        {/* Location Indicator & Studio Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161922]/90 border border-[#c5a059]/30 text-xs text-[#dfba73] mb-6 shadow-lg backdrop-blur-md">
          <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
          <span className="font-medium tracking-wide">Gulberg, Lahore</span>
          <span className="w-1 h-1 rounded-full bg-[#c5a059]/60" />
          <span className="text-[#a6abb8] text-[11px]">Mateen Majestic, Babbi Chowk</span>
        </div>

        {/* Business Name */}
        <h1
          id="hero-business-title"
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-4 leading-none drop-shadow-md"
        >
          Ahmad Photo Studio
        </h1>

        {/* Tagline */}
        <p className="font-serif italic text-lg sm:text-2xl md:text-3xl text-[#dfba73] font-normal tracking-wide mb-6">
          “Capturing Moments. Creating Memories.”
        </p>

        {/* Short Supporting Text */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-[#b2b7c4] leading-relaxed mb-10 font-normal">
          Professional photography and video services in Lahore for weddings, events, portraits and every moment worth remembering.
        </p>

        {/* Prominent Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          {/* Book a Shoot */}
          <button
            id="hero-book-shoot-btn"
            type="button"
            onClick={onBookClick}
            className="w-full sm:w-auto min-w-[200px] inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold tracking-wide text-black bg-gradient-to-r from-[#c5a059] to-[#dfba73] hover:from-[#dfba73] hover:to-[#c5a059] transition-all shadow-lg hover:shadow-[#c5a059]/20 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Shoot</span>
          </button>

          {/* WhatsApp Us */}
          <a
            id="hero-whatsapp-btn"
            href={STUDIO_INFO.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-w-[200px] inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold tracking-wide text-white bg-[#25D366]/20 border border-[#25D366]/50 hover:bg-[#25D366] hover:text-black transition-all shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366] group-hover:text-black" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Call Now fallback pill for mobile users */}
        <div className="mt-5 flex items-center justify-center gap-2 text-xs text-[#8e94a5]">
          <span>Prefer a quick phone call?</span>
          <a
            id="hero-call-link"
            href={STUDIO_INFO.contact.phoneTelUrl}
            className="inline-flex items-center gap-1 text-[#dfba73] hover:underline font-medium"
          >
            <Phone className="w-3 h-3" />
            <span>+92 321 4251524</span>
          </a>
        </div>

        {/* Studio Specialty Badges */}
        <div className="mt-14 pt-8 border-t border-[#1e222e]/70 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center max-w-3xl mx-auto">
          <div className="p-3 rounded-lg bg-[#11131a]/60 border border-[#222634]">
            <p className="text-xs uppercase tracking-wider text-[#dfba73] font-semibold">Weddings</p>
            <p className="text-xs text-[#8f95a4] mt-0.5">Barat & Walima Coverage</p>
          </div>
          <div className="p-3 rounded-lg bg-[#11131a]/60 border border-[#222634]">
            <p className="text-xs uppercase tracking-wider text-[#dfba73] font-semibold">Portraits</p>
            <p className="text-xs text-[#8f95a4] mt-0.5">Creative Studio Sessions</p>
          </div>
          <div className="p-3 rounded-lg bg-[#11131a]/60 border border-[#222634]">
            <p className="text-xs uppercase tracking-wider text-[#dfba73] font-semibold">Events</p>
            <p className="text-xs text-[#8f95a4] mt-0.5">Corporate & Gatherings</p>
          </div>
          <div className="p-3 rounded-lg bg-[#11131a]/60 border border-[#222634]">
            <p className="text-xs uppercase tracking-wider text-[#dfba73] font-semibold">Passport & ID</p>
            <p className="text-xs text-[#8f95a4] mt-0.5">Instant Verified Prints</p>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        id="hero-scroll-indicator"
        type="button"
        onClick={scrollToServices}
        aria-label="Scroll down to services"
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-1.5 text-xs tracking-widest uppercase text-[#888e9f] hover:text-[#dfba73] transition-colors cursor-pointer"
      >
        <span className="text-[10px]">Explore Studio</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
};
