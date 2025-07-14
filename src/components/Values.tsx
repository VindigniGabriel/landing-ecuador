"use client";

import { motion } from 'framer-motion';

interface ValueProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ValueCard = ({ title, description, icon, delay }: ValueProps) => {
  return (
    <motion.div 
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="text-orange-500 mb-4 text-5xl">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-600 max-w-xs">{description}</p>
    </motion.div>
  );
};

const Values = () => {
  const values = [
    {
      title: "Confianza",
      description: "Construimos relaciones sólidas basadas en la transparencia y el cumplimiento de nuestros compromisos.",
      icon: "🤝",
      delay: 0.1
    },
    {
      title: "Eficiencia",
      description: "Optimizamos cada proceso para ofrecer soluciones ágiles que maximizan el valor para nuestros clientes.",
      icon: "⚡",
      delay: 0.2
    },
    {
      title: "Seguridad",
      description: "Priorizamos la protección de tu mercancía implementando los más altos estándares de seguridad.",
      icon: "🛡️",
      delay: 0.3
    },
    {
      title: "Cultura Positiva",
      description: "Fomentamos un ambiente de trabajo colaborativo y orientado a resultados que se refleja en nuestro servicio.",
      icon: "🌱",
      delay: 0.4
    }
  ];

  return (
    <section id="valores" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Nuestros Valores</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Los principios que guían cada una de nuestras acciones y definen quiénes somos
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {values.map((value, index) => (
            <ValueCard 
              key={index}
              title={value.title}
              description={value.description}
              icon={value.icon}
              delay={value.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
