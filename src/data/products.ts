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
      { id: 'v1', weight: 100, unit: 'g', price: 4950 },
      { id: 'v2', weight: 300, unit: 'g', price: 12186 },
      { id: 'v3', weight: 500, unit: 'g', price: 21090 },
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
      { id: 'v1', weight: 100, unit: 'g', price: 6586 },
      { id: 'v2', weight: 300, unit: 'g', price: 17226 },
      { id: 'v3', weight: 500, unit: 'g', price: 29490 },
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
      { id: 'v1', weight: 100, unit: 'g', price: 9883 },
      { id: 'v2', weight: 300, unit: 'g', price: 27119 },
      { id: 'v3', weight: 500, unit: 'g', price: 45978 },
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
      { id: 'v1', weight: 100, unit: 'g', price: 6586 },
      { id: 'v2', weight: 300, unit: 'g', price: 17226 },
      { id: 'v3', weight: 500, unit: 'g', price: 29490 },
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
      { id: 'v1', weight: 100, unit: 'g', price: 4906 },
      { id: 'v2', weight: 300, unit: 'g', price: 12186 },
      { id: 'v3', weight: 500, unit: 'g', price: 21090 },
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
      { id: 'v1', weight: 100, unit: 'g', price: 6586 },
      { id: 'v2', weight: 300, unit: 'g', price: 17226 },
      { id: 'v3', weight: 500, unit: 'g', price: 29490 },
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
      { id: 'v1', weight: 100, unit: 'g', price: 9883 },
      { id: 'v2', weight: 300, unit: 'g', price: 27119 },
      { id: 'v3', weight: 500, unit: 'g', price: 45978 },
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
      { id: 'v1', weight: 100, unit: 'g', price: 6586 },
      { id: 'v2', weight: 300, unit: 'g', price: 17226 },
      { id: 'v3', weight: 500, unit: 'g', price: 29490 },
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
      { id: 'v1', weight: 50, unit: 'g', price: 6720 },
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
      { id: 'v1', weight: 50, unit: 'g', price: 4360 },
      { id: 'v2', weight: 100, unit: 'g', price: 7006 },
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
      { id: 'v1', weight: 50, unit: 'g', price: 3024 },
      { id: 'v2', weight: 100, unit: 'g', price: 4906 },
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
      { id: 'v1', weight: 100, unit: 'g', price: 4586 },
      { id: 'v2', weight: 300, unit: 'g', price: 8090 },
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
      { id: 'v1', weight: 100, unit: 'g', price: 5886 },
      { id: 'v2', weight: 300, unit: 'g', price: 14090 },
    ],
  },
];

// GOMITAS - Nuevos productos con imágenes actualizadas
export const gomitas: Product[] = [
  {
    id: 'gomitas-caldo',
    name: 'Gomitas de Caldo de Huesos',
    category: 'snack',
    line: 'Gomitas',
    description: 'Gomitas nutritivas hechas con caldo de huesos, ricas en colágeno.',
    ingredients: ['Caldo de huesos', 'Gelatina natural'],
    benefits: ['Colágeno y aminoácidos', 'Salud intestinal', 'Hidratación'],
    image: '/images/snacks/gomitas-caldo.png',
    variants: [
      { id: 'v1', weight: 100, unit: 'g', price: 7006 },
    ],
  },
  {
    id: 'gomitas-revitalizantes',
    name: 'Gomitas Revitalizantes (Colágeno)',
    category: 'snack',
    line: 'Gomitas',
    description: 'Gomitas especiales para la salud articular y del pelaje.',
    ingredients: ['Colágeno hidrolizado', 'Gelatina natural'],
    benefits: ['Piel y pelaje saludable', 'Articulaciones fuertes', 'Anti-edad'],
    image: '/images/snacks/gomitas-revitalizantes.png',
    variants: [
      { id: 'v1', weight: 100, unit: 'g', price: 7006 },
    ],
  },
  {
    id: 'gomitas-energeticas',
    name: 'Gomitas Energéticas',
    category: 'snack',
    line: 'Gomitas',
    description: 'Gomitas con ingredientes energéticos naturales.',
    ingredients: ['Miel', 'Gelatina natural', 'Vitaminas B'],
    benefits: ['Energía natural', 'Vitalidad', 'Rendimiento'],
    image: '/images/snacks/gomitas-energeticas.png',
    variants: [
      { id: 'v1', weight: 100, unit: 'g', price: 7006 },
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
    image: '/images/snacks/gomitas-aliento.png',
    variants: [
      { id: 'v1', weight: 100, unit: 'g', price: 7006 },
    ],
  },
  {
    id: 'gomitas-calmantes',
    name: 'Gomitas Calmantes',
    category: 'snack',
    line: 'Gomitas',
    description: 'Gomitas naturales para reducir ansiedad y estrés.',
    ingredients: ['Valeriana', 'Pasiflora', 'Gelatina natural'],
    benefits: ['Reduce ansiedad', 'Calma natural', 'Sin somnolencia'],
    image: '/images/snacks/gomitas-calmantes.png',
    variants: [
      { id: 'v1', weight: 100, unit: 'g', price: 7006 },
    ],
  },
  {
    id: 'gomitas-protectoras',
    name: 'Gomitas Protectoras Celulares',
    category: 'snack',
    line: 'Gomitas',
    description: 'Gomitas con antioxidantes para protección celular.',
    ingredients: ['Vitamina E', 'Selenio', 'Gelatina natural'],
    benefits: ['Protección celular', 'Antioxidantes', 'Longevidad'],
    image: '/images/snacks/gomitas-protectoras.png',
    variants: [
      { id: 'v1', weight: 100, unit: 'g', price: 7006 },
    ],
  },
  {
    id: 'gomitas-antioxidantes',
    name: 'Gomitas Antioxidantes',
    category: 'snack',
    line: 'Gomitas',
    description: 'Gomitas ricas en antioxidantes naturales.',
    ingredients: ['Frutos rojos', 'Vitamina C', 'Gelatina natural'],
    benefits: ['Combate radicales libres', 'Sistema inmune', 'Juventud'],
    image: '/images/snacks/gomitas-antioxidantes.png',
    variants: [
      { id: 'v1', weight: 100, unit: 'g', price: 7006 },
    ],
  },
  {
    id: 'gomitas-digestivas',
    name: 'Gomitas Digestivas',
    category: 'snack',
    line: 'Gomitas',
    description: 'Gomitas para mejorar la digestión y salud intestinal.',
    ingredients: ['Jengibre', 'Menta', 'Gelatina natural'],
    benefits: ['Digestión saludable', 'Reduce gases', 'Confort intestinal'],
    image: '/images/snacks/gomitas-digestivas.png',
    variants: [
      { id: 'v1', weight: 100, unit: 'g', price: 7006 },
    ],
  },
];

// MATIFOOD - Compra sin suscripción (todos usan la misma imagen)
export const matifoodProducts: Product[] = [
  {
    id: 'matifood-mix-200',
    name: 'Matifood Mix',
    category: 'matifood',
    description: 'Comida natural cocida mixta: carne, pollo y verduras.',
    ingredients: ['Carne de res', 'Pollo', 'Verduras variadas', 'Suplementos naturales'],
    benefits: ['Nutrición completa', 'Sin conservantes', 'Cocido a baja temperatura'],
    image: '/images/matifood/mix.png',
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
    image: '/images/matifood/mix.png',
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
    image: '/images/matifood/mix.png',
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
    image: '/images/matifood/mix.png',
    variants: [
      { id: 'v1', weight: 200, unit: 'g', price: 2300 },
      { id: 'v2', weight: 500, unit: 'g', price: 4300 },
      { id: 'v3', weight: 1000, unit: 'g', price: 8300 },
    ],
  },
];

// MEMBRESÍAS - Precios actualizados según PDF (todas usan la misma imagen)
export const memberships: Membership[] = [
  {
    id: 'membresia-amigo-fiel',
    name: 'Membresía Amigo Fiel',
    description: 'Nuestra membresía básica perfecta para comenzar con la alimentación natural. Incluye entrega programada y descuentos exclusivos.',
    benefits: [
      '5% OFF en todas las compras de snack',
      'Con tu membresía, tienes la libertad de elegir entre: Cerdo y Pollo. ¡Combínalos como prefieras!',
      '1 Snacks sorpresa mensual',
      'Asesoría nutricional',
      'Acceso a promociones exclusivas',
      'Gratis plan 1 de Fiel Pet'
    ],
    image: '/images/membresias/membresia-combo.png',
    duration: 'Mensual',
    prices: [
      { grams: 100, price: 62161 },
      { grams: 200, price: 76186 },
      { grams: 300, price: 99136 },
      { grams: 400, price: 118528 },
      { grams: 500, price: 135685 },
      { grams: 600, price: 159085 },
      { grams: 700, price: 183835 },
      { grams: 800, price: 195040 },
      { grams: 900, price: 218854 },
      { grams: 1000, price: 259210 },
    ],
  },
  {
    id: 'membresia-guardian-nutritivo',
    name: 'Membresía Guardián Nutritivo',
    description: 'Membresía intermedia con mayores beneficios y productos premium incluidos.',
    benefits: [
      '5% OFF en todas las compras de snack y Pasteleria',
      'Con tu membresía, tienes la libertad de elegir entre: Carne, Pollo y Cerdo. ¡Combínalos como prefieras!',
      'Asesoría nutricional',
      '1 Snacks sorpresa mensuales',
      'Acceso a productos exclusivos',
      'Gratis plan 1 de Fiel Pet',
      '🎂 ¡Torta individual GRATIS en el cumple de tu peludo! 🐾'
    ],
    image: '/images/membresias/membresia-combo.png',
    duration: 'Mensual',
    prices: [
      { grams: 100, price: 69145 },
      { grams: 200, price: 85000 },
      { grams: 300, price: 110095 },
      { grams: 400, price: 127408 },
      { grams: 500, price: 154384 },
      { grams: 600, price: 175309 },
      { grams: 700, price: 202140 },
      { grams: 800, price: 228738 },
      { grams: 900, price: 256405 },
      { grams: 1000, price: 283840 },
    ],
  },
  {
    id: 'membresia-huella-oro',
    name: 'Membresía Huella de Oro',
    description: 'Nuestra membresía premium con todos los beneficios y atención personalizada.',
    benefits: [
      '10% OFF en todas las compras de snack y Pasteleria',
      'Con tu membresía, tienes la libertad de elegir entre: Carne, Pollo, Cerdo y Merluza. ¡Combínalos como prefieras!',
      'Delivery gratis CABA',
      'Asesoría nutricional ',
      '2 Snacks sorpresa mensuales',
      'Acceso VIP a nuevos productos',
      'Gratis plan 2 de Fiel Pet',
      'Torta de cumple GRATIS con tu membresía (Individul)'
    ],
    image: '/images/membresias/membresia-combo.png',
    duration: 'Mensual',
    prices: [
      { grams: 100, price: 75695 },
      { grams: 200, price: 92813 },
      { grams: 300, price: 119273 },
      { grams: 400, price: 141905 },
      { grams: 500, price: 171332 },
      { grams: 600, price: 194482 },
      { grams: 700, price: 223835 },
      { grams: 800, price: 252892 },
      { grams: 900, price: 283087 },
      { grams: 1000, price: 313034 },
    ],
  },
];

// COMBOS - Precios actualizados según PDF (todos usan la misma imagen)
export const combos: Membership[] = [
  {
    id: 'combo-otra-mitad',
    name: 'Combo Mi Otra Mitad',
    description: 'Combo especial con 15 Viandas para que tu perro pruebe toda la variedad.',
    benefits: [
      'Con tu Combo, tienes la libertad de elegir entre: Cerdo, Pollo. ¡Combínalos como prefieras!',
      'Perfecto para probar sabores',
      'Ideal para viajes',
      '5% OFF en todas las compras de snack'
    ],
    image: '/images/combos/membresia-combo.png',
    duration: 'Única compra',
    prices: [
      { grams: 100, price: 36584 },
      { grams: 200, price: 45704 },
      { grams: 300, price: 60666 },
      { grams: 400, price: 73482 },
      { grams: 500, price: 85013 },
      { grams: 600, price: 94380 },
      { grams: 700, price: 109380 },
      { grams: 800, price: 128096 },
      { grams: 900, price: 143986 },
      { grams: 1000, price: 159776 },
    ],
  },
  {
    id: 'combo-probadita',
    name: 'Combo Probadita',
    description: 'Combo de 7 Viandas para que tu perro descubra Matilú.',
    benefits: [
      'Con tu Combo, tienes la libertad de elegir entre: Cerdo, Pollo. ¡Combínalos como prefieras!',
      'Introducción a la alimentación natural',
      'Economico',
      '5% OFF en todas las compras de snack'
    ],
    image: '/images/combos/membresia-combo.png',
    duration: 'Única compra',
    prices: [
      { grams: 100, price: 16580 },
      { grams: 200, price: 20500 },
      { grams: 300, price: 26931 },
      { grams: 400, price: 34159 },
      { grams: 500, price: 41619 },
      { grams: 600, price: 48908 },
      { grams: 700, price: 56564 },
      { grams: 800, price: 64159 },
      { grams: 900, price: 72023 },
      { grams: 1000, price: 79839 },
    ],
  },
];

// Todos los productos juntos
export const allSnacks = [...snacksMiniTreats, ...snacksTiras, ...snacksEspeciales, ...gomitas];
export const allProducts = [...allSnacks, ...matifoodProducts];
