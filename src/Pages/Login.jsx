import React, { useState } from "react";
import Singup from "./Singup";

const LoginPage = () => {
  // State to manage form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Form Submitted:", { email, password, rememberMe });
    setEmail('')
    setPassword('')
    setRememberMe(false)

    // You can add further logic here (e.g., API calls for login)
  };

  return (
    <div className="flex  items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full shadow-slate-950 shadow-xl max-w-md p-8 bg-white rounded-lg ">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="Enter your password"
            />
          </div>

          {/* Checkbox */}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
            />
            <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-700">
              Remember Me
            </label>
          </div>

          {/* Terms and Policy */}
          <p className="text-sm text-gray-600 mb-4">
            By logging in, you agree to our{" "}
            <span className="text-blue-500 hover:underline cursor-pointer">
              Terms and Policy
            </span>.
          </p>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="mt-4 text-sm text-center">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-blue-500 hover:underline font-medium"
          >
            Register New User
          </a>
        </p>
      </div>
    </div>
  );//Login Compontant Was Don
};

export default LoginPage;
