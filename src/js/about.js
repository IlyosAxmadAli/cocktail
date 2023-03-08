import "../css/style.css";
import { fetchApi } from "./request";
import { aboutUpdateUI } from "./cocktailslist";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const ruery = window.location.search;
const urlParams = new URLSearchParams(ruery);
const aboutApi = urlParams.get("name");

fetchApi(`${url}${aboutApi}`).then((data) => {
  console.log(data);
  aboutUpdateUI(data[0]);
});
