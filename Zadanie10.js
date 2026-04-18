const activities = [
    { type: "bieg", minutes: 35, calories: 320 },
    { type: "rower", minutes: 50, calories: 410 },
    { type: "spacer", minutes: 20, calories: 90 },
    { type: "siłownia", minutes: 60, calories: 450 }
];

const totalTime = activities.reduce((sum, act) => sum + act.minutes, 0);

const totalCalories = activities.reduce((sum, act) => sum + act.calories, 0);

const longActivities = activities.filter(act => act.minutes > 30);

const mostIntense = activities.reduce((prev, current) => 
    (prev.calories > current.calories) ? prev : current
);

const formatDuration = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const mins = totalMinutes % 60;
    return hours > 0 ? `${hours}h ${mins}min` : `${mins}min`;
};

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

console.log(report);
