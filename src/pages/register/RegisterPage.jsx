/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  FaUser,
  FaLock,
  FaEnvelope,
  FaGoogle,
  FaFacebook,
  FaLink,
} from "react-icons/fa";
import { Link } from "react-router";
const RegisterPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex"
    >
      {/* Left Side - Image */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="hidden lg:flex w-1/2 bg-gradient-to-br from-[#ED6F2C]/10 to-[#FF9D4D]/10 items-center justify-center p-12"
      >
        <div className="relative w-full h-full max-w-xl">
          <img
            src="https://i.postimg.cc/dQyVHpmF/ilia-bronskiy-Ss-Qa-HMu-MJnk-unsplash.jpg"
            alt="Cooking together"
            className="w-full h-auto rounded-2xl shadow-2xl object-cover"
          />
        </div>
      </motion.div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full max-w-md"
        >
          {/* Logo Header */}
          <div className="flex flex-col items-center mb-8">
            <div className="flex items-center gap-2 mb-4">
              <img
                width={50}
                src="https://i.ibb.co/qMzH7cPp/logo.png"
                alt="Savor Book Logo"
                className="h-auto"
              />
              <span
                className="text-3xl font-bold"
                style={{
                  background: "linear-gradient(to right, #ED6F2C, #FF9D4D)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Savor Book
              </span>
            </div>
            <h1 className="text-2xl font-bold text-center">
              Create Your Account
            </h1>
            <p className="text-base-content/70">
              Join our community of food enthusiasts
            </p>
          </div>

          {/* Registration Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-base-200 rounded-xl shadow-lg p-8"
          >
            {/* Name Field */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-base-content/50" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className={`w-full pl-10 pr-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-500`}
                  placeholder="Your name"
                />
              </div>
              {/* {errors.name && (
                <p className="mt-1 text-sm text-error">{errors.name}</p>
              )} */}
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-base-content/50" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={`w-full pl-10 pr-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-500`}
                  placeholder="your@email.com"
                />
              </div>
              {/* {errors.email && (
                <p className="mt-1 text-sm text-error">{errors.email}</p>
              )} */}
            </div>
            {/* Photo URL */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Photo URL
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLink className="text-base-content/50" />
                </div>
                <input
                  id="photo"
                  name="photo"
                  type="text"
                  className={`w-full pl-10 pr-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-500`}
                  placeholder="Photo URL"
                />
              </div>
              {/* {errors.email && (
                <p className="mt-1 text-sm text-error">{errors.email}</p>
              )} */}
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-base-content/50" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className={`w-full pl-10 pr-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-500`}
                  placeholder="••••••••"
                />
              </div>
              {/* {errors.password && (
                <p className="mt-1 text-sm text-error">{errors.password}</p>
              )} */}
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full cursor-pointer py-3 px-4 bg-gradient-to-r from-[#ED6F2C] to-[#FF9D4D] text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center"
            >
              Create Account
            </motion.button>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-1 border-t border-base-300"></div>
              <span className="px-4 text-base-content/50 text-sm">OR</span>
              <div className="flex-1 border-t border-base-300"></div>
            </div>

            {/* Social Login */}
            <div className="flex gap-4 mb-6">
              <button
                type="button"
                className="flex-1 py-2 px-4 border border-base-300 rounded-lg hover:bg-base-300 transition-colors flex items-center justify-center gap-2"
              >
                <FaGoogle className="text-red-500" />
                <span>Google</span>
              </button>
              <button
                type="button"
                className="flex-1 py-2 px-4 border border-base-300 rounded-lg hover:bg-base-300 transition-colors flex items-center justify-center gap-2"
              >
                <FaFacebook className="text-blue-600" />
                <span>Facebook</span>
              </button>
            </div>

            {/* Login Link */}
            <p className="text-center text-base-content/70">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-amber-600 hover:underline font-medium"
              >
                Sign in
              </Link>
            </p>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RegisterPage;
