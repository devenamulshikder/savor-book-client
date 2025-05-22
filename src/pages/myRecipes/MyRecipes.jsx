import { use, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MySingleRecipe from "./MySingleRecipe";
const MyRecipes = () => {
  const { user } = use(AuthContext);
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/savorBooks/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
      });
  }, [user?.email]);

  return (
    <div className="container mx-auto">
      <h2
        className="text-3xl text-center my-4 md:my-12 md:text-4xl font-bold mb-2"
        style={{
          background: "linear-gradient(to right, #ED6F2C, #FF9D4D)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        My Added Recipes Here
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
        {recipes.map((recipe) => (
          <MySingleRecipe
            key={recipe._id}
            recipe={recipe}
            setRecipes={setRecipes}
          />
        ))}
      </div>
    </div>
  );
};

export default MyRecipes;
