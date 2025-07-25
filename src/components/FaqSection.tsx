import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FaqSection = () => {
  const faqs = [
    {
      question: "¿Cómo recibiré el material?",
      answer: "Después de la confirmación del pago, recibirás un email con las instrucciones de acceso. Todos los e-books y bonos estarán disponibles para descarga inmediata en formato PDF."
    },
    {
      question: "¿Cuánto tiempo tomará ver resultados?",
      answer: "Los resultados varían de persona a persona, dependiendo de la dedicación y la frecuencia con que se practiquen las técnicas. Muchas personas reportan experiencias transformadoras en las primeras semanas, mientras que el dominio completo del material puede tomar varios meses de práctica constante."
    },
    {
      question: "¿Es un pago único o hay tarifas mensuales?",
      answer: "Es un pago único. Pagas una vez y obtienes acceso de por vida a todo el material, incluyendo los bonos exclusivos. No hay cargos recurrentes ni tarifas mensuales."
    },
    {
      question: "¿Dónde puedo contactarlos si tengo preguntas?",
      answer: "Ofrecemos soporte vía WhatsApp y email. Puedes hacer clic en el botón de soporte en esta página para ser dirigido a nuestro servicio al cliente, o enviar un email a contacto@elportaldemente.com. Nuestro equipo está disponible durante horario comercial."
    },
    {
      question: "¿Puedo imprimir mi libro?",
      answer: "¡Sí! Los archivos PDF pueden ser impresos para tu conveniencia. Recomendamos imprimir para que puedas hacer anotaciones y tener el material siempre a mano durante tus estudios."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-500">
            PREGUNTAS FRECUENTES
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Obtén respuestas sobre el material y el proceso de compra
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700"
              >
                <button
                  className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                  <div className="ml-4 flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-amber-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-amber-500" />
                    )}
                  </div>
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};