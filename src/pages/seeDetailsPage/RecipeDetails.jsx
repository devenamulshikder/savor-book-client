/* eslint-disable no-unused-vars */
import { use, useState } from "react";
import { useLoaderData } from "react-router";
import { FaClock, FaHeart, FaUtensils } from "react-icons/fa";
import { motion } from "framer-motion";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const RecipeDetails = () => {
  const { user } = use(AuthContext);
  const recipeData = useLoaderData();
  const [like, setLike] = useState(recipeData.likeCount);
  const {
    title,
    _id,
    userEmail,
    preparationTime,
    instructions,
    ingredients,
    image,
    cuisineType,
    categories,
  } = recipeData;
  const handleLike = () => {
    setLike(like + 1);
    fetch(`http://localhost:3000/savorBooks/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likeCount: like,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Thank you for liking this recipe!");
        }
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 max-w-6xl"
    >
      {/* Like Count */}
      <div className="flex justify-end items-center gap-2 mb-8">
        <FaHeart className="text-red-500" />
        <span className="text-lg font-medium text-gray-700">
          {like} people love this recipe
        </span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Image Section */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="lg:w-1/2"
        >
          <div className="relative rounded-xl overflow-hidden shadow-lg w-full md:h-[400px]">
            {" "}
            {/* Fixed height here */}
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h1 className="text-3xl font-bold text-white">{title}</h1>
            </div>
          </div>
        </motion.div>

        {/* Details Section */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="lg:w-1/2 bg-base-200 p-6 rounded-xl shadow-md"
        >
          {/* Basic Info */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full">
              <FaUtensils className="text-amber-500" />
              <span className="font-medium text-black">{cuisineType}</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full">
              <FaClock className="text-amber-500" />
              <span className="font-medium text-black">
                {preparationTime} mins
              </span>
            </div>
          </div>

          {/* Ingredients */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <span
                style={{
                  background: "linear-gradient(to right, #ED6F2C, #FF9D4D)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Ingredients
              </span>
            </h3>
            <ul className="space-y-2">
              {ingredients.map((ingredient, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-start gap-2"
                >
                  <span className="text-amber-500">•</span>
                  <span>{ingredient}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <span
                style={{
                  background: "linear-gradient(to right, #ED6F2C, #FF9D4D)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Instructions
              </span>
            </h3>
            <ol className="space-y-4">
              {instructions.map((instruction, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index + 0.3 }}
                  className="flex gap-3"
                >
                  <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-r from-[#ED6F2C] to-[#FF9D4D] text-white text-sm font-bold">
                    {index + 1}
                  </span>
                  <span>{instruction}</span>
                </motion.li>
              ))}
            </ol>
          </div>

          {/* Categories */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-3">
              <span
                style={{
                  background: "linear-gradient(to right, #ED6F2C, #FF9D4D)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Categories
              </span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="inline-block bg-white text-black px-3 py-1 rounded-full text-sm shadow-sm"
                >
                  {category}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Like Button */}
          <motion.button
            onClick={handleLike}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={user.email === userEmail}
            className="w-full py-3 disabled:cursor-not-allowed cursor-pointer bg-gradient-to-r from-[#ED6F2C] to-[#FF9D4D] text-white rounded-lg font-medium hover:shadow-lg transition-all"
          >
            Like This Recipe
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RecipeDetails;
