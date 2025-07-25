import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Paula Vieira",
      profession: "Abogada",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Este material cambió completamente mi visión del universo. Ya estoy aplicando el conocimiento y viendo resultados increíbles en mi vida profesional y personal."
    },
    {
      name: "Isabel Costa",
      profession: "Ingeniera",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Nunca imaginé que tendría acceso a un conocimiento tan profundo y transformador. Los secretos revelados en El Portal de la Mente han abierto mi conciencia a posibilidades que nunca había considerado."
    },
    {
      name: "Dr. Albert Henry",
      profession: "Médico",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Como médico, siempre busqué explicaciones científicas para todo. Este material me mostró una dimensión complementaria al conocimiento tradicional, ayudándome a entender aspectos del ser humano que la ciencia convencional aún no puede explicar."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-amber-500">
            ¡MUY BIEN VALORADO POR QUIENES COMPRARON EL MATERIAL SECRETO!
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Personas como tú ya han logrado resultados increíbles...
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="flex overflow-hidden">
              <div 
                className="w-full flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-700">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-amber-500">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                          <p className="text-amber-400">{testimonial.profession}</p>
                          <div className="flex mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={16} className="text-amber-500 fill-amber-500" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-300 italic">{testimonial.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-6 bg-amber-500 hover:bg-amber-600 text-black p-2 rounded-full shadow-lg z-10 transition-all duration-300"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-6 bg-amber-500 hover:bg-amber-600 text-black p-2 rounded-full shadow-lg z-10 transition-all duration-300"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "bg-amber-500 w-6" : "bg-gray-600"
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};