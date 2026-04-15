// 1. Dane wejściowe jako tablica obiektów
const activities = [
    { type: "bieg", minutes: 35, calories: 320 },
    { type: "rower", minutes: 50, calories: 410 },
    { type: "spacer", minutes: 20, calories: 90 },
    { type: "siłownia", minutes: 60, calories: 450 }
];

// 1. Policz łączny czas wszystkich aktywności (użycie reduce)
const totalTime = activities.reduce((sum, act) => sum + act.minutes, 0);

// 2. Policz łączną liczbę spalonych kalorii (użycie reduce)
const totalCalories = activities.reduce((sum, act) => sum + act.calories, 0);

// 3. Odfiltruj aktywności dłuższe niż 30 minut (użycie filter)
const longActivities = activities.filter(act => act.minutes > 30);

// --- 5. ROZSZERZENIE WŁASNE: Znalezienie najbardziej kalorycznego treningu ---
// Używamy reduce, aby porównać obiekty i zwrócić ten z największą liczbą kalorii
const mostIntense = activities.reduce((prev, current) => 
    (prev.calories > current.calories) ? prev : current
);

// --- 5. ROZSZERZENIE WŁASNE: Funkcja do zamiany minut na godziny i minuty ---
const formatDuration = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const mins = totalMinutes % 60;
    return hours > 0 ? `${hours}h ${mins}min` : `${mins}min`;
};

// 4. Budowa raportu tekstowego z użyciem template literals
const report = `
======= RAPORT AKTYWNOŚCI =======
 Łączny czas treningów: ${formatDuration(totalTime)} (${totalTime} min)
 Wszystkie spalone kalorie: ${totalCalories} kcal
 Liczba intensywnych sesji (>30 min): ${longActivities.length}

 NAJWIĘKSZY WYSIŁEK:
Trening: ${mostIntense.type.toUpperCase()}
Spalono: ${mostIntense.calories} kcal w czasie ${mostIntense.minutes} min
====================================
`;

// Wyświetlenie raportu
console.log(report);