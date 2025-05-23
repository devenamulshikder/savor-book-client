import { Link } from "react-router";
import { MdArrowBack } from "react-icons/md";
import toast from "react-hot-toast";
import { use } from "react";
import { AuthContext } from "../../providers/AuthProvider";
const AddRecipe = () => {
  const { user } = use(AuthContext);
  const userEmail = user.email;
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const image = formData.get("image");
    const title = formData.get("title");
    const ingredients = formData.get("ingredients");
    const instructions = formData.get("instructions");
    const cuisineType = form.querySelector("select").value;
    const preparationTime = formData.get("preparationTime");
    const categoryCheckboxes = form.querySelectorAll(
      'input[name="category"]:checked'
    );
    const categories = Array.from(categoryCheckboxes).map((cb) => cb.value);
    const likeCount = 0;
    const recipeData = {
      image,
      title,
      ingredients: ingredients.split("\n").filter((i) => i.trim() !== ""),
      instructions: instructions.split("\n").filter((i) => i.trim() !== ""),
      cuisineType,
      preparationTime: parseInt(preparationTime),
      categories,
      likeCount,
      userEmail,
    };
    fetch("http://localhost:3000/savorBooks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(recipeData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Successfully Added New Recipe item!");
          e.target.reset();
        }
      });
  };
  return (
    <div>
      <title>Savor Book | Add Recipes</title>
      <div className="max-w-7xl mx-auto px-4">
        <Link
          to={"/"}
          className="hover:scale-102 btn mt-5 md:mt-10 text-white gap-2 text-lg cursor-pointer duration-400 bg-gradient-to-r from-[#ED6F2C] to-[#FF9D4D] rounded-lg font-medium hover:shadow-lg transition-all py-3"
        >
          <MdArrowBack />
          Back To Home
        </Link>
        <div className="bg-[#f4f3f055] p-5 md:p-16 my-8 md:mb-20 rounded-lg shadow-md">
          <h3
            className="text-2xl md:text-5xl text-center font-bold"
            style={{
              background: "linear-gradient(to right, #ED6F2C, #FF9D4D)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Add New Recipe
          </h3>
          {/* form div */}
          <form onSubmit={handleForm} className="mt-6">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <div className="w-full">
                <label className="mb-2 ml-1 text-sm text-gray-700 font-medium block">
                  Image
                </label>
                <input
                  type="text"
                  name="image"
                  required
                  placeholder="Enter Image URL"
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
                  placeholder="Enter Title here"
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
                  placeholder="Enter Ingredients"
                  className="px-4 py-3 bg-white border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/30 w-full text-sm text-gray-800 rounded-md transition-all h-32"
                />
              </div>
              <div className="w-full">
                <label className="mb-2 ml-1 text-sm text-gray-700 font-medium block">
                  Instructions (step by step)
                </label>
                <textarea
                  name="instructions"
                  placeholder="Enter Instructions"
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
                    className="select w-full border-none bg-transparent text-sm text-gray-800 focus:outline-none focus:ring-0"
                    required
                  >
                    <option value="" disabled selected>
                      Select cuisine
                    </option>
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
                  placeholder="Enter Preparation Time"
                  name="preparationTime"
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
                  <label className="flex items-center gap-2 text-sm text-gray-700">
                    <input
                      type="checkbox"
                      name="category"
                      value="breakfast"
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    Breakfast
                  </label>
                  <label className="flex items-center gap-2 text-sm text-gray-700">
                    <input
                      type="checkbox"
                      name="category"
                      value="lunch"
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    Lunch
                  </label>
                  <label className="flex items-center gap-2 text-sm text-gray-700">
                    <input
                      type="checkbox"
                      name="category"
                      value="dinner"
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    Dinner
                  </label>
                  <label className="flex items-center gap-2 text-sm text-gray-700">
                    <input
                      type="checkbox"
                      name="category"
                      value="dessert"
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    Dessert
                  </label>
                  <label className="flex items-center gap-2 text-sm text-gray-700">
                    <input
                      type="checkbox"
                      name="category"
                      value="vegan"
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    Vegan
                  </label>
                  <label className="flex items-center gap-2 text-sm text-gray-700">
                    <input
                      type="checkbox"
                      name="category"
                      value="gluten-free"
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    Gluten-Free
                  </label>
                </div>
              </div>

              <div className="w-full">
                <label className="mb-2 ml-1 text-sm text-gray-700 font-medium block">
                  Like count
                </label>
                <input
                  type="number"
                  placeholder="0"
                  value={0}
                  name="likeCount"
                  readOnly
                  className="px-4 py-3 bg-gray-100 border border-gray-300 w-full text-sm text-gray-800 rounded-md cursor-not-allowed"
                />
              </div>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="w-full hover:scale-102 text-white text-lg cursor-pointer duration-400 bg-gradient-to-r from-[#ED6F2C] to-[#FF9D4D] rounded-lg font-medium hover:shadow-lg transition-all py-3"
              >
                Add Recipe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;
