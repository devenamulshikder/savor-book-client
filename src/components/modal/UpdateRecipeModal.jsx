import { useEffect } from "react";

const UpdateRecipeModal = ({ recipe, onClose, onUpdate }) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const updatedRecipe = {
      image: formData.get("image"),
      title: formData.get("title"),
      ingredients: formData
        .get("ingredients")
        .split("\n")
        .filter((i) => i.trim() !== ""),
      instructions: formData
        .get("instructions")
        .split("\n")
        .filter((i) => i.trim() !== ""),
      cuisineType: form.querySelector("select").value,
      preparationTime: parseInt(formData.get("preparationTime")),
      categories: Array.from(
        form.querySelectorAll('input[name="category"]:checked')
      ).map((cb) => cb.value),
      likeCount: recipe.likeCount,
      userEmail: recipe.userEmail,
      _id: recipe._id,
    };

    onUpdate(updatedRecipe);
  };

  // Prevent modal from closing when clicking inside content
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 overflow-y-auto"
      onClick={onClose} // Close when clicking outside
    >
      <div
        className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={handleContentClick}
      >
        <div className="p-6">
          <h3
            className="text-2xl md:text-3xl text-center font-bold mb-6"
            style={{
              background: "linear-gradient(to right, #ED6F2C, #FF9D4D)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Update Recipe
          </h3>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <div className="w-full">
                <label className="mb-2 ml-1 text-sm text-gray-700 font-medium block">
                  Image
                </label>
                <input
                  type="text"
                  name="image"
                  required
                  defaultValue={recipe.image}
                  className="px-4 py-3 bg-white border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/30 w-full text-sm text-gray-800 rounded-md transition-all"
                />
              </div>
              <div className="w-full">
                <label className="mb-2 ml-1 text-sm text-gray-700 font-medium block">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  required
                  defaultValue={recipe.title}
                  className="px-4 py-3 bg-white border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/30 w-full text-sm text-gray-800 rounded-md transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 my-4 md:my-6">
              <div className="w-full">
                <label className="mb-2 ml-1 text-sm text-gray-700 font-medium block">
                  Ingredients (one per line)
                </label>
                <textarea
                  name="ingredients"
                  defaultValue={recipe.ingredients?.join("\n") || ""}
                  className="px-4 py-3 bg-white border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/30 w-full text-sm text-gray-800 rounded-md transition-all h-32"
                />
              </div>
              <div className="w-full">
                <label className="mb-2 ml-1 text-sm text-gray-700 font-medium block">
                  Instructions (step by step)
                </label>
                <textarea
                  name="instructions"
                  defaultValue={recipe.instructions?.join("\n") || ""}
                  className="px-4 py-3 bg-white border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/30 w-full text-sm text-gray-800 rounded-md transition-all h-32"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <div className="w-full">
                <fieldset className="border border-gray-300 rounded-md px-3 py-2">
                  <legend className="px-2 text-sm text-gray-700 font-medium">
                    Cuisine Type
                  </legend>
                  <select
                    name="cuisineType"
                    defaultValue={recipe.cuisineType}
                    className="select w-full border-none bg-transparent text-sm text-gray-800 focus:outline-none focus:ring-0"
                    required
                  >
                    <option value="Italian">Italian</option>
                    <option value="Mexican">Mexican</option>
                    <option value="Indian">Indian</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Others">Others</option>
                  </select>
                </fieldset>
              </div>
              <div className="w-full">
                <label className="mb-2 ml-1 text-sm text-gray-700 font-medium block">
                  Preparation Time (minutes)
                </label>
                <input
                  type="number"
                  name="preparationTime"
                  defaultValue={recipe.preparationTime}
                  min="1"
                  required
                  className="px-4 py-3 bg-white border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/30 w-full text-sm text-gray-800 rounded-md transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mt-4 md:mt-6">
              <div className="w-full">
                <label className="mb-2 ml-1 text-sm text-gray-700 font-medium block">
                  Categories
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 bg-white p-3 rounded-md border border-gray-300">
                  {[
                    "breakfast",
                    "lunch",
                    "dinner",
                    "dessert",
                    "vegan",
                    "gluten-free",
                  ].map((category) => (
                    <label
                      key={category}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <input
                        type="checkbox"
                        name="category"
                        value={category}
                        defaultChecked={recipe.categories?.includes(category)}
                        className="rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      {category.charAt(0).toUpperCase() +
                        category.slice(1).replace("-", " ")}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <button
                type="button"
                onClick={onClose}
                className="w-full hover:scale-102 text-gray-700 border border-gray-300 text-lg cursor-pointer duration-400 bg-white rounded-lg font-medium hover:shadow-lg transition-all py-3"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full hover:scale-102 text-white text-lg cursor-pointer duration-400 bg-gradient-to-r from-[#ED6F2C] to-[#FF9D4D] rounded-lg font-medium hover:shadow-lg transition-all py-3"
              >
                Update Recipe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateRecipeModal;
