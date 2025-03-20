import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Truck } from "lucide-react";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const [deliveryDate, setDeliveryDate] = useState("");

  useEffect(() => {
    // Simulate delivery date (3-5 days from now)
    const today = new Date();
    const estimatedDate = new Date();
    estimatedDate.setDate(today.getDate() + Math.floor(Math.random() * 3) + 3);

    setDeliveryDate(estimatedDate.toDateString());
  }, []);

  return (
    <div className="p-8 bg-white shadow-lg rounded-2xl max-w-md mx-auto border border-gray-200 my-20 text-center">
      <CheckCircle className="text-green-600 mx-auto" size={60} />
      <h2 className="text-2xl font-semibold text-gray-800 mt-4">
        Order Confirmed!
      </h2>
      <p className="text-gray-600 mt-2">
        Thank you for your purchase. Your order is being processed.
      </p>

      <div className="mt-6 p-4 border border-gray-300 rounded-lg bg-gray-50">
        <Truck className="text-blue-500 mx-auto" size={40} />
        <p className="text-gray-800 mt-2 font-medium">Estimated Delivery:</p>
        <p className="text-lg font-semibold text-green-600">{deliveryDate}</p>
      </div>

      <Button
        className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-lg"
        onClick={() => navigate("/")}
      >
        Back to Home
      </Button>
    </div>
  );
};

export default OrderConfirmation;
