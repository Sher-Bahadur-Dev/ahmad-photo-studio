import React, { useState } from 'react';
import { 
  Camera, 
  MapPin, 
  Phone, 
  MessageSquare, 
  ArrowUp, 
  Instagram, 
  Facebook, 
  Mail, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  ShieldCheck,
  Award,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { STUDIO_INFO } from '../data/photographyData.ts';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubscribed(true);
    setEmail('');
    setTimeout(() => {
      setSubscribed(false);
    }, 4000);
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Studio', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Wedding Showcase', href: '#weddings' },
    { label: 'Interactive Transformation', href: '#editing-transformation' },
    { label: 'Portfolio Gallery', href: '#gallery' },
    { label: 'Client Reviews', href: '#reviews' },
    { label: 'Contact & Location', href: '#contact' },
  ];

  const servicesList = [
    { name: 'Wedding Photography', note: 'Baraat, Walima & Mehndi' },
    { name: 'Event Photography', note: 'Corporate, Birthdays & Galas' },
    { name: 'Portrait Photography', note: 'Editorial & Headshots' },
    { name: 'Passport & Visa Photos', note: 'NADRA, UK, US, Schengen compliant' },
    { name: 'Photo & Video Shoots', note: 'Cinematic 4K coverage' },
  ];

  const studioBadges = [
    { icon: Award, label: 'Lahore Verified Studio' },
    { icon: ShieldCheck, label: 'High-Res RAW Mastered' },
    { icon: Sparkles, label: 'Fast Same-Day ID Delivery' },
  ];

  return (
    <footer id="main-footer" className="bg-[#07080c] border-t border-[#1a1d28] text-[#8e94a5] relative overflow-hidden">
      {/* Subtle top golden accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#c5a059]/70 to-transparent" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12">
        {/* Top Feature Strip: Verified Studio Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-12 mb-12 border-b border-[#181b26]">
          {studioBadges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div 
                key={idx}
                className="flex items-center gap-3.5 p-4 rounded-xl bg-[#0f1118] border border-[#1e2230]"
              >
                <div className="w-10 h-10 rounded-lg bg-[#c5a059]/10 border border-[#c5a059]/30 flex items-center justify-center text-[#dfba73] shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-white tracking-wide block">
                    {badge.label}
                  </span>
                  <span className="text-[11px] text-[#787e90]">
                    Dedicated Gulberg photography team
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4-Column Professional Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#181b26]">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#12141d] border border-[#c5a059]/50 flex items-center justify-center text-[#c5a059] shadow-md shadow-black">
                <Camera className="w-6 h-6 stroke-[1.75]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-wide text-white">
                  Ahmad Photo Studio
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#c5a059] uppercase font-semibold -mt-0.5">
                  Gulberg III • Lahore
                </span>
              </div>
            </div>

            <p className="font-serif italic text-sm text-[#dfba73]">
              “Capturing Moments. Creating Memories.”
            </p>

            <p className="text-xs text-[#828898] leading-relaxed max-w-sm">
              An established creative studio in Lahore delivering cinematic wedding documentation, high-fidelity portraits, and standard-compliant biometric ID photos.
            </p>

            {/* Social & Direct Contact Badges */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                id="footer-social-instagram"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ahmad Photo Studio on Instagram"
                className="w-10 h-10 rounded-lg bg-[#12141d] border border-[#222736] text-[#b0b5c4] hover:text-[#c5a059] hover:border-[#c5a059]/60 flex items-center justify-center transition-all shadow-sm"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                id="footer-social-facebook"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ahmad Photo Studio on Facebook"
                className="w-10 h-10 rounded-lg bg-[#12141d] border border-[#222736] text-[#b0b5c4] hover:text-[#c5a059] hover:border-[#c5a059]/60 flex items-center justify-center transition-all shadow-sm"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                id="footer-social-whatsapp"
                href={STUDIO_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Direct WhatsApp message to Ahmad Photo Studio"
                className="inline-flex items-center gap-2 px-3.5 h-10 rounded-lg bg-[#25D366]/10 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/20 transition-all text-xs font-semibold"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Column */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-xs font-semibold text-white uppercase tracking-[0.15em]">
              Directory
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#8e94a5] hover:text-[#dfba73] transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Services Breakdown Column */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-semibold text-white uppercase tracking-[0.15em]">
              Specialized Services
            </h4>
            <ul className="space-y-3 text-xs">
              {servicesList.map((service, idx) => (
                <li key={idx} className="group">
                  <a
                    href="#services"
                    className="block text-white group-hover:text-[#dfba73] font-medium transition-colors"
                  >
                    {service.name}
                  </a>
                  <span className="text-[11px] text-[#717686] block">
                    {service.note}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Details & Hours Column */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-semibold text-white uppercase tracking-[0.15em]">
              Studio Location & Hours
            </h4>
            <div className="space-y-3 text-xs text-[#8e94a5]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <span className="leading-snug text-neutral-300">
                  {STUDIO_INFO.location.address}
                </span>
              </div>
              
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#c5a059] shrink-0" />
                <a
                  href={STUDIO_INFO.contact.phoneTelUrl}
                  className="text-white hover:text-[#dfba73] font-medium transition-colors"
                >
                  {STUDIO_INFO.contact.phone}
                </a>
              </div>

              <div className="p-3 rounded-lg bg-[#11131c] border border-[#202534] space-y-1 text-[11px]">
                <div className="flex items-center gap-1.5 text-neutral-300 font-medium mb-1">
                  <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Working Hours</span>
                </div>
                <div className="flex justify-between text-[#8a91a3]">
                  <span>Mon – Sat:</span>
                  <span className="text-white font-medium">11:00 AM – 9:00 PM</span>
                </div>
                <div className="flex justify-between text-[#8a91a3]">
                  <span>Sunday:</span>
                  <span className="text-white font-medium">1:00 PM – 8:00 PM</span>
                </div>
              </div>

              <a
                href={STUDIO_INFO.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#dfba73] hover:text-white transition-colors pt-1"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Inquiries Strip */}
        <div className="py-8 border-b border-[#181b26]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-6">
              <span className="text-[11px] font-semibold text-[#c5a059] uppercase tracking-[0.2em] block mb-1">
                Seasonal Inquiries & Packages
              </span>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-white mb-1">
                Stay Updated on Wedding & Portrait Specials
              </h4>
              <p className="text-xs text-[#8e94a5]">
                Subscribe for wedding season booking slots, Eid specials, and customized photography offers in Lahore.
              </p>
            </div>

            <div className="lg:col-span-6">
              {subscribed ? (
                <div
                  id="newsletter-success"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-[#c5a059]/10 border border-[#c5a059]/40 text-xs font-medium text-[#dfba73] w-full"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0" />
                  <span>Thank you! We will keep you informed on upcoming packages.</span>
                </div>
              ) : (
                <form
                  id="footer-newsletter-form"
                  onSubmit={handleNewsletterSubmit}
                  className="flex flex-col sm:flex-row items-center gap-2.5 w-full"
                >
                  <div className="relative w-full">
                    <Mail className="w-4 h-4 text-[#686f80] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="newsletter-email-input"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError('');
                      }}
                      placeholder="Enter your email for studio updates..."
                      aria-label="Email address for studio newsletter"
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#11131c] border border-[#262b3a] focus:border-[#c5a059] text-xs text-white placeholder-[#5a6072] focus:outline-none transition-colors"
                    />
                  </div>
                  <button
                    id="newsletter-submit-btn"
                    type="submit"
                    className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#c5a059] hover:bg-[#dfba73] text-black text-xs font-bold whitespace-nowrap tracking-wide transition-all flex items-center justify-center gap-1.5 cursor-pointer shrink-0 active:scale-95"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
              {error && <p className="text-[11px] text-red-400 mt-2">{error}</p>}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Badges & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6e7485]">
          <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-2 text-center sm:text-left">
            <p>
              © {new Date().getFullYear()} Ahmad Photo Studio. All rights reserved.
            </p>
            <span className="hidden sm:inline text-neutral-600">•</span>
            <p className="text-[#888e9f]">
              G-9, Mateen Majestic, Babbi Chowk, Gulberg, Lahore, Pakistan
            </p>
          </div>

          <button
            id="footer-scroll-top-btn"
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#12141d] border border-[#222636] text-[#b0b5c4] hover:text-white hover:border-[#c5a059]/60 transition-all cursor-pointer shadow-sm active:scale-95"
          >
            <span className="text-[11px] font-medium">Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#c5a059]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
