import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { toast } from "react-hot-toast";
import { Loader2, CheckCircle, AlertTriangle } from "lucide-react";

// Country-State Mapping
const countries = {
  India: ["Delhi", "Mumbai", "Karnataka", "Tamil Nadu", "Kerala"],
  USA: ["California", "Texas", "New York"],
  Canada: ["Ontario", "Quebec", "British Columbia"],
};

// Checkout Component
const Checkout = () => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [errors, setErrors] = useState({});
  const [isOtpDialogOpen, setIsOtpDialogOpen] = useState(false);
  const [otp, setOtp] = useState("");
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const validateForm = () => {
    let newErrors = {};
    if (!mobileNumber) newErrors.mobileNumber = "Mobile number is required";
    if (!address) newErrors.address = "Address is required";
    if (!selectedCountry) newErrors.selectedCountry = "Country is required";
    if (!selectedState) newErrors.selectedState = "State is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleMobileVerification = () => {
    if (!mobileNumber) {
      toast.error("Enter mobile number first!", {
        icon: <AlertTriangle className="text-red-500" />,
      });
      return;
    }
    setIsOtpDialogOpen(true);
  };

  const verifyOtp = () => {
    toast.success("OTP Verified Successfully!", {
      icon: <CheckCircle className="text-green-500" />,
    });
    setIsOtpVerified(true);
    setIsOtpDialogOpen(false);
  };

  const handleCheckout = () => {
    if (!isOtpVerified) {
      toast.error("Please verify OTP before proceeding.", {
        icon: <AlertTriangle className="text-red-500" />,
      });
      return;
    }

    if (!validateForm()) {
      toast.error("Please fix the errors before proceeding.", {
        icon: <AlertTriangle className="text-red-500" />,
      });
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      toast.success("Payment successful!", {
        icon: <CheckCircle className="text-green-500" />,
      });
      navigate("/payment-details", {
        state: { mobileNumber, address, selectedCountry, selectedState },
      });
    }, 2000);
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-2xl max-w-md mx-auto border border-gray-200 my-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Checkout
      </h2>

      {/* Mobile Number */}
      <div className="mb-4">
        <Label className="mb-1 block">Mobile Number</Label>
        <div className="flex gap-2">
          <Input
            type="tel"
            placeholder="Enter mobile number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className={errors.mobileNumber ? "border-red-500" : ""}
            disabled={isOtpVerified}
          />
          <Button onClick={handleMobileVerification} disabled={isOtpVerified}>
            {isOtpVerified ? "Verified ✅" : "Verify"}
          </Button>
        </div>
        {errors.mobileNumber && (
          <p className="text-red-500 text-sm mt-1">{errors.mobileNumber}</p>
        )}
      </div>

      {/* Address */}
      <div className="mb-4">
        <Label className="mb-1 block">Address</Label>
        <Input
          type="text"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className={errors.address ? "border-red-500" : ""}
        />
        {errors.address && (
          <p className="text-red-500 text-sm mt-1">{errors.address}</p>
        )}
      </div>

      {/* Country */}
      <div className="mb-4">
        <Label className="mb-1 block">Country</Label>
        <select
          className={`w-full p-2 border rounded-md ${
            errors.selectedCountry ? "border-red-500" : ""
          }`}
          value={selectedCountry}
          onChange={(e) => {
            setSelectedCountry(e.target.value);
            setSelectedState("");
          }}
        >
          <option value="">Select Country</option>
          {Object.keys(countries).map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        {errors.selectedCountry && (
          <p className="text-red-500 text-sm mt-1">{errors.selectedCountry}</p>
        )}
      </div>

      {/* State */}
      <div className="mb-4">
        <Label className="mb-1 block">State</Label>
        <select
          className={`w-full p-2 border rounded-md ${
            errors.selectedState ? "border-red-500" : ""
          }`}
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          disabled={!selectedCountry}
        >
          <option value="">Select State</option>
          {selectedCountry &&
            countries[selectedCountry].map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
        </select>
        {errors.selectedState && (
          <p className="text-red-500 text-sm mt-1">{errors.selectedState}</p>
        )}
      </div>

      {/* Checkout Button */}
      <Button
        className="w-full mt-4 bg-green-600 hover:bg-green-700 text-lg flex items-center justify-center gap-2 py-3"
        onClick={handleCheckout}
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
            Checkout
          </>
        )}
      </Button>

      {/* OTP Dialog */}
      <Dialog open={isOtpDialogOpen} onOpenChange={setIsOtpDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter OTP</DialogTitle>
          </DialogHeader>
          <Input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="text-center text-lg"
          />
          <DialogFooter>
            <Button
              onClick={verifyOtp}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              Verify OTP
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Checkout;
