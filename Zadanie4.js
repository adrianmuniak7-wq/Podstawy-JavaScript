// 1. Punkt startowy + Rozszerzenie własne (hasStudentCard)
const hasLaptop = true;
const hasCharger = false;
const hasNotebook = true;
const dayType = "laboratorium";
const hasStudentCard = true; // Moje rozszerzenie: sprawdzenie legitymacji

// Funkcja pomocnicza do formatowania komunikatów (Dodatkowe rozszerzenie)
const printStatus = (msg) => console.log(`>>> ${msg}`);

console.log("--- SYSTEM DECYZYJNY STUDENTA ---");

// 2. Sprawdzenie gotowości za pomocą if...else
let isPrepared = false;

if (dayType === "laboratorium") {
    // Na laboratorium niezbędny jest laptop
    if (hasLaptop) {
        isPrepared = true;
    } else {
        isPrepared = false;
    }
} else {
    // Na inne zajęcia wystarczy zeszyt
    isPrepared = hasNotebook;
}

// 3. Użycie operatora trójargumentowego do krótkiego komunikatu
const readyMessage = isPrepared 
    ? "Status: Wszystko gra, możesz ruszać!" 
    : "Status: Czegoś Ci brakuje, sprawdź plecak.";

printStatus(readyMessage);

// 4. Użycie operatora && do warunkowego wypisania ostrzeżenia
// Jeśli ma laptopa, ale nie ma ładowarki - wypisz ostrzeżenie
hasLaptop && !hasCharger && printStatus("OSTRZEŻENIE: Masz laptopa, ale brakuje ładowarki. Bateria może nie wytrzymać!");

// Sprawdzenie legitymacji (moje rozszerzenie)
!hasStudentCard && printStatus("UWAGA: Zapomniałeś legitymacji! Nie skorzystasz ze zniżki w bufecie.");

// 5. Osobny komunikat zależny od typu dnia
if (dayType === "laboratorium") {
    printStatus("Dzisiaj masz laboratorium – pamiętaj o plikach z projektami.");
} else if (dayType === "wykład") {
    printStatus("Dzisiaj masz wykład – przygotuj się na dużo notowania.");
} else {
    printStatus(`Typ dnia: ${dayType}. Powodzenia!`);
}

