import React, { useState, useEffect } from 'react';
import { Camera, Phone, MessageSquare, Menu, X, MapPin } from 'lucide-react';
import { STUDIO_INFO } from '../data/photographyData.ts';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Weddings', href: '#weddings' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0c10]/95 backdrop-blur-md py-3.5 border-b border-[#222530] shadow-xl'
          : 'bg-gradient-to-b from-[#0b0c10]/90 via-[#0b0c10]/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            id="nav-brand-link"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059]"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1b1e26] to-[#0f1117] border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059] group-hover:border-[#c5a059] transition-colors shadow-inner">
              <Camera className="w-5 h-5 stroke-[1.75]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wide text-white group-hover:text-[#c5a059] transition-colors">
                AHMAD
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#9ea3b0] uppercase font-medium -mt-1">
                Photo Studio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" aria-label="Main Navigation" className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                id={`nav-link-${link.label.toLowerCase()}`}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-medium text-[#c6cad3] hover:text-[#c5a059] transition-colors tracking-wide relative py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Quick Call */}
            <a
              id="nav-quick-call"
              href={STUDIO_INFO.contact.phoneTelUrl}
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md text-xs font-medium text-[#d1d5db] bg-[#171a22] border border-[#2b2f3c] hover:border-[#c5a059]/50 hover:text-white transition-all"
              title="Call studio directly"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Call Studio</span>
            </a>

            {/* WhatsApp Us */}
            <a
              id="nav-quick-whatsapp"
              href={STUDIO_INFO.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md text-xs font-medium text-[#25D366] bg-[#25D366]/10 border border-[#25D366]/25 hover:bg-[#25D366]/20 transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            {/* Book a Shoot CTA */}
            <button
              id="nav-book-button"
              type="button"
              onClick={onBookClick}
              className="inline-flex items-center justify-center px-4 py-2 rounded-md text-xs font-semibold tracking-wide text-black bg-[#c5a059] hover:bg-[#dfba73] transition-all shadow-md active:scale-95"
            >
              Book a Shoot
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-[#d1d5db] bg-[#161820] border border-[#252834] hover:text-white"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="sm:hidden bg-[#0e1017]/98 border-b border-[#232734] px-4 pt-3 pb-6 mt-3 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-[#1f2330] text-xs text-[#9ea3b0]">
            <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Gulberg, Lahore</span>
          </div>

          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                id={`mobile-link-${link.label.toLowerCase()}`}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2.5 rounded-md text-sm font-medium text-[#d1d5db] hover:bg-[#181b24] hover:text-[#c5a059] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-[#1f2330] flex flex-col gap-2.5">
            <button
              id="mobile-book-button"
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full py-3 rounded-md text-sm font-semibold text-black bg-[#c5a059] hover:bg-[#dfba73] text-center transition-colors"
            >
              Book a Shoot
            </button>
            <div className="grid grid-cols-2 gap-2">
              <a
                id="mobile-call-btn"
                href={STUDIO_INFO.contact.phoneTelUrl}
                className="flex items-center justify-center gap-2 py-2.5 rounded-md text-xs font-medium text-white bg-[#191c25] border border-[#2b2f3e]"
              >
                <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                Call Now
              </a>
              <a
                id="mobile-whatsapp-btn"
                href={STUDIO_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-md text-xs font-medium text-[#25D366] bg-[#25D366]/10 border border-[#25D366]/30"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
