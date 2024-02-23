/**
 * Clase para representar una tarea.
 */
class Task {
    /**
     * Constructor de la clase Task.
     * @param {string} text El texto de la tarea.
     */
    constructor(text) {
        this.text = text;
        this.completed = false;
    }
}

/**
 * Clase para gestionar las tareas.
 */
class TaskManager {
    /**
     * Constructor de la clase TaskManager.
     * Carga las tareas almacenadas en el almacenamiento local, o inicializa una lista vacía si no hay tareas almacenadas.
     */
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    }

    /**
     * Añade una nueva tarea.
     * @param {string} text El texto de la tarea a añadir.
     */
    addTask(text) {
        const task = new Task(text);
        this.tasks.push(task);
        this.updateLocalStorage();
    }

    /**
     * Elimina una tarea.
     * @param {number} index El índice de la tarea a eliminar.
     */
    removeTask(index) {
        this.tasks.splice(index, 1);
        this.updateLocalStorage();
    }

    /**
     * Cambia el estado de completitud de una tarea.
     * @param {number} index El índice de la tarea cuyo estado se cambiará.
     */
    toggleTaskCompleted(index) {
        this.tasks[index].completed = !this.tasks[index].completed;
        this.updateLocalStorage();
    }

    /**
     * Actualiza el almacenamiento local con las tareas actuales.
     */
    updateLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    /**
     * Obtiene todas las tareas.
     * @returns {Array} Lista de tareas.
     */
    getTasks() {
        return this.tasks;
    }
}

// Instancia de la clase TaskManager
const taskManager = new TaskManager();

/**
 * Función para añadir una tarea.
 */
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const text = taskInput.value.trim();
    if (text) {
        taskManager.addTask(text);
        taskInput.value = '';
        renderTasks();
    }
}

/**
 * Función para eliminar una tarea.
 * @param {number} index El índice de la tarea a eliminar.
 */
function deleteTask(index) {
    taskManager.removeTask(index);
    renderTasks();
}

/**
 * Función para representar visualmente las tareas.
 */
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    taskManager.getTasks().forEach((task, index) => {
        const taskEl = document.createElement('li');
        const taskText = document.createElement('span');
        taskText.textContent = task.text;
        taskText.style.flexGrow = '1';
        if (task.completed) {
            taskText.style.textDecoration = 'line-through';
        }

        // Botón para borrar tarea
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Borrar';
        deleteBtn.onclick = () => deleteTask(index);
        deleteBtn.style.marginLeft = '10px';
        deleteBtn.classList.add('buttonB'); // Añadir clase buttonB

        taskEl.appendChild(taskText);
        taskEl.appendChild(deleteBtn);
        taskList.appendChild(taskEl);
    });
}

/**
 * Función para cambiar el estado de completitud de una tarea.
 * @param {number} index El índice de la tarea cuyo estado se cambiará.
 */
function toggleTaskCompleted(index) {
    taskManager.toggleTaskCompleted(index);
    renderTasks();
}

// Agrega el evento click al botón de añadir tarea
document.getElementById('addTaskBtn').addEventListener('click', addTask);

// Representa visualmente las tareas al cargar la página
renderTasks();
