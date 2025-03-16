import { Link, useNavigate } from "react-router-dom";

const Recipe = ({ recipe }) => {
  const navigate = useNavigate();

  return (
    <div className="card bg-base-100 flex flex-col  shadow-sm">
      <figure className="p-3">
        <img src={recipe?.image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-xl">{recipe?.name}</h2>
        <ul className="grow list-inside list-disc">
          {recipe.ingredients.map((ingredient, i) => (
            <li key={i}>{ingredient}</li>
          ))}
        </ul>
        <div className="card-actions">
          <Link to={`/recipe/${recipe.id}`}>
            <button className="btn btn-primary">Order Now</button>
          </Link>
        </div>
        <div className="self-start btn btn-warning">
          <button onClick={() => navigate(`/recipe/${recipe.id}`)}>
            Show Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
