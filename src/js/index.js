import { getFromStorage } from "./storage";
import apiSearch from "./apiSearch";
import drawingResults from "./drawingResults";

if (getFromStorage("lastTextForSearch")) {
  const response = apiSearch(null, getFromStorage("lastTextForSearch"));
  response.then((resp) => {
    drawingResults(resp);
  });
} else {
  const response = apiSearch(null, "Avengers");
  response.then((resp) => {
    drawingResults(resp);
  });
}

const searchForm = document.querySelector(".search-form");

searchForm.addEventListener("submit", (e) => {
  const response = apiSearch(e);
  response.then((resp) => {
    drawingResults(resp);
  });
});
