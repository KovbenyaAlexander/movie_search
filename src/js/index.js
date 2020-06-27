import apiSearch from "./apiSearch";

const searchForm = document.querySelector(".search-form");

searchForm.addEventListener("submit", (e) => {
    apiSearch(e);
});