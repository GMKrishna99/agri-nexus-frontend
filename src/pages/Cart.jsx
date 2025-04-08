import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import useCartStore from "@/store/cartStore";
import { toast } from "react-hot-toast";

const Cart = () => {
  const navigate = useNavigate();
  const { items, removeItem, updateQuantity, getTotal, clearCart } =
    useCartStore();

  // Increase Quantity
  const increaseQuantity = (id) => {
    const item = items.find((i) => i.id === id);
    if (item) {
      updateQuantity(id, item.quantity + 1);
    }
  };

  // Decrease Quantity
  const decreaseQuantity = (id) => {
    const item = items.find((i) => i.id === id);
    if (item && item.quantity > 1) {
      updateQuantity(id, item.quantity - 1);
    }
  };

  // Handle Checkout
  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error("Your cart is empty");
      return;
    }
    clearCart();
    toast.success("Order placed successfully!");
    navigate("/order-confirmation");
  };

  const totalPrice = getTotal();

  // Format price to Indian Rupees
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  };

  return (
    <section className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-semibold text-center mb-6">Shopping Cart</h2>

      {items.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-6">
          {/* Cart Items List */}
          <div className="md:col-span-2 space-y-4">
            {items.map((item) => (
              <Card
                key={item.id}
                className="p-4 flex items-center flex-row gap-4"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-md object-cover"
                />

                {/* Name and Quantity Controls */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <p className="text-gray-600">{formatPrice(item.price)}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      <FaMinus size={16} />
                    </Button>
                    <span className="text-lg">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      <FaPlus size={16} />
                    </Button>
                  </div>
                </div>

                {/* Remove Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeItem(item.id)}
                  className="text-red-600 hover:bg-red-100"
                >
                  <FaTrash size={20} />
                </Button>
              </Card>
            ))}
          </div>

          {/* Cart Summary */}
          <Card className="p-6 space-y-4">
            <h3 className="text-xl font-semibold">Order Summary</h3>
            <Separator />
            <div className="flex justify-between text-lg">
              <span>Total</span>
              <span className="font-bold">{formatPrice(totalPrice)}</span>
            </div>
            <Button
              className="w-full bg-green-600 hover:bg-green-700"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </Button>
          </Card>
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-6">Your cart is empty.</p>
      )}
    </section>
  );
};

export default Cart;
