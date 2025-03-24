const getStoredRecipes = () => {
  const storedRecipes = localStorage.getItem("recipes");
  return storedRecipes ? JSON.parse(storedRecipes) : [];
};

const getMarkedAsReadBooks = () => {
  const storedMarkReadBooks = localStorage.getItem("listed-books");
  return storedMarkReadBooks ? JSON.parse(storedMarkReadBooks) : [];
};

const addMarkBookToLS = (id) => {
  const storedMarkList = getMarkedAsReadBooks();
  if (storedMarkList.includes(id)) {
    alert("");
  } else {
    storedMarkList.push(id);
    localStorage.setItem("listed-books", JSON.stringify(storedMarkList));
  }
};
const getStoredWishList = () => {
  const storedWishList = localStorage.getItem("wish-books");
  return storedWishList ? JSON.parse(storedWishList) : [];
};

const addToWishBooks = (id) => {
  const storedWishList = getStoredWishList();
  if (storedWishList.includes(id)) {
    alert("");
  } else {
    storedWishList.push(id);
    localStorage.setItem("wish-books", JSON.stringify(storedWishList));
  }
};

const addToLS = (id) => {
  const storedItems = getStoredRecipes();
  if (storedItems.includes(id)) {
    alert("Can noy");
  } else {
    storedItems.push(id);
    localStorage.setItem("recipes", JSON.stringify(storedItems));
  }
};

const removeFromLS = (id) => {
  const storedItems = getStoredRecipes();
  const remaining = storedItems.filter((item) => item !== id);
  localStorage.setItem("recipes", JSON.stringify(remaining));
};

export {
  addToLS,
  getStoredRecipes,
  removeFromLS,
  addMarkBookToLS,
  getMarkedAsReadBooks,
  addToWishBooks,
  getStoredWishList
};
