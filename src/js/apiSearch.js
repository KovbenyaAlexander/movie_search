import { setToStorage, getFromStorage } from "./storage";
import { showLoader, hideLoader } from "./loader";
import drawingResults from "./drawingResults";


export default async function apiSearch(event, lastTextForSearch) {
    try {

        showLoader();

        if (event) {
            event.preventDefault();
        }

        let textForSearch = document.querySelector(".input").value;

        if (lastTextForSearch) {
            textForSearch = lastTextForSearch;
        }

        if (textForSearch === "") {
            alert("Empty string! Showing last succes request");
            textForSearch = getFromStorage("lastTextForSearch");
        }

        const server = `https://api.themoviedb.org/3/search/multi?api_key=888e6f69f5b71f4265688d6b69d2a141&language=en&query=${textForSearch}`;
        const response = await fetch(server);
        const data = await response.json();


        if (textForSearch && data.results.length != 0) {
            setToStorage("lastTextForSearch", textForSearch);
        } else {

            alert("The results not found! Showing last succes request.");

            const response = apiSearch(null, getFromStorage("lastTextForSearch"));
            response.then((response) => {
                drawingResults(response);
            });
        }

        hideLoader();
        return data;

    } catch (err) {
        alert("Something went wrong");
        window.location.reload();
    }

}