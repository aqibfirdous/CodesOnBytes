document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const statusInput = document.getElementById("statusInput");
    const dueDateInput = document.getElementById("dueDateInput");
    const assignedInput = document.getElementById("assignedInput");
    const inProgressInput = document.getElementById("inProgressInput");
    const doneInput = document.getElementById("doneInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        const statusText = statusInput.value.trim();
        const dueDateText = dueDateInput.value.trim();
        const assignedText = assignedInput.value.trim();
        const inProgressChecked = inProgressInput.checked;
        const doneChecked = doneInput.checked;

        if (taskText !== "") {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${taskText}</td>
                <td>${statusText}</td>
                <td>${dueDateText}</td>
                <td>${assignedText}</td>
                <td>${inProgressChecked ? "✔" : ""}</td>
                <td>${doneChecked ? "✔" : ""}</td>
                <td><button class="delete-button">Delete</button></td>
            `;
            taskList.appendChild(row);

            // Clear the input fields
            taskInput.value = "";
            statusInput.value = "";
            dueDateInput.value = "";
            assignedInput.value = "";
            inProgressInput.checked = false;
            doneInput.checked = false;

            // Attach event listener to the delete button
            const deleteButton = row.querySelector(".delete-button");
            deleteButton.addEventListener("click", function () {
                row.remove();
            });
        }
    });
});
