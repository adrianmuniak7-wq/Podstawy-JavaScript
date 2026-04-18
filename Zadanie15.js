const schedule = [
    { day: "poniedziałek", subject: "Programowanie", room: "A12", online: false, duration: 90 },
    { day: "poniedziałek", subject: "Analiza matematyczna", room: "C10", online: false, duration: 90 },
    { day: "wtorek", subject: "Bazy danych", room: "online", online: true, duration: 120 },
    { day: "czwartek", subject: "Grafika", room: "B03", online: false, duration: 90 },
    { day: "piątek", subject: "UX", room: "online", online: true, duration: 45 }
];

const getClassesForDay = (data, targetDay) => {
    return data.filter(item => item.day === targetDay);
};

const getClassesByMode = (data, isOnline) => {
    return data.filter(item => item.online === isOnline);
};

const formatSchedule = (data) => {
    return data.map(item => {
        const modeStatus = item.online ? "Online" : "Stacjonarnie";
        return `${item.subject} — Sala: ${item.room} — Tryb: ${modeStatus} (${item.duration} min)`;
    });
};

const totalClassesCount = schedule.length;

console.log("PLAN ZAJĘĆ - RAPORT");
console.log("-------------------");
console.log(`Łączna liczba zajęć w tygodniu: ${totalClassesCount}\n`);

const dayToSearch = "poniedziałek";
const dayClasses = getClassesForDay(schedule, dayToSearch);
const formattedDayClasses = formatSchedule(dayClasses);

console.log(`Plan na: ${dayToSearch.toUpperCase()}`);
if (formattedDayClasses.length > 0) {
    formattedDayClasses.forEach(entry => console.log(`* ${entry}`));
} else {
    console.log("Brak zajęć w tym dniu.");
}

console.log("\nZESTAWIENIE ZAJĘĆ ZDALNYCH (ONLINE):");
const onlineClasses = getClassesByMode(schedule, true);
const formattedOnlineClasses = formatSchedule(onlineClasses);

formattedOnlineClasses.forEach(entry => console.log(`* ${entry}`));
