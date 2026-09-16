/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Services } from './components/Services.tsx';
import { WeddingShowcase } from './components/WeddingShowcase.tsx';
import { Gallery } from './components/Gallery.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { FinalCTA } from './components/FinalCTA.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingActions } from './components/FloatingActions.tsx';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Wedding Photography');

  const scrollToContact = (service?: string) => {
    if (service) {
      setSelectedService(service);
    }
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="app-root" className="min-h-screen bg-[#0b0c10] text-[#e8eaf0] flex flex-col selection:bg-[#c5a059]/30 selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar onBookClick={() => scrollToContact()} />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-grow">
        {/* Hero Section */}
        <Hero onBookClick={() => scrollToContact()} />

        {/* About Section */}
        <About />

        {/* Services Section */}
        <Services onSelectService={(service) => scrollToContact(service)} />

        {/* Dedicated Wedding Showcase Section */}
        <WeddingShowcase onBookWedding={() => scrollToContact('Wedding Photography')} />

        {/* Portfolio Gallery Section */}
        <Gallery />

        {/* Client Testimonials Section */}
        <Testimonials />

        {/* Contact Section & Google Maps */}
        <ContactSection
          selectedService={selectedService}
          onServiceChange={(service) => setSelectedService(service)}
        />

        {/* Final CTA Banner */}
        <FinalCTA onBookClick={() => scrollToContact()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp and Call Actions */}
      <FloatingActions />
    </div>
  );
}

