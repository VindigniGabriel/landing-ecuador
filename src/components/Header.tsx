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
    { name: language === 'es' ? 'Inicio' : 'Home', href: '/' },
    { name: language === 'es' ? 'Acerca de nosotros' : 'About Us', href: '/about' },
    { name: language === 'es' ? 'Servicios' : 'Services', href: '/services' },
    { name: language === 'es' ? 'Blog' : 'Blog', href: '/blog' },
    { name: language === 'es' ? 'Contacto' : 'Contact', href: '/contact' },
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
                  src="/Krezco logo-01.jpg" 
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
              <Link 
                key={item.name}
                href={item.href}
                className="text-base font-medium text-blue-900 hover:text-orange-500 transition-colors"
              >
                {item.name}
              </Link>
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
            <Link
              key={item.name}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-blue-900 hover:bg-blue-50"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
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
