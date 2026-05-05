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