import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredRecipes, removeFromLS } from "../../utils/addToLs";

const AddToRecipesItems = () => {
  const [items, setItems] = useState([]);

  const { meals } = useLoaderData();
  useEffect(() => {
    const localItems = getStoredRecipes();
    const findMatched = meals.filter((recipe) =>
      localItems.includes(parseInt(recipe.idMeal))
    );
    setItems(findMatched);
  }, [meals]);
  const handleRemoveFromCart = (id) => {
    const remaining = items.filter(
      (meal) => parseInt(meal.idMeal) !== parseInt(id)
    );
    removeFromLS(parseInt(id));
    setItems(remaining);
  };
  if (items.length < 1) {
    return (
      <>
        <h2>Currently BookMark is Empty</h2>
      </>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {items.map((recipe) => (
        <div
          key={recipe?.idMeal}
          className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900"
        >
          <img
            src={recipe?.strMealThumb}
            alt=""
            className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">
              {recipe.strArea}
            </span>
            <h2 className="text-xl font-semibold tracking-wide">
              Nam maximus purus
            </h2>
          </div>
          <p className="dark:text-gray-800">{recipe?.strInstructions}</p>
          <button
            onClick={() => handleRemoveFromCart(recipe?.idMeal)}
            className="btn btn-error text-white my-4"
          >
            Remove From Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default AddToRecipesItems;
