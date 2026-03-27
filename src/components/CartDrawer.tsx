import { Plus, Minus, ShoppingBag, Trash2, ArrowRight, Dog } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useCartStore } from '@/store/cartStore';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCartStore();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleCheckout = () => {
    // Simulate checkout - in a real app, this would redirect to payment
    const message = `Hola! Quiero hacer un pedido de Matilú:\n\n${items
      .map(
        (item) =>
          `- ${item.name} x${item.quantity}: ${formatPrice(
            item.variant.price * item.quantity
          )}`
      )
      .join('\n')}\n\nTotal: ${formatPrice(getTotalPrice())}`;

    window.open(
      `https://wa.me/5491151774724?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 text-[#002B5C]">
            <ShoppingBag className="w-6 h-6" />
            Tu carrito
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Dog className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-[#002B5C] mb-2">
              Tu carrito está vacío
            </h3>
            <p className="text-gray-500 mb-6">
              Agrega algunos productos para tu perro
            </p>
            <button onClick={onClose} className="btn-matilu-primary">
              Ver productos
            </button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 bg-gray-50 rounded-xl"
                >
                  {/* Product Image */}
                  <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Dog className="w-10 h-10 text-gray-300" />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-[#002B5C] truncate">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-500 capitalize">
                      {item.category}
                    </p>
                    <p className="font-medium text-[#007bff] mt-1">
                      {formatPrice(item.variant.price)}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-7 h-7 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-medium w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-7 h-7 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t pt-4 space-y-4">
              {/* Subtotal */}
              <div className="flex items-center justify-between text-lg">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-bold text-[#002B5C]">
                  {formatPrice(getTotalPrice())}
                </span>
              </div>

              {/* Shipping Note */}
              <p className="text-sm text-gray-500 text-center">
                Envío gratis en compras con membresía
              </p>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                className="w-full btn-matilu-primary flex items-center justify-center gap-2"
              >
                Finalizar pedido por WhatsApp
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Clear Cart */}
              <button
                onClick={clearCart}
                className="w-full text-gray-500 text-sm hover:text-red-500 transition-colors"
              >
                Vaciar carrito
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
