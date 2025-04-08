// /

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { FiTrash2, FiPlus, FiMinus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import useCartStore from "@/store/cartStore";
import { toast } from "react-hot-toast";
import {
  FaTractor,
  FaSeedling,
  FaFlask,
  FaCalendarAlt,
  FaPercentage,
} from "react-icons/fa";

const formatPrice = (price) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(price);
};

const getItemIcon = (type) => {
  switch (type) {
    case "vehicle":
    case "machine":
    case "tool":
      return <FaTractor className="w-4 h-4" />;
    case "seed":
    case "crop":
      return <FaSeedling className="w-4 h-4" />;
    case "fertilizer":
    case "pesticide":
      return <FaFlask className="w-4 h-4" />;
    default:
      return null;
  }
};

const ItemDetails = ({ item }) => {
  if (item.type === "seed" || item.type === "crop") {
    return (
      <div className="mt-1 space-y-1 p-6">
        <div className="flex items-center text-xs text-gray-500">
          <FaPercentage className="mr-1" />
          <span>Germination Rate: {item.germinationRate || "N/A"}</span>
        </div>
        <div className="flex items-center text-xs text-gray-500">
          <FaCalendarAlt className="mr-1" />
          <span>Shelf Life: {item.shelfLife || "N/A"}</span>
        </div>
        <div className="text-xs text-gray-500">Unit: {item.unit || "kg"}</div>
      </div>
    );
  }
  return null;
};

export const CartSheet = () => {
  const navigate = useNavigate();
  const {
    items,
    removeItem,
    updateQuantity,
    getTotal,
    isCartOpen,
    setIsCartOpen,
  } = useCartStore();

  const handleQuantityChange = (itemId, change) => {
    const item = items.find((i) => i.id === itemId);
    if (item) {
      const newQuantity = item.quantity + change;
      if (newQuantity > 0) {
        updateQuantity(itemId, newQuantity);
      }
    }
  };

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
    toast.success("Item removed from cart");
  };

  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error("Your cart is empty");
      return;
    }
    setIsCartOpen(false);
    navigate("/cart");
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-lg p-6">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>

        <div className="mt-6">
          {items.length === 0 ? (
            <div className="text-center text-gray-500">Your cart is empty</div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-4"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <div className="flex items-center space-x-2">
                        {getItemIcon(item.type)}
                        <h3 className="font-medium">{item.name}</h3>
                      </div>
                      <p className="text-sm text-gray-500">
                        {formatPrice(item.price)}
                      </p>
                      <p className="text-xs text-gray-400 capitalize">
                        {item.type}
                      </p>
                      <ItemDetails item={item} />
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <FiMinus className="w-4 h-4" />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <FiPlus className="w-4 h-4" />
                      </button>
                    </div>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="p-1 hover:bg-gray-100 rounded text-red-500"
                    >
                      <FiTrash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="mt-6 space-y-4">
            <div className="flex justify-between text-lg font-medium">
              <span>Total:</span>
              <span>{formatPrice(getTotal())}</span>
            </div>
            <Button
              onClick={handleCheckout}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              Proceed to Checkout
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
