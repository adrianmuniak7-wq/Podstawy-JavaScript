// Punkt startowy + Rozszerzenie własne (dodanie pola priority)
const initialTodos = [
    { id: 1, title: "Oddać projekt", done: false, priority: "high" },
    { id: 2, title: "Przeczytać rozdział", done: true, priority: "normal" },
    { id: 3, title: "Przygotować prezentację", done: false, priority: "high" }
];

// 1. Funkcja dodająca nowe zadanie (podejście niemutowalne)
const addTask = (todoList, newTitle, taskPriority = "normal") => {
    // Generowanie nowego ID na podstawie najwyższego obecnego w tablicy
    const newId = todoList.length > 0 ? Math.max(...todoList.map(t => t.id)) + 1 : 1;
    
    const newTask = {
        id: newId,
        title: newTitle,
        done: false,
        priority: taskPriority
    };
    
    // Zwracamy nową tablicę: rozpakowujemy stare elementy i dodajemy nowy na koniec
    return [...todoList, newTask];
};

// 2. Funkcja oznaczająca wybrane zadanie jako wykonane
const markAsDone = (todoList, taskId) => {
    return todoList.map(todo => {
        if (todo.id === taskId) {
            // Zwracamy nowy obiekt z nadpisanym polem done
            return { ...todo, done: true };
        }
        // Jeśli to nie to ID, zwracamy oryginalny obiekt
        return todo;
    });
};

// 3. Funkcja zwracająca tylko zadania niewykonane
const getPendingTasks = (todoList) => {
    return todoList.filter(todo => todo.done === false);
};

// Rozszerzenie własne: Funkcja pomocnicza zwracająca pilne zadania (niewykonane i wysoki priorytet)
const getUrgentTasks = (todoList) => {
    return todoList.filter(todo => todo.done === false && todo.priority === "high");
};

// 5. Wyświetlanie wyników działania każdej funkcji

console.log("--- STAN POCZĄTKOWY ---");
console.log(initialTodos);

// Wywołanie dodawania
const todosAfterAdd = addTask(initialTodos, "Napisać testy jednostkowe", "high");
console.log("\n--- PO DODANIU NOWEGO ZADANIA ---");
console.log(todosAfterAdd);

// Wywołanie zmiany statusu (zmieniamy status zadania o id: 3)
const todosAfterUpdate = markAsDone(todosAfterAdd, 3);
console.log("\n--- PO OZNACZENIU ZADANIA NR 3 JAKO WYKONANE ---");
console.log(todosAfterUpdate);

// Wywołanie filtrowania niewykonanych na zaktualizowanej liście
const pendingTasks = getPendingTasks(todosAfterUpdate);
console.log("\n--- TYLKO NIEWYKONANE ZADANIA ---");
console.log(pendingTasks);

// Wywołanie rozszerzenia własnego
const urgentTasks = getUrgentTasks(todosAfterUpdate);
console.log("\n--- PILNE ZADANIA DO ZROBIENIA ---");
console.log(urgentTasks);