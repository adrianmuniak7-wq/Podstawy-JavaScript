const grades = [3.0, 4.0, 5.0, 3.5, 4.5];

const PASS_THRESHOLD = 3.0;

function generateStudentReport(gradesArray) {
    const sum = gradesArray.reduce((acc, current) => acc + current, 0);
    const average = sum / gradesArray.length;

    const isPassed = average >= PASS_THRESHOLD;
    const status = isPassed ? "Zaliczone" : "Niezaliczone";

    const getClassification = (avg) => {
        if (avg >= 4.5) return "Bardzo dobry";
        if (avg >= 3.5) return "Dobry";
        if (avg >= 3.0) return "Dostateczny";
        return "Niedostateczny";
    };

    const isExcellent = gradesArray.every(grade => grade >= 4.0);

    return {
        finalAverage: average.toFixed(2),
        status: status,
        gradeNote: getClassification(average),
        hasDistinction: isExcellent && isPassed ? "Tak (Wyróżnienie!)" : "Nie"
    };
}

const studentResult = generateStudentReport(grades);

console.log("--- RAPORT KOŃCOWY STUDENTA ---");
console.log(`Średnia ocen: ${studentResult.finalAverage}`);
console.log(`Status: ${studentResult.status}`);
console.log(`Ocena opisowa: ${studentResult.gradeNote}`);
console.log(`Wyróżnienie rektora: ${studentResult.hasDistinction}`);

const poorGrades = [2.0, 3.0, 2.5];
console.log("\n--- TEST DLA SŁABYCH OCEN ---");
console.log(generateStudentReport(poorGrades));
