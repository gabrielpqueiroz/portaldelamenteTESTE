import React from 'react';

export const InsidePortalSection = () => {
  const previewImages = [
    {
      imageUrl: "/30VxArh.webp"
    },
    {
      imageUrl: "/jaTBVD7.webp"
    },
    {
      imageUrl: "/F7tv3ji.webp"
    },
    {
      imageUrl: "/mA44WZu.webp"
    },
    {
      imageUrl: "/bPENTvD.webp"
    },
    {
      imageUrl: "/ikGkLf7.webp"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-950 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Dentro de <span className="text-amber-500">"El Portal de la Mente"</span>, descubrirás un tesoro cuidadosamente oculto...
          </h2>
          
          <div className="max-w-[300px] mx-auto mb-12">
            <img 
              src="/Bio-organism-luminous-rock-2.webp"
              alt="Bio organismo"
              className="w-full"
              loading="lazy"
              srcSet="/Bio-organism-luminous-rock-2.webp 300w"
              sizes="300px"
            />
          </div>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Conocimiento que ha sido guardado durante milenios, reservado solo para aquellos que están verdaderamente listos para expandir su conciencia y desbloquear un potencial ilimitado.
          </p>
        </div>
        
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-center text-amber-500">
            IMÁGENES E ILUSTRACIONES EXCLUSIVAS PARA ENRIQUECER TU EXPERIENCIA
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-10">
            Cada página ha sido meticulosamente elaborada para despertar tu intuición y conectarte con las frecuencias vibracionales correctas para absorber este conocimiento profundo.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {previewImages.map((preview, index) => (
              <div 
                key={index}
                className="group bg-gray-900 border border-gray-800 rounded-lg overflow-hidden shadow-lg shadow-amber-500/5 hover:shadow-amber-500/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative">
                  <img 
                    src={preview.imageUrl} 
                    alt="Ilustración de vista previa"
                    className="w-full object-contain"
                    loading="lazy"
                    style={{ maxHeight: '400px' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};