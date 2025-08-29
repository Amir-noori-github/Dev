// Activity: Array Manipulation Part 2
// {
//     "task": "Buy groceries",
//     "completed": false,
//     "dueDate": "2025-08-30"
// }


let todosArray = [];
let nextId = 1;

function addOne(task, completed = false, dueDate) {
    if (!task || typeof task !== "string" || !dueDate || typeof dueDate !== "string") {
        return false;
    }
    if (typeof completed !== "boolean") {
        completed = false;
    }

    const newTodo = {
        id: nextId++,
        task,
        completed,
        dueDate
    };

    todosArray.push(newTodo);
    return newTodo;
}

function getAll() {
    return todosArray;
}

function findById(id) {
    const numericId = Number(id);
    const todo = todosArray.find(item => item.id === numericId);
    return todo || false;
}

function updateOneById(id, updatedData) {
    const todo = findById(id);
    if (!todo) return false;

    if (typeof updatedData.task === "string" && updatedData.task) {
        todo.task = updatedData.task;
    }
    if ("completed" in updatedData && typeof updatedData.completed === "boolean") {
        todo.completed = updatedData.completed;
    }
    if (typeof updatedData.dueDate === "string" && updatedData.dueDate) {
        todo.dueDate = updatedData.dueDate;
    }
    return todo;
}

function deleteOneById(id) {
    const before = todosArray.length;
    todosArray = todosArray.filter(todo => todo.id !== Number(id));
    return todosArray.length < before;
}

if (require.main === module) {
    console.log("getAll called (initial):", getAll());

    let result = addOne("Buy groceries", false, "2025-08-30");
    console.log("addOne #1:", result);

    result = addOne("Pay bills", true, "2025-09-01");
    console.log("addOne #2:", result);

    console.log("getAll called:", getAll());

    console.log("findById(1):", findById(1));

    console.log("updateOneById(1):", updateOneById(1, { task: "Buy groceries and snacks", completed: true }));
    console.log("findById(1) after update:", findById(1));

    console.log("updateOneById(1) toggle completed false:", updateOneById(1, { completed: false }));

    console.log("deleteOneById(1):", deleteOneById(1));
    console.log("findById(1) after delete:", findById(1));

    console.log("getAll final:", getAll());
}

const ToDos = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById
};

module.exports = ToDos;
