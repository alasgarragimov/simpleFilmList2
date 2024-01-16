const movies = [{
        Title: "The Lego Movie",
        Year: "2014",
        imdbID: "tt1490017",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_SX300.jpg",
    },
    {
        Title: "The Simpsons Movie",
        Year: "2007",
        imdbID: "tt0462538",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BNjc4NmQyNGUtMDg4NS00ZTZkLWI3ODQtMGJmYThiYjQxNGRiXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
    },
    {
        Title: "El Camino: A Breaking Bad Movie",
        Year: "2019",
        imdbID: "tt9243946",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BNjk4MzVlM2UtZGM0ZC00M2M1LThkMWEtZjUyN2U2ZTc0NmM5XkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_SX300.jpg",
    },
    {
        Title: "Scary Movie",
        Year: "2000",
        imdbID: "tt0175142",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMGEzZjdjMGQtZmYzZC00N2I4LThiY2QtNWY5ZmQ3M2ExZmM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",

    }, {
        Title: "The Lego Movie",
        Year: "2014",
        imdbID: "tt1490017",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_SX300.jpg",
    },
    {
        Title: "The Simpsons Movie",
        Year: "2007",
        imdbID: "tt0462538",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BNjc4NmQyNGUtMDg4NS00ZTZkLWI3ODQtMGJmYThiYjQxNGRiXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
    },
    {
        Title: "El Camino: A Breaking Bad Movie",
        Year: "2019",
        imdbID: "tt9243946",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BNjk4MzVlM2UtZGM0ZC00M2M1LThkMWEtZjUyN2U2ZTc0NmM5XkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_SX300.jpg",
    },
    {
        Title: "Scary Movie",
        Year: "2000",
        imdbID: "tt0175142",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMGEzZjdjMGQtZmYzZC00N2I4LThiY2QtNWY5ZmQ3M2ExZmM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",

    }, {
        Title: "The Lego Movie",
        Year: "2014",
        imdbID: "tt1490017",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_SX300.jpg",
    },
    {
        Title: "The Simpsons Movie",
        Year: "2007",
        imdbID: "tt0462538",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BNjc4NmQyNGUtMDg4NS00ZTZkLWI3ODQtMGJmYThiYjQxNGRiXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
    },
    {
        Title: "El Camino: A Breaking Bad Movie",
        Year: "2019",
        imdbID: "tt9243946",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BNjk4MzVlM2UtZGM0ZC00M2M1LThkMWEtZjUyN2U2ZTc0NmM5XkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_SX300.jpg",
    },
    {
        Title: "Scary Movie",
        Year: "2000",
        imdbID: "tt0175142",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMGEzZjdjMGQtZmYzZC00N2I4LThiY2QtNWY5ZmQ3M2ExZmM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",

    }, {
        Title: "The Lego Movie",
        Year: "2014",
        imdbID: "tt1490017",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_SX300.jpg",
    },
    {
        Title: "The Simpsons Movie",
        Year: "2007",
        imdbID: "tt0462538",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BNjc4NmQyNGUtMDg4NS00ZTZkLWI3ODQtMGJmYThiYjQxNGRiXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
    },
    {
        Title: "El Camino: A Breaking Bad Movie",
        Year: "2019",
        imdbID: "tt9243946",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BNjk4MzVlM2UtZGM0ZC00M2M1LThkMWEtZjUyN2U2ZTc0NmM5XkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_SX300.jpg",
    },
    {
        Title: "Scary Movie",
        Year: "2000",
        imdbID: "tt0175142",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMGEzZjdjMGQtZmYzZC00N2I4LThiY2QtNWY5ZmQ3M2ExZmM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",

    },

];


function displayMovies(movieList) {
    const resultsContainer = document.querySelector('.results');
    resultsContainer.innerHTML = '';

    movieList.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
        <h2>${movie.Title} (${movie.Year})</h2>
        <img src="${movie.Poster}" alt="${movie.Title}" />
    `;
        resultsContainer.appendChild(movieElement);
    });
}

function searchMovies() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredMovies = movies.filter(movie => movie.Title.toLowerCase().includes(searchTerm));
    displayMovies(filteredMovies);
}

function filterMovies(category) {
    let filteredMovies;

    switch (category) {
        case 'Now Playing':

            filteredMovies = movies.filter(movie => movie.Year === '2023');
            break;
        case 'Top Rated':

            filteredMovies = movies.filter(movie => parseFloat(movie.imdbID) >= 8.0);
            break;
        default:

            filteredMovies = movies;
    }

    displayMovies(filteredMovies);
}


displayMovies(movies);