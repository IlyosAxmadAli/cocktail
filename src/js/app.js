import "../css/style.css";
import "./form";
import { updateUI } from "./cocktailslist";
import { fetchApi } from "./request";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

fetchApi(url).then((items) => {
  updateUI(items);
});