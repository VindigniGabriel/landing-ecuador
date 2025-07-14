"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState('es');
  
  // Función para manejar el scroll suave
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Cerrar el menú móvil si está abierto
    setIsOpen(false);
    
    // Obtener el elemento de destino
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      // Scroll suave hacia el elemento
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Actualizar la URL sin recargar la página
      window.history.pushState({}, '', href);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const menuItems = [
    { name: language === 'es' ? 'Inicio' : 'Home', href: '#inicio' },
    { name: language === 'es' ? 'Valores' : 'Values', href: '#valores' },
    { name: language === 'es' ? 'Servicios' : 'Services', href: '#servicios' },
    { name: language === 'es' ? 'Contacto' : 'Contact', href: '#contacto' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="flex items-center">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative h-10 w-32"
              >
                <Image 
                  src="/logo.png" 
                  alt="Krezco" 
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </Link>
          </div>
          
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-900 hover:text-blue-700 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Abrir menú</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          
          <nav className="hidden md:flex space-x-10">
            {menuItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="text-base font-medium text-blue-900 hover:text-orange-500 transition-colors"
                onClick={(e) => handleSmoothScroll(e, item.href)}
              >
                {item.name}
              </a>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <button
              onClick={toggleLanguage}
              className="flex items-center text-sm font-medium text-blue-900 hover:text-orange-500"
            >
              <GlobeAltIcon className="h-5 w-5 mr-1" />
              {language === 'es' ? 'EN' : 'ES'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className={`${isOpen ? 'block' : 'hidden'} md:hidden`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-blue-900 hover:bg-blue-50"
              onClick={(e) => handleSmoothScroll(e, item.href)}
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={toggleLanguage}
            className="flex items-center w-full px-3 py-2 text-base font-medium text-blue-900 hover:bg-blue-50 rounded-md"
          >
            <GlobeAltIcon className="h-5 w-5 mr-1" />
            {language === 'es' ? 'English' : 'Español'}
          </button>
        </div>
        <div className="absolute top-4 right-4">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-blue-900 hover:text-blue-700"
            onClick={() => setIsOpen(false)}
          >
            <span className="sr-only">Cerrar menú</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
