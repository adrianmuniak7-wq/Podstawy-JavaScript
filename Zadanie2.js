const expenses = [18.5, 42, 9.99, 27, 61.3, 15, 33.5];

// 1. Suma wydatków (reduce)
const total = expenses.reduce((sum, value) => sum + value, 0);

// 2. Średnia
const average = total / expenses.length;

// 3. Największy wydatek
const max = Math.max(...expenses);

// 4. Raport końcowy (template literals)
console.log("=== RAPORT BUDŻETU ===");
console.log(`Suma wydatków: ${total.toFixed(2)} zł`);
console.log(`Średni wydatek: ${average.toFixed(2)} zł`);
console.log(`Największy wydatek: ${max.toFixed(2)} zł`);

// --- rozszerzenie własne ---
// np. sprawdzenie czy przekroczono budżet
const budgetLimit = 150;

if (total > budgetLimit) {
  console.log(" Przekroczono budżet!");
} else {
  console.log(" Budżet pod kontrolą.");
}