import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Logo from "../assets/logo.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  // Validate Email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return "Email is required";
    if (!emailRegex.test(email)) return "Invalid email format";
    return "";
  };

  // Validate Password
  const validatePassword = (password) => {
    if (!password) return "Password is required";
    return "";
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError("");

    const emailErr = validateEmail(email);
    const passwordErr = validatePassword(password);

    setEmailError(emailErr);
    setPasswordError(passwordErr);

    if (emailErr || passwordErr) return;

    // Retrieve stored user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem(email));

    if (storedUser && storedUser.password === password) {
      const lastVisitedPage = localStorage.getItem("lastVisitedPage") || "/";
      localStorage.removeItem("lastVisitedPage"); // Remove last visited page after retrieving
      setTimeout(() => {
        navigate(lastVisitedPage);
      }, 500);
    } else {
      setLoginError("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={Logo} alt="Logo" className="h-20" />
        </div>

        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        {loginError && (
          <p className="flex items-center justify-center text-red-500 text-sm font-semibold mt-1 mb-4">
            <MdErrorOutline className="mr-2 text-lg" /> {loginError}
          </p>
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <Label className="text-gray-700 mb-3">Email</Label>
            <Input
              type="email"
              className="mt-1"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError(validateEmail(e.target.value));
              }}
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
          </div>

          <div className="mb-4">
            <Label className="text-gray-700 mb-3">Password</Label>
            <Input
              type="password"
              className="mt-1"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError(validatePassword(e.target.value));
              }}
            />
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>

        {/* OR Separator */}
        <div className="flex items-center my-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <p className="mx-2 text-gray-500">OR</p>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="flex flex-col gap-3">
          <button className="flex items-center justify-center w-full border border-gray-300 py-2 rounded hover:bg-gray-100 transition">
            <FcGoogle className="mr-2 text-xl" /> Login with Google
          </button>
          <button className="flex items-center justify-center w-full border border-gray-300 py-2 rounded hover:bg-gray-100 transition">
            <FaFacebook className="mr-2 text-blue-600 text-xl" /> Login with
            Facebook
          </button>
        </div>

        {/* Register Redirect */}
        <p className="text-center mt-4 text-gray-600">
          Don't have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer hover:underline"
            onClick={() => navigate("/sign-up")}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
