import { getFromStorage } from "./storage";
import apiSearch from "./apiSearch";
import drawingResults from "./drawingResults";


let response;

if (getFromStorage("lastTextForSearch")) {
    response = apiSearch(null, getFromStorage("lastTextForSearch"));
    response.then((response) => {
        drawingResults(response);
    });
} else {
    response = apiSearch(null, "Avengers");
    response.then((response) => {
        drawingResults(response);
    });
}


const searchForm = document.querySelector(".search-form");

searchForm.addEventListener("submit", (e) => {

    const response = apiSearch(e);
    response.then((response) => {
        drawingResults(response);
    });

});