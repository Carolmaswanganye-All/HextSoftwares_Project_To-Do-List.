function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        const taskItem = document.createElement("li");
        taskItem.textContent = taskInput.value;
        
        // Add remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = () => taskList.removeChild(taskItem);
        taskItem.appendChild(removeButton);

        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
}
