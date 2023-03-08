import {fetchApi} from "./request";
import { updateUI } from "./cocktailslist";

const input = document.querySelector("#input");

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

input.addEventListener("input", () => {
  fetchApi(`${url}${input.value}`).then((items) => {
    updateUI(items);
  });
});
