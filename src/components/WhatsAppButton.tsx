// src/components/WhatsAppButton.tsx
import React from 'react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  position?: 'bottom-right' | 'bottom-left';
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message = 'Hola Matilú! 👋 Vi su página y quiero conocer los planes de alimentación para mi perro. 🐶',
  position = 'bottom-right',
}) => {
  // Limpiar el número (quitar espacios, guiones, etc.)
  const cleanNumber = phoneNumber.replace(/\D/g, '');
  
  // Codificar el mensaje para URL
  const encodedMessage = encodeURIComponent(message);
  
  // Construir el link de WhatsApp
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;

  const positionClass = position === 'bottom-right' ? 'right-6' : 'left-6';

  return (
    <>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatear por WhatsApp con Matilú Dog Food"
        className={`fixed bottom-6 ${positionClass} z-50 
          flex items-center justify-center gap-2
          bg-gradient-to-br from-[#25D366] to-[#128C7E] 
          text-white rounded-full shadow-lg
          hover:scale-110 hover:-translate-y-1 
          transition-all duration-300 ease-out
          animate-whatsapp-entrance
          w-14 h-14 md:w-auto md:h-auto md:px-6 md:py-3.5
          group`}
      >
        {/* Icono WhatsApp */}
        <svg 
          viewBox="0 0 32 32" 
          className="w-7 h-7 md:w-6 md:h-6 fill-current"
        >
          <path d="M16.002 2.001c-7.732 0-14 6.268-14 14 0 2.47.642 4.868 1.86 6.987L2.001 29.999l7.175-1.862A13.936 13.936 0 0016.002 30c7.732 0 14-6.268 14-14s-6.268-14-14-14zm8.236 19.836c-.342.964-1.998 1.774-2.78 1.89-.742.11-1.476.106-2.14-.034-.492-.106-1.116-.27-1.886-.528-3.316-1.152-5.486-4.108-5.65-4.326-.164-.218-1.348-1.794-1.348-3.424 0-1.63.854-2.428 1.156-2.76.302-.332.664-.416.886-.416.222 0 .444.002.638.012.204.01.476-.078.746.568.27.646.92 2.244 1.002 2.408.082.164.136.356.026.576-.11.22-.166.356-.332.544-.166.188-.348.394-.498.53-.166.148-.34.31-.146.608.194.298.862 1.42 1.848 2.298 1.27 1.126 2.34 1.474 2.674 1.638.334.164.53.136.726-.082.196-.218.832-.968 1.054-1.302.222-.334.444-.278.746-.166.302.112 1.924.908 2.254 1.072.33.164.55.248.63.388.08.14.058.814-.284 1.778z"/>
        </svg>
        
        {/* Texto visible solo en desktop */}
        <span className="hidden md:inline font-semibold text-sm whitespace-nowrap">
          Consultanos
        </span>
      </a>

      {/* Estilos de animación inline (para proyectos sin Tailwind config) */}
      <style>{`
        @keyframes whatsapp-entrance {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes whatsapp-pulse {
          0%, 100% {
            box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4), 0 0 0 0 rgba(37, 211, 102, 0.4);
          }
          50% {
            box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4), 0 0 0 15px rgba(37, 211, 102, 0);
          }
        }
        
        .animate-whatsapp-entrance {
          animation: whatsapp-entrance 0.6s ease-out 1s both, whatsapp-pulse 2s infinite 2s;
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;