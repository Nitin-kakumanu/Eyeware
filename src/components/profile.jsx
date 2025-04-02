import Navbar from './navbar';
import Footer from './footer';
import React from 'react';
import { motion } from 'framer-motion';

function LoginPage() {
  return (
    <div className="min-h-screen my-20 bg-gray-800">
      <Navbar />
      <div className="min-h-screen bg-gray-800 flex items-center justify-center">
        <motion.div
          className="max-w-sm w-full bg-gray-900 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo or title */}
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-3xl font-bold text-gray-100">Specs App</h1>
            <p className="text-lg text-gray-300 mt-2">Login to access your profile</p>
          </motion.div>

          {/* Login Form */}
          <form className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full px-4 py-3 bg-gray-800 border border-gray-700 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-2 w-full px-4 py-3 bg-gray-800 border border-gray-700 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-700 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-blue-400 hover:text-blue-300">
                Forgot your password?
              </a>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg focus:outline-none hover:bg-blue-500 transition duration-200"
              >
                Log In
              </button>
            </div>
          </form>

          {/* Social login */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">Or log in with</p>
            <div className="mt-4 flex justify-center gap-4">
              <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition duration-200">
                <img
                  src=""
                  alt="Google"
                  className="w-6 h-6"
                />
              </button>
              <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition duration-200">
                <img
                  src="/api/placeholder/24/24"
                  alt="Apple"
                  className="w-6 h-6"
                />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
}

export default LoginPage;