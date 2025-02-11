import React, { useState } from 'react'

const Login = () => {
    const [login, setLogin] = useState(false)
     const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [name, setName] = useState("");
      const [rememberMe, setRememberMe] = useState(false);
      const [agreeTerms, setAgreeTerms] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log("Form Submitted:", { email, password, rememberMe });
        setEmail('')
        setPassword('')
        setRememberMe(false)
        setAgreeTerms(false);
    
        // You can add further logic here (e.g., API calls for login)
      };
  return (
    <div>
        {login===false ? 
            
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
                    required
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
                  onClick={()=>setLogin(true)}
                  className="text-blue-500 hover:underline font-medium"
                >
                  Register New User
                </a>
              </p>
            </div>
          </div>

             :
                
             <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-slate-950 shadow-xl">
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
              required
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
            onClick={()=>setLogin(false)}
            className="text-blue-500 hover:underline font-medium"
          >
            Login
          </a>
        </p>
      </div>
    </div>

                  }
    </div>
  )
}

export default Login