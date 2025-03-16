import { useLoaderData } from "react-router-dom";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
  const recipes = useLoaderData();

  const allRecipes = recipes.recipes;
  return (
    <div>
      <h3 className="mb-4 font-semibold text-lg">Recipes: {allRecipes.length}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                allRecipes.map((recipe) => <Recipe recipe={recipe}></Recipe>)
            }
      </div>
    </div>
  );
};

export default Recipes;
