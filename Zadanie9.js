// 1. Punkt startowy
const cart = [
    { name: "Chleb", price: 4.5, quantity: 2, category: "food" },
    { name: "Ser", price: 9.9, quantity: 1, category: "food" },
    { name: "Sok", price: 6.2, quantity: 3, category: "drink" }
];

const discountThreshold = 30;
const discountPercent = 10;

// --- ROZSZERZENIE WŁASNE: Funkcja pomocnicza do formatowania waluty ---
const formatPLN = (value) => `${value.toFixed(2)} zł`;

// 1 & 3. Obliczenie wartości pozycji i budowa opisów tekstowych (użycie map)
const cartSummary = cart.map(item => {
    const itemTotal = item.price * item.quantity;
    return {
        description: `${item.quantity} x ${item.name} (${formatPLN(itemTotal)})`,
        lineTotal: itemTotal
    };
});

// 2. Obliczenie łącznej wartości koszyka (użycie reduce)
const totalBeforeDiscount = cartSummary.reduce((sum, item) => sum + item.lineTotal, 0);

// 4. Logika rabatu
let finalTotal = totalBeforeDiscount;
let discountApplied = false;

if (totalBeforeDiscount > discountThreshold) {
    const discountAmount = (totalBeforeDiscount * discountPercent) / 100;
    finalTotal = totalBeforeDiscount - discountAmount;
    discountApplied = true;
}

// 5. Wyświetlenie raportu końcowego
console.log("------- TWOJE ZAKUPY -------");
cartSummary.forEach(item => console.log(item.description));
console.log("----------------------------");
console.log(`Suma częściowa: ${formatPLN(totalBeforeDiscount)}`);

if (discountApplied) {
    console.log(`Rabat (${discountPercent}%): -${formatPLN(totalBeforeDiscount - finalTotal)}`);
    console.log(`DO ZAPŁATY PO RABACIE: ${formatPLN(finalTotal)}`);
} else {
    console.log(`Brakuje ${formatPLN(discountThreshold - totalBeforeDiscount)} do darmowego rabatu!`);
    console.log(`DO ZAPŁATY: ${formatPLN(finalTotal)}`);
}

// --- DODATKOWE ROZSZERZENIE: Statystyka kategorii ---
const drinksCount = cart
    .filter(item => item.category === "drink")
    .reduce((acc, item) => acc + item.quantity, 0);

console.log(`\nLogistyka: W koszyku masz ${drinksCount} szt. napojów.`);