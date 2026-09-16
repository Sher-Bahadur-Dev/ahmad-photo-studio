import React, { useState } from 'react';
import { MessageSquare, Phone, X } from 'lucide-react';
import { STUDIO_INFO } from '../data/photographyData.ts';

export const FloatingActions: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside
      id="floating-contact-actions"
      aria-label="Quick contact actions"
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none"
    >
      {/* Subtle Studio Status Tooltip */}
      {showTooltip && (
        <div className="pointer-events-auto hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#11131b]/95 border border-[#2d3243] text-xs text-white shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span className="text-[#c6cad5] font-medium">Inquire via WhatsApp or Call</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-[#7c8293] hover:text-white ml-1 cursor-pointer"
            aria-label="Dismiss message"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Buttons group */}
      <div className="flex items-center gap-2.5 pointer-events-auto">
        {/* Call Studio Button */}
        <a
          id="floating-call-btn"
          href={STUDIO_INFO.contact.phoneTelUrl}
          className="w-12 h-12 rounded-full bg-[#161922] border border-[#2b3040] hover:border-[#c5a059] text-white flex items-center justify-center shadow-2xl transition-all hover:scale-105 active:scale-95 group"
          title="Call Ahmad Photo Studio (+92 321 4251524)"
          aria-label="Call Ahmad Photo Studio"
        >
          <Phone className="w-5 h-5 text-[#c5a059] group-hover:rotate-12 transition-transform" />
        </a>

        {/* WhatsApp Button */}
        <a
          id="floating-whatsapp-btn"
          href={STUDIO_INFO.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-13 h-13 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20ba5a] transition-all hover:scale-105 active:scale-95 group"
          title="Chat with Ahmad Photo Studio on WhatsApp"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-6 h-6 fill-white" />
          {/* Subtle pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
        </a>
      </div>
    </aside>
  );
};
