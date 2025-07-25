import React from 'react';
import { CheckCircle } from 'lucide-react';

export const BonusSection = () => {
  const scrollToPricing = () => {
    const limitedUnitsElement = document.querySelector('.animate-pulse');
    if (limitedUnitsElement) {
      limitedUnitsElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const bonuses = [
    {
      title: "E-BOOK COMPLETO 'EL CÓDIGO DE LOS CHAKRAS'",
      color: "blue",
      image: "wka1aZ4.webp",
      benefits: [
        "Guía completa de los 7 chakras principales",
        "Cómo desbloquear cada chakra",
        "Frecuencias vibracionales para armonización",
        "Técnicas específicas de meditación"
      ]
    },
    {
      title: "RUTINA DE CHAKRAS Y RESÚMENES DE TEMAS",
      color: "red",
      image: "3.webp",
      benefits: [
        "Resumen práctico de referencia rápida",
        "Rutina diaria de energización",
        "Alimentos para cada chakra",
        "Guía de cristales correspondientes"
      ]
    },
    {
      title: "CUADERNO DE TRABAJO DE CHAKRAS",
      color: "green",
      image: "4.webp",
      benefits: [
        "Ejercicios prácticos para cada chakra",
        "Diario de seguimiento energético",
        "Evaluaciones de progreso espiritual",
        "Herramientas de mapeo de sensaciones"
      ]
    }
  ];

  const colorClasses = {
    blue: "from-blue-900 to-blue-800 border-blue-600",
    red: "from-red-900 to-red-800 border-red-600",
    green: "from-green-900 to-green-800 border-green-600"
  };

  return (
    <section className="py-20 px-6 bg-gray-900 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-500">
            COMPRA AHORA Y OBTÉN + 3 SÚPER BONOS
          </h2>
          <p className="text-xl text-white mb-3">
            ¡Material con ilustraciones para mejorar tu aprendizaje!
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Estos bonos exclusivos complementan tu aprendizaje y aceleran tu evolución espiritual.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bonuses.map((bonus, index) => {
            const bgGradient = colorClasses[bonus.color as keyof typeof colorClasses];
            
            return (
              <div 
                key={index} 
                className={`rounded-xl overflow-hidden border shadow-xl transition-transform duration-300 hover:-translate-y-2 bg-gradient-to-b ${bgGradient}`}
              >
                <div className="p-6">
                  <div className="aspect-[3/4] mb-6 overflow-hidden rounded-lg border-2 border-white/20">
                    <img 
                      src={bonus.image} 
                      alt={bonus.title}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-white min-h-[60px]">
                    {bonus.title}
                  </h3>
                  
                  <div className="mb-4">
                    {bonus.title.includes('CÓDIGO DE LOS CHAKRAS') && (
                      <div className="text-center">
                        <span className="text-gray-400 line-through text-lg">US$3.99</span>
                        <span className="text-green-400 text-xl font-bold ml-2">US$0</span>
                      </div>
                    )}
                    {bonus.title.includes('RUTINA DE CHAKRAS') && (
                      <div className="text-center">
                        <span className="text-gray-400 line-through text-lg">US$2.00</span>
                        <span className="text-green-400 text-xl font-bold ml-2">US$0</span>
                      </div>
                    )}
                    {bonus.title.includes('CUADERNO DE TRABAJO') && (
                      <div className="text-center">
                        <span className="text-gray-400 line-through text-lg">US$2.00</span>
                        <span className="text-green-400 text-xl font-bold ml-2">US$0</span>
                      </div>
                    )}
                  </div>
                  
                  <ul className="space-y-3">
                    {bonus.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle size={18} className="text-white mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-200 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <button 
            onClick={scrollToPricing}
            className="bg-amber-500 hover:bg-green-500 text-black text-xl font-bold py-4 px-8 rounded-md transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-green-500/40 uppercase tracking-wider"
          >
            QUIERO ASEGURAR LOS BONOS
          </button>
        </div>
      </div>
    </section>
  );
};