import React from 'react';
import { HeroSection } from './components/HeroSection';
import { InsidePortalSection } from './components/InsidePortalSection';
import { BenefitsSection } from './components/BenefitsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContentPreviewSection } from './components/ContentPreviewSection';
import { BonusSection } from './components/BonusSection';
import { LastCallSection } from './components/LastCallSection';
import { PricingSection } from './components/PricingSection';
import { FacebookComments } from './components/FacebookComments';
import { GuaranteesSection } from './components/GuaranteesSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen">
      <main>
        <HeroSection />
        <InsidePortalSection />
        <BenefitsSection />
        <TestimonialsSection />
        <ContentPreviewSection />
        <BonusSection />
        <FacebookComments />
        <LastCallSection />
        <PricingSection />
        <GuaranteesSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;