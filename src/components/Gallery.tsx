import React, { useState } from 'react';
import { Maximize2, Sparkles, Filter } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/photographyData.ts';
import { LightboxModal } from './LightboxModal.tsx';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Works' },
    { id: 'weddings', label: 'Weddings' },
    { id: 'events', label: 'Events' },
    { id: 'portraits', label: 'Portraits' },
    { id: 'studio', label: 'Studio' },
    { id: 'other', label: 'Other' },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#0b0c10] border-t border-[#1a1d26] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a059] font-medium mb-3">
              <span className="w-6 h-px bg-[#c5a059]" />
              <span>Studio Portfolio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Selected Photography Works
            </h2>
            <p className="text-sm sm:text-base text-[#9ea3b0] mt-3 leading-relaxed">
              Explore our portfolio spanning grand wedding celebrations, studio portraits, community events, and creative video documentation in Lahore.
            </p>
          </div>

          {/* Quick Notice about image replacement */}
          <div className="text-xs text-[#717684] bg-[#12141c] border border-[#202330] rounded-lg p-3 self-start md:self-end">
            <span className="text-[#c5a059] font-medium">Studio Archive:</span> Click any photograph to view high-resolution details.
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div
          id="gallery-filters"
          role="tablist"
          aria-label="Gallery category filters"
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`filter-btn-${cat.id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#c5a059] text-black font-semibold shadow-md shadow-[#c5a059]/15'
                    : 'bg-[#151720] text-[#9ea3b0] hover:text-white hover:bg-[#1f222d] border border-[#232734]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Masonry / Responsive Photography Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const isTall = item.aspectRatio === 'portrait';
            return (
              <div
                key={item.id}
                id={`gallery-item-${item.id}`}
                className={`group relative rounded-xl overflow-hidden bg-[#141620] border border-[#222736] hover:border-[#c5a059]/50 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl ${
                  isTall ? 'sm:row-span-2' : ''
                }`}
                onClick={() => setSelectedPhoto(item)}
              >
                {/* Image element */}
                <div className={`w-full overflow-hidden ${isTall ? 'h-[440px] sm:h-full' : 'h-64 sm:h-72'}`}>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.88] group-hover:brightness-100"
                    loading={index < 4 ? 'eager' : 'lazy'}
                  />
                </div>

                {/* Subtle dark vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />

                {/* Category tag always visible */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-semibold tracking-wider uppercase text-[#dfba73] bg-[#0d0e14]/90 border border-white/10 backdrop-blur-md">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Magnify icon trigger */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#0d0e14]/80 border border-white/15 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md">
                  <Maximize2 className="w-3.5 h-3.5 text-[#dfba73]" />
                </div>

                {/* Bottom title and caption card appearing smoothly on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#9ea3b0] mt-1 line-clamp-1 group-hover:line-clamp-2 transition-all">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Helper Note for replacing pictures */}
        <div className="mt-12 text-center text-xs text-[#717684]">
          <span>Centralized gallery archive ready for Ahmad Photo Studio client photographs.</span>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <LightboxModal
          item={selectedPhoto}
          allItems={filteredItems}
          onClose={() => setSelectedPhoto(null)}
          onNavigate={(newItem) => setSelectedPhoto(newItem)}
        />
      )}
    </section>
  );
};
