// Punkt startowy + rozszerzenie własne: dodanie pola 'duration' (czas w minutach) oraz dodatkowego wpisu dla testów
const schedule = [
    { day: "poniedziałek", subject: "Programowanie", room: "A12", online: false, duration: 90 },
    { day: "poniedziałek", subject: "Analiza matematyczna", room: "C10", online: false, duration: 90 },
    { day: "wtorek", subject: "Bazy danych", room: "online", online: true, duration: 120 },
    { day: "czwartek", subject: "Grafika", room: "B03", online: false, duration: 90 },
    { day: "piątek", subject: "UX", room: "online", online: true, duration: 45 }
];

// 1. Funkcja zwracająca zajęcia dla podanego dnia tygodnia
const getClassesForDay = (data, targetDay) => {
    return data.filter(item => item.day === targetDay);
};

// 5. Rozszerzenie własne: Funkcja zwracająca tylko zajęcia w określonym trybie (online/stacjonarnie)
const getClassesByMode = (data, isOnline) => {
    return data.filter(item => item.online === isOnline);
};

// 2 & 3. Funkcja formatująca wyniki z warunkowym oznaczeniem trybu
const formatSchedule = (data) => {
    return data.map(item => {
        // Operator trójargumentowy do określenia trybu
        const modeStatus = item.online ? "Online" : "Stacjonarnie";
        return `${item.subject} — Sala: ${item.room} — Tryb: ${modeStatus} (${item.duration} min)`;
    });
};

// 4. Zliczenie wszystkich zajęć w tygodniu
const totalClassesCount = schedule.length;

//  GENEROWANIE RAPORTU 

console.log("PLAN ZAJĘĆ - RAPORT");
console.log("-------------------");
console.log(`Łączna liczba zajęć w tygodniu: ${totalClassesCount}\n`);

// Przypadek 1: Wyświetlenie planu na konkretny dzień
const dayToSearch = "poniedziałek";
const dayClasses = getClassesForDay(schedule, dayToSearch);
const formattedDayClasses = formatSchedule(dayClasses);

console.log(`Plan na: ${dayToSearch.toUpperCase()}`);
if (formattedDayClasses.length > 0) {
    formattedDayClasses.forEach(entry => console.log(`* ${entry}`));
} else {
    console.log("Brak zajęć w tym dniu.");
}

// Przypadek 2 (Rozszerzenie): Wyświetlenie wszystkich zajęć online z całego tygodnia
console.log("\nZESTAWIENIE ZAJĘĆ ZDALNYCH (ONLINE):");
const onlineClasses = getClassesByMode(schedule, true);
const formattedOnlineClasses = formatSchedule(onlineClasses);

formattedOnlineClasses.forEach(entry => console.log(`* ${entry}`));