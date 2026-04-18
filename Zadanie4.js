const hasLaptop = true;
const hasCharger = false;
const hasNotebook = true;
const dayType = "laboratorium";
const hasStudentCard = true;

const printStatus = (msg) => console.log(`>>> ${msg}`);

console.log("--- SYSTEM DECYZYJNY STUDENTA ---");

let isPrepared = false;

if (dayType === "laboratorium") {
    if (hasLaptop) {
        isPrepared = true;
    } else {
        isPrepared = false;
    }
} else {
    isPrepared = hasNotebook;
}

const readyMessage = isPrepared 
    ? "Status: Wszystko gra, możesz ruszać!" 
    : "Status: Czegoś Ci brakuje, sprawdź plecak.";

printStatus(readyMessage);

hasLaptop && !hasCharger && printStatus("OSTRZEŻENIE: Masz laptopa, ale brakuje ładowarki. Bateria może nie wytrzymać!");

!hasStudentCard && printStatus("UWAGA: Zapomniałeś legitymacji! Nie skorzystasz ze zniżki w bufecie.");

if (dayType === "laboratorium") {
    printStatus("Dzisiaj masz laboratorium – pamiętaj o plikach z projektami.");
} else if (dayType === "wykład") {
    printStatus("Dzisiaj masz wykład – przygotuj się na dużo notowania.");
} else {
    printStatus(`Typ dnia: ${dayType}. Powodzenia!`);
}
