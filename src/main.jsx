import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Users from "./components/Users/Users";
import UserDetail from "./components/UserDetail/UserDetail";
import Recipes from "./components/Recipes/Recipes";
import RecipeDetail from "./components/RecipeDetail/RecipeDetail";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import MealDBRecipes from "./components/MealDBRecipes/MealDBRecipes";
import MealBDDetails from "./components/MealBDDetails/MealBDDetails";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>,
      },
      {
        path: "/user/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetail></UserDetail>,
      },
      {
        path: "/recipes",
        loader: () => fetch("https://dummyjson.com/recipes"),
        element: <Recipes></Recipes>,
      },
      {
        path: "/recipe/:recipeId",
        element: <RecipeDetail></RecipeDetail>,
        loader: ({ params }) =>
          fetch(`https://dummyjson.com/recipes/${params.recipeId}`),
      },
      /*  {
        path: '/recipes/:recipesId',
        element: <MealDBRecipes></MealDBRecipes>
      }, */
      {
        path: "/recCat",
        element: <MealDBRecipes></MealDBRecipes>,
     /*    loader: async () => {
          try {
            const res = await fetch(
              `https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`
            );
            const data = await res.json();
            return data.meals
          } catch (err) {
            console.log(err);
            return null;
          }
        }, */
      },
      {
        path: '/meal/:idMeal',
       element: <MealBDDetails></MealBDDetails>,
       loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`)
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
