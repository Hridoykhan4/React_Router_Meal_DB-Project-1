import Users from "../components/Users/Users";
import UserDetail from "../components/UserDetail/UserDetail";
import Recipes from "../components/Recipes/Recipes";
import RecipeDetail from "../components/RecipeDetail/RecipeDetail";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import MealDBRecipes from "../components/MealDBRecipes/MealDBRecipes";
import MealBDDetails from "../components/MealBDDetails/MealBDDetails";
import AddToRecipesItems from "../components/AddToRecipesItems/AddToRecipesItems";
import Books from "../components/Books/Books";
import BookDetail from "../components/BookDetail/BookDetail";
import ListedBooks from "../components/ListedBooks/ListedBooks";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Blogs from "../pages/Blogs";
import Blog from "../pages/Blog";
import Content from "../components/Content";
import Author from "../components/Author";
import Bookmarks from "../components/About/Bookmarks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/bookmarks",
        element: <Bookmarks></Bookmarks>,
      },
      {
        path: "/",
        element: <Books></Books>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: () => fetch("https://dev.to/api/articles?per_page=20?top=7"),
      },
      {
        path: "/blog/:blogId",
        loader: ({ params }) =>
          fetch(`https://dev.to/api/articles/${params?.blogId}`),
        element: <Blog></Blog>,
        children: [
          {
            index: true,
            element: <Content></Content>,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params?.blogId}`),
          },
          {
            path: "author",
            element: <Author />,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params?.blogId}`),
          },
        ],
      },
      {
        path: "/book/:bookId",
        loader: () => fetch("/BookData.json"),
        element: <BookDetail></BookDetail>,
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

      {
        path: "/recCat",
        element: <MealDBRecipes></MealDBRecipes>,
      },
      {
        path: "/meal/:idMeal",
        element: <MealBDDetails></MealBDDetails>,
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`
          ),
      },
      {
        path: "/orderedItems",
        element: <AddToRecipesItems></AddToRecipesItems>,
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/search.php?s="),
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("/BookData.json"),
      },
    ],
  },
]);
