import { swiper } from "./swiper";
import createDomElement from "./createDomElement";

export default function drawingResults(data) {


    const swiperWrapper = document.querySelector(".swiper-wrapper");
    swiperWrapper.innerHTML = "";
    for (let i = 0; i < 20; i++) {
        createDomElement("div", ["swiper-slide", `slide_${i}`], null, swiperWrapper, i);
    }

    const urlPoster = "https://image.tmdb.org/t/p/w500";

    for (let i = 0; i < 20; i++) {
        const swiperItem = document.querySelectorAll(`.slide_${i}`);

        if (i < data.results.length) {
            for (let item of swiperItem) {
                item.setAttribute("pos", i);

                if (data.results[i].original_title) {
                    item.innerHTML = `<p class="name-of-movie">${data.results[i].original_title}</p>`;
                } else {
                    item.innerHTML = "<p class=\"name-of-movie\">Original title not found</p>";
                }

                if (data.results[i].poster_path) {
                    item.innerHTML += `<img src="${urlPoster}${data.results[i].poster_path}" width="100%" height="80%">`;
                } else {
                    item.innerHTML += "<img src=\"https://kritka.info/uploads/posts/no_poster.jpg\" width=\"100%\" height=\"80%\">";
                }

            }
        } else {
            for (let item of swiperItem) {
                item.remove();
            }
        }
    }

    swiper.update();
}