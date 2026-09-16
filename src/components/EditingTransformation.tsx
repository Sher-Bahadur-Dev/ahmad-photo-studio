import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'motion/react';
import { SlidersHorizontal, Sparkles, Image as ImageIcon, CheckCircle, RefreshCw, Eye } from 'lucide-react';

interface TransformationPair {
  id: string;
  title: string;
  category: string;
  description: string;
  beforeImg: string;
  afterImg: string;
  beforeLabel?: string;
  afterLabel?: string;
  editsDone: string[];
}

const TRANSFORMATION_SAMPLES: TransformationPair[] = [
  {
    id: 'bridal-portrait',
    title: 'Bridal Heritage Portrait',
    category: 'Wedding Photography',
    description: 'Precision color grading highlighting rich maroon silk, gold zardozi embroidery, natural skin tone frequency separation, and warm atmospheric rim light.',
    beforeImg: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=40&sat=-40&con=-20',
    afterImg: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85',
    beforeLabel: 'RAW Camera Capture',
    afterLabel: 'Studio Color Graded',
    editsDone: ['Skin texture smoothing & blemish correction', 'Gold jewelry gleam & shadow depth recovery', 'Custom warm cinematic tone curve', 'Optical lens correction & vignette']
  },
  {
    id: 'couple-reception',
    title: 'Walima Couple Ambiance',
    category: 'Reception & Ceremony',
    description: 'Dynamic range expansion revealing floral stage depth, balanced stage lighting, and natural eye radiance.',
    beforeImg: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=40&sat=-50&exp=-1',
    afterImg: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
    beforeLabel: 'Flat Camera RAW',
    afterLabel: 'Mastered Reception Edit',
    editsDone: ['Highlight recovery on fairy lights', 'Ambient warmth matching Lahore venue decor', 'Contrast harmonization', 'Micro-contrast sharpness']
  },
  {
    id: 'studio-portrait',
    title: 'Executive Studio Portrait',
    category: 'Studio Portraiture',
    description: 'Crisp editorial lighting balance, background shadow falloff control, and true-to-life studio clarity.',
    beforeImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=40&sat=-30&exp=-0.5',
    afterImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85',
    beforeLabel: 'Unretouched Capture',
    afterLabel: 'High-End Retouch',
    editsDone: ['Subtle dodge & burn contouring', 'Color temperature calibration', 'Catchlight enhancement in eyes', 'Matte background balancing']
  }
];

export const EditingTransformation: React.FC = () => {
  const [activeSampleIndex, setActiveSampleIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentSample = TRANSFORMATION_SAMPLES[activeSampleIndex];

  const handlePositionChange = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handlePositionChange(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handlePositionChange(e.touches[0].clientX);
    }
  };

  const handleDirectClick = (e: React.MouseEvent) => {
    handlePositionChange(e.clientX);
  };

  return (
    <div id="editing-transformation" className="pt-16 sm:pt-20 border-t border-[#1a1d28]">
      {/* Transformation Subheader */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-center max-w-3xl mx-auto mb-10"
      >
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a059] font-medium mb-2.5">
          <SlidersHorizontal className="w-3.5 h-3.5" />
          <span>The Art of Post-Production</span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide mb-3">
          Interactive RAW vs. Mastered Edit
        </h3>
        <p className="text-xs sm:text-sm text-[#9da3b2] leading-relaxed max-w-2xl mx-auto">
          Drag the interactive slider horizontally to inspect our meticulous color grading, shadow recovery, and delicate skin retouching crafted for every Lahore client.
        </p>

        {/* Preset Selector Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {TRANSFORMATION_SAMPLES.map((sample, idx) => (
            <button
              key={sample.id}
              id={`transformation-tab-${sample.id}`}
              type="button"
              onClick={() => {
                setActiveSampleIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activeSampleIndex === idx
                  ? 'bg-[#c5a059] text-black font-semibold shadow-md shadow-[#c5a059]/20'
                  : 'bg-[#141622] text-[#8e94a5] hover:text-white hover:bg-[#1c1f2e] border border-[#242938]'
              }`}
            >
              {sample.title}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Main Interactive Comparison Stage */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="max-w-5xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#11131b] border border-[#242938] rounded-2xl p-4 sm:p-7 shadow-2xl">
          {/* Interactive Slider Canvas */}
          <div className="lg:col-span-8 flex flex-col items-center">
            <div
              ref={containerRef}
              id="before-after-slider-container"
              onClick={handleDirectClick}
              onMouseMove={handleMouseMove}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchMove={handleTouchMove}
              className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-xl overflow-hidden cursor-ew-resize select-none border border-[#2a2f40] shadow-inner bg-black group"
              role="slider"
              aria-label="Comparison slider between before and after photography edit"
              aria-valuenow={Math.round(sliderPosition)}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              {/* "After" Image (Full background layer) */}
              <img
                src={currentSample.afterImg}
                alt={`${currentSample.title} - Mastered Professional Edit`}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                loading="lazy"
              />

              {/* "Before" Image (Clipped overlay layer) */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={currentSample.beforeImg}
                  alt={`${currentSample.title} - RAW Unedited Capture`}
                  className="absolute inset-0 max-w-none h-full object-cover pointer-events-none"
                  style={{
                    // Ensure the clipped image matches the exact dimensions of parent container
                    width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%'
                  }}
                  loading="lazy"
                />
                
                {/* Visual filter overlay simulate un-graded camera flat profile */}
                <div className="absolute inset-0 bg-neutral-900/10 backdrop-contrast-75 pointer-events-none" />
              </div>

              {/* Floating Status Badges */}
              <div className="absolute top-4 left-4 z-10 pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-[11px] font-semibold text-neutral-300 tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                  {currentSample.beforeLabel || 'BEFORE (RAW)'}
                </span>
              </div>

              <div className="absolute top-4 right-4 z-10 pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#c5a059]/90 backdrop-blur-md text-[11px] font-bold text-black tracking-wide shadow-md">
                  <Sparkles className="w-3 h-3" />
                  {currentSample.afterLabel || 'AFTER (MASTERED)'}
                </span>
              </div>

              {/* Vertical Divider Line */}
              <div
                className="absolute inset-y-0 z-20 pointer-events-none flex items-center justify-center"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              >
                <div className="w-0.5 h-full bg-white shadow-[0_0_10px_rgba(0,0,0,0.8)]" />
                
                {/* Center Draggable Handle Button */}
                <div className="absolute w-9 h-9 rounded-full bg-[#c5a059] text-black flex items-center justify-center shadow-[0_0_20px_rgba(197,160,89,0.7)] border-2 border-white cursor-ew-resize transition-transform duration-100 group-hover:scale-110">
                  <div className="flex items-center gap-0.5">
                    <span className="w-0.5 h-3 bg-black/80 rounded-full" />
                    <span className="w-0.5 h-3 bg-black/80 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Bottom Hint */}
              <div className="absolute bottom-3 inset-x-0 flex justify-center pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-[10px] text-neutral-300 tracking-wider uppercase border border-white/10 flex items-center gap-1.5">
                  <Eye className="w-3 h-3 text-[#c5a059]" />
                  Drag slider horizontally to compare
                </span>
              </div>
            </div>

            {/* Range input for full keyboard / accessibility & fine control */}
            <div className="w-full mt-4 flex items-center gap-3">
              <span className="text-[11px] text-[#717684] font-medium tracking-wide">RAW</span>
              <input
                id="transformation-range-slider"
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                aria-label="Before and after transformation slider control"
                className="w-full h-1.5 bg-[#1f2332] rounded-lg appearance-none cursor-pointer accent-[#c5a059]"
              />
              <span className="text-[11px] text-[#c5a059] font-medium tracking-wide">EDITED</span>
            </div>
          </div>

          {/* Right Column: Breakdown & Craft Details */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-5">
            <div>
              <span className="text-[10px] font-semibold text-[#c5a059] uppercase tracking-[0.2em] block mb-1">
                {currentSample.category}
              </span>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-white mb-2">
                {currentSample.title}
              </h4>
              <p className="text-xs text-[#9096a7] leading-relaxed mb-5">
                {currentSample.description}
              </p>

              {/* Editing Enhancements List */}
              <div className="space-y-2.5">
                <p className="text-[11px] font-semibold text-neutral-300 uppercase tracking-wider">
                  Applied Studio Treatments:
                </p>
                {currentSample.editsDone.map((edit, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#b5baca]">
                    <CheckCircle className="w-3.5 h-3.5 text-[#c5a059] shrink-0 mt-0.5" />
                    <span>{edit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality Guarantee Note */}
            <div className="p-3.5 rounded-xl bg-[#171a25] border border-[#24293a] text-[11px] text-[#8e94a5]">
              <span className="text-white font-medium block mb-0.5">High-Resolution Color Fidelity</span>
              Every photograph is calibrated on sRGB and Adobe RGB color spaces for pristine wedding albums and wall prints.
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
