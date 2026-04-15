
// 1. Zapis filmów w tablicy obiektów + Rozszerzenie (dodanie pola 'year')
const movies = [
    { title: "Arrival", category: "sci-fi", rating: 8.1, watched: true, year: 2016 },
    { title: "Whiplash", category: "drama", rating: 8.5, watched: false, year: 2014 },
    { title: "Dune", category: "sci-fi", rating: 8.0, watched: false, year: 2021 },
    { title: "Inside Out", category: "animation", rating: 8.1, watched: true, year: 2015 },
    { title: "Interstellar", category: "sci-fi", rating: 8.6, watched: false, year: 2014 } // Dodatkowy film
];

// 2. Utworzenie listy filmów jeszcze nieobejrzanych (użycie filter #1)
const unwatchedMovies = movies.filter(movie => !movie.watched);

// 3. Utworzenie listy filmów z oceną większą niż 8.0 (użycie filter #2)
const highRatedMovies = movies.filter(movie => movie.rating > 8.0);

// Rozszerzenie własne: Filtrowanie filmów sci-fi, które są nowsze niż 2015 rok (użycie filter #3)
const modernSciFi = movies.filter(movie => movie.category === "sci-fi" && movie.year > 2015);

// 4. Budowa osobnej tablicy zawierającej wyłącznie tytuły z wybranego zbioru (użycie map)
// Wybieramy tytuły filmów z wysoką oceną
const highRatedTitles = highRatedMovies.map(movie => movie.title);

// 5. Wyświetlenie wyników w formie raportu (użycie funkcji pomocniczej - rozszerzenie)
const displayReport = (title, data) => {
    console.log(`--- ${title.toUpperCase()} ---`);
    if (Array.isArray(data) && typeof data[0] === 'object') {
        // Jeśli przekazujemy całe obiekty, ładnie je formatujemy
        data.forEach(m => console.log(`* ${m.title} [Ocena: ${m.rating}, Rok: ${m.year}]`));
    } else {
        // Jeśli przekazujemy tylko listę tytułów
        data.forEach(t => console.log(`- ${t}`));
    }
    console.log("\n");
};

// Generowanie raportu końcowego
console.log("RAPORT KATALOGU FILMÓW\n");

displayReport("Filmy do obejrzenia", unwatchedMovies);
displayReport("Najwyżej oceniane (tytuły)", highRatedTitles);
displayReport("Nowoczesne Sci-Fi (po 2015)", modernSciFi);