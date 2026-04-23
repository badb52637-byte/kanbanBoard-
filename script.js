let draggedTask = null;

function addTask(columnId) {
    const input = document.getElementById(columnId + "-input");
    const taskText = input.value.trim();

    if (taskText === "") return;

    const task = document.createElement("div");
    task.className = "task";
    task.draggable = true;
    task.innerText = taskText;

    task.addEventListener("dragstart", function () {
        draggedTask = task;
    });

    document.querySelector(`#${columnId} .task-list`).appendChild(task);
    input.value = "";
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();

    if (draggedTask) {
        event.target.closest(".task-list").appendChild(draggedTask);
        draggedTask = null;
    }
}
