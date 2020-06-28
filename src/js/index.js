import apiSearch from "./apiSearch";
import drawingResults from "./drawingResults";


const searchForm = document.querySelector(".search-form");

searchForm.addEventListener("submit", (e) => {

    const response = apiSearch(e);
    response.then((response) => {
        drawingResults(response);
    });

});