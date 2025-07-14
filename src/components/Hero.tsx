"use client";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-900 to-blue-700">
        <div className="absolute inset-0 opacity-20">
          {/* Patrón de puntos */}
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        </div>
      </div>
      
      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Conectamos oportunidades
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Soluciones logísticas integrales para llevar tu negocio más allá de las fronteras
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button 
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 transform hover:scale-105"
            onClick={(e) => {
              e.preventDefault();
              const contactoSection = document.getElementById('contacto');
              if (contactoSection) {
                // Usar block: 'start' para asegurar que el inicio de la sección sea visible
                contactoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                
                // Ajustar la posición para mostrar toda la sección
                setTimeout(() => {
                  // Obtener la posición actual y ajustarla para mostrar más contenido
                  const headerHeight = 80; // Altura aproximada del header fijo
                  const currentPosition = window.scrollY;
                  window.scrollTo({
                    top: currentPosition - headerHeight,
                    behavior: 'smooth'
                  });
                }, 800); // Esperar a que termine el primer scroll
                
                window.history.pushState({}, '', '#contacto');
              }
            }}
          >
            Solicitar presupuesto
          </button>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 1.5
        }}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
