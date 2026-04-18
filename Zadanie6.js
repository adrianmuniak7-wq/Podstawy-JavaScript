const movies = [
    { title: "Arrival", category: "sci-fi", rating: 8.1, watched: true, year: 2016 },
    { title: "Whiplash", category: "drama", rating: 8.5, watched: false, year: 2014 },
    { title: "Dune", category: "sci-fi", rating: 8.0, watched: false, year: 2021 },
    { title: "Inside Out", category: "animation", rating: 8.1, watched: true, year: 2015 },
    { title: "Interstellar", category: "sci-fi", rating: 8.6, watched: false, year: 2014 }
];

const unwatchedMovies = movies.filter(movie => !movie.watched);

const highRatedMovies = movies.filter(movie => movie.rating > 8.0);

const modernSciFi = movies.filter(movie => movie.category === "sci-fi" && movie.year > 2015);

const highRatedTitles = highRatedMovies.map(movie => movie.title);

const displayReport = (title, data) => {
    console.log(`--- ${title.toUpperCase()} ---`);
    if (Array.isArray(data) && typeof data[0] === 'object') {
        data.forEach(m => console.log(`* ${m.title} [Ocena: ${m.rating}, Rok: ${m.year}]`));
    } else {
        data.forEach(t => console.log(`- ${t}`));
    }
    console.log("\n");
};

console.log("RAPORT KATALOGU FILMÓW\n");

displayReport("Filmy do obejrzenia", unwatchedMovies);
displayReport("Najwyżej oceniane (tytuły)", highRatedTitles);
displayReport("Nowoczesne Sci-Fi (po 2015)", modernSciFi);
