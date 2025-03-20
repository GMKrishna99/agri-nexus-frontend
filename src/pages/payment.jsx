import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "react-hot-toast";
import { Loader2, CheckCircle } from "lucide-react";

const Payment = () => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);

  const handlePayment = async () => {
    setIsDialogOpen(true);
    setIsProcessing(true);

    // Simulate payment delay
    setTimeout(() => {
      setIsPaymentSuccess(true);
      toast.success("Payment successful!", {
        icon: <CheckCircle className="text-green-500" />,
      });

      setTimeout(() => {
        setIsDialogOpen(false);
        navigate("/order-confirmation");
      }, 1500);
    }, 2000);
  };

  return (
    <div className="p-8 bg-white shadow-lg rounded-2xl max-w-md mx-auto border border-gray-200 m-40">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Secure Payment
      </h2>

      <div className="flex flex-col items-center text-gray-600">
        <p className="text-sm mb-2">
          For demo purposes, no real payment is processed.
        </p>
        <img
          src="https://img.icons8.com/fluency/96/money.png"
          alt="Payment"
          className="mb-4"
        />
      </div>

      <Button
        className="w-full mt-4 bg-green-600 hover:bg-green-700 text-lg flex items-center justify-center gap-2 py-3"
        onClick={handlePayment}
        disabled={isProcessing}
      >
        {isProcessing ? (
          <>
            <Loader2 className="animate-spin" size={20} />
            Processing...
          </>
        ) : (
          <>
            <CheckCircle size={20} />
            Pay Now
          </>
        )}
      </Button>

      {/* Payment Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="text-center">
          <DialogHeader>
            <DialogTitle>
              {isPaymentSuccess ? "Order Confirmed!" : "Processing Payment..."}
            </DialogTitle>
          </DialogHeader>

          {isPaymentSuccess ? (
            <div className="flex flex-col items-center text-green-600">
              <CheckCircle size={48} />
              <p className="mt-2">Your order has been successfully placed.</p>
            </div>
          ) : (
            <div className="flex justify-center py-4">
              <Loader2 className="animate-spin text-green-600" size={40} />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Payment;
