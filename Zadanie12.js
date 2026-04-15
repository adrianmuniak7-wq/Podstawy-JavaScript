// Punkt startowy + rozszerzenie własne (dodanie pola email)
const contacts = [
    { name: "Anna Nowak", phone: "500-100-200", city: "Katowice", favorite: true, email: "anna@test.pl" },
    { name: "Piotr Lis", phone: "501-300-700", city: "Sosnowiec", favorite: false, email: "piotr@test.pl" },
    { name: "Ola Marek", phone: "502-400-900", city: "Katowice", favorite: true, email: "ola@test.pl" },
    { name: "Jan Nowakowski", phone: "503-600-100", city: "Tychy", favorite: false, email: "jan@test.pl" }
];

// 1. Funkcja zwracająca kontakty z wybranego miasta
const filterByCity = (data, cityName) => {
    return data.filter(contact => contact.city === cityName);
};

// 2. Funkcja zwracająca tylko ulubione kontakty
const filterFavorites = (data) => {
    return data.filter(contact => contact.favorite === true);
};

// 5. Rozszerzenie własne: Wyszukiwanie po fragmencie nazwy (niezależne od wielkości liter)
const searchByName = (data, searchPhrase) => {
    const query = searchPhrase.toLowerCase();
    return data.filter(contact => contact.name.toLowerCase().includes(query));
};

// 3. Funkcja formatująca wynik (imię - telefon - email)
const formatContacts = (data) => {
    return data.map(contact => `${contact.name} — ${contact.phone} [${contact.email}]`);
};

// 4. Wywołania funkcji dla różnych przypadków

console.log("WYNIKI WYSZUKIWANIA");
console.log("-------------------");

// Przypadek 1: Szukamy ulubionych kontaktów z Katowic
// Wyniki z jednej funkcji przekazujemy jako argument do kolejnej
const katowiceContacts = filterByCity(contacts, "Katowice");
const favKatowiceContacts = filterFavorites(katowiceContacts);
const report1 = formatContacts(favKatowiceContacts);

console.log("Przypadek 1: Ulubione z Katowic");
report1.forEach(entry => console.log(entry));
console.log("");

// Przypadek 2: Szukamy osób, których nazwisko/imię zawiera frazę "now"
const searchResults = searchByName(contacts, "now");
const report2 = formatContacts(searchResults);

console.log("Przypadek 2: Wyszukiwanie frazy 'now'");
report2.forEach(entry => console.log(entry));