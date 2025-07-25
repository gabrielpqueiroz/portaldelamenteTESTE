import React from 'react';
import { CheckCircle } from 'lucide-react';

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 px-6 bg-gray-950 relative">
      <div className="container mx-auto">
        <div className="mb-16 max-w-3xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg mb-12 max-w-2xl mx-auto">
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border border-amber-500/50">
                <img 
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Eleanor Smith" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <h4 className="text-white font-bold">Eleanor Smith</h4>
                <p className="text-gray-400 text-sm mb-3">Hace 3 días</p>
                <p className="text-gray-300">¡Este material es increíble! Comencé a aplicar las técnicas hace solo 2 semanas y ya estoy notando una gran diferencia en mi energía y en cómo la gente reacciona hacia mí. ¡Vale cada centavo!</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
              LA ELECCIÓN ES TUYA...
            </h2>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-amber-500/30">
          <div className="bg-gradient-to-r from-amber-500/20 to-purple-500/20 p-8 text-center">
            <div className="space-y-2 mb-6">
              <div className="text-gray-300">
                <span>El portal de la mente: </span>
                <span className="text-gray-400 line-through">US$11.98</span>
              </div>
              <div className="text-gray-300">
                <span>El Código de Los Chakras: </span>
                <span className="text-gray-400 line-through">US$3.99</span>
              </div>
              <div className="text-gray-300">
                <span>Resumen de Los Chakras por Temas: </span>
                <span className="text-gray-400 line-through">US$2.00</span>
              </div>
              <div className="text-gray-300">
                <span>Cuaderno: </span>
                <span className="text-gray-400 line-through">US$2.00</span>
              </div>
            </div>
            
            <div className="mb-4">
              <span className="text-white text-xl">Total: </span>
              <span className="text-gray-400 text-xl line-through">US$19.97</span>
            </div>
            
            <div className="mb-2">
              <span className="text-white text-2xl">AHORA SOLO</span>
            </div>
            <div className="mb-2">
              <span className="text-green-400 text-4xl font-bold">3x $2.32</span>
            </div>
            <div className="mb-2">
              <span className="text-white text-xl">O</span>
            </div>
            <div>
              <span className="text-green-400 text-5xl font-bold">US$6.97</span>
            </div>
            <div className="mt-4">
              <span className="bg-red-600 text-white text-sm font-bold py-1 px-3 rounded-full animate-pulse">
                ¡UNIDADES LIMITADAS RESTANTES!
              </span>
            </div>
          </div>
          
          <div className="p-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">
                Lo que recibirás:
              </h3>
              <ul className="space-y-3">
                {[
                  "E-book completo 'El Portal de la Mente'",
                  "+ 3 Bonos Exclusivos",
                  "Acceso instantáneo después de la compra",
                  "Acceso de por vida al material",
                  "Soporte por WhatsApp",
                  "Garantía de 7 días"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={20} className="text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="https://pay.hotmart.com/U100157630F?checkoutMode=10"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full mt-8 bg-green-500 hover:bg-green-600 text-black text-xl font-bold py-4 rounded-md transition-all duration-300 shadow-lg shadow-green-500/20 hover:shadow-green-500/40 uppercase tracking-wider text-center"
              >
                ¡QUIERO ACCESO!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};