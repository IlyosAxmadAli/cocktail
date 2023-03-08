const loaderCocktail = (loading) => {
  const loader = document.querySelector(".loader");
  if (loading) {
    loader.classList.remove("hidden");
  } else {
    loader.classList.add("hidden");
  }
};

export default loaderCocktail;
