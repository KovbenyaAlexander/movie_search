import { setToStorage } from "./storage";


export default async function apiSearch(event, lastTextForSearch) {
    try {

        if (event) {
            event.preventDefault();
        }

        let textForSearch = document.querySelector(".input").value;

        if (lastTextForSearch) {
            textForSearch = lastTextForSearch;
        }

        setToStorage("lastTextForSearch", textForSearch);

        const server = `https://api.themoviedb.org/3/search/multi?api_key=888e6f69f5b71f4265688d6b69d2a141&language=en&query=${textForSearch}`;
        const response = await fetch(server);
        const data = await response.json();

        return data;

    } catch (err) {
        alert("Something went wrong");
        window.location.reload();
    }

}