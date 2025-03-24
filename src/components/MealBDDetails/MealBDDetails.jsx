import { useLoaderData, useNavigate } from "react-router-dom";
import { addToLS } from "../../utils/addToLs";

const MealBDDetails = () => {
  const mealDetail = useLoaderData();
  const mealData = mealDetail.meals[0];
  const nav = useNavigate();
  const handleAddToBookMark = (id) => {
    const parseId = parseInt(id);
    addToLS(parseId);
  };
  return (
    <div>
      <div className="card relative bg-base-100 max-w-96 shadow-sm">
        <figure>
          <img src={mealData?.strMealThumb} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{mealData?.strMeal}</h2>
          <p>
            <span className="font-semibold underline text-lg">Process:</span>{" "}
            <br /> {mealData?.strInstructions}
          </p>
          <div onClick={() => nav(-1)} className="card-actions justify-end">
            <button className="btn btn-primary">Back To Recipes</button>
          </div>
          <div onClick={() => nav(`/`)} className="card-actions justify-end">
            <button className="btn btn-primary">Home</button>
          </div>
        </div>
        <button
          onClick={() => handleAddToBookMark(mealData.idMeal)}
          className="absolute -top-2 -right-14 btn btn-primary"
        >
          Add To BookMark
        </button>
      </div>
    </div>
  );
};

export default MealBDDetails;
/* 
{
    "idMeal": "53026",
    "strMeal": "Tamiya",
    "strMealAlternate": null,
    "strCategory": "Vegetarian",
    "strArea": "Egyptian",
    "strInstructions": "oak the beans in water to cover overnight.Drain. If skinless beans are unavailable, rub to loosen the skins, then discard the skins. Pat the beans dry with a towel.\r\nGrind the beans in a food mill or meat grinder.If neither appliance is available, process them in a food processor but only until the beans form a paste. (If blended too smoothly, the batter tends to fall apart during cooking.) Add the scallions, garlic, cilantro, cumin, baking powder, cayenne, salt, pepper, and coriander, if using.  Refrigerate for at least 30 minutes.\r\nShape the bean mixture into 1-inch balls.Flatten slightly and coat with flour.\r\nHeat at least 1½-inches of oil over medium heat to 365 degrees.\r\nFry the patties in batches, turning once, until golden brown on all sides, about 5 minutes.Remove with a wire mesh skimmer or slotted spoon. Serve as part of a meze or in pita bread with tomato-cucumber salad and tahina sauce.",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/n3xxd91598732796.jpg",
    "strTags": null,
    "strYoutube": "https://www.youtube.com/watch?v=mulqW-J3Yy4",
    "strIngredient1": "Broad Beans",
    "strIngredient2": "Spring Onions",
    "strIngredient3": "Garlic Clove",
    "strIngredient4": "Parsley",
    "strIngredient5": "Cumin",
    "strIngredient6": "Baking Powder",
    "strIngredient7": "Cayenne Pepper",
    "strIngredient8": "Flour",
    "strIngredient9": "Vegetable Oil",
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
    "strMeasure1": "3 cups ",
    "strMeasure2": "6",
    "strMeasure3": "4",
    "strMeasure4": "1/4 cup",
    "strMeasure5": "2 tsp",
    "strMeasure6": "1 tsp ",
    "strMeasure7": "1/2 tsp",
    "strMeasure8": "Spinkling",
    "strMeasure9": "As required",
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
    "strSource": "https://oukosher.org/recipes/tamiya-egyptian-dried-fava-bean-fritters/",
    "strImageSource": null,
    "strCreativeCommonsConfirmed": null,
    "dateModified": null
}
*/
