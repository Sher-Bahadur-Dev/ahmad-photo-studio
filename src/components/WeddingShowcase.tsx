import React from 'react';
import { Heart, Sparkles, Check, ArrowRight, ShieldCheck, Camera } from 'lucide-react';
import { STUDIO_INFO } from '../data/photographyData.ts';
import { EditingTransformation } from './EditingTransformation.tsx';

interface WeddingShowcaseProps {
  onBookWedding: () => void;
}

export const WeddingShowcase: React.FC<WeddingShowcaseProps> = ({ onBookWedding }) => {
  const highlights = [
    {
      title: 'Candid Moments',
      desc: 'Unscripted glances, heartfelt laughter, and emotional tears documented unobtrusively.',
    },
    {
      title: 'Couple Portraits',
      desc: 'Editorial-style couple sessions scheduled with comfortable pacing and flattering lighting.',
    },
    {
      title: 'Family Moments',
      desc: 'Organized, dignified group coverage celebrating elders, relatives, and lifelong bonds.',
    },
    {
      title: 'Ceremony Coverage',
      desc: 'Complete documentation of traditions across Mehndi, Barat, Nikkah, and Walima events.',
    },
    {
      title: 'Professional Editing',
      desc: 'Meticulous color grading, subtle skin retouching, and delivery in full high resolution.',
    },
  ];

  return (
    <section id="weddings" className="py-20 sm:py-28 bg-[#0e1017] border-t border-[#1a1d26] relative overflow-hidden">
      {/* Warm ambient background lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a059] font-medium mb-3">
            <span className="w-6 h-px bg-[#c5a059]" />
            <span>Dedicated Wedding Coverage</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Preserving the Grandeur & Intimacy of Pakistani Weddings
          </h2>
          <p className="text-sm sm:text-base text-[#adb2bf] leading-relaxed">
            Weddings in Lahore are vibrant, emotional, and filled with deep familial heritage. Ahmad Photo Studio blends photojournalistic storytelling with refined couple portraiture so your memories remain vivid for generations.
          </p>
        </div>

        {/* Visual Showcase: Large Cinematic Image + 3 Supporting Grid Images */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16 items-stretch">
          {/* Main Large Cinematic Wedding Image */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden relative border border-[#262b3a] bg-[#141620] group min-h-[380px] sm:min-h-[480px]">
            <img
              src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1400&q=85"
              alt="Traditional bridal wedding photography by Ahmad Photo Studio Lahore"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-transparent to-black/20" />
            
            <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 rounded-xl bg-[#0d0e14]/85 border border-white/10 backdrop-blur-md">
              <span className="text-[11px] uppercase tracking-widest text-[#dfba73] font-semibold">Bridal Portraiture</span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white mt-1">Timeless Elegance & Detail</h3>
              <p className="text-xs text-[#b0b4c2] mt-1">Artisan focus on traditional attire, jewelry craftsmanship, and emotional poise.</p>
            </div>
          </div>

          {/* 3 Smaller Supporting Images */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-6">
            <div className="col-span-2 rounded-xl overflow-hidden relative border border-[#262b3a] bg-[#141620] group h-52 sm:h-60">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85"
                alt="Evening wedding venue and couple atmosphere"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10]/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4">
                <p className="text-xs font-semibold text-white">Ceremony Ambiance</p>
                <p className="text-[11px] text-[#9ea3b0]">Warm lighting & stage decor capture</p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden relative border border-[#262b3a] bg-[#141620] group h-44 sm:h-52">
              <img
                src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=600&q=85"
                alt="Couple outdoor sunset portrait"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10]/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3">
                <p className="text-xs font-semibold text-white">Couple Portraits</p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden relative border border-[#262b3a] bg-[#141620] group h-44 sm:h-52">
              <img
                src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=85"
                alt="Wedding rings and jewelry heirloom details"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10]/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3">
                <p className="text-xs font-semibold text-white">Heirloom Details</p>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Emphasized Highlights + CTA Banner */}
        <div className="p-6 sm:p-10 rounded-2xl bg-[#13151e] border border-[#262a39] shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="flex items-center gap-2 mb-2 text-[#c5a059]">
                  <Check className="w-4 h-4 stroke-[2.5]" />
                  <h4 className="text-sm font-semibold text-white tracking-wide">{item.title}</h4>
                </div>
                <p className="text-xs text-[#8f95a4] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-[#1f2330] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs text-[#a6abb8] text-center sm:text-left">
              <div className="w-2 h-2 rounded-full bg-[#c5a059] animate-pulse shrink-0 hidden sm:block" />
              <span>Available for upcoming wedding seasons across Lahore & surrounding venues.</span>
            </div>

            {/* Book Wedding Photography CTA */}
            <button
              id="btn-book-wedding-cta"
              type="button"
              onClick={onBookWedding}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-sm font-semibold tracking-wide text-black bg-[#c5a059] hover:bg-[#dfba73] transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <span>Book Wedding Photography</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Interactive Before/After Editing Transformation Slider */}
        <EditingTransformation />
      </div>
    </section>
  );
};
