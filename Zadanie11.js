const tripCosts = [
    { label: "nocleg", amount: 420, paidBy: "Anna", category: "standard" },
    { label: "paliwo", amount: 260, paidBy: "Piotr", category: "standard" },
    { label: "jedzenie", amount: 180, paidBy: "Anna", category: "standard" },
    { label: "bilety", amount: 140, paidBy: "Ola", category: "standard" },
    { label: "pamiątki", amount: 100, paidBy: "Piotr", category: "luxury" }
];

const totalTripCost = tripCosts.reduce((sum, item) => sum + item.amount, 0);

const costsPerPerson = tripCosts.reduce((acc, item) => {
    const person = item.paidBy;
    if (!acc[person]) {
        acc[person] = 0;
    }
    acc[person] += item.amount;
    return acc;
}, {});

let topPayer = "";
let maxAmount = 0;

for (const person in costsPerPerson) {
    if (costsPerPerson[person] > maxAmount) {
        maxAmount = costsPerPerson[person];
        topPayer = person;
    }
}

const participants = Object.keys(costsPerPerson);
const sharePerPerson = totalTripCost / participants.length;

const formatMoney = (val) => `${val.toFixed(2)} PLN`;

console.log("RAPORT ROZLICZENIOWY WYJAZDU");
console.log("----------------------------");
console.log(`Całkowity koszt: ${formatMoney(totalTripCost)}`);
console.log(`Liczba uczestników: ${participants.length}`);
console.log(`Koszt na osobę: ${formatMoney(sharePerPerson)}`);
console.log(`Najwięcej zapłacił(a): ${topPayer} (${formatMoney(maxAmount)})`);

console.log("\nROZBICIE NA OSOBY:");
participants.forEach(person => {
    const paid = costsPerPerson[person];
    const balance = paid - sharePerPerson;
    
    let status = "";
    if (balance > 0) {
        status = `powinien otrzymać: ${formatMoney(balance)}`;
    } else if (balance < 0) {
        status = `powinien oddać: ${formatMoney(Math.abs(balance))}`;
    } else {
        status = "jest rozliczony na zero";
    }
    
    console.log(`- ${person}: wpłacono ${formatMoney(paid)} (${status})`);
});
