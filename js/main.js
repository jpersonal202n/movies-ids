// const urlParams = new URLSearchParams(window.location.search);
// const myParam   = urlParams.get('id');

class Api {
    constructor(_endpoint) {
        this.domain   = "https://api.themoviedb.org/3/";
        this.endpoint = _endpoint;
    }

    async get(params) {
        let URL = this.domain+this.endpoint+params;
        return await fetch(URL);
    }
}

class MovieService extends Api {
    
    constructor() {
        super("movie/157336");
    }

    async getMovies(params) {
        return this.get(params);
    }

}

let moviesService = new MovieService();
let params = "?api_key=1ba39c30492a7fe2105c6bbbbbc99b4b";

let response = moviesService.getMovies(params);
response.then(res => res.json())
    .then(res => console.log(res));


let movies = [
    {
        id:1,
        title:"Nueva pelicula",
        url_image:"https://www.themoviedb.org/t/p/w440_and_h660_face/fNtqD4BTFj0Bgo9lyoAtmNFzxHN.jpg"
    },
    {
        id:1,
        title:"Nueva pelicula",
        url_image:"https://www.themoviedb.org/t/p/w440_and_h660_face/fNtqD4BTFj0Bgo9lyoAtmNFzxHN.jpg"
    },
    {
        id:1,
        title:"Nueva pelicula",
        url_image:"https://www.themoviedb.org/t/p/w440_and_h660_face/fNtqD4BTFj0Bgo9lyoAtmNFzxHN.jpg"
    },
    {
        id:1,
        title:"Nueva pelicula",
        url_image:"https://www.themoviedb.org/t/p/w440_and_h660_face/fNtqD4BTFj0Bgo9lyoAtmNFzxHN.jpg"
    }
];



let content = document.getElementById("peliculas-items");

movies.map((movie) => {
    let peliculaCard = document.createElement("div");
    peliculaCard.className = "pelicula";
    let img = document.createElement("img");
    img.src = movie.url_image;

    let titleMovie = document.createElement("h4");
    titleMovie.textContent = movie.title;
    titleMovie.className = "pelicula-titulo";

    peliculaCard.appendChild(img);
    peliculaCard.appendChild(titleMovie);
    content.appendChild(peliculaCard);
});
