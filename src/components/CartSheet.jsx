import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaTrash } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

const CartSheet = ({ cartItems, removeItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsOpen(false); // Close sheet
    setTimeout(() => navigate("/cart"), 300); // Navigate after delay
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button onClick={() => setIsOpen(true)}>
          <HiOutlineShoppingCart
            size={24}
            className="text-white cursor-pointer"
          />
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
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeItem(item.id)}
                >
                  <FaTrash className="text-red-600" size={18} />
                </Button>
              </Card>
            ))}
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
