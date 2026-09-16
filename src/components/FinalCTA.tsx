import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { STUDIO_INFO } from '../data/photographyData.ts';

interface FinalCTAProps {
  onBookClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onBookClick }) => {
  return (
    <section id="final-cta" className="py-20 sm:py-24 bg-[#0d0f15] border-t border-[#1a1d26] relative overflow-hidden">
      {/* Cinematic subtle background graphic */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=80"
          alt="Event atmosphere backdrop"
          className="w-full h-full object-cover filter grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0f15] via-transparent to-[#0d0f15]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative badge */}
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a059] font-medium mb-4">
          <span className="w-6 h-px bg-[#c5a059]" />
          <span>Ahmad Photo Studio Lahore</span>
          <span className="w-6 h-px bg-[#c5a059]" />
        </div>

        {/* CTA Heading */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-4">
          Your Moments Deserve to Be Remembered.
        </h2>

        {/* Supporting text */}
        <p className="text-sm sm:text-base md:text-lg text-[#b2b6c3] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Contact Ahmad Photo Studio in Lahore to discuss your next photography or video shoot.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          {/* Call Now */}
          <a
            id="final-cta-call-btn"
            href={STUDIO_INFO.contact.phoneTelUrl}
            className="w-full sm:w-auto min-w-[190px] inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-sm font-semibold tracking-wide text-white bg-[#191c26] border border-[#2d3243] hover:border-[#c5a059] hover:bg-[#202432] transition-all shadow-lg active:scale-98"
          >
            <Phone className="w-4 h-4 text-[#c5a059]" />
            <span>Call Now</span>
          </a>

          {/* WhatsApp Us */}
          <a
            id="final-cta-whatsapp-btn"
            href={STUDIO_INFO.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-w-[190px] inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-sm font-semibold tracking-wide text-white bg-[#25D366] hover:bg-[#20ba5a] transition-all shadow-lg active:scale-98"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Book Shoot link */}
        <div className="mt-6">
          <button
            id="final-cta-book-link"
            type="button"
            onClick={onBookClick}
            className="text-xs text-[#8f95a4] hover:text-[#dfba73] transition-colors underline underline-offset-4 cursor-pointer"
          >
            Or fill out our online shoot inquiry form
          </button>
        </div>
      </div>
    </section>
  );
};
