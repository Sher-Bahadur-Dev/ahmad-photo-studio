import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/photographyData.ts';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#0e1017] border-t border-[#1a1d26] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a059] font-medium mb-3">
            <span className="w-6 h-px bg-[#c5a059]" />
            <span>Client Experiences</span>
            <span className="w-6 h-px bg-[#c5a059]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Words From Our Clients
          </h2>
          <p className="text-sm sm:text-base text-[#9ea3b0] leading-relaxed">
            Authentic feedback from couples, families, and professionals who entrusted their milestones to Ahmad Photo Studio in Lahore.
          </p>
        </div>

        {/* Testimonials Grid (3-4 reviews) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              id={`review-card-${review.id}`}
              className="rounded-2xl bg-[#12141d] border border-[#222736] p-6 sm:p-8 flex flex-col justify-between shadow-lg relative group hover:border-[#c5a059]/40 transition-colors"
            >
              {/* Top Row: Star Rating + Quote Icon */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#dfba73] text-[#dfba73]"
                      />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#292e3e] group-hover:text-[#c5a059]/40 transition-colors" />
                </div>

                {/* Review Quote */}
                <p className="text-sm sm:text-base text-[#c4c8d4] leading-relaxed italic mb-6">
                  “{review.comment}”
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-4 border-t border-[#1e2330] flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-sm sm:text-base font-bold text-white">
                    {review.name}
                  </h4>
                  <p className="text-xs text-[#dfba73] mt-0.5">
                    {review.service}
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-[11px] text-[#787f91]">
                    <CheckCircle className="w-3 h-3 text-[#c5a059]" />
                    {review.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
