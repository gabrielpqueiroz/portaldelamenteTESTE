import React from 'react';
import { MessageCircle, MapPin } from 'lucide-react';

export const SupportSection = () => {
  return (
    <section className="py-16 px-6 bg-gray-900">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 shadow-xl">
            <div className="flex justify-center mb-6">
              <div className="bg-green-500 text-black p-4 rounded-full">
                <MessageCircle size={32} />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-center text-white">
              TENEMOS SOPORTE VÍA WHATSAPP
            </h3>
            
            <p className="text-gray-300 text-center mb-6">
              Nuestro equipo está disponible para ayudarte con cualquier duda sobre el material o el proceso de compra.
            </p>
            
            <button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-6 rounded-md transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 flex items-center justify-center">
              <MessageCircle size={20} className="mr-2" />
              ¡HAZ CLIC AQUÍ PARA CONTACTARNOS!
            </button>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 shadow-xl">
            <div className="flex justify-center mb-6">
              <div className="bg-amber-500 text-black p-4 rounded-full">
                <MapPin size={32} />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-center text-white">
              GOOGLE MI NEGOCIO
            </h3>
            
            <p className="text-gray-300 text-center mb-6">
              Revisa nuestra presencia digital y las evaluaciones de clientes en Google Mi Negocio.
            </p>
            
            <div className="border border-gray-700 rounded-lg overflow-hidden">
              <div className="p-4 bg-gray-700">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border border-amber-500/50">
                    <img 
                      src="https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="El Portal de la Mente" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-amber-500 font-bold">El Portal de la Mente</h4>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-4 h-4 text-amber-500">★</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <p className="text-gray-300 text-sm mb-3">
                  Dirección: En línea
                </p>
                <p className="text-gray-300 text-sm">
                  Contacto: contacto@elportaldemente.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};