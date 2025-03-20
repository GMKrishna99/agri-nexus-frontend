import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Logo from "../assets/logo.png";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [signUpError, setSignUpError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Validation Functions
  const validateUsername = (username) => {
    if (!username) return "Username is required";
    if (username.length < 3) return "Username must be at least 3 characters";
    return "";
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return "Email is required";
    if (!emailRegex.test(email)) return "Invalid email format";
    return "";
  };

  const validatePassword = (password) => {
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password) return "Password is required";
    if (!strongPasswordRegex.test(password))
      return "Must be 8+ characters with uppercase, number, and symbol";
    return "";
  };

  const validateConfirmPassword = (confirmPassword, password) => {
    if (!confirmPassword) return "Please confirm your password";
    if (confirmPassword !== password) return "Passwords do not match";
    return "";
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate input dynamically
    let errorMsg = "";
    if (name === "username") errorMsg = validateUsername(value);
    if (name === "email") errorMsg = validateEmail(value);
    if (name === "password") errorMsg = validatePassword(value);
    if (name === "confirmPassword")
      errorMsg = validateConfirmPassword(value, formData.password);

    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  // Handle form submission
  const handleSignUp = (e) => {
    e.preventDefault();
    setSignUpError("");
    setLoading(true);

    // Validate all fields before proceeding
    const usernameErr = validateUsername(formData.username);
    const emailErr = validateEmail(formData.email);
    const passwordErr = validatePassword(formData.password);
    const confirmPasswordErr = validateConfirmPassword(
      formData.confirmPassword,
      formData.password
    );

    setErrors({
      username: usernameErr,
      email: emailErr,
      password: passwordErr,
      confirmPassword: confirmPasswordErr,
    });

    if (usernameErr || emailErr || passwordErr || confirmPasswordErr) {
      setLoading(false);
      return;
    }

    // Check if the email already exists in localStorage
    if (localStorage.getItem(formData.email)) {
      setSignUpError("Email is already registered");
      setTimeout(() => navigate("/sign-in"), 1000);
      setLoading(false);
      return;
    }

    // Save user data (for production, use a backend service instead)
    localStorage.setItem(
      formData.email,
      JSON.stringify({
        username: formData.username,
        email: formData.email,
        password: formData.password,
      })
    );

    setTimeout(() => {
      setLoading(false);
      navigate("/sign-in");
    }, 500);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={Logo} alt="Logo" className="h-20" />
        </div>

        <h2 className="text-2xl font-bold text-center mb-8">
          Register Account
        </h2>

        {signUpError && (
          <p className="flex items-center justify-center text-red-500 text-sm font-semibold mt-1 mb-4">
            <MdErrorOutline className="mr-2 text-lg" /> {signUpError}
          </p>
        )}

        <form onSubmit={handleSignUp}>
          {/* Username Field */}
          <div className="mb-4">
            <Label className="text-gray-700 mb-3">Username</Label>
            <Input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <Label className="text-gray-700 mb-3">Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <Label className="text-gray-700 mb-3">Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div className="mb-4">
            <Label className="text-gray-700 mb-3">Confirm Password</Label>
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition disabled:bg-gray-400"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
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
            <FcGoogle className="mr-2 text-xl" /> Sign Up with Google
          </button>
          <button className="flex items-center justify-center w-full border border-gray-300 py-2 rounded hover:bg-gray-100 transition">
            <FaFacebook className="mr-2 text-blue-600 text-xl" /> Sign Up with
            Facebook
          </button>
        </div>
        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer hover:underline"
            onClick={() => navigate("/sign-in")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
