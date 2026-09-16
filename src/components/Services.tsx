import React from 'react';
import { Heart, Calendar, User, IdCard, Video, ArrowRight } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/photographyData.ts';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Heart':
        return <Heart className="w-5 h-5" />;
      case 'Calendar':
        return <Calendar className="w-5 h-5" />;
      case 'User':
        return <User className="w-5 h-5" />;
      case 'IdCard':
        return <IdCard className="w-5 h-5" />;
      case 'Video':
        return <Video className="w-5 h-5" />;
      default:
        return <Heart className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#0b0c10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a059] font-medium mb-3">
            <span className="w-6 h-px bg-[#c5a059]" />
            <span>Our Offerings</span>
            <span className="w-6 h-px bg-[#c5a059]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Professional Photography & Video Services
          </h2>
          <p className="text-sm sm:text-base text-[#9ea3b0] leading-relaxed">
            Tailored visual services crafted for individuals, families, and businesses across Lahore with meticulous attention to detail and premium output.
          </p>
        </div>

        {/* Services Grid: 5 Services arranged in a balanced, intentional layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => {
            const isFeatured = service.id === 'wedding';
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className={`group relative rounded-xl overflow-hidden bg-[#12141c] border border-[#222634] hover:border-[#c5a059]/60 transition-all duration-500 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-black/50 ${
                  isFeatured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Image Header with smooth zoom */}
                <div className="relative h-52 sm:h-56 overflow-hidden bg-[#181b24]">
                  <img
                    src={service.imageUrl}
                    alt={`${service.title} by Ahmad Photo Studio in Lahore`}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out filter brightness-[0.8] group-hover:brightness-[0.95]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12141c] via-transparent to-black/30" />

                  {/* Icon badge */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-[#0e1017]/90 border border-[#2d3243] text-[#c5a059] flex items-center justify-center backdrop-blur-md shadow-md group-hover:bg-[#c5a059] group-hover:text-black transition-colors duration-300">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#dfba73] transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#b0b5c2] leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>

                    {/* Features list */}
                    <div className="space-y-1.5 pt-3 border-t border-[#1e222e]">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[#8f95a4]">
                          <span className="w-1 h-1 rounded-full bg-[#c5a059]" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action trigger */}
                  <div className="mt-6 pt-4 border-t border-[#1a1d27] flex items-center justify-between">
                    <button
                      id={`btn-inquire-${service.id}`}
                      type="button"
                      onClick={() => onSelectService(service.title)}
                      className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-[#dfba73] group-hover:text-white transition-colors cursor-pointer"
                    >
                      <span>Inquire About {service.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
