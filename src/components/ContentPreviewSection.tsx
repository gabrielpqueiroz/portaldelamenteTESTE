import React from 'react';
import { Sparkles } from 'lucide-react';

export const ContentPreviewSection = () => {
  const contentTopics = [
    "Cómo los planetas influyen directamente en tu campo energético",
    "Los símbolos ocultos que controlan el subconsciente colectivo",
    "El poder de la energía sexual para manifestar deseos",
    "Técnicas secretas de respiración para activar la glándula pineal",
    "El lenguaje secreto de los números y sus influencias cósmicas",
    "Rituales de protección energética usados por sociedades secretas",
    "Métodos para comunicarse con dimensiones superiores de conciencia",
    "La verdadera historia del conocimiento hermético a través de las edades",
    "Y mucho más..."
  ];

  return (
    <section className="py-20 px-6 bg-gray-950 relative">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-fixed opacity-10"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-500">
            AQUÍ TIENES UN VISTAZO DE LO QUE ENCONTRARÁS EN NUESTRO MATERIAL
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Contenido exclusivo que revela secretos ancestrales sobre el funcionamiento del universo y las leyes ocultas que gobiernan la realidad.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-5">
            {contentTopics.map((topic, index) => (
              <li key={index} className="flex items-start">
                <div className="mr-4 pt-1">
                  <div className="w-8 h-8 flex items-center justify-center bg-green-500 text-black rounded-md">
                    <Sparkles size={20} />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-lg">{topic}</p>
                  {index < contentTopics.length - 1 && (
                    <div className="mt-5 border-b border-gray-800"></div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};