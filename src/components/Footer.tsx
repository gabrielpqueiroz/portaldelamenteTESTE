import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-black py-12 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center mb-8 space-x-6">
            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors duration-300 mb-3">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors duration-300 mb-3">
              Términos de Uso
            </a>
          </div>
          
          <div className="text-center text-gray-500 text-sm mb-6">
            Copyright © 2025 – Todos los derechos reservados a "El Portal de la Mente"
          </div>
          
          <div className="bg-gray-900 rounded-lg p-6 text-xs text-gray-500 text-center">
            <p className="mb-2">
              Descargo Legal: Los resultados pueden variar de persona a persona. Este producto es solo para fines informativos y educativos.
            </p>
            <p>
              No garantizamos resultados específicos ya que estos dependen de factores individuales, dedicación y aplicación del conocimiento presentado. El material no sustituye orientación médica, psicológica o religiosa.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};