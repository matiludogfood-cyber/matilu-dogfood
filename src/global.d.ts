// Declaraciones globales para Google Analytics y Meta Pixel

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
    _fbq: any;
  }
}

// Variables globales
declare const gtag: (...args: any[]) => void;
declare const fbq: (...args: any[]) => void;

export {};