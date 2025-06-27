/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useContext } from "react";
import {
  FiMenu,
  FiX,
  FiHome,
  FiBook,
  FiLogOut,
} from "react-icons/fi";
import { GiMinerals } from "react-icons/gi";
import { AuthContext } from "../../providers/AuthProvider";
import { MdOutlinePostAdd } from "react-icons/md";

const Sidebar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Hamburger Button */}
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="fixed z-50 top-4 left-4 p-2 rounded-md bg-white shadow-md"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      )}

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={toggleSidebar}
            className="fixed inset-0 z-40 bg-black lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Content */}
      <AnimatePresence>
        {(isOpen || !isMobile) && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`fixed md:relative z-40 w-64 h-full text-black bg-white shadow-lg flex flex-col ${
              isMobile ? "inset-y-0 left-0" : ""
            }`}
          >
            {/* Logo/Header */}
            <div className="p-4 border-b flex justify-between items-center">
              <Link
                to={"/"}
                className="text-2xl font-bold"
                style={{
                  background: "linear-gradient(to right, #ED6F2C, #FF9D4D)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Savor Book
              </Link>
              {isMobile && (
                <button onClick={toggleSidebar} className="p-1">
                  <FiX size={20} />
                </button>
              )}
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 p-4 text-black">
              <ul className="space-y-2">
                <SidebarItem
                  to="/dashboard"
                  icon={<FiHome size={20} />}
                  text="Home"
                />
                <SidebarItem
                  to="/dashboard/allRecipes"
                  icon={<FiBook size={20} />}
                  text="All Recipes"
                />
                <SidebarItem
                  to="/dashboard/addRecipe"
                  icon={<MdOutlinePostAdd size={20} />}
                  text="Add Recipe"
                />
                <SidebarItem
                  to="/dashboard/myRecipes"
                  icon={<GiMinerals size={20} />}
                  text="My Recipes"
                />
              </ul>
            </nav>

            {/* Bottom Section */}
            <div className="p-4 border-t text-black">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-gray-300">
                  <img
                    src={user?.photoURL || "https://via.placeholder.com/150"}
                    alt="User Avatar"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <span>{user?.displayName}</span>
              </div>
              <button
                onClick={handleLogout}
                className="w-full flex items-center p-2 rounded hover:bg-gray-100"
              >
                <FiLogOut className="mr-2" size={18} />
                Logout
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Reusable sidebar item component
const SidebarItem = ({ to, icon, text }) => (
  <motion.li whileHover={{ scale: 1.05 }}>
    <Link to={to} className="flex items-center p-2 rounded hover:bg-gray-100">
      <span className="mr-3">{icon}</span>
      {text}
    </Link>
  </motion.li>
);

export default Sidebar;
