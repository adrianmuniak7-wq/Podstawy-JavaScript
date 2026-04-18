const cart = [
    { name: "Chleb", price: 4.5, quantity: 2, category: "food" },
    { name: "Ser", price: 9.9, quantity: 1, category: "food" },
    { name: "Sok", price: 6.2, quantity: 3, category: "drink" }
];

const discountThreshold = 30;
const discountPercent = 10;

const formatPLN = (value) => `${value.toFixed(2)} zł`;

const cartSummary = cart.map(item => {
    const itemTotal = item.price * item.quantity;
    return {
        description: `${item.quantity} x ${item.name} (${formatPLN(itemTotal)})`,
        lineTotal: itemTotal
    };
});

const totalBeforeDiscount = cartSummary.reduce((sum, item) => sum + item.lineTotal, 0);

let finalTotal = totalBeforeDiscount;
let discountApplied = false;

if (totalBeforeDiscount > discountThreshold) {
    const discountAmount = (totalBeforeDiscount * discountPercent) / 100;
    finalTotal = totalBeforeDiscount - discountAmount;
    discountApplied = true;
}

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

const drinksCount = cart
    .filter(item => item.category === "drink")
    .reduce((acc, item) => acc + item.quantity, 0);

console.log(`\nLogistyka: W koszyku masz ${drinksCount} szt. napojów.`);
