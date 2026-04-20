import { useState } from 'react';
import { Search, Package, Crown, ShoppingBag, Plus, Minus, Check, Bone, Sparkles, Star } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { allSnacks, matifoodProducts, memberships, combos } from '@/data/products';
import { useCartStore } from '@/store/cartStore';
import type { Product, Membership, ProductVariant } from '@/types';

interface CatalogSectionProps {
  onCartClick: () => void;
}

type CatalogTab = 'snacks' | 'membresias' | 'suelto';

export function CatalogSection({  }: CatalogSectionProps) {
  const [activeTab, setActiveTab] = useState<CatalogTab>('snacks');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedMembership, setSelectedMembership] = useState<Membership | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [snackFilter, setSnackFilter] = useState<string>('todos');
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    if (!selectedProduct || !selectedVariant) return;

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
        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as CatalogTab)} className="w-full">
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
            </TabsTrigger>
          </TabsList>

          {/* Snacks Tab */}
          <TabsContent value="snacks" className="mt-0">
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar snacks..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input-matilu pl-12"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-matilu">
                {snackCategories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => setSnackFilter(cat.value)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                      snackFilter === cat.value
                        ? 'bg-[#002B5C] text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {cat.icon}
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Snacks Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredSnacks.map((snack) => (
                <div
                  key={snack.id}
                  className="card-matilu group cursor-pointer"
                  onClick={() => {
                    setSelectedProduct(snack);
                    setSelectedVariant(snack.variants[0]);
                    setQuantity(1);
                  }}
                >
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                    <img 
                      src={snack.image} 
                      alt={snack.name}
                      className="absolute inset-0 w-full h-full object-contain p-4 group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="bg-[#00c8ff] text-[#002B5C] text-xs font-bold px-2 py-1 rounded-full">
                        {snack.variants.length} opciones
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-[#007bff] font-medium uppercase tracking-wide">
                      {snack.line}
                    </span>
                    <h3 className="font-semibold text-[#002B5C] mt-1 line-clamp-2">
                      {snack.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                      {snack.description}
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="price-matilu">
                        Desde {formatPrice(snack.variants[0].price)}
                      </span>
                      <button className="w-10 h-10 bg-[#002B5C] text-white rounded-full flex items-center justify-center hover:bg-[#007bff] transition-colors">
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Membresías Tab */}
          <TabsContent value="membresias" className="mt-0">
            <div className="grid md:grid-cols-3 gap-6">
              {memberships.map((membership) => (
                <div
                  key={membership.id}
                  className="card-matilu relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#00c8ff]/20 to-transparent rounded-bl-full"></div>
                  <div className="p-6">
                    {/* IMAGEN DE MEMBRESÍA */}
                    <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden mb-4">
                      <img 
                        src={membership.image} 
                        alt={membership.name}
                        className="w-full h-full object-contain p-4"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#002B5C] mb-2">
                      {membership.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {membership.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {membership.benefits.slice(0, 4).map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs text-gray-500">Desde</span>
                        <p className="price-matilu">
                          {formatPrice(membership.prices[0].price)}
                        </p>
                      </div>
                      <button
                        onClick={() => setSelectedMembership(membership)}
                        className="btn-matilu-primary text-sm"
                      >
                        Ver planes
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Combos Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-[#002B5C] mb-6 text-center">
                Combos Especiales
              </h3>
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {combos.map((combo) => (
                  <div
                    key={combo.id}
                    className="card-matilu relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#00c8ff] to-[#007bff]"></div>
                    
                    {/* IMAGEN DEL COMBO */}
                    <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                      <img 
                        src={combo.image} 
                        alt={combo.name}
                        className="w-full h-full object-contain p-4"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#00c8ff] to-[#007bff] rounded-xl flex items-center justify-center">
                          <Package className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#002B5C]">{combo.name}</h4>
                          <span className="text-xs text-gray-500">{combo.duration}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">
                        {combo.description}
                      </p>
                      <button
                        onClick={() => setSelectedMembership(combo)}
                        className="w-full btn-matilu-secondary text-sm"
                      >
                        Ver opciones
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Sin Suscripción Tab */}
          <TabsContent value="suelto" className="mt-0">
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#002B5C] mb-2">
                  Matifood - Compra Individual
                </h3>
                <p className="text-gray-600">
                  Compra nuestros productos sin compromiso de suscripción
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {matifoodProducts.map((product) => (
                  <div
                    key={product.id}
                    className="card-matilu group cursor-pointer"
                    onClick={() => {
                      setSelectedProduct(product);
                      setSelectedVariant(product.variants[0]);
                      setQuantity(1);
                    }}
                  >
                    {/* IMAGEN DE MATIFOOD */}
                    <div className="aspect-square bg-gradient-to-br from-orange-50 to-orange-100 relative overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-contain p-4 group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-[#002B5C]">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between mt-4">
                        <span className="price-matilu text-lg">
                          {formatPrice(product.variants[0].price)}
                        </span>
                        <button className="w-10 h-10 bg-[#002B5C] text-white rounded-full flex items-center justify-center hover:bg-[#007bff] transition-colors">
                          <Plus className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Product Detail Dialog */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-[#002B5C]">
                  {selectedProduct.name}
                </DialogTitle>
              </DialogHeader>
              
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                {/* Product Image */}
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center overflow-hidden">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name}
                    className="w-full h-full object-contain p-6"
                  />
                </div>

                {/* Product Info */}
                <div>
                  <span className="badge-matilu mb-3 inline-block">
                    {selectedProduct.line || selectedProduct.category}
                  </span>
                  
                  <p className="text-gray-600 mb-4">
                    {selectedProduct.description}
                  </p>

                  {/* Ingredients */}
                  {selectedProduct.ingredients && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-[#002B5C] mb-2">Ingredientes:</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.ingredients.map((ing, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Benefits */}
                  {selectedProduct.benefits && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-[#002B5C] mb-2">Beneficios:</h4>
                      <ul className="space-y-1">
                        {selectedProduct.benefits.map((ben, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <Check className="w-4 h-4 text-green-500" />
                            {ben}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Variant Selection */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#002B5C] mb-2">Seleccionar tamaño:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.variants.map((variant) => (
                        <button
                          key={variant.id}
                          onClick={() => setSelectedVariant(variant)}
                          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                            selectedVariant?.id === variant.id
                              ? 'bg-[#002B5C] text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {variant.weight}{variant.unit}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price and Quantity */}
                  {selectedVariant && (
                    <div className="flex items-center justify-between mb-4">
                      <span className="price-matilu text-2xl">
                        {formatPrice(selectedVariant.price)}
                      </span>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-semibold w-8 text-center">{quantity}</span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Add to Cart Button */}
                  <button
                    onClick={handleAddToCart}
                    disabled={!selectedVariant}
                    className="w-full btn-matilu-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Membership Detail Dialog */}
      <Dialog open={!!selectedMembership} onOpenChange={() => setSelectedMembership(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedMembership && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-[#002B5C]">
                  {selectedMembership.name}
                </DialogTitle>
              </DialogHeader>
              
              <div className="mt-4">
                {/* IMAGEN DE MEMBRESÍA/COMBO EN EL DIALOG */}
                <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden mb-6">
                  <img 
                    src={selectedMembership.image} 
                    alt={selectedMembership.name}
                    className="w-full h-full object-contain p-6"
                  />
                </div>

                <p className="text-gray-600 mb-6">
                  {selectedMembership.description}
                </p>

                {/* Benefits */}
                <div className="bg-[#f8f9fa] rounded-2xl p-6 mb-6">
                  <h4 className="font-semibold text-[#002B5C] mb-4">Beneficios incluidos:</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {selectedMembership.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Table */}
                <div>
                  <h4 className="font-semibold text-[#002B5C] mb-4">Selecciona la cantidad:</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-[#002B5C] text-white">
                          <th className="px-4 py-3 text-left rounded-tl-xl">Gramos</th>
                          <th className="px-4 py-3 text-right">Precio</th>
                          <th className="px-4 py-3 text-right rounded-tr-xl">Acción</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedMembership.prices.map((price, idx) => (
                          <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="px-4 py-3 font-medium">{price.grams}g</td>
                            <td className="px-4 py-3 text-right font-bold text-[#002B5C]">
                              {formatPrice(price.price)}
                            </td>
                            <td className="px-4 py-3 text-right">
                              <button
                                onClick={() => handleAddMembershipToCart(selectedMembership, price.grams, price.price)}
                                className="px-4 py-2 bg-[#00c8ff] text-[#002B5C] rounded-lg text-sm font-medium hover:bg-[#007bff] hover:text-white transition-colors"
                              >
                                Suscribirme
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}