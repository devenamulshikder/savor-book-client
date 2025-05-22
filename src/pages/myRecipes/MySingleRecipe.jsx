/* eslint-disable no-unused-vars */
import { FaClock, FaHeart, FaEdit, FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";



const MySingleRecipe = ({ recipe, setRecipes }) => {
  const {
    _id,
    title,
    preparationTime,
    likeCount,
    instructions,
    image,
    cuisineType,
    categories,
  } = recipe;

//   animation variants
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

  // Placeholder functions - replace with your actual handlers
  const handleUpdate = () => console.log("Update recipe", _id);
  const handleDelete = () => console.log("Delete recipe", _id);
  const handleLike = () => console.log("Like recipe", _id);

  return (
   <section className="p-4">
        <motion.div
          variants={cardItem}
          whileHover={{ y: -5 }}
          className="bg-base-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
        >
          {/* Recipe Image */}
          <div className="relative h-48 overflow-hidden">
            <motion.img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
              <FaHeart className="text-red-500" />
              <span>{likeCount}</span>
            </div>
          </div>
    
          {/* Recipe Content */}
          <div className="p-6">
            {/* Title and Cuisine */}
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold truncate max-w-[70%]">{title}</h3>
              <span className="bg-gradient-to-r from-[#ED6F2C] to-[#FF9D4D] text-white text-xs px-3 py-1 rounded-full">
                {cuisineType}
              </span>
            </div>
    
            {/* Meta Information */}
            <div className="flex flex-wrap gap-2 mb-4">
              <div className="flex items-center text-sm text-base-content/80 bg-white px-3 py-1 rounded-full">
                <FaClock className="mr-1 text-amber-500" />
                {preparationTime} mins
              </div>
    
              {categories.map((category, index) => (
                <motion.span
                  key={index}
                  className="text-xs bg-white px-2 py-1 rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {category}
                </motion.span>
              ))}
            </div>
    
            {/* Ingredients Preview */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold mb-1">Ingredients:</h4>
              <ul className="text-sm text-base-content/80 line-clamp-2">
                {instructions.slice(0, 2).map((item, i) => (
                  <motion.li
                    key={i}
                    className="truncate"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    • {item}
                  </motion.li>
                ))}
                {instructions.length > 2 && (
                  <li className="text-amber-600">
                    + {instructions.length - 2} more
                  </li>
                )}
              </ul>
            </div>
    
            {/* Instructions Preview */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold mb-1">Instructions:</h4>
              <ul className="text-sm text-base-content/80 line-clamp-2">
                {instructions.slice(0, 2).map((item, i) => (
                  <motion.li
                    key={i}
                    className="truncate"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    • {item}
                  </motion.li>
                ))}
                {instructions.length > (
                  <li className="text-amber-600">
                    {instructions.length}
                  </li>
                )}
              </ul>
        
            </div>
    
            {/* Action Buttons */}
            <div className="flex justify-end mt-4">
              <div className="flex gap-3 md:gap-6">
                <motion.button
                  variants={hoverButton}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  onClick={handleUpdate}
                  className="p-2 bg-white cursor-pointer rounded-lg text-xl text-amber-600 hover:bg-amber-50"
                  title="Edit recipe"
                >
                  <FaEdit />
                </motion.button>
    
                <motion.button
                  variants={hoverButton}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDelete}
                  className="p-2 bg-white cursor-pointer rounded-lg text-xl text-red-500 hover:bg-red-50"
                  title="Delete recipe"
                >
                  <FaTrash />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
   </section>
  );
};

export default MySingleRecipe;
