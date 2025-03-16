import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const RecipeDetail = () => {
  const secretRecipe = useLoaderData();
  const { recipeId } = useParams();
  console.log(recipeId);
  const nav = useNavigate();
  return (
    <div className=" shadow-xl">
      <div>
        <figure className="max-w-[300px]">
          <img
            className="h-full w-full object-cover"
            src={secretRecipe.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{secretRecipe.name}</h2>
          <p>Cuisine: {secretRecipe?.cuisine}</p>
          <p className="flex items-center text-lg">
            Rating:{" "}
            {secretRecipe?.rating > 4.0 && (
              <div className="flex items-center">
                {secretRecipe?.rating}
                <div className="rating ms-2">
                  <div className="mask mask-star" aria-label="1 star"></div>
                  <div className="mask mask-star" aria-label="2 star"></div>
                  <div
                    className="mask mask-star"
                    aria-label="3 star"
                    aria-current="true"
                  ></div>
                  <div className="mask mask-star" aria-label="4 star"></div>
                  <div className="mask mask-star" aria-label="5 star"></div>
                </div>
              </div>
            )}{" "}
          </p>
          <div className="card-actions justify-start">
            <button onClick={() => nav(-1)} className="btn btn-primary">
              Back To Menu
            </button>
          </div>
          <div className="card-actions justify-start">
            <button onClick={() => nav(`/`)} className="btn btn-primary">
              Back To Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
