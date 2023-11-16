
function addTask() {
    var taskInput = document.getElementById("new-task");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {

        var taskList = document.getElementById("task-list");
        var newTask = document.createElement("li");
        newTask.innerHTML = '<span class="task-text">' + taskText + '</span>' +
                            '<input type="checkbox" onchange="toggleTaskStatus(this)">';

      
        taskList.appendChild(newTask);

        taskInput.value = "";
    }
}

function toggleTaskStatus(checkbox) {
    var taskText = checkbox.previousSibling;

    if (checkbox.checked) {
        taskText.classList.add("completed");
    } else {
        taskText.classList.remove("completed");
    }
}
