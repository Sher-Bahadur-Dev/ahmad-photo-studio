import React from 'react';
import { Camera, CheckCircle2, MapPin, Eye, Sparkles, Sliders } from 'lucide-react';
import { STUDIO_INFO } from '../data/photographyData.ts';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#0d0f14] border-t border-[#1a1d26] relative overflow-hidden">
      {/* Subtle ambient glow behind image */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Large Photography Image Alongside Text */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#262b3a] shadow-2xl bg-[#14161f] group">
              <img
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=85"
                alt="Camera gear and studio craftsmanship at Ahmad Photo Studio Gulberg Lahore"
                className="w-full h-[380px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-transparent to-transparent opacity-80" />
              
              {/* Floating Studio Badge Overlay */}
              <div className="absolute bottom-5 left-5 right-5 sm:right-auto p-4 rounded-xl bg-[#0f1118]/90 border border-[#2a2f3f] backdrop-blur-md flex items-center gap-3.5 shadow-xl">
                <div className="w-10 h-10 rounded-lg bg-[#c5a059]/10 border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] shrink-0">
                  <Camera className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Studio in Gulberg, Lahore</p>
                  <p className="text-[11px] text-[#9ea3b0]">Mateen Majestic, Babbi Chowk</p>
                </div>
              </div>
            </div>

            {/* Subtle decorative frame accent */}
            <div className="hidden sm:block absolute -bottom-3 -right-3 w-full h-full border border-[#c5a059]/20 rounded-2xl -z-10 pointer-events-none" />
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#c5a059] font-medium mb-3">
              <span className="w-6 h-px bg-[#c5a059]" />
              <span>About Ahmad Photo Studio</span>
            </div>

            {/* Section Title */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Capturing Lahore’s Most Cherished Celebrations & Portraits
            </h2>

            {/* Authentic, unexaggerated narrative */}
            <div className="space-y-4 text-sm sm:text-base text-[#b2b7c4] leading-relaxed">
              <p>
                Located at Mateen Majestic in Gulberg, Lahore, <strong className="text-white font-medium">Ahmad Photo Studio</strong> is dedicated to crafting timeless imagery for families, couples, and professionals.
              </p>
              <p>
                We provide comprehensive photography and video services with a clear focus on quality, creativity, attention to detail, and memorable results. Whether documenting an elaborate wedding ceremony, taking a sharp executive portrait, or providing urgent passport photographs, every frame is treated with patient craftsmanship.
              </p>
            </div>

            {/* Core Values / Focus Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-[#1e2330]">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-md bg-[#161922] border border-[#2b3040] flex items-center justify-center text-[#c5a059] shrink-0 mt-0.5">
                  <Eye className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white tracking-wide uppercase">Attentive Eye</h4>
                  <p className="text-xs text-[#8e94a5] mt-0.5">Natural expressions, candid joy, and authentic atmosphere.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-md bg-[#161922] border border-[#2b3040] flex items-center justify-center text-[#c5a059] shrink-0 mt-0.5">
                  <Sliders className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white tracking-wide uppercase">Refined Editing</h4>
                  <p className="text-xs text-[#8e94a5] mt-0.5">Balanced color grading, natural skin tones, and rich contrast.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-md bg-[#161922] border border-[#2b3040] flex items-center justify-center text-[#c5a059] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white tracking-wide uppercase">Reliable Service</h4>
                  <p className="text-xs text-[#8e94a5] mt-0.5">Prompt timelines, respectful on-location conduct, and clear communication.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-md bg-[#161922] border border-[#2b3040] flex items-center justify-center text-[#c5a059] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white tracking-wide uppercase">Accessible Studio</h4>
                  <p className="text-xs text-[#8e94a5] mt-0.5">Centrally located in Gulberg near Babbi Chowk with easy access.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
