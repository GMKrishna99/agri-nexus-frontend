import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const CartSheet = () => {
  const navigate = useNavigate();

  // Initialize Cart with Default Items
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    return storedCart && storedCart.length > 0
      ? storedCart
      : [
          {
            id: 1,
            name: "Organic Fertilizer",
            price: 15.99,
            quantity: 1,
            image: "/images/fertilizer.jpg",
          },
          {
            id: 2,
            name: "High-Quality Seeds",
            price: 8.49,
            quantity: 1,
            image: "/images/seeds.jpg",
          },
        ];
  });

  const [isOpen, setIsOpen] = useState(false);

  // Update LocalStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Increase Quantity
  const increaseQuantity = (id) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease Quantity
  const decreaseQuantity = (id) => {
    setCartItems((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove Item
  const removeItem = (id) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Calculate Total Price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Handle Checkout
  const handleCheckout = () => {
    setIsOpen(false); // Close sheet
    setTimeout(() => navigate("/cart"), 300); // Navigate after delay
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          onClick={() => setIsOpen(true)}
          className="relative cursor-pointer"
        >
          <HiOutlineShoppingCart size={24} className="text-white" />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cartItems.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-96 p-6">
        <h3 className="text-xl font-semibold">Shopping Cart</h3>
        {cartItems.length > 0 ? (
          <div className="mt-4 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="p-4 flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-md object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      <FaMinus size={14} />
                    </Button>
                    <span className="text-lg">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      <FaPlus size={14} />
                    </Button>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeItem(item.id)}
                  className="text-red-600"
                >
                  <FaTrash size={18} />
                </Button>
              </Card>
            ))}
            <div className="flex justify-between text-lg font-semibold mt-4">
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <Button
              className="w-full bg-green-600 hover:bg-green-700 mt-4"
              onClick={handleCheckout}
            >
              Checkout
            </Button>
          </div>
        ) : (
          <p className="text-gray-500 mt-4">Your cart is empty.</p>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
