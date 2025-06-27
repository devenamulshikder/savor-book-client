/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is SavorBook?",
      answer:
        "SavorBook is a recipe-sharing platform where food enthusiasts can discover, save, and share delicious recipes. Whether you're a home cook or a professional chef, you can explore recipes by cuisine, dietary preferences, and cooking time.",
    },
    {
      question: "Is SavorBook free to use?",
      answer:
        "Yes! SavorBook is completely free to browse, save, and share recipes. Some premium features (like advanced meal planning) may be introduced in the future.",
    },
    {
      question: "How do I submit my own recipe?",
      answer:
        "Click 'Add Recipe' in the navigation menu, fill in the details (title, ingredients, instructions, etc.), and hit 'Publish'. Your recipe will be reviewed before going live.",
    },
    {
      question: "Why can't I upload images for my recipe?",
      answer:
        "Ensure your image is in JPG/PNG format, under 5MB, and has a clear, food-focused composition. If issues persist, try refreshing the page or using a different browser.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "Click 'Forgot Password?' on the login page, enter your email, and follow the instructions sent to your inbox.",
    },
    {
      question: "Can I share recipes on social media?",
      answer:
        "Yes! Click the Share button on any recipe to post it to Facebook, Pinterest, or Twitter.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-12"
        style={{
          background: "linear-gradient(to right, #ED6F2C, #FF9D4D)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
          >
            <motion.button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              whileHover={{ backgroundColor: "#f5f5f5" }}
            >
              <h3 className="text-lg font-medium text-gray-900">
                {item.question}
              </h3>
              <motion.span
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                className="ml-4 h-5 w-5 text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.span>
            </motion.button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <p className="text-gray-600">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
