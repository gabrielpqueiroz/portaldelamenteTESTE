import React from 'react';

export const LastCallSection = () => {
  const scrollToPricing = () => {
    const limitedUnitsElement = document.querySelector('.animate-pulse');
    if (limitedUnitsElement) {
      limitedUnitsElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-950 to-gray-900 relative">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-fixed opacity-5"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Han estado ocultándonos estos secretos durante años...
          </h2>
          
          <p className="text-lg mb-8 text-gray-300">
            A lo largo de la historia, órdenes iniciáticas y sociedades secretas han guardado celosamente este conocimiento, permitiendo el acceso solo a unos pocos elegidos. Hoy, tu instinto te trajo aquí por una razón. Estás listo para trascender los límites de la realidad ordinaria y acceder al verdadero potencial oculto dentro de ti.
          </p>
          
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-amber-500/30 shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="md:w-1/2">
                <div className="relative">
                  <img 
                    src="ROxGakD.webp" 
                    alt="Portada del e-book El Portal de la Mente" 
                    className="w-full max-w-[400px] mx-auto rounded-lg shadow-lg border-2 border-amber-500"
                    loading="lazy"
                  />
                  <div className="absolute -top-5 -right-5 w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-black font-bold text-sm shadow-lg transform rotate-12">
                    + BONO
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 text-left">
                <h3 className="text-2xl font-bold mb-4 text-amber-500">
                  Esta es tu oportunidad de transformar tu realidad
                </h3>
                <p className="text-gray-300 mb-6">
                  Este conocimiento tiene el poder de reescribir completamente tu existencia, abriendo puertas a dimensiones de abundancia, salud y conexión espiritual que nunca imaginaste posibles.
                </p>
                <button 
                  onClick={scrollToPricing}
                  className="bg-amber-500 hover:bg-green-500 text-black font-bold py-3 px-6 rounded-md transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-green-500/40 uppercase tracking-wider"
                >
                  QUIERO ACCEDER AHORA
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};