// 1. Definicja funkcji createDayPlan z parametrem domyślnym
// Parametr domyślny dla tasks: jeśli nie podamy tablicy, przyjmie ona wartość ["odpoczynek"]
function createDayPlan(name, tasks = ["odpoczynek"]) {
    
    // Rozszerzenie własne: Funkcja pomocnicza do sprawdzania pory dnia (helper function)
    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return "Dzień dobry";
        if (hour < 18) return "Miłego popołudnia";
        return "Dobry wieczór";
    };

    // Rozszerzenie własne: Obliczanie liczby zadań i formatowanie listy
    const taskCount = tasks.length;
    
    // Numerowanie zadań (rozszerzenie)
    const formattedTasks = tasks.map((task, index) => `${index + 1}. ${task}`).join("\n");

    // 2. Funkcja zwraca wynik przez return
    return `${getGreeting()}, ${name}!
Oto Twój plan dnia na dziś (liczba zadań: ${taskCount}):
${formattedTasks}
-----------------------------------`;
}

// 4. Wywołanie funkcji dla co najmniej dwóch różnych użytkowników

// Użytkownik 1: Z przekazaną listą zadań
const aniaTasks = ["zajęcia na uczelni", "zakupy spożywcze", "trening siłowy", "nauka JavaScript"];
const planAnia = createDayPlan("Ania", aniaTasks);
console.log(planAnia);

// Użytkownik 2: Test parametru domyślnego (brak listy zadań)
const planMarek = createDayPlan("Marek");
console.log(planMarek);

// Użytkownik 3: Krótka lista zadań
console.log(createDayPlan("Krzysztof", ["wizyta u lekarza"]));