import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useLoaderData } from "react-router-dom";

const MealDBRecipes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [tempRecipe, setTempRecipe] = useState([]);

  const nav = useNavigate();

  const fetchMeal = async (query = "") => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );

    const data = await res.json();
    setRecipes(data.meals);
    setTempRecipe(data.meals);
  };

  useEffect(() => {
    fetchMeal("");
  }, []);

  useEffect(() => {
    if (searchTerm.trim()) {
      const target = searchTerm.toLowerCase();
      const filterItem = [];
      for (const e of tempRecipe) {
        if (e.strMeal.toLowerCase().includes(target)) {
          filterItem.push(e);
        }
      }
      if (filterItem) {
        setRecipes(filterItem);
      }
    } else {
      setRecipes(tempRecipe);
    }
  }, [searchTerm, tempRecipe]);

  const youtubeUrl = "https://www.youtube.com/watch?v=GSvFVBpqMKI";

  return (
    <div>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Wanna try</legend>
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          className="input"
          placeholder="Search Recipe"
        />
      </fieldset>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 lg:grid-cols-3">
        {recipes.map((recipe, i) => (
          <div key={i} className="card bg-base-100 flex flex-col  shadow-sm">
            <figure className="mb-3">
              <img src={recipe?.strMealThumb} alt="Shoes" />
            </figure>
            <div className="space-y-3 grow p-3">
              <h2 className="card-title">{recipe?.strMeal}</h2>
              <p className="text-red-600 font-medium underline">
                <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
                  Watch on YouTube
                </a>
              </p>
            </div>
            <div className="card-actions justify-end pb-3">
              <button
                onClick={() => nav(`/meal/${recipe.idMeal}`)}
                className="btn btn-primary"
              >
                Show Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealDBRecipes;
/* 
{
    "idMeal": "53086",
    "strMeal": "Migas",
    "strMealAlternate": null,
    "strCategory": "Miscellaneous",
    "strArea": "Spanish",
    "strInstructions": "Crumble the bread into small pieces. Sprinkle with cold water, cover with a damp cloth and leave for 30 minutes.\r\nHeat 2 tsp of olive oil in a deep pan. Add the garlic cloves separated, skins on; just make a small cut with a knife to open them and keep frying for 5 minutes. Set the garlic aside.\r\nIn the same oil, where we fried everything, simmer the bread, stirring constantly for 15 minutes and add a grinding of black pepper.\r\nAdd the garlic, continue stirring for about 20 minutes. It will be ready when the bread is soft and golden.",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/xd9aj21740432378.jpg",
    "strTags": null,
    "strYoutube": "https://www.youtube.com/watch?v=GSvFVBpqMKI",
    "strIngredient1": "Bread",
    "strIngredient2": "Olive Oil",
    "strIngredient3": "Garlic",
    "strIngredient4": "Pork",
    "strIngredient5": "",
    "strIngredient6": "",
    "strIngredient7": "",
    "strIngredient8": "",
    "strIngredient9": "",
    "strIngredient10": "",
    "strIngredient11": "",
    "strIngredient12": "",
    "strIngredient13": "",
    "strIngredient14": "",
    "strIngredient15": "",
    "strIngredient16": "",
    "strIngredient17": "",
    "strIngredient18": "",
    "strIngredient19": "",
    "strIngredient20": "",
    "strMeasure1": "1 large",
    "strMeasure2": "1 1/2 L ",
    "strMeasure3": "Half",
    "strMeasure4": "1 Handfull",
    "strMeasure5": " ",
    "strMeasure6": " ",
    "strMeasure7": " ",
    "strMeasure8": " ",
    "strMeasure9": " ",
    "strMeasure10": " ",
    "strMeasure11": " ",
    "strMeasure12": " ",
    "strMeasure13": " ",
    "strMeasure14": " ",
    "strMeasure15": " ",
    "strMeasure16": " ",
    "strMeasure17": " ",
    "strMeasure18": " ",
    "strMeasure19": " ",
    "strMeasure20": " ",
    "strSource": "https://www.ibericafood.com/Recipes/post/migas-with-pork",
    "strImageSource": null,
    "strCreativeCommonsConfirmed": null,
    "dateModified": null
}
*/
