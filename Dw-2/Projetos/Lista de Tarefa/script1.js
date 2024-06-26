const taskInput = document.querySelector('#novaTarefa');
const taskButton = document.querySelector('#botaoCriar');
const taskContainer = document.querySelector('.cadastradas');
const taskCount = document.querySelector('#taskCount');
const completedCount = document.querySelector('#completedCount');

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

taskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const task = {
            text: taskText,
            completed: false
        };
        tasks.push(task);
        taskInput.value = '';
        saveTasks();
        renderTasks();
    }
});

function renderTasks() {
    const taskList = document.createElement('div');
    taskList.className = 'task-list';
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
                <input type="checkbox" ${task.completed ? 'checked' : ''} data-index=${index}>
                <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
                <button data-index=${index}>
                    <img src="./Imagem/trash.svg" alt="Excluir">
                </button>
            `;
        taskList.appendChild(taskItem);
    });

    taskContainer.innerHTML = `
            <img id="clipboard" src="./Imagem/Clipboard.svg" alt="">
            <div>
                <p class="p1">Você ainda não tem tarefas cadastradas</p>
                <p class="p2">Crie tarefas e organize seus itens a fazer</p>
            </div>
        `;
    if (tasks.length > 0) {
        taskContainer.innerHTML = '';
        taskContainer.appendChild(taskList);
    }

    taskCount.textContent = tasks.length;
    const completedTasksCount = tasks.filter(task => task.completed).length;
    completedCount.textContent = `${completedTasksCount} de ${tasks.length}`;
}

function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

taskContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON' || e.target.parentElement.tagName === 'BUTTON') {
        const index = e.target.dataset.index || e.target.parentElement.dataset.index;
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
    } else if (e.target.type === 'checkbox') {
        const index = e.target.dataset.index;
        tasks[index].completed = e.target.checked;
        saveTasks();
        renderTasks();
    }
});

renderTasks();

