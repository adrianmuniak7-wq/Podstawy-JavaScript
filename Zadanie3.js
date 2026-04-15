const shoppingList = [
  { name: "chleb", quantity: 2, urgent: true },
  { name: "mleko", quantity: 1, urgent: false },
  { name: "jajka", quantity: 10, urgent: true },
  { name: "makaron", quantity: 3, urgent: false }
];

// 1. Wyświetlenie wszystkich produktów
console.log("=== LISTA ZAKUPÓW ===");
shoppingList.forEach(item => {
  console.log(`${item.name} - ilość: ${item.quantity}`);
});

// 2. Filtrowanie produktów pilnych
const urgentItems = shoppingList.filter(item => item.urgent);

// 3. Nowa tablica nazw (WIELKIE LITERY)
const upperCaseNames = shoppingList.map(item => item.name.toUpperCase());

// 4. Wyniki
console.log("\n=== PRODUKTY PILNE ===");
urgentItems.forEach(item => {
  console.log(item.name);
});

console.log(`\nLiczba pilnych produktów: ${urgentItems.length}`);

console.log("\n=== NAZWY PRODUKTÓW (DUŻE LITERY) ===");
console.log(upperCaseNames);

// --- rozszerzenie własne ---
// np. produkty których ilość > 2
const bigQuantity = shoppingList.filter(item => item.quantity > 2);

console.log("\n=== DUŻE ILOŚCI (>2) ===");
bigQuantity.forEach(item => {
  console.log(`${item.name} (${item.quantity})`);
});