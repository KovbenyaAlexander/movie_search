export default async function apiSearch(event) {
    try {
        if (event) {
            event.preventDefault();
        }

        let textForSearch = document.querySelector(".input").value;

        const server = `https://api.themoviedb.org/3/search/multi?api_key=888e6f69f5b71f4265688d6b69d2a141&language=en&query=${textForSearch}`;
        const response = await fetch(server);
        const data = await response.json();

        console.log(data);

    } catch (err) {
        alert("Something went wrong");
        window.location.reload();
    }

}