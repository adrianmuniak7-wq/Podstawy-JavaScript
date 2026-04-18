const initialTodos = [
    { id: 1, title: "Oddać projekt", done: false, priority: "high" },
    { id: 2, title: "Przeczytać rozdział", done: true, priority: "normal" },
    { id: 3, title: "Przygotować prezentację", done: false, priority: "high" }
];

const addTask = (todoList, newTitle, taskPriority = "normal") => {
    const newId = todoList.length > 0 ? Math.max(...todoList.map(t => t.id)) + 1 : 1;
    
    const newTask = {
        id: newId,
        title: newTitle,
        done: false,
        priority: taskPriority
    };
    
    return [...todoList, newTask];
};

const markAsDone = (todoList, taskId) => {
    return todoList.map(todo => {
        if (todo.id === taskId) {
            return { ...todo, done: true };
        }
        return todo;
    });
};

const getPendingTasks = (todoList) => {
    return todoList.filter(todo => todo.done === false);
};

const getUrgentTasks = (todoList) => {
    return todoList.filter(todo => todo.done === false && todo.priority === "high");
};

console.log("--- STAN POCZĄTKOWY ---");
console.log(initialTodos);

const todosAfterAdd = addTask(initialTodos, "Napisać testy jednostkowe", "high");
console.log("\n--- PO DODANIU NOWEGO ZADANIA ---");
console.log(todosAfterAdd);

const todosAfterUpdate = markAsDone(todosAfterAdd, 3);
console.log("\n--- PO OZNACZENIU ZADANIA NR 3 JAKO WYKONANE ---");
console.log(todosAfterUpdate);

const pendingTasks = getPendingTasks(todosAfterUpdate);
console.log("\n--- TYLKO NIEWYKONANE ZADANIA ---");
console.log(pendingTasks);

const urgentTasks = getUrgentTasks(todosAfterUpdate);
console.log("\n--- PILNE ZADANIA DO ZROBIENIA ---");
console.log(urgentTasks);
