import React from 'react';

export const FacebookComments = () => {
  return (
    <section className="py-16 px-6 bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-500">
            LO QUE DICEN NUESTROS LECTORES
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Comentarios reales de personas que ya transformaron sus vidas
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          {/* Facebook Header */}
          <div className="bg-white rounded-t-lg p-4 border-b border-gray-200">
            <div className="flex items-center">
              <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <div>
                <h3 className="text-gray-800 font-semibold text-lg">Facebook</h3>
                <p className="text-gray-500 text-sm">Comentarios de la comunidad</p>
              </div>
            </div>
          </div>

          {/* Comments Container */}
          <div className="bg-white rounded-b-lg shadow-lg">
            {/* Comentario 1 */}
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img 
                    src="https://randomuser.me/api/portraits/women/65.jpg" 
                    alt="Avatar María Fernanda"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1">
                  <div className="bg-gray-100 rounded-2xl px-4 py-3">
                    <div className="font-semibold text-gray-800 text-sm">María Fernanda</div>
                    <div className="text-gray-800 mt-1">
                      Increíble 😱 No pensé que este libro me impactaría tanto... estoy sintiendo cambios reales desde la primera semana.
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                    <span className="flex items-center space-x-1">
                      <span className="text-blue-600">👍</span>
                      <span className="text-red-500">❤️</span>
                      <span className="text-blue-600 hover:underline cursor-pointer">36</span>
                    </span>
                    <span className="hover:underline cursor-pointer font-medium">Me gusta</span>
                    <span className="hover:underline cursor-pointer font-medium">Responder</span>
                    <span>22 min</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Comentario 2 */}
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img 
                    src="https://randomuser.me/api/portraits/men/34.jpg" 
                    alt="Avatar Carlos Méndez"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1">
                  <div className="bg-gray-100 rounded-2xl px-4 py-3">
                    <div className="font-semibold text-gray-800 text-sm">Carlos Méndez</div>
                    <div className="text-gray-800 mt-1">
                      Lo leí en dos días y ya lo estoy releyendo. ¡Nunca vi tanta información poderosa reunida en un solo lugar!
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                    <span className="flex items-center space-x-1">
                      <span className="text-blue-600">👍</span>
                      <span className="text-red-500">❤️</span>
                      <span className="text-blue-600 hover:underline cursor-pointer">42</span>
                    </span>
                    <span className="hover:underline cursor-pointer font-medium">Me gusta</span>
                    <span className="hover:underline cursor-pointer font-medium">Responder</span>
                    <span>41 min</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Comentario 3 */}
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img 
                    src="https://randomuser.me/api/portraits/women/44.jpg" 
                    alt="Avatar Luz Elena"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1">
                  <div className="bg-gray-100 rounded-2xl px-4 py-3">
                    <div className="font-semibold text-gray-800 text-sm">Luz Elena</div>
                    <div className="text-gray-800 mt-1">
                      Me ayudó a entender cosas que siempre había sentido pero nunca supe explicar... Es más que un libro, es una guía espiritual 🙏
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                    <span className="flex items-center space-x-1">
                      <span className="text-blue-600">👍</span>
                      <span className="text-red-500">❤️</span>
                      <span className="text-blue-600 hover:underline cursor-pointer">57</span>
                    </span>
                    <span className="hover:underline cursor-pointer font-medium">Me gusta</span>
                    <span className="hover:underline cursor-pointer font-medium">Responder</span>
                    <span>1 h</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Comentario 4 */}
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img 
                    src="https://randomuser.me/api/portraits/men/11.jpg" 
                    alt="Avatar Eduardo Rivera"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1">
                  <div className="bg-gray-100 rounded-2xl px-4 py-3">
                    <div className="font-semibold text-gray-800 text-sm">Eduardo Rivera</div>
                    <div className="text-gray-800 mt-1">
                      El módulo de chakras me voló la cabeza. Me siento mucho más centrado y con claridad mental. ¡Gracias!
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                    <span className="flex items-center space-x-1">
                      <span className="text-blue-600">👍</span>
                      <span className="text-red-500">❤️</span>
                      <span className="text-blue-600 hover:underline cursor-pointer">29</span>
                    </span>
                    <span className="hover:underline cursor-pointer font-medium">Me gusta</span>
                    <span className="hover:underline cursor-pointer font-medium">Responder</span>
                    <span>2 h</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Comentario 5 */}
            <div className="p-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img 
                    src="https://randomuser.me/api/portraits/women/72.jpg" 
                    alt="Avatar Verónica Salas"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1">
                  <div className="bg-gray-100 rounded-2xl px-4 py-3">
                    <div className="font-semibold text-gray-800 text-sm">Verónica Salas</div>
                    <div className="text-gray-800 mt-1">
                      No lo compré por curiosidad, lo hice por intuición... y fue lo mejor que pude hacer este mes 💫
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                    <span className="flex items-center space-x-1">
                      <span className="text-blue-600">👍</span>
                      <span className="text-red-500">❤️</span>
                      <span className="text-blue-600 hover:underline cursor-pointer">33</span>
                    </span>
                    <span className="hover:underline cursor-pointer font-medium">Me gusta</span>
                    <span className="hover:underline cursor-pointer font-medium">Responder</span>
                    <span>3 h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};