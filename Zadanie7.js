// 1. Punkt startowy + Rozszerzenie własne: dodanie pola 'cost'
const repairs = [
    { id: 1, client: "Anna", device: "laptop", status: "nowe", cost: 0 },
    { id: 2, client: "Piotr", device: "telefon", status: "w trakcie", cost: 150 },
    { id: 3, client: "Ola", device: "tablet", status: "zakończone", cost: 300 }
];

// 1. Znajdź zgłoszenie o wskazanym id (użycie find)
const repairIdToFind = 2;
const foundRepair = repairs.find(repair => repair.id === repairIdToFind);

console.log("Znalezione zgłoszenie:", foundRepair);

// 2 & 3. Aktualizacja statusu bez modyfikacji oryginału (użycie map i spread syntax)
// Chcemy zmienić status zgłoszenia nr 1 na "w trakcie" i dodać szacowany koszt
const updatedRepairs = repairs.map(repair => {
    if (repair.id === 1) {
        // Zwracamy nowy obiekt: kopiujemy stare właściwości (...repair) i nadpisujemy wybrane
        return { ...repair, status: "w trakcie", cost: 250 };
    }
    // Dla pozostałych zwracamy obiekt bez zmian
    return repair;
});

// 4. Policz, ile zgłoszeń ma status "w trakcie" (użycie filter + length)
const inProgressCount = updatedRepairs.filter(r => r.status === "w trakcie").length;

// 5. Wyświetl wyniki, aby pokazać różnicę
console.log("--- ORYGINALNA TABLICA (niezmieniona) ---");
console.table(repairs);

console.log("--- ZAKTUALIZOWANA TABLICA ---");
console.table(updatedRepairs);

console.log(`Liczba napraw w toku: ${inProgressCount}`);

// --- ROZSZERZENIE WŁASNE ---
// Funkcja pomocnicza obliczająca łączny przewidywany przychód z aktywnych napraw
const calculateTotalRevenue = (data) => {
    return data
        .filter(r => r.status !== "zakończone")
        .reduce((sum, current) => sum + current.cost, 0);
};

const totalRevenue = calculateTotalRevenue(updatedRepairs);
console.log(`>>> Rozszerzenie: Przewidywany przychód z trwających napraw: ${totalRevenue} PLN`);