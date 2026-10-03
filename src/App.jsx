import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Cities from './components/sections/Cities';
import WhyChooseUs from './components/sections/WhyChooseUs';
import FAQ from './components/sections/FAQ';
import Footer from './components/layout/Footer';
import QuoteModal from './components/common/QuoteModal';
import FloatingWhatsApp from './components/common/FloatingWhatsApp';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const handleOpenQuote = () => {
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-surface-offwhite text-body-text font-cairo flex flex-col selection:bg-brand-primary selection:text-white">
      {/* Header Navbar */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Main Page Sections */}
      <main className="flex-grow">
        {/* Main Banner / Hero */}
        <Hero onOpenQuote={handleOpenQuote} />

        {/* Services Section */}
        <Services onOpenQuote={handleOpenQuote} />

        {/* Cities & Coverage Routes */}
        <Cities onOpenQuote={handleOpenQuote} />

        {/* Why Choose Us & Statistics */}
        <WhyChooseUs onOpenQuote={handleOpenQuote} />

        {/* Frequently Asked Questions */}
        <FAQ onOpenQuote={handleOpenQuote} />
      </main>

      {/* Footer Section */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* Floating Action Button */}
      <FloatingWhatsApp onOpenQuote={handleOpenQuote} />

      {/* Quick Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={handleCloseQuote} />
    </div>
  );
}
