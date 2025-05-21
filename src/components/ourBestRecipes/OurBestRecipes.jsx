/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { FaClock, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router";

const OurBestRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/savorBooks")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  // New animation variants
  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardItem = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotateX: 15,
    },
    show: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const hoverButton = {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 500,
    },
  };

  return (
    <section className="py-12 px-4 bg-base-100">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              background: "linear-gradient(to right, #ED6F2C, #FF9D4D)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Our All Recipes Here
          </h2>
          <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
            Discover the all loved recipes in our community, handpicked by our
            chefs.
          </p>
        </motion.div>

        {/* Recipes Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {recipes.map((recipe) => (
            <motion.div
              key={recipe._id}
              variants={cardItem}
              className="bg-base-200 rounded-xl overflow-hidden shadow-md group"
            >
              {/* Recipe Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={`${recipe.image}?auto=format&fit=crop&w=600&q=80`}
                  alt={recipe.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm flex items-center">
                  <FaStar className="text-amber-400 mr-1" />
                  {recipe.rating}
                </div>
              </div>

              {/* Recipe Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{recipe?.title}</h3>

                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center text-sm text-base-content/80 font-medium">
                    <FaClock className="mr-1" />
                    {recipe?.preparationTime} Min
                  </div>
                  <div className="flex items-center text-sm text-base-content/80 font-medium">
                    Cuisine Type : {recipe?.cuisineType}
                  </div>
                </div>

              <Link to={`/recipeDetails/${recipe._id}`}>
                  <motion.button
                    whileHover={hoverButton}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 cursor-pointer w-full py-2 bg-gradient-to-r from-[#ED6F2C] to-[#FF9D4D] text-white rounded-lg font-medium"
                  >
                    See Details
                  </motion.button>
              </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurBestRecipes;
