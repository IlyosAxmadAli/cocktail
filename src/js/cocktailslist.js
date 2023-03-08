export function updateUI(cocktails) {
  const container = document.querySelector(".cocktails-center");
  container.innerHTML = "";
  cocktails.forEach((item) => {
    const { idDrink, strDrink, strGlass, strAlcoholic, strDrinkThumb } = item;
    const div = document.createElement("div");
    div.classList.add("cocktail");
    div.innerHTML = `
    <div class="img-container">
          <img
              src="${strDrinkThumb}"
              alt="${strDrink}"
          />
      </div>
      <div class="cocktail-footer">
          <h3>${strDrink}</h3>
          <h4>${strGlass}</h4>
          <p>${strAlcoholic}</p>
          <a
              class="btn btn-primary btn-details"
              href="./about.html?name=${idDrink}"
              >details</a
          >
      </div>
    `;
    container.appendChild(div);
  });
}

export function aboutUpdateUI(cocktail) {
  const {
    strDrinkThumb,
    strDrink,
    strCategory,
    strAlcoholic,
    strGlass,
    strInstructions,
  } = cocktail;

  const image = document.querySelector(".image");
  const title = document.querySelector(".section-title");
  const name = document.querySelector(".name");
  const category = document.querySelector(".category");
  const info = document.querySelector(".info");
  const glass = document.querySelector(".glass");
  const instructons = document.querySelector(".instructons");
  const ingredients = document.querySelector(".ingredients");

  for (let i = 1; i < 16; i++) {
    if (!cocktail[`strIngredient${i}`]) {
      break;
    } else {
      ingredients.innerHTML += cocktail[`strIngredient${i}`] + ", ";
    }
  }
  image.src = strDrinkThumb;
  title.textContent = strDrink;
  name.innerHTML += strDrink;
  category.innerHTML += strCategory;
  info.innerHTML += strAlcoholic;
  glass.innerHTML += strGlass;
  instructons.innerHTML += strInstructions;
}
