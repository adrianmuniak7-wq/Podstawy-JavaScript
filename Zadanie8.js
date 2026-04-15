// 1. Punkt startowy
const grades = [3.0, 4.0, 5.0, 3.5, 4.5];

// 2. Minimalny próg zaliczenia
const PASS_THRESHOLD = 3.0;

// 4. Funkcja przyjmująca tablicę i zwracająca obiekt
function generateStudentReport(gradesArray) {
    // 1. Obliczanie średniej za pomocą reduce()
    const sum = gradesArray.reduce((acc, current) => acc + current, 0);
    const average = sum / gradesArray.length;

    // 3. Określenie statusu za pomocą operatora trójargumentowego
    const isPassed = average >= PASS_THRESHOLD;
    const status = isPassed ? "Zaliczone" : "Niezaliczone";

    // 5. Rozszerzenie własne: Klasyfikacja słowna oraz "bonus za pilność"
    const getClassification = (avg) => {
        if (avg >= 4.5) return "Bardzo dobry";
        if (avg >= 3.5) return "Dobry";
        if (avg >= 3.0) return "Dostateczny";
        return "Niedostateczny";
    };

    // Dodatkowa logika: Sprawdzenie, czy student ma same wysokie oceny (powyżej 4.0)
    const isExcellent = gradesArray.every(grade => grade >= 4.0);

    // Zwracanie obiektu z wynikami
    return {
        finalAverage: average.toFixed(2), // Zaokrąglenie do 2 miejsc
        status: status,
        gradeNote: getClassification(average),
        hasDistinction: isExcellent && isPassed ? "Tak (Wyróżnienie!)" : "Nie"
    };
}

// Wywołanie funkcji i wyświetlenie raportu
const studentResult = generateStudentReport(grades);

console.log("--- RAPORT KOŃCOWY STUDENTA ---");
console.log(`Średnia ocen: ${studentResult.finalAverage}`);
console.log(`Status: ${studentResult.status}`);
console.log(`Ocena opisowa: ${studentResult.gradeNote}`);
console.log(`Wyróżnienie rektora: ${studentResult.hasDistinction}`);

// Test dla gorszych ocen (rozszerzenie testowe)
const poorGrades = [2.0, 3.0, 2.5];
console.log("\n--- TEST DLA SŁABYCH OCEN ---");
console.log(generateStudentReport(poorGrades));