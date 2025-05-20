import { FaHeart, FaClock, FaStar } from "react-icons/fa";

const OurBestRecipes = () => {
  const recipes = [
    {
      id: 1,
      title: "Creamy Garlic Pasta",
      image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce",
      prepTime: "15 mins",
      rating: 4.8,
      likes: 124,
    },
    {
      id: 2,
      title: "Spicy Thai Curry",
      image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a",
      prepTime: "25 mins",
      rating: 4.9,
      likes: 98,
    },
    {
      id: 3,
      title: "Avocado Toast",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      prepTime: "5 mins",
      rating: 4.5,
      likes: 76,
    },
    {
      id: 4,
      title: "Chocolate Lava Cake",
      image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e",
      prepTime: "30 mins",
      rating: 4.7,
      likes: 215,
    },
    {
      id: 5,
      title: "Beef Burger",
      image: "https://images.unsplash.com/photo-1565958011703-72f8580c6f7a",
      prepTime: "20 mins",
      rating: 4.6,
      likes: 182,
    },
    {
      id: 6,
      title: "Greek Salad",
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1",
      prepTime: "10 mins",
      rating: 4.4,
      likes: 67,
    },
  ];

  return (
    <section className="py-12 px-4 bg-base-100">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              background: "linear-gradient(to right, #ED6F2C, #FF9D4D)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Our Best Recipes
          </h2>
          <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
            Discover the most loved recipes in our community, handpicked by our
            chefs
          </p>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-base-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              {/* Recipe Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={`${recipe.image}?auto=format&fit=crop&w=600&q=80`}
                  alt={recipe.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm flex items-center">
                  <FaStar className="text-amber-400 mr-1" />
                  {recipe.rating}
                </div>
              </div>

              {/* Recipe Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{recipe.title}</h3>

                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center text-sm text-base-content/80">
                    <FaClock className="mr-1" />
                    {recipe.prepTime}
                  </div>
                  <div className="flex items-center text-sm text-base-content/80">
                    <FaHeart className="text-red-500 mr-1" />
                    {recipe.likes} Likes
                  </div>
                </div>

                <button className="mt-6 w-full py-2 bg-gradient-to-r from-[#ED6F2C] to-[#FF9D4D] text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                  View Recipe
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-amber-500 text-amber-600 rounded-lg font-medium hover:bg-amber-50 transition-all duration-300">
            View All Recipes
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurBestRecipes;
