import React from 'react';
import { CheckCircle } from 'lucide-react';

export const HeroSection = () => {
  const scrollToPricing = () => {
    const limitedUnitsElement = document.querySelector('.animate-pulse');
    if (limitedUnitsElement) {
      limitedUnitsElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-black to-gray-950 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-amber-500">
            ¡Este libro contiene la fórmula oculta para aprovechar y controlar el universo!
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            No es teoría. Son hechos: más de 4.988 vidas reales transformadas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center max-w-3xl mx-auto">
          <div className="relative">
            <script
              type="text/javascript"
              dangerouslySetInnerHTML={{
                __html: `var s=document.createElement("script"); s.src="https://scripts.converteai.net/lib/js/smartplayer/v1/sdk.min.js", s.setAttribute("data-id", "6858890f5d73bd90a7b26da8"), s.async=!0,document.head.appendChild(s);`
              }}
            />
            <div id="ifr_6858890f5d73bd90a7b26da8_wrapper" className="mx-auto" style={{ width: '100%' }}>
              <div style={{ padding: '56.25% 0 0 0', position: 'relative' }} id="ifr_6858890f5d73bd90a7b26da8_aspect">
                <iframe 
                  frameBorder="0" 
                  allowFullScreen 
                  src="https://scripts.converteai.net/5a197521-8b82-4b34-865b-d0171c7cda2c/players/6858890f5d73bd90a7b26da8/embed.html" 
                  id="ifr_6858890f5d73bd90a7b26da8" 
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  referrerPolicy="origin"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <img 
            src="/mH83kDF - Imgur.webp" 
            alt="Maqueta del libro" 
            className="mx-auto max-w-[300px] md:max-w-[400px] mb-8"
            fetchpriority="high"
            srcSet="/mH83kDF - Imgur.webp 400w"
            sizes="(max-width: 768px) 300px, 400px"
          />
          
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
            ¿ESTÁS LISTO PARA DESCUBRIR TODA LA VERDAD?
          </h2>
          
          <img 
            src="/shutterstock_1164968740-scaled-removebg-preview-e1726327121843.webp" 
            alt="Ilustración adicional" 
            className="mx-auto w-[280px] md:max-w-[400px] mb-8"
            loading="lazy"
            srcSet="/shutterstock_1164968740-scaled-removebg-preview-e1726327121843.webp 400w"
            sizes="(max-width: 768px) 280px, 400px"
          />
          
          <div className="space-y-4 mb-8">
            <p className="text-lg text-center">
              Obtén acceso a la guía completa que revelará secretos ancestrales sobre:
            </p>
            <ul className="space-y-2">
              {["Esoterismo", "Gnosis", "Electromagnetismo", "Simbología", "Magia"].map((item) => (
                <li key={item} className="flex items-start justify-center">
                  <CheckCircle size={20} className="text-amber-500 mr-2 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <button 
            onClick={scrollToPricing}
            className="w-full max-w-md mx-auto bg-amber-500 hover:bg-green-500 text-black text-xl font-bold py-4 px-6 rounded-md transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-green-500/40 uppercase tracking-wider"
          >
            QUIERO ACCEDER AL MATERIAL
          </button>
        </div>
      </div>
    </section>
  );
};