import React from 'react';
import { Lock, Package, Shield } from 'lucide-react';

export const GuaranteesSection = () => {
  const guarantees = [
    {
      icon: Lock,
      title: "COMPRA SEGURA",
      description: "Tu información está protegida con encriptación de extremo a extremo."
    },
    {
      icon: Package,
      title: "ACCESO INSTANTÁNEO",
      description: "Recibe el material instantáneamente después de la confirmación del pago."
    },
    {
      icon: Shield,
      title: "GARANTÍA DE 7 DÍAS",
      description: "Si no estás satisfecho, te devolvemos tu dinero sin hacer preguntas."
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-950">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {guarantees.map((guarantee, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 rounded-xl p-6 text-center border border-gray-800 hover:border-amber-500/30 transition-all duration-300 shadow-lg"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
                  <guarantee.icon size={32} className="text-amber-500" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-white">
                {guarantee.title}
              </h3>
              
              <p className="text-gray-400 text-sm">
                {guarantee.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};