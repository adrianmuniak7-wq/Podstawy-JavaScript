const contacts = [
    { name: "Anna Nowak", phone: "500-100-200", city: "Katowice", favorite: true, email: "anna@test.pl" },
    { name: "Piotr Lis", phone: "501-300-700", city: "Sosnowiec", favorite: false, email: "piotr@test.pl" },
    { name: "Ola Marek", phone: "502-400-900", city: "Katowice", favorite: true, email: "ola@test.pl" },
    { name: "Jan Nowakowski", phone: "503-600-100", city: "Tychy", favorite: false, email: "jan@test.pl" }
];

const filterByCity = (data, cityName) => {
    return data.filter(contact => contact.city === cityName);
};

const filterFavorites = (data) => {
    return data.filter(contact => contact.favorite === true);
};

const searchByName = (data, searchPhrase) => {
    const query = searchPhrase.toLowerCase();
    return data.filter(contact => contact.name.toLowerCase().includes(query));
};

const formatContacts = (data) => {
    return data.map(contact => `${contact.name} — ${contact.phone} [${contact.email}]`);
};

console.log("WYNIKI WYSZUKIWANIA");
console.log("-------------------");

const katowiceContacts = filterByCity(contacts, "Katowice");
const favKatowiceContacts = filterFavorites(katowiceContacts);
const report1 = formatContacts(favKatowiceContacts);

console.log("Przypadek 1: Ulubione z Katowic");
report1.forEach(entry => console.log(entry));
console.log("");

const searchResults = searchByName(contacts, "now");
const report2 = formatContacts(searchResults);

console.log("Przypadek 2: Wyszukiwanie frazy 'now'");
report2.forEach(entry => console.log(entry));
