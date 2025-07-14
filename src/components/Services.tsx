"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ServiceProps {
  title: string;
  description: string;
  icon: string;
  delay: number;
}

const ServiceCard = ({ title, description, icon, delay }: ServiceProps) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="bg-blue-50 p-4 rounded-full mb-4">
        <Image 
          src={icon} 
          alt={title} 
          width={48} 
          height={48} 
          className="text-blue-900"
        />
      </div>
      <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Transporte Terrestre",
      description: "Soluciones de transporte terrestre nacional e internacional con seguimiento en tiempo real.",
      icon: "/icons/truck.svg",
      delay: 0.1
    },
    {
      title: "Transporte Marítimo",
      description: "Servicios de carga marítima con conexiones a los principales puertos del mundo.",
      icon: "/icons/ship.svg",
      delay: 0.2
    },
    {
      title: "Transporte Aéreo",
      description: "Envíos aéreos rápidos y seguros para mercancías urgentes o de alto valor.",
      icon: "/icons/plane.svg",
      delay: 0.3
    },
    {
      title: "Servicios Aduaneros",
      description: "Gestión integral de trámites aduaneros y asesoramiento en comercio internacional.",
      icon: "/icons/customs.svg",
      delay: 0.4
    },
    {
      title: "Almacenamiento",
      description: "Soluciones de almacenaje y distribución con instalaciones modernas y seguras.",
      icon: "/icons/warehouse.svg",
      delay: 0.5
    },
    {
      title: "Seguros de Carga",
      description: "Protección completa para tus mercancías durante todo el proceso logístico.",
      icon: "/icons/shield.svg",
      delay: 0.6
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="servicios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones logísticas integrales adaptadas a las necesidades específicas de tu negocio
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
