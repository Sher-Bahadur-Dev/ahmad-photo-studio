import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Tag } from 'lucide-react';
import { GalleryItem } from '../data/photographyData.ts';

interface LightboxModalProps {
  item: GalleryItem | null;
  allItems: GalleryItem[];
  onClose: () => void;
  onNavigate: (newItem: GalleryItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  allItems,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, allItems]);

  if (!item) return null;

  const currentIndex = allItems.findIndex((i) => i.id === item.id);
  const totalCount = allItems.length;

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + totalCount) % totalCount;
    onNavigate(allItems[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % totalCount;
    onNavigate(allItems[nextIndex]);
  };

  return (
    <div
      id="gallery-lightbox-modal"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6 select-none animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Header Bar */}
      <div
        className="absolute top-4 left-4 right-4 sm:top-6 sm:left-8 sm:right-8 flex items-center justify-between z-20 pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-[#dfba73] bg-[#1a1d26] border border-[#c5a059]/30">
            <Tag className="w-3 h-3 text-[#c5a059]" />
            <span>{item.categoryLabel}</span>
          </span>
          <span className="text-xs text-[#8e94a5] font-mono">
            {currentIndex + 1} / {totalCount}
          </span>
        </div>

        <button
          id="lightbox-close-btn"
          type="button"
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-[#181a24]/90 border border-[#2b2f3e] text-white hover:text-[#dfba73] hover:border-[#c5a059]/60 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close image modal"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Arrow Previous */}
      <button
        id="lightbox-prev-btn"
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        className="hidden sm:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#181a24]/80 border border-[#2b2f3e] text-white hover:text-[#c5a059] hover:bg-[#1f2330] items-center justify-center transition-all cursor-pointer shadow-lg"
        aria-label="Previous photograph"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div
        className="relative max-w-5xl max-h-[82vh] w-full flex flex-col items-center justify-center pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.imageUrl}
          alt={item.title}
          className="max-h-[72vh] w-auto max-w-full object-contain rounded-lg border border-[#282d3d] shadow-2xl"
        />

        {/* Caption and Title Card */}
        <div className="w-full mt-4 text-center">
          <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">
            {item.title}
          </h3>
          {item.caption && (
            <p className="text-xs sm:text-sm text-[#9ea3b0] mt-1 max-w-xl mx-auto">
              {item.caption}
            </p>
          )}
        </div>
      </div>

      {/* Navigation Arrow Next */}
      <button
        id="lightbox-next-btn"
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        className="hidden sm:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#181a24]/80 border border-[#2b2f3e] text-white hover:text-[#c5a059] hover:bg-[#1f2330] items-center justify-center transition-all cursor-pointer shadow-lg"
        aria-label="Next photograph"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Mobile Navigation Controls */}
      <div
        className="sm:hidden absolute bottom-4 left-0 right-0 flex items-center justify-center gap-6 z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="mobile-lightbox-prev"
          type="button"
          onClick={handlePrev}
          className="px-4 py-2 rounded-lg bg-[#181a24] border border-[#2b2f3e] text-white text-xs flex items-center gap-1"
        >
          <ChevronLeft className="w-4 h-4" /> Prev
        </button>
        <button
          id="mobile-lightbox-next"
          type="button"
          onClick={handleNext}
          className="px-4 py-2 rounded-lg bg-[#181a24] border border-[#2b2f3e] text-white text-xs flex items-center gap-1"
        >
          Next <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
