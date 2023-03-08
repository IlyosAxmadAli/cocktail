import loaderCocktail from "./loader";

export const fetchApi = async (url) => {
  try {
    loaderCocktail(true)
    const req = await fetch(url);
    const data = await req.json();
    loaderCocktail(false)
    return data.drinks
  } catch (error) {
    loaderCocktail(false)
    alert(error.message);
  }
};
