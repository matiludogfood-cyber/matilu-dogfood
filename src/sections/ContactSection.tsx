import { useState } from 'react';
import { Search, Package, Crown, ShoppingBag, Plus, Minus, Check, Bone, Sparkles, Star } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { allSnacks, matifoodProducts, memberships, combos } from '@/data/products';
import { useCartStore } from '@/store/cartStore';
import type { Product, Membership, ProductVariant } from '@/types';

// CONFIGURACIÓN DE WHATSAPP
const WHATSAPP_NUMBER = '5491151774724';
const WHATSAPP_MESSAGE = 'Hola Matilú! 👋 Vi su página y quiero conocer los planes de alimentación para mi perro. 🐶';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// 🎯 FUNCIÓN DE TRACKING
const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, params);
  }
  if (typeof fbq !== 'undefined') {
    fbq('track', eventName, params);
  }
};

interface CatalogSectionProps {
  onCartClick: () => void;
}

type CatalogTab = 'snacks' | 'membresias' | 'suelto';

export function CatalogSection({ onCartClick }: CatalogSectionProps) {
  const [activeTab, setActiveTab] = useState<CatalogTab>('snacks');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedMembership, setSelectedMembership] = useState<Membership | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [snackFilter, setSnackFilter] = useState<string>('todos');
  const addItem = useCartStore((state) => state.addItem);

  // 🎯 EVENTO: Cambio de pestaña en el catálogo
  const handleTabChange = (tab: CatalogTab) => {
    trackEvent('view_catalog_tab', {
      event_category: 'navegacion',
      event_label: tab,
    });
    setActiveTab(tab);
  };

  const handleAddToCart = () => {
    if (!selectedProduct || !selectedVariant) return;

    // 🎯 EVENTO: Producto agregado al carrito
    trackEvent('add_to_cart', {
      event_category: 'ecommerce',
      event_label: selectedProduct.name,
      value: selectedVariant.price * quantity,
      currency: 'ARS',
      items: [{
        item_name: selectedProduct.name,
        item_category: selectedProduct.category,
        price: selectedVariant.price,
        quantity: quantity,
      }],
    });

    if (typeof fbq !== 'undefined') {
      fbq('track', 'AddToCart', {
        content_ids: [selectedProduct.id],
        content_type: 'product',
        value: selectedVariant.price * quantity,
        currency: 'ARS',
      });
    }

    addItem({
      id: `${selectedProduct.id}-${selectedVariant.id}`,
      productId: selectedProduct.id,
      name: `${selectedProduct.name} - ${selectedVariant.weight}${selectedVariant.unit}`,
      category: selectedProduct.category,
      variant: selectedVariant,
      quantity,
      image: selectedProduct.image,
    });

    setSelectedProduct(null);
    setSelectedVariant(null);
    setQuantity(1);
  };

  const handleAddMembershipToCart = (membership: Membership, grams: number, price: number) => {
    // 🎯 EVENTO: Membresía agregada al carrito
    trackEvent('add_to_cart', {
      event_category: 'ecommerce',
      event_label: membership.name,
      value: price,
      currency: 'ARS',
      items: [{
        item_name: membership.name,
        item_category: 'membresia',
        price: price,
        quantity: 1,
      }],
    });

    if (typeof fbq !== 'undefined') {
      fbq('track', 'AddToCart', {
        content_ids: [membership.id],
        content_type: 'product',
        value: price,
        currency: 'ARS',
      });
    }

    addItem({
      id: `${membership.id}-${grams}`,
      productId: membership.id,
      name: `${membership.name} - ${grams}g`,
      category: 'membresia',
      variant: {
        id: `${grams}g`,
        weight: grams,
        unit: 'g',
        price: price,
      },
      quantity: 1,
      image: membership.image,
    });

    setSelectedMembership(null);
  };

  // 🎯 EVENTO: Click en producto (ver detalle)
  const handleProductClick = (product: Product) => {
    trackEvent('view_item', {
      event_category: 'ecommerce',
      event_label: product.name,
      value: product.variants[0]?.price,
      currency: 'ARS',
    });
    setSelectedProduct(product);
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
  };

  // 🎯 EVENTO: Click en membresía (ver detalle)
  const handleMembershipClick = (membership: Membership) => {
    trackEvent('view_item', {
      event_category: 'ecommerce',
      event_label: membership.name,
      value: membership.prices[0]?.price,
      currency: 'ARS',
    });
    setSelectedMembership(membership);
  };

  // 🎯 EVENTO: Click en WhatsApp desde el catálogo
  const handleWhatsAppClick = () => {
    trackEvent('click_whatsapp', {
      event_category: 'engagement',
      event_label: 'catalogo_whatsapp_consulta',
    });
    if (typeof fbq !== 'undefined') {
      fbq('track', 'Contact');
    }
  };

  const filteredSnacks = allSnacks.filter((snack) => {
    const matchesSearch = snack.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = snackFilter === 'todos' || snack.line?.toLowerCase() === snackFilter.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  const snackCategories = [
    { value: 'todos', label: 'Todos', icon: <Package className="w-4 h-4" /> },
    { value: 'mini treats', label: 'Mini Treats', icon: <Star className="w-4 h-4" /> },
    { value: 'tiras', label: 'Tiras', icon: <Bone className="w-4 h-4" /> },
    { value: 'especiales', label: 'Especiales', icon: <Sparkles className="w-4 h-4" /> },
    { value: 'gomitas', label: 'Gomitas', icon: <Package className="w-4 h-4" /> },
    { value: 'gelatinas', label: 'Gelatinas', icon: <Package className="w-4 h-4" /> },
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="section-matilu bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="badge-matilu mb-4 inline-block">Nuestros Productos</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mb-4">
            Catálogo Matilú
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra línea completa de alimentación natural para tu perro. 
            Desde snacks deshidratados hasta membresías con beneficios exclusivos.
          </p>
        </div>

        {/* Main Tabs */}
        <Tabs value={activeTab} onValueChange={(v) => handleTabChange(v as CatalogTab)} className="w-full">
          <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-3 mb-8 bg-white p-2 rounded-2xl shadow-sm">
            <TabsTrigger 
              value="snacks" 
              className="flex items-center justify-center gap-2 py-3 rounded-xl data-[state=active]:bg-[#002B5C] data-[state=active]:text-white transition-all"
            >
              <Bone className="w-4 h-4" />
              <span className="hidden sm:inline">Snacks</span>
            </TabsTrigger>
            <TabsTrigger 
              value="membresias"
              className="flex items-center justify-center gap-2 py-3 rounded-xl data-[state=active]:bg-[#002B5C] data-[state=active]:text-white transition-all"
            >
              <Crown className="w-4 h-4" />
              <span className="hidden sm:inline">Membresías</span>
            </TabsTrigger>
            <TabsTrigger 
              value="suelto"
              className="flex items-center justify-center gap-2 py-3 rounded-xl data-[state=active]:bg-[#002B5C] data-[state=active]:text-white transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Sin Suscripción</span>
            </TabsTrigger