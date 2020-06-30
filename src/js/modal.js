export default function modalWindowDrawing(data) {

    const urlPoster = "https://image.tmdb.org/t/p/w500";
    const swiperItems = document.querySelectorAll(".swiper-slide");

    for (let itemOfslider of swiperItems) {
        itemOfslider.addEventListener("click", () => showModalWindow(itemOfslider, data.results));
    }

    function showModalWindow(itemOfslider, data) {

        const modal = document.querySelector(".modal");
        modal.classList.add("open");

        const movieId = itemOfslider.getAttribute("pos");
        const modalWindow = document.querySelector(".modal-window");

        (async () => {
            try {

                let url;
                if (data[movieId].media_type === "movie") {
                    url = `https://api.themoviedb.org/3/movie/${data[movieId].id}?api_key=888e6f69f5b71f4265688d6b69d2a141&language=en`;
                } else if (data[movieId].media_type === "tv") {
                    url = `https://api.themoviedb.org/3/tv/${data[movieId].id}?api_key=888e6f69f5b71f4265688d6b69d2a141&language=en`;
                } else if (data[movieId].media_type === "person") {
                    url = `https://api.themoviedb.org/3/person/${data[movieId].id}?api_key=888e6f69f5b71f4265688d6b69d2a141&language=en`;
                }

                const response = await fetch(url);
                const additionalData = await response.json();

                if (data[movieId].original_title) {
                    modalWindow.innerHTML = `<h2><p class = modal__original_title>${data[movieId].original_title}</p> <p><a href="#" class="close"></p></h2>`;
                } else {
                    modalWindow.innerHTML = `<h2><p class = modal__original_title>Original title not found</p> <p><a href="#" class="close"></p></h2>`;
                }

                if (additionalData.tagline) {
                    modalWindow.innerHTML += `<p class = modal__tagline>${additionalData.tagline}</p>`;
                }

                modalWindow.innerHTML += "<hr>";

                if (data[movieId].poster_path) {
                    modalWindow.innerHTML += `<img class ="modal__poster" src="${urlPoster}${data[movieId].poster_path}">`;
                } else {
                    modalWindow.innerHTML += "<img class =\"modal__poster\" src=\"https://kritka.info/uploads/posts/no_poster.jpg\" width=\"100%\" height=\"80%\">";
                }

                if (data[movieId].overview) {
                    modalWindow.innerHTML += `<p class = modal__movie_overview>${data[movieId].overview}</p>`;
                }

                modalWindow.innerHTML += "<hr>";

                if (data[movieId].release_date) {
                    modalWindow.innerHTML += `<p class="modal__date_of_release">Date of release: ${data[movieId].release_date}</p><hr>`;
                } else {
                    modalWindow.innerHTML += "<p class=\"modal__date_of_release\">Date of release not found</p><hr>";
                }

                if (additionalData.imdb_id) {
                    modalWindow.innerHTML += `<a href="https://imdb.com/title/${additionalData.imdb_id}" class="modal__link" imdb_link target="_blank">IMDB.com</a>`;
                    if (additionalData.homepage) {
                        modalWindow.innerHTML += `<a href="${additionalData.homepage}" class="modal__link" target="_blank">Official site</a>`;
                    }
                } else {
                    if (additionalData.homepage) {
                        modalWindow.innerHTML += `<a href="${additionalData.homepage}" class="modal__link_homepage" target="_blank">Official site</a>`;
                    }
                }


                const modalOverlay = document.querySelector(".modal-overlay");
                modalOverlay.addEventListener("click", (e) => {
                    if (modalOverlay === e.target) {
                        modalWindow.innerHTML = "";
                        modal.classList.remove("open");
                    }
                });

                const closeButton = document.querySelector(".close");

                closeButton.addEventListener("click", () => {
                    modalWindow.innerHTML = "";
                    modal.classList.remove("open");
                });

                document.addEventListener(`keydown`, (e) => {
                    if (e.key === `Escape`) {
                        modal.classList.remove("open");
                    }
                });

            } catch (err) {
                alert("Something went wrong. The page will reboot.");
                window.location.reload();
            }

        })();

    }
}