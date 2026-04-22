export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "alimentacion-natural-perros",
    title: "¿Por qué elegir alimentación natural para tu perro?",
    excerpt: "Descubre los beneficios de una dieta real y cómo puede mejorar la salud y longevidad de tu mascota.",
    content: `
      <p>La alimentación natural para perros se ha convertido en una tendencia creciente entre los dueños conscientes de la salud de sus mascotas. A diferencia de los alimentos industriales tradicionales, la comida natural utiliza ingredientes frescos y reconocibles.</p>
      
      <h2>Beneficios clave de la alimentación natural</h2>
      
      <p><strong>1. Mejor digestión:</strong> Los ingredientes frescos son más fáciles de digerir para tu perro, lo que se traduce en menos problemas estomacales y heces más firmes.</p>
      
      <p><strong>2. Pelaje brillante:</strong> Los ácidos grasos omega-3 y omega-6 presentes en carnes frescas y pescados mejoran notablemente la calidad del pelaje.</p>
      
      <p><strong>3. Más energía:</strong> Sin rellenos ni subproductos de baja calidad, tu perro obtiene energía real y sostenida.</p>
      
      <p><strong>4. Menos alergias:</strong> Al eliminar conservantes artificiales y colorantes, muchos perros reducen sus problemas de piel y alergias.</p>
      
      <h2>¿Cómo empezar?</h2>
      
      <p>La transición debe ser gradual. Mezcla el 25% de comida natural con el 75% de su alimento actual durante 3-4 días, luego aumenta a 50/50, y finalmente al 100% de comida natural.</p>
      
      <p>En <strong>Matilú Dog Food</strong> elaboramos cada receta pensando en el bienestar real de tu perro, con ingredientes que puedes reconocer y confiar.</p>
    `,
    category: "Nutrición",
    author: "Equipo Matilú",
    date: "15 Abril 2026",
    readTime: "5 min",
    image: "/images/blog/alimentacion-natural.jpg",
    tags: ["nutrición", "salud", "natural"]
  },
  {
    id: 2,
    slug: "snacks-saludables-perros",
    title: "5 snacks saludables que tu perro amará",
    excerpt: "Premia a tu mascota sin culpa con estas opciones nutritivas y deliciosas hechas en casa.",
    content: `
      <p>Los snacks no tienen que ser sinónimo de comida chatarra para perros. Con los ingredientes correctos, pueden ser una excelente fuente de nutrientes adicionales.</p>
      
      <h2>Top 5 snacks recomendados</h2>
      
      <p><strong>1. Zanahorias deshidratadas:</strong> Bajas en calorías, altas en fibra y vitamina A. Ideales para perros con sobrepeso.</p>
      
      <p><strong>2. Caldo de huesos:</strong> Rico en colágeno y minerales. Ayuda a la salud articular y digestiva. Puedes congelarlo en moldes de hielo.</p>
      
      <p><strong>3. Hígado deshidratado:</strong> Alto contenido de hierro y vitaminas del grupo B. Un superalimento en pequeñas cantidades.</p>
      
      <p><strong>4. Manzanas sin semillas:</strong> Fuente de fibra y vitaminas. Elimina las semillas ya que contienen cianuro en trazas.</p>
      
      <p><strong>5. Gomitas naturales:</strong> Como nuestras <strong>Gummy Treats Matilú</strong>, elaboradas con ingredientes reales sin químicos.</p>
      
      <h2>¿Cuántos snacks al día?</h2>
      
      <p>Los snacks no deben superar el 10% de la ingesta calórica diaria de tu perro. Siempre prioriza calidad sobre cantidad.</p>
    `,
    category: "Snacks",
    author: "Equipo Matilú",
    date: "10 Abril 2026",
    readTime: "4 min",
    image: "/images/blog/snacks-saludables.jpg",
    tags: ["snacks", "recetas", "premios"]
  },
  {
    id: 3,
    slug: "coccion-baja-temperatura",
    title: "La magia de la cocción a baja temperatura",
    excerpt: "Conoce por qué este método preserva más nutrientes y cómo lo aplicamos en Matilú.",
    content: `
      <p>La cocción a baja temperatura, también conocida como cocción lenta o sous-vide, es un método que cocina los alimentos entre 60°C y 85°C durante períodos prolongados.</p>
      
      <h2>Ventajas sobre la cocción tradicional</h2>
      
      <p><strong>Conservación de vitaminas:</strong> Las vitaminas termolábiles como la C y el complejo B se degradan a altas temperaturas. La cocción lenta las preserva hasta en un 40% más.</p>
      
      <p><strong>Proteínas intactas:</strong> Las proteínas no se desnaturalizan excesivamente, manteniendo su valor biológico y digestibilidad.</p>
      
      <p><strong>Sabor natural:</strong> Los jugos y nutrientes no se evaporan, concentrando el sabor real de cada ingrediente.</p>
      
      <p><strong>Textura perfecta:</strong> La carne queda jugosa y tierna, mucho más apetecible para los perros exigentes.</p>
      
      <h2>El proceso Matilú</h2>
      
      <p>En nuestra cocina, cada batch se cocina a temperatura controlada durante horas, monitoreando constantemente para garantizar la máxima calidad nutricional. Es como cocinar en casa, pero con precisión profesional.</p>
    `,
    category: "Proceso",
    author: "Equipo Matilú",
    date: "5 Abril 2026",
    readTime: "6 min",
    image: "/images/blog/coccion-lenta.jpg",
    tags: ["proceso", "nutrición", "calidad"]
  },
  {
    id: 4,
    slug: "perros-senior-nutricion",
    title: "Nutrición especial para perros senior",
    excerpt: "Guía completa para adaptar la dieta de tu perro mayor y mantenerlo activo y saludable.",
    content: `
      <p>A partir de los 7 años, los perros entran en su etapa senior y sus necesidades nutricionales cambian significativamente.</p>
      
      <h2>Cambios metabólicos</h2>
      
      <p><strong>Menor actividad:</strong> Requieren menos calorías para evitar el sobrepeso, que agrava problemas articulares.</p>
      
      <p><strong>Músculos:</strong> Necesitan más proteína de alta calidad para mantener la masa muscular que tiende a perderse.</p>
      
      <p><strong>Articulaciones:</strong> Suplementos naturales como glucosamina y condroitina son esenciales.</p>
      
      <h2>Ingredientes recomendados</h2>
      
      <ul>
        <li>Pescados azules (omega-3 antiinflamatorio)</li>
        <li>Verduras de hoja verde (antioxidantes)</li>
        <li>Caldo de huesos (colágeno natural)</li>
        <li>Batatas (fibra y energía lenta)</li>
      </ul>
      
      <p>En Matilú ofrecemos fórmulas específicas adaptadas a cada etapa de vida, porque un perro senior merece cuidados senior.</p>
    `,
    category: "Salud",
    author: "Equipo Matilú",
    date: "28 Marzo 2026",
    readTime: "7 min",
    image: "/images/blog/perro-senior.jpg",
    tags: ["senior", "salud", "etapas de vida"]
  },
  {
    id: 5,
    slug: "alergias-alimentarias-perros",
    title: "Identificando alergias alimentarias en perros",
    excerpt: "Señales de alerta y cómo realizar una dieta de eliminación efectiva.",
    content: `
      <p>Las alergias alimentarias afectan al 10% de los perros y pueden manifestarse de múltiples formas, no solo digestivas.</p>
      
      <h2>Síntomas comunes</h2>
      
      <p><strong>Cutáneos:</strong> Comezón excesiva, orejas rojas, caída de pelo, hot spots.</p>
      
      <p><strong>Digestivos:</strong> Vómitos, diarrea crónica, gases frecuentes.</p>
      
      <p><strong>Conductuales:</strong> Lamido compulsivo de patas, inquietud.</p>
      
      <h2>Alérgenos más frecuentes</h2>
      
      <p>Los culpables más comunes son: trigo, soja, maíz, lácteos y ciertas proteínas como el pollo en algunos casos.</p>
      
      <h2>Dieta de eliminación</h2>
      
      <p>Consiste en alimentar a tu perro con una proteína y un carbohidrato nuevos durante 8-12 semanas. Si los síntomas mejoran, se reintroducen ingredientes uno por uno para identificar al culpable.</p>
      
      <p>Nuestras recetas <strong>Matilú</strong> son ideales para este proceso, ya que utilizamos ingredientes mínimos y de máxima calidad, sin rellenos ni aditivos que compliquen la identificación.</p>
    `,
    category: "Salud",
    author: "Equipo Matilú",
    date: "20 Marzo 2026",
    readTime: "8 min",
    image: "/images/blog/alergias-perros.jpg",
    tags: ["alergias", "salud", "diagnóstico"]
  },
  {
    id: 6,
    slug: "razas-pequenas-nutricion",
    title: "Nutrición específica para razas pequeñas",
    excerpt: "Los chiquitos tienen necesidades grandes: metabolismo acelerado y requerimientos únicos.",
    content: `
      <p>Los perros de razas pequeñas y toy tienen un metabolismo hasta un 50% más rápido que los de razas grandes, lo que significa que necesitan más calorías por kilo de peso corporal.</p>
      
      <h2>Necesidades específicas</h2>
      
      <p><strong>Comidas frecuentes:</strong> Requieren 3-4 comidas al día para mantener estable su azúcar en sangre.</p>
      
      <p><strong>Kibble pequeño:</strong> La textura y tamaño deben adaptarse a su mandíbula diminuta.</p>
      
      <p><strong>Calorías concentradas:</strong> Necesitan alimentos densos en nutrientes, no en volumen.</p>
      
      <h2>Problemas comunes a prevenir</h2>
      
      <ul>
        <li>Hipoglucemia (bajo azúcar)</li>
        <li>Problemas dentales (tartaro)</li>
        <li>Sobrepeso por snacks excesivos</li>
        <li>Colapso traqueal en algunas razas</li>
      </ul>
      
      <p>Nuestras porciones <strong>Matilú</strong> para razas pequeñas están perfectamente balanceadas para mantener a tu pequeño compañero saludable y lleno de energía.</p>
    `,
    category: "Nutrición",
    author: "Equipo Matilú",
    date: "15 Marzo 2026",
    readTime: "5 min",
    image: "/images/blog/razas-pequenas.jpg",
    tags: ["razas pequeñas", "nutrición", "cachorros"]
  }
];

export const categories = [
  { name: "Nutrición", count: 3 },
  { name: "Salud", count: 2 },
  { name: "Snacks", count: 1 },
  { name: "Proceso", count: 1 },
  { name: "Consejos", count: 0 }
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getRelatedPosts = (currentId: number, limit: number = 3): BlogPost[] => {
  return blogPosts
    .filter(post => post.id !== currentId)
    .slice(0, limit);
};