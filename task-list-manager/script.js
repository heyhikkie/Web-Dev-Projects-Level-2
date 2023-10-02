const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(taskText) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-button">Delete</button>
    `;

    const deleteButton = li.querySelector('.delete-button');
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(li);
    });

    taskList.appendChild(li);
}
