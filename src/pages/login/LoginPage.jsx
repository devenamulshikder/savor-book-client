/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaUser, FaLock, FaGoogle, FaFacebook } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../providers/AuthProvider";
import { use, useRef } from "react";
import toast from "react-hot-toast";

const LoginPage = () => {
  const { loginUser, setError, googleLogIn, setLoading, forgotPassword } =
    use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef();
  // google login
  const handleGoogleLogin = () => {
    setError("");
    googleLogIn()
      .then(() => {
        toast.success("Google Login Successfully!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };
  const handleSignin = (e) => {
    setError("");
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then(() => {
        toast.success("User Login Successfully!");
        navigate(location?.state ? location?.state : "/");
      })
      .catch((err) => {
        toast.error(err.message && "Please provide correct information!");
        setLoading(false);
      });
  };

  const handleForgot = () => {
    const email = emailRef.current.value;
    setError("");
    forgotPassword(email)
      .then(() => {
        toast.success(
          "A password reset email is sent. Please check your email."
        );
      })
      .catch((err) => {
        setError(err.message);
      });
  };

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
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
            alt="Delicious food"
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
            <h1 className="text-2xl font-bold text-center">Welcome Back!</h1>
            <p className="text-base-content/70">
              Sign in to access your recipes
            </p>
          </div>

          {/* Login Form */}
          <form
            onSubmit={handleSignin}
            className="bg-base-200 rounded-xl shadow-lg p-8"
          >
            {/* Email Field */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-base-content/50" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={`w-full pl-10 pr-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-500`}
                  placeholder="your@email.com"
                />
              </div>
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
            </div>

            {/* Remember & Forgot */}
            <div className="flex justify-end mb-6">
              <button
                onClick={handleForgot}
                className="text-sm text-amber-600 hover:underline"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              //   disabled={isLoading}
              className="w-full py-3 cursor-pointer px-4 bg-gradient-to-r from-[#ED6F2C] to-[#FF9D4D] text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center"
            >
              Sign In
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
                onClick={handleGoogleLogin}
                type="button"
                className="flex-1 cursor-pointer py-2 px-4 border border-base-300 rounded-lg hover:bg-base-300 transition-colors flex items-center justify-center gap-2"
              >
                <FaGoogle className="text-red-500" />
                <span>Google</span>
              </button>
              <button
                type="button"
                className="flex-1 cursor-pointer py-2 px-4 border border-base-300 rounded-lg hover:bg-base-300 transition-colors flex items-center justify-center gap-2"
              >
                <FaFacebook className="text-blue-600" />
                <span>Facebook</span>
              </button>
            </div>

            {/* Sign Up Link */}
            <p className="text-center text-base-content/70">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-amber-600 hover:underline font-medium"
              >
                Sign up
              </Link>
            </p>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoginPage;
