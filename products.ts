import type { Product, Membership } from '@/types';

// SNACKS - Mini treats (mordida pequeña)
export const snacksMiniTreats: Product[] = [
  {
    id: 'snack-mini-higado',
    name: 'Mini Treats Deshidratado de Hígado',
    category: 'snack',
    line: 'Mini Treats',
    description: 'Deliciosos snacks deshidratados de hígado con mordida pequeña, perfectos para entrenamiento.',
    ingredients: ['Hígado de res 100% natural'],
    benefits: ['Alto contenido de hierro', 'Proteína de alta calidad', 'Ideal para entrenamiento'],
    image: '/images/snacks/mini-higado.jpg',
    variants: [
      { id: 'v1', weight: 100, unit: 'g', price: 4400 },
      { id: 'v2', weight: 300, unit: 'g', price: 7500 },
      { id: 'v3', weight: 500, unit: 'g', price: 12800 },
    ],
  },
  {
    id: 'snack-mini-corazon',
    name: 'Mini Treats Deshidratado de Corazón',
    category: 'snack',
    line: 'Mini Treats',
    description: 'Snacks deshidratados de corazón, ricos en taurina y nutrientes esenciales.',
    ingredients: ['Corazón de res 100% natural'],
    benefits: ['Rico en taurina', 'Fortalece el sistema cardiovascular', 'Textura tierna'],
    image: '/images/snacks/mini-corazon.jpg',
    variants: [
      { id: 'v1', weight: 100, unit: 'g', price: 6200 },
      { id: 'v2', weight: 300, unit: 'g', price: 13200 },
      { id: 'v3', weight: 500, unit: 'g', price: 22350 },
    ],
  },
  {
    id: 'snack-mini-mondongo',
    name: 'Mini Treats Deshidratado de Mondongo',
    category: 'snack',
    line: 'Mini Treats',
    description: 'Snacks deshidratados de mondongo, excelente fuente de enzimas digestivas.',
    ingredients: ['Mondongo 100% natural'],
    benefits: ['Probiótico natural', 'Mejora la digestión', 'Alto valor nutricional'],
    image: '/images/snacks/mini-mondongo.jpg',
    variants: [
      { id: 'v1', weight: 100, unit: 'g', price: 7400 },
      { id: 'v2', weight: 300, unit: 'g', price: 16800 },
      { id: 'v3', weight: 500, unit: 'g', price: 28400 },
    ],
  },
  {
    id: 'snack-mini-mix',
    name: 'Mini Treats Mix',
    category: 'snack',
    line: 'Mini Treats',
    description: 'Mezcla de mini treats de diferentes proteínas para variedad en la dieta.',
    ingredients: ['Hígado', 'Corazón', 'Mondongo'],
    benefits: ['Variedad de sabores', 'Nutrientes completos', 'No aburre al perro'],
    image: '/images/snacks/mini-mix.jpg',
    variants: [
      { id: 'v1', weight: 100, unit: 'g', price: 6600 },
      { id: 'v2', weight: 300, unit: 'g', price: 14700 },
      { id: 'v3', weight: 500, unit: 'g', price: 24800 },
    ],
  },
];

// SNACKS - Tiras (mordida grande)
export const snacksTiras: Product[] = [
  {
    id: 'snack-tiras-higado',
    name: 'Snack en Tiras Deshidratado de Hígado',
    category: 'snack',
    line: 'Tiras',
    description: 'Tiras de hígado deshidratado, mordida grande para mayor satisfacción.',
    ingredients: ['Hígado de res 100% natural'],
    benefits: ['Mordida satisfactoria', 'Limpieza dental', 'Alto en hierro'],
    image: '/images/snacks/tiras-higado.jpg',
    variants: [
      { id: 'v1', weight: 100, unit: 'g', price: 4400 },
      { id: 'v2', weight: 300, unit: 'g', price: 7500 },
      { id: 'v3', weight: 500, unit: 'g', price: 12800 },
    ],
  },
  {
    id: 'snack-tiras-corazon',
    name: 'Snack en Tiras Deshidratado de Corazón',
    category: 'snack',
    line: 'Tiras',
    description: 'Tiras de corazón deshidratado, mordida grande y textura carnosa.',
    ingredients: ['Corazón de res 100% natural'],
    benefits: ['Textura carnosa', 'Rico en taurina', 'Mordida grande'],
    image: '/images/snacks/tiras-corazon.jpg',
    variants: [
      { id: 'v1', weight: 100, unit: 'g', price: 6200 },
      { id: 'v2', weight: 300, unit: 'g', price: 13200 },
      { id: 'v3', weight: 500, unit: 'g', price: 22350 },
    ],
  },
  {
    id: 'snack-tiras-mondongo',
    name: 'Snack en Tiras Deshidratado de Mondongo',
    category: 'snack',
    line: 'Tiras',
    description: 'Tiras de mondongo deshidratado, excelente para la salud digestiva.',
    ingredients: ['Mondongo 100% natural'],
    benefits: ['Probiótico natural', 'Salud intestinal', 'Mordida resistente'],
    image: '/images/snacks/tiras-mondongo.jpg',
    variants: [
      { id: 'v1', weight: 100, unit: 'g', price: 7400 },
      { id: 'v2', weight: 300, unit: 'g', price: 16800 },
      { id: 'v3', weight: 500, unit: 'g', price: 28400 },
    ],
  },
  {
    id: 'snack-tiras-mix',
    name: 'Snack en Tiras Deshidratado Mix',
    category: 'snack',
    line: 'Tiras',
    description: 'Mezcla de tiras deshidratadas de diferentes proteínas.',
    ingredients: ['Hígado', 'Corazón', 'Mondongo'],
    benefits: ['Variedad de texturas', 'Nutrición completa', 'Entretenimiento'],
    image: '/images/snacks/tiras-mix.jpg',
    variants: [
      { id: 'v1', weight: 100, unit: 'g', price: 6600 },
      { id: 'v2', weight: 300, unit: 'g', price: 14700 },
      { id: 'v3', weight: 500, unit: 'g', price: 24800 },
    ],
  },
];

// SNACKS - Especiales
export const snacksEspeciales: Product[] = [
  {
    id: 'snack-cornalitos',
    name: 'Cornalitos Deshidratados',
    category: 'snack',
    line: 'Especiales',
    description: 'Pequeños peces deshidratados, fuente natural de omega-3.',
    ingredients: ['Cornalitos 100% natural'],
    benefits: ['Omega-3 natural', 'Bueno para la piel y pelaje', 'Hipoalergénico'],
    image: '/images/snacks/cornalitos.jpg',
    variants: [
      { id: 'v1', weight: 50, unit: 'g', price: 9200 },
    ],
  },
  {
    id: 'snack-galletas-rinon',
    name: 'Galletas de Riñón Deshidratado',
    category: 'snack',
    line: 'Especiales',
    description: 'Crujientes galletas de riñón, ricas en nutrientes.',
    ingredients: ['Riñón de res 100% natural'],
    benefits: ['Textura crujiente', 'Vitaminas del grupo B', 'Bajo en grasa'],
    image: '/images/snacks/galletas-rinon.jpg',
    variants: [
      { id: 'v1', weight: 50, unit: 'g', price: 4000 },
      { id: 'v2', weight: 100, unit: 'g', price: 7100 },
    ],
  },
  {
    id: 'snack-galletas-pulmon',
    name: 'Galletas de Pulmón Deshidratado',
    category: 'snack',
    line: 'Especiales',
    description: 'Galletas de pulmón, textura ligera y baja en calorías.',
    ingredients: ['Pulmón de res 100% natural'],
    benefits: ['Bajo en calorías', 'Textura aireada', 'Ideal para perros con sobrepeso'],
    image: '/images/snacks/galletas-pulmon.jpg',
    variants: [
      { id: 'v1', weight: 50, unit: 'g', price: 3100 },
      { id: 'v2', weight: 100, unit: 'g', price: 5400 },
    ],
  },
  {
    id: 'snack-traquea-10',
    name: 'Tráquea Deshidratada 10cm',
    category: 'snack',
    line: 'Especiales',
    description: 'Tráquea de res deshidratada, excelente para la salud articular.',
    ingredients: ['Tráquea de res 100% natural'],
    benefits: ['Rica en condroitina', 'Salud articular', 'Limpieza dental'],
    image: '/images/snacks/traquea-10.jpg',
    variants: [
      { id: 'v1', weight: 8, unit: 'cm', price: 3500 },
    ],
  },
  {
    id: 'snack-traquea-18',
    name: 'Tráquea Deshidratada 18cm',
    category: 'snack',
    line: 'Especiales',
    description: 'Tráquea grande deshidratada, mordida prolongada.',
    ingredients: ['Tráquea de res 100% natural'],
    benefits: ['Mordida prolongada', 'Condroitina natural', 'Entretenimiento'],
    image: '/images/snacks/traquea-18.jpg',
    variants: [
      { id: 'v1', weight: 16, unit: 'cm', price: 6500 },
    ],
  },
  {
    id: 'snack-aritos-traquea',
    name: 'Aritos de Tráquea Deshidratada',
    category: 'snack',
    line: 'Especiales',
    description: 'Aritos de tráquea, perfectos para perros pequeños.',
    ingredients: ['Tráquea de res 100% natural'],
    benefits: ['Tamaño perfecto', 'Fácil de masticar', 'Salud articular'],
    image: '/images/snacks/aritos-traquea.jpg',
    variants: [
      { id: 'v1', weight: 50, unit: 'g', price: 4800 },
      { id: 'v2', weight: 100, unit: 'g', price: 8500 },
    ],
  },
  {
    id: 'snack-cuellitos',
    name: 'Snack de Cuellitos de Pollo Deshidratado',
    category: 'snack',
    line: 'Especiales',
    description: 'Cuellitos de pollo deshidratados, ricos en calcio.',
    ingredients: ['Cuellos de pollo 100% natural'],
    benefits: ['Alto en calcio', 'Limpieza dental', 'Textura crujiente'],
    image: '/images/snacks/cuellitos.jpg',
    variants: [
      { id: 'v1', weight: 100, unit: 'g', price: 5000 },
      { id: 'v2', weight: 300, unit: 'g', price: 10500 },
    ],
  },
  {
    id: 'snack-garritas',
    name: 'Garritas de Pollo Deshidratadas',
    category: 'snack',
    line: 'Especiales',
    description: 'Garritas de pollo deshidratadas, fuente natural de colágeno.',
    ingredients: ['Patas de pollo 100% natural'],
    benefits: ['Colágeno natural', 'Salud articular', 'Mordida divertida'],
    image: '/images/snacks/garritas.jpg',
    variants: [
      { id: 'v1', weight: 100, unit: 'g', price: 5200 },
      { id: 'v2', weight: 300, unit: 'g', price: 11600 },
    ],
  },
];

// GOMITAS
export const gomitas: Product[] = [
  {
    id: 'gomitas-caldo',
    name: 'Gomitas de Caldo de Huesos',
    category: 'snack',
    line: 'Gomitas',
    description: 'Gomitas nutritivas hechas con caldo de huesos, ricas en colágeno.',
    ingredients: ['Caldo de huesos', 'Gelatina natural'],
    benefits: ['Colágeno y aminoácidos', 'Salud intestinal', 'Hidratación'],
    image: '/images/snacks/gomitas-caldo.jpg',
    variants: [
      { id: 'v1', weight: 100, unit: 'g', price: 5300 },
    ],
  },
  {
    id: 'gomitas-carne-pollo',
    name: 'Gomitas de Carne y Pollo',
    category: 'snack',
    line: 'Gomitas',
    description: 'Gomitas de doble proteína: carne de res y pollo.',
    ingredients: ['Carne de res', 'Pollo', 'Gelatina natural'],
    benefits: ['Doble proteína', 'Sabor irresistible', 'Textura chewy'],
    image: '/images/snacks/gomitas-carne-pollo.jpg',
    variants: [
      { id: 'v1', weight: 100, unit: 'g', price: 5300 },
    ],
  },
  {
    id: 'gomitas-cerdo-zanahoria',
    name: 'Gomitas de Cerdo y Zanahoria',
    category: 'snack',
    line: 'Gomitas',
    description: 'Gomitas de cerdo con zanahoria, fuente de betacaroteno.',
    ingredients: ['Cerdo', 'Zanahoria', 'Gelatina natural'],
    benefits: ['Betacaroteno', 'Salud visual', 'Sabor dulce natural'],
    image: '/images/snacks/gomitas-cerdo-zanahoria.jpg',
    variants: [
      { id: 'v1', weight: 100, unit: 'g', price: 5300 },
    ],
  },
  {
    id: 'gomitas-pollo-zanahoria',
    name: 'Gomitas de Pollo y Zanahoria',
    category: 'snack',
    line: 'Gomitas',
    description: 'Gomitas de pollo con zanahoria, ligera y nutritiva.',
    ingredients: ['Pollo', 'Zanahoria', 'Gelatina natural'],
    benefits: ['Proteína magra', 'Vitaminas A', 'Fácil digestión'],
    image: '/images/snacks/gomitas-pollo-zanahoria.jpg',
    variants: [
      { id: 'v1', weight: 100, unit: 'g', price: 5300 },
    ],
  },
  {
    id: 'gomitas-colageno',
    name: 'Gomitas de Colágeno',
    category: 'snack',
    line: 'Gomitas',
    description: 'Gomitas especiales para la salud articular y del pelaje.',
    ingredients: ['Colágeno hidrolizado', 'Gelatina natural'],
    benefits: ['Piel y pelaje saludable', 'Articulaciones fuertes', 'Anti-edad'],
    image: '/images/snacks/gomitas-colageno.jpg',
    variants: [
      { id: 'v1', weight: 100, unit: 'g', price: 5300 },
    ],
  },
  {
    id: 'gomitas-frutos-rojos',
    name: 'Gomitas de Frutos Rojos',
    category: 'snack',
    line: 'Gomitas',
    description: 'Gomitas con antioxidantes naturales de frutos rojos.',
    ingredients: ['Frutos rojos', 'Gelatina natural'],
    benefits: ['Antioxidantes', 'Sistema inmune', 'Sabor frutal'],
    image: '/images/snacks/gomitas-frutos-rojos.jpg',
    variants: [
      { id: 'v1', weight: 100, unit: 'g', price: 5300 },
    ],
  },
  {
    id: 'gomitas-frutas',
    name: 'Gomitas de Frutas',
    category: 'snack',
    line: 'Gomitas',
    description: 'Mezcla de frutas naturales en gomitas nutritivas.',
    ingredients: ['Banana', 'Manzana', 'Pera', 'Mango', 'Gelatina natural'],
    benefits: ['Vitaminas naturales', 'Fibra', 'Energía'],
    image: '/images/snacks/gomitas-frutas.jpg',
    variants: [
      { id: 'v1', weight: 100, unit: 'g', price: 5300 },
    ],
  },
  {
    id: 'gomitas-aliento',
    name: 'Gomitas Aliento Fresco',
    category: 'snack',
    line: 'Gomitas',
    description: 'Gomitas con menta y perejil para aliento fresco.',
    ingredients: ['Menta', 'Perejil', 'Aceite de coco', 'Gelatina natural'],
    benefits: ['Aliento fresco', 'Higiene bucal', 'Antibacterial'],
    image: '/images/snacks/gomitas-aliento.jpg',
    variants: [
      { id: 'v1', weight: 100, unit: 'g', price: 5300 },
    ],
  },
];

// GELATINAS
export const gelatinas: Product[] = [
  {
    id: 'gelatina-visceras',
    name: 'Gelatinas de Vísceras',
    category: 'snack',
    line: 'Gelatinas',
    description: 'Gelatinas nutritivas de vísceras, superalimento natural.',
    ingredients: ['Vísceras mixtas', 'Gelatina natural'],
    benefits: ['Nutrientes concentrados', 'Probióticos', 'Digestión'],
    image: '/images/snacks/gelatina-visceras.jpg',
    variants: [
      { id: 'v1', weight: 50, unit: 'g', price: 5300 },
    ],
  },
  {
    id: 'gelatina-frutas',
    name: 'Gelatinas de Frutas',
    category: 'snack',
    line: 'Gelatinas',
    description: 'Gelatinas refrescantes de frutas naturales.',
    ingredients: ['Frutas variadas', 'Gelatina natural'],
    benefits: ['Hidratación', 'Vitaminas', 'Refrescante'],
    image: '/images/snacks/gelatina-frutas.jpg',
    variants: [
      { id: 'v1', weight: 50, unit: 'g', price: 5300 },
    ],
  },
  {
    id: 'gelatina-carne-pollo',
    name: 'Gelatina de Carne y Pollo',
    category: 'snack',
    line: 'Gelatinas',
    description: 'Gelatina proteica de carne y pollo.',
    ingredients: ['Carne de res', 'Pollo', 'Gelatina natural'],
    benefits: ['Alta proteína', 'Sabor intenso', 'Saciedad'],
    image: '/images/snacks/gelatina-carne-pollo.jpg',
    variants: [
      { id: 'v1', weight: 50, unit: 'g', price: 5300 },
    ],
  },
];

// MATIFOOD - Compra sin suscripción
export const matifoodProducts: Product[] = [
  {
    id: 'matifood-mix-200',
    name: 'Matifood Mix',
    category: 'matifood',
    description: 'Comida natural cocida mixta: carne, pollo y verduras.',
    ingredients: ['Carne de res', 'Pollo', 'Verduras variadas', 'Suplementos naturales'],
    benefits: ['Nutrición completa', 'Sin conservantes', 'Cocido a baja temperatura'],
    image: '/images/matifood/mix.jpg',
    variants: [
      { id: 'v1', weight: 200, unit: 'g', price: 2400 },
      { id: 'v2', weight: 500, unit: 'g', price: 4400 },
      { id: 'v3', weight: 1000, unit: 'g', price: 8200 },
    ],
  },
  {
    id: 'matifood-pollo-200',
    name: 'Matifood Pollo',
    category: 'matifood',
    description: 'Comida natural cocida a base de pollo.',
    ingredients: ['Pollo', 'Verduras variadas', 'Suplementos naturales'],
    benefits: ['Proteína magra', 'Fácil digestión', 'Hipoalergénico'],
    image: '/images/matifood/pollo.jpg',
    variants: [
      { id: 'v1', weight: 200, unit: 'g', price: 2200 },
      { id: 'v2', weight: 500, unit: 'g', price: 4200 },
      { id: 'v3', weight: 1000, unit: 'g', price: 8100 },
    ],
  },
  {
    id: 'matifood-carne-200',
    name: 'Matifood Carne',
    category: 'matifood',
    description: 'Comida natural cocida a base de carne de res.',
    ingredients: ['Carne de res', 'Verduras variadas', 'Suplementos naturales'],
    benefits: ['Alto hierro', 'Sabor intenso', 'Energía'],
    image: '/images/matifood/carne.jpg',
    variants: [
      { id: 'v1', weight: 200, unit: 'g', price: 2500 },
      { id: 'v2', weight: 500, unit: 'g', price: 4600 },
      { id: 'v3', weight: 1000, unit: 'g', price: 8500 },
    ],
  },
  {
    id: 'matifood-cerdo-200',
    name: 'Matifood Cerdo',
    category: 'matifood',
    description: 'Comida natural cocida a base de cerdo.',
    ingredients: ['Cerdo', 'Verduras variadas', 'Suplementos naturales'],
    benefits: ['Proteína completa', 'Vitaminas B', 'Sabor único'],
    image: '/images/matifood/cerdo.jpg',
    variants: [
      { id: 'v1', weight: 200, unit: 'g', price: 2300 },
      { id: 'v2', weight: 500, unit: 'g', price: 4300 },
      { id: 'v3', weight: 1000, unit: 'g', price: 8300 },
    ],
  },
];

// MEMBRESÍAS
export const memberships: Membership[] = [
  {
    id: 'membresia-amigo-fiel',
    name: 'Membresía Amigo Fiel',
    description: 'Nuestra membresía básica perfecta para comenzar con la alimentación natural. Incluye entrega programada y descuentos exclusivos.',
    benefits: [
      '10% OFF en todas las compras',
      'Delivery gratis',
      'Asesoría nutricional básica',
      'Acceso a promociones exclusivas',
      'Cancelación flexible'
    ],
    image: '/images/membresias/amigo-fiel.jpg',
    duration: 'Mensual',
    prices: [
      { grams: 100, price: 45800 },
      { grams: 200, price: 60800 },
      { grams: 300, price: 75800 },
      { grams: 400, price: 92200 },
      { grams: 500, price: 108700 },
      { grams: 600, price: 127000 },
      { grams: 700, price: 145000 },
      { grams: 800, price: 161000 },
      { grams: 900, price: 179000 },
      { grams: 1000, price: 195600 },
    ],
  },
  {
    id: 'membresia-guardian-nutritivo',
    name: 'Membresía Guardián Nutritivo',
    description: 'Membresía intermedia con mayores beneficios y productos premium incluidos.',
    benefits: [
      '15% OFF en todas las compras',
      'Delivery gratis prioritario',
      'Asesoría nutricional completa',
      'Snacks sorpresa mensuales',
      'Acceso a productos exclusivos',
      'Soporte prioritario'
    ],
    image: '/images/membresias/guardian-nutritivo.jpg',
    duration: 'Mensual',
    prices: [
      { grams: 100, price: 50000 },
      { grams: 200, price: 65000 },
      { grams: 300, price: 80000 },
      { grams: 400, price: 97000 },
      { grams: 500, price: 113000 },
      { grams: 600, price: 133000 },
      { grams: 700, price: 150000 },
      { grams: 800, price: 165000 },
      { grams: 900, price: 185000 },
      { grams: 1000, price: 200000 },
    ],
  },
  {
    id: 'membresia-huella-oro',
    name: 'Membresía Huella de Oro',
    description: 'Nuestra membresía premium con todos los beneficios y atención personalizada.',
    benefits: [
      '20% OFF en todas las compras',
      'Delivery gratis express',
      'Asesoría nutricional ilimitada',
      'Box mensual de snacks premium',
      'Acceso VIP a nuevos productos',
      'Veterinario online incluido',
      'Regalo de cumpleaños para tu perro'
    ],
    image: '/images/membresias/huella-oro.jpg',
    duration: 'Mensual',
    prices: [
      { grams: 100, price: 51700 },
      { grams: 200, price: 68100 },
      { grams: 300, price: 84500 },
      { grams: 400, price: 102400 },
      { grams: 500, price: 120300 },
      { grams: 600, price: 140100 },
      { grams: 700, price: 160000 },
      { grams: 800, price: 176800 },
      { grams: 900, price: 196100 },
      { grams: 1000, price: 215000 },
    ],
  },
];

// COMBOS
export const combos: Membership[] = [
  {
    id: 'combo-otra-mitad',
    name: 'Combo Mi Otra Mitad',
    description: 'Combo especial con 15 porciones para que tu perro pruebe toda la variedad.',
    benefits: [
      '15 porciones variadas',
      'Perfecto para probar sabores',
      'Ideal para viajes',
      'Empaque individual'
    ],
    image: '/images/combos/otra-mitad.jpg',
    duration: 'Única compra',
    prices: [
      { grams: 100, price: 24000 },
      { grams: 200, price: 32500 },
      { grams: 300, price: 41000 },
      { grams: 400, price: 50150 },
      { grams: 500, price: 59500 },
      { grams: 600, price: 69700 },
      { grams: 700, price: 79800 },
      { grams: 800, price: 88750 },
      { grams: 900, price: 98900 },
      { grams: 1000, price: 108400 },
    ],
  },
  {
    id: 'combo-probadita',
    name: 'Combo Probadita',
    description: 'Combo de 7 porciones para que tu perro descubra Matilú.',
    benefits: [
      '7 porciones variadas',
      'Introducción a la alimentación natural',
      'Economico',
      'Empaque individual'
    ],
    image: '/images/combos/probadita.jpg',
    duration: 'Única compra',
    prices: [
      { grams: 100, price: 12000 },
      { grams: 200, price: 15700 },
      { grams: 300, price: 19600 },
      { grams: 400, price: 24000 },
      { grams: 500, price: 28300 },
      { grams: 600, price: 33000 },
      { grams: 700, price: 37800 },
      { grams: 800, price: 42000 },
      { grams: 900, price: 46700 },
      { grams: 1000, price: 51000 },
    ],
  },
];

// Todos los productos juntos
export const allSnacks = [...snacksMiniTreats, ...snacksTiras, ...snacksEspeciales, ...gomitas, ...gelatinas];
export const allProducts = [...allSnacks, ...matifoodProducts];
