import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageSquare,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
  Calendar,
  AlertCircle,
} from 'lucide-react';
import { STUDIO_INFO, SERVICES } from '../data/photographyData.ts';

interface ContactSectionProps {
  selectedService: string;
  onServiceChange: (service: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedService,
  onServiceChange,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: selectedService || 'Wedding Photography',
    preferredDate: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Sync selectedService prop if parent updates it
  React.useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a valid phone or WhatsApp number.';
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = 'Phone number looks too short.';
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.service) {
      newErrors.service = 'Please select a service.';
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);

    // Simulate clean dispatch
    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: 'Wedding Photography',
      preferredDate: '',
      message: '',
    });
  };

  // Generate WhatsApp message with form details
  const createWhatsAppInquiryLink = () => {
    const text = `Hello Ahmad Photo Studio, I am submitting an inquiry:\n\n*Name:* ${formData.name || 'Client'}\n*Phone:* ${formData.phone || 'N/A'}\n*Service:* ${formData.service}\n*Preferred Date:* ${formData.preferredDate || 'To be discussed'}\n*Notes:* ${formData.message || 'I would like to discuss booking details.'}`;
    return `https://wa.me/923214251524?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#0b0c10] border-t border-[#1a1d26] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a059] font-medium mb-3">
            <span className="w-6 h-px bg-[#c5a059]" />
            <span>Connect With Our Studio</span>
            <span className="w-6 h-px bg-[#c5a059]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Let’s Capture Your Next Special Moment
          </h2>
          <p className="text-sm sm:text-base text-[#9ea3b0] leading-relaxed">
            Reach out directly by phone, send a message on WhatsApp, or submit your shoot details below. Our team in Gulberg, Lahore looks forward to assisting you.
          </p>
        </div>

        {/* Contact Layout: Info Column + Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          {/* Left Column: Business Info & Direct Action Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Action Contact Buttons */}
            <div className="p-6 rounded-2xl bg-[#12141c] border border-[#222634] shadow-xl">
              <h3 className="font-serif text-lg font-bold text-white mb-4">
                Instant Studio Contact
              </h3>
              <p className="text-xs text-[#9ea3b0] mb-5">
                For rapid quotes or wedding availability checks, contact us directly via phone or WhatsApp:
              </p>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                {/* Call Now Button */}
                <a
                  id="contact-call-now-btn"
                  href={STUDIO_INFO.contact.phoneTelUrl}
                  className="flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-lg text-sm font-semibold text-white bg-[#191c26] border border-[#2b3040] hover:border-[#c5a059] hover:bg-[#202430] transition-all shadow-md active:scale-98"
                >
                  <Phone className="w-4 h-4 text-[#c5a059]" />
                  <span>Call Now: {STUDIO_INFO.contact.phone}</span>
                </a>

                {/* WhatsApp Button */}
                <a
                  id="contact-whatsapp-btn"
                  href={STUDIO_INFO.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-lg text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba5a] transition-all shadow-md active:scale-98"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>WhatsApp Us Directly</span>
                </a>
              </div>
            </div>

            {/* Address & Hours Card */}
            <div className="p-6 rounded-2xl bg-[#12141c] border border-[#222634] shadow-xl space-y-5">
              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#181b24] border border-[#282d3d] flex items-center justify-center text-[#c5a059] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#8e94a5] font-medium">Studio Location</h4>
                  <p className="text-sm text-white font-medium mt-1 leading-snug">
                    {STUDIO_INFO.location.address}
                  </p>
                  <p className="text-xs text-[#a3a8b6] mt-0.5">Gulberg, Lahore, Pakistan</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-[#1b1f2b]">
                <div className="w-10 h-10 rounded-lg bg-[#181b24] border border-[#282d3d] flex items-center justify-center text-[#c5a059] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#8e94a5] font-medium">Phone Support</h4>
                  <p className="text-sm text-white font-medium mt-1">
                    {STUDIO_INFO.contact.phone}
                  </p>
                  <p className="text-xs text-[#8e94a5] mt-0.5">Available for calls & WhatsApp inquiries</p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-[#1b1f2b]">
                <div className="w-10 h-10 rounded-lg bg-[#181b24] border border-[#282d3d] flex items-center justify-center text-[#c5a059] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#8e94a5] font-medium">Studio Hours</h4>
                  <p className="text-xs sm:text-sm text-white font-medium mt-1">
                    {STUDIO_INFO.hours.weekdays}
                  </p>
                  <p className="text-xs text-[#8e94a5] mt-0.5">
                    {STUDIO_INFO.hours.sunday}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#12141c] border border-[#242938] shadow-2xl relative">
              {isSubmitted ? (
                /* Success State */
                <div
                  id="inquiry-success-message"
                  className="py-12 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-[#c5a059]/15 border border-[#c5a059] flex items-center justify-center text-[#c5a059] mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-white">Inquiry Received</h3>
                    <p className="text-sm text-[#adb1bd] max-w-md mx-auto mt-2 leading-relaxed">
                      Thank you, <span className="text-white font-medium">{formData.name}</span>. We have recorded your request regarding <span className="text-[#dfba73] font-medium">{formData.service}</span>.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#181b25] border border-[#2b3040] max-w-md mx-auto text-left text-xs space-y-1.5 text-[#9ea3b0]">
                    <p><strong className="text-white">Phone:</strong> {formData.phone}</p>
                    {formData.preferredDate && <p><strong className="text-white">Preferred Date:</strong> {formData.preferredDate}</p>}
                    {formData.message && <p><strong className="text-white">Message:</strong> {formData.message}</p>}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 max-w-md mx-auto">
                    <a
                      id="success-send-whatsapp"
                      href={createWhatsAppInquiryLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20ba5a] transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send to WhatsApp</span>
                    </a>
                    <button
                      id="reset-form-btn"
                      type="button"
                      onClick={handleReset}
                      className="w-full sm:w-auto px-5 py-3 rounded-lg text-xs font-medium text-[#d1d5db] bg-[#1a1d27] border border-[#2b2f3d] hover:text-white"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Inquiry Form */
                <form id="studio-inquiry-form" onSubmit={handleSubmit} noValidate>
                  <div className="mb-6">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                      Book a Shoot / Inquire
                    </h3>
                    <p className="text-xs text-[#8e94a5] mt-1">
                      Fill out this form and we will get back to you promptly to confirm availability and discuss details.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="form-name" className="block text-xs font-medium text-[#c4c8d4] mb-1.5">
                        Your Full Name <span className="text-[#c5a059]">*</span>
                      </label>
                      <input
                        id="form-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        placeholder="e.g. Tariq Mehmood"
                        className={`w-full px-4 py-3 rounded-lg bg-[#0e1017] border ${
                          errors.name ? 'border-red-500/80 focus:border-red-500' : 'border-[#262b3a] focus:border-[#c5a059]'
                        } text-sm text-white placeholder-[#5a6072] focus:outline-none transition-colors`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="form-phone" className="block text-xs font-medium text-[#c4c8d4] mb-1.5">
                        Phone / WhatsApp Number <span className="text-[#c5a059]">*</span>
                      </label>
                      <input
                        id="form-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: '' });
                        }}
                        placeholder="0321 1234567"
                        className={`w-full px-4 py-3 rounded-lg bg-[#0e1017] border ${
                          errors.phone ? 'border-red-500/80 focus:border-red-500' : 'border-[#262b3a] focus:border-[#c5a059]'
                        } text-sm text-white placeholder-[#5a6072] focus:outline-none transition-colors`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="form-email" className="block text-xs font-medium text-[#c4c8d4] mb-1.5">
                        Email Address <span className="text-[#6d7385]">(Optional)</span>
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="name@example.com"
                        className={`w-full px-4 py-3 rounded-lg bg-[#0e1017] border ${
                          errors.email ? 'border-red-500/80 focus:border-red-500' : 'border-[#262b3a] focus:border-[#c5a059]'
                        } text-sm text-white placeholder-[#5a6072] focus:outline-none transition-colors`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Service */}
                    <div>
                      <label htmlFor="form-service" className="block text-xs font-medium text-[#c4c8d4] mb-1.5">
                        Select Service <span className="text-[#c5a059]">*</span>
                      </label>
                      <select
                        id="form-service"
                        value={formData.service}
                        onChange={(e) => {
                          setFormData({ ...formData, service: e.target.value });
                          onServiceChange(e.target.value);
                        }}
                        className="w-full px-4 py-3 rounded-lg bg-[#0e1017] border border-[#262b3a] text-sm text-white focus:border-[#c5a059] focus:outline-none transition-colors"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title} className="bg-[#12141c] text-white">
                            {s.title}
                          </option>
                        ))}
                        <option value="Other Photography / Custom" className="bg-[#12141c] text-white">
                          Other Photography / Custom
                        </option>
                      </select>
                    </div>

                    {/* Preferred Date */}
                    <div className="sm:col-span-2">
                      <label htmlFor="form-date" className="block text-xs font-medium text-[#c4c8d4] mb-1.5">
                        Preferred Date of Shoot / Event
                      </label>
                      <div className="relative">
                        <input
                          id="form-date"
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-[#0e1017] border border-[#262b3a] text-sm text-white focus:border-[#c5a059] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="sm:col-span-2">
                      <label htmlFor="form-message" className="block text-xs font-medium text-[#c4c8d4] mb-1.5">
                        Message / Shoot Details
                      </label>
                      <textarea
                        id="form-message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about the venue, timings, number of days, or specific requirements..."
                        className="w-full px-4 py-3 rounded-lg bg-[#0e1017] border border-[#262b3a] text-sm text-white placeholder-[#5a6072] focus:border-[#c5a059] focus:outline-none transition-colors resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="mt-6">
                    <button
                      id="form-submit-btn"
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3.5 rounded-lg text-sm font-semibold tracking-wide text-black bg-gradient-to-r from-[#c5a059] to-[#dfba73] hover:from-[#dfba73] hover:to-[#c5a059] transition-all shadow-lg active:scale-98 disabled:opacity-70 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {submitting ? (
                        <span>Processing...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Inquiry</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Google Maps Section showing address with Get Directions */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#12141c] border border-[#222634] shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a059] font-medium mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>Find Us in Gulberg, Lahore</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                G-9, Gulberg, Mateen Majestic, Babbi Chowk, Lahore
              </h3>
              <p className="text-xs text-[#8e94a5] mt-1">
                Centrally positioned in Gulberg for convenient studio visits and consultations.
              </p>
            </div>

            {/* Get Directions Button */}
            <a
              id="maps-get-directions-btn"
              href={STUDIO_INFO.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold text-black bg-[#c5a059] hover:bg-[#dfba73] transition-colors shrink-0 shadow-md"
            >
              <span>Get Directions</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Interactive Google Map Embed Frame based on address */}
          <div className="relative w-full h-72 sm:h-80 rounded-xl overflow-hidden border border-[#292f3f] bg-[#161822]">
            <iframe
              title="Ahmad Photo Studio Location - Mateen Majestic Babbi Chowk Gulberg Lahore"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Mateen+Majestic+Babbi+Chowk+Gulberg+Lahore&t=&z=16&ie=UTF8&iwloc=&output=embed"
            />
            {/* Subtle overlay badge */}
            <div className="absolute top-4 left-4 p-3 rounded-lg bg-[#0b0c10]/90 border border-[#2b2f3e] backdrop-blur-md hidden sm:flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#c5a059]/20 text-[#c5a059] flex items-center justify-center">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Ahmad Photo Studio</p>
                <p className="text-[11px] text-[#9ea3b0]">Mateen Majestic, Babbi Chowk</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
