"use client";

import { useState, useEffect } from 'react';
import WelcomeModal from './WelcomeModal';

export default function ModalProvider() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(() => {
    // Mostrar el modal después de un breve retraso para mejorar la experiencia de usuario
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <WelcomeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
  );
}
