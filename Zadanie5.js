function createDayPlan(name, tasks = ["odpoczynek"]) {
    
    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return "Dzień dobry";
        if (hour < 18) return "Miłego popołudnia";
        return "Dobry wieczór";
    };

    const taskCount = tasks.length;
    
    const formattedTasks = tasks.map((task, index) => `${index + 1}. ${task}`).join("\n");

    return `${getGreeting()}, ${name}!
Oto Twój plan dnia na dziś (liczba zadań: ${taskCount}):
${formattedTasks}
-----------------------------------`;
}

const aniaTasks = ["zajęcia na uczelni", "zakupy spożywcze", "trening siłowy", "nauka JavaScript"];
const planAnia = createDayPlan("Ania", aniaTasks);
console.log(planAnia);

const planMarek = createDayPlan("Marek");
console.log(planMarek);

console.log(createDayPlan("Krzysztof", ["wizyta u lekarza"]));
