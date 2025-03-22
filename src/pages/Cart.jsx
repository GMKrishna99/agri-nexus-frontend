import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import OrganicF from "@/assets/ViewAllProducts/orgamic Fertilizer.webp";
import HighQuality from "@/assets/ViewAllProducts/ihgh quality seeds.webp";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Organic Fertilizer",
      price: 40.99,
      quantity: 1, // Added quantity field
      image: OrganicF, // Use imported image directly
    },
    {
      id: 2,
      name: "High-Quality Seeds",
      price: 88.49,
      quantity: 2, // Added quantity field
      image: HighQuality, // Use imported image directly
    },
  ]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Increase Quantity
  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease Quantity
  const decreaseQuantity = (id) => {
    setCartItems(
      (prevItems) =>
        prevItems
          .map((item) =>
            item.id === id && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0) // Remove item if quantity reaches 0
    );
  };

  // Remove Item
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calculate Total Price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Handle Checkout
  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <section className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-semibold text-center mb-6">Shopping Cart</h2>

      {cartItems.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-6">
          {/* Cart Items List */}
          <div className="md:col-span-2 space-y-4">
            {cartItems.map((item) => {
              console.log(item.image); // Debugging: Check image paths
              return (
                <Card
                  key={item.id}
                  className="p-4 flex items-center flex-row gap-4"
                >
                  {/* Image */}
                  <img
                    src={item.image} // Use imported image directly
                    alt={item.name}
                    className="w-20 h-20 rounded-md object-cover"
                  />

                  {/* Name and Quantity Controls */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <p className="text-gray-600">₹{item.price.toFixed(2)}</p>
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
              );
            })}
          </div>

          {/* Cart Summary */}
          <Card className="p-6 space-y-4">
            <h3 className="text-xl font-semibold">Order Summary</h3>
            <Separator />
            <div className="flex justify-between text-lg">
              <span>Total</span>
              <span className="font-bold">₹{totalPrice.toFixed(2)}</span>
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
