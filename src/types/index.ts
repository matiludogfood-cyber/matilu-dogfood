<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Matilu Dog Food</title>
<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1964972371072654');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1964972371072654&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->
</head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
// Tipos para la tienda Matilú

export interface Product {
  id: string;
  name: string;
  category: 'snack' | 'matifood' | 'membresia' | 'combo';
  description: string;
  ingredients?: string[];
  benefits?: string[];
  image?: string;
  variants: ProductVariant[];
  line?: string;
}

export interface ProductVariant {
  id: string;
  weight: number;
  unit: string;
  price: number;
  comparePrice?: number;
}

export interface Membership {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  image?: string;
  prices: MembershipPrice[];
  duration?: string;
}

export interface MembershipPrice {
  grams: number;
  price: number;
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  category: string;
  variant: ProductVariant;
  quantity: number;
  image?: string;
}

export interface DogProfile {
  id: string;
  name: string;
  weight: number;
  age: 'cachorro' | 'adulto' | 'senior';
  size: 'mini' | 'pequeno' | 'mediano' | 'grande' | 'gigante';
  status: 'mantenimiento' | 'crecimiento' | 'mini_metabolismo' | 'gestacion' | 'trabajo';
  hasDisease: boolean;
  disease?: string;
  activityLevel: 'bajo' | 'medio' | 'alto';
  isNeutered: boolean;
  dailyRation?: number;
}

export interface CalculatorFormData {
  petName: string;
  petType: 'perro' | 'gato';
  weight: number;
  age: 'cachorro' | 'adulto' | 'senior';
  breed: string;
  isNeutered: boolean;
  activityLevel: 'bajo' | 'medio' | 'alto';
  hasAllergy: boolean;
  allergy?: string;
  needsPrescription: boolean;
}

export type Section = 'inicio' | 'catalogo' | 'calculadora' | 'nosotros' | 'contacto' | 'blog';