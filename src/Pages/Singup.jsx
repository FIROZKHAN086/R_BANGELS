import React, { useState } from "react";

const Singup = () => {
  // State to manage form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Form Submitted:", { name, email, password, agreeTerms });
    setName("");
    setEmail("");
    setPassword("");
    setAgreeTerms(false);

    // Add further logic here (e.g., API calls for registration)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        {/* Register Form */}
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="Enter your name"
            />
          </div>

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
              id="agreeTerms"
              name="agreeTerms"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
            />
            <label htmlFor="agreeTerms" className="ml-2 text-sm text-gray-700">
              I agree to the Terms and Policy
            </label>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Register
          </button>
        </form>

        {/* Already Have an Account Link */}
        <p className="mt-4 text-sm text-center">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue-500 hover:underline font-medium"
          >
            Login
          </a>
        </p>
      </div>
    </div>
    // Singin Compontant Was Don
  );
};

export default Singup;
