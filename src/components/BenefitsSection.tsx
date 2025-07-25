import React from 'react';
import { CheckCircle } from 'lucide-react';

export const BenefitsSection = () => {
  const benefits = [
    "Eleva tu conciencia a niveles inexplorados por la ciencia convencional",
    "Accede al Código de la Abundancia y atrae prosperidad a tu vida",
    "Secretos esotéricos exclusivos revelados por maestros ancestrales",
    "Técnicas probadas para limpiar y equilibrar tus chakras",
    "Desarrolla habilidades psíquicas latentes dentro de tu conciencia",
    "Aprende a usar la Ley de Atracción como pocos saben hacerlo"
  ];

  return (
    <section className="py-20 px-6 bg-gray-900 relative">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-500">
            BENEFICIOS DE ACCEDER A NUESTRO MATERIAL
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Descubre cómo este conocimiento ancestral puede transformar completamente tu realidad y abrir puertas a dimensiones inexploradas de tu mente.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start bg-gray-800/50 p-4 rounded-lg border-l-4 border-amber-500 shadow-lg hover:shadow-amber-500/10 transition-all duration-300">
                  <CheckCircle size={24} className="text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-lg">{benefit}</p>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md">
              <img 
                src="/4b6518757d69718f2e6488f9d917be90dadaresized.webp"
                alt="Ilustración de beneficios"
                className="w-full rounded-lg shadow-2xl shadow-purple-500/20"
                loading="lazy"
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-purple-500 to-blue-500 rounded-lg blur opacity-30 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};