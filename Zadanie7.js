const repairs = [
    { id: 1, client: "Anna", device: "laptop", status: "nowe", cost: 0 },
    { id: 2, client: "Piotr", device: "telefon", status: "w trakcie", cost: 150 },
    { id: 3, client: "Ola", device: "tablet", status: "zakończone", cost: 300 }
];

const repairIdToFind = 2;
const foundRepair = repairs.find(repair => repair.id === repairIdToFind);

console.log("Znalezione zgłoszenie:", foundRepair);

const updatedRepairs = repairs.map(repair => {
    if (repair.id === 1) {
        return { ...repair, status: "w trakcie", cost: 250 };
    }
    return repair;
});

const inProgressCount = updatedRepairs.filter(r => r.status === "w trakcie").length;

console.log("--- ORYGINALNA TABLICA (niezmieniona) ---");
console.table(repairs);

console.log("--- ZAKTUALIZOWANA TABLICA ---");
console.table(updatedRepairs);

console.log(`Liczba napraw w toku: ${inProgressCount}`);

const calculateTotalRevenue = (data) => {
    return data
        .filter(r => r.status !== "zakończone")
        .reduce((sum, current) => sum + current.cost, 0);
};

const totalRevenue = calculateTotalRevenue(updatedRepairs);
console.log(`>>> Rozszerzenie: Przewidywany przychód z trwających napraw: ${totalRevenue} PLN`);
