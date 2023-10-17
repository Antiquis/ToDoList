const Pole = document.querySelector('.Pole');
const input = document.querySelector('.input');
const tasksList = document.querySelector('#tasksList')
const emptyList = document.querySelector('#emptyList')

Pole.addEventListener('submit', addTask);

tasksList.addEventListener('click', deleteTask)

tasksList.addEventListener('click', doneTask)

function addTask (event) {
    event.preventDefault();

    const taskText = input.value;
    
    const taskHTML = `<li class="list_group_item">
    <span class="task-title">${taskText}</span>
    <div class="task-item_buttons">
        <button id="Accept" type="button" data-action="done">
                <img src="Катинки/9004846_tick_check_mark_accept_icon.png" alt="Done">
            </button>
            <button id="Declaim" type="button" data-action="delete">
                <img src="Катинки/3830967_close_closed_cross_delete_remove_icon.png" alt="Done">
            </button>
        </div>
    </li>`;

    tasksList.insertAdjacentHTML('beforeend', taskHTML);

    input.value = ""
    input.focus()

    if(tasksList.children.length > 1) {
        emptyList.classList.add('none');
    }
}

function deleteTask(event) {

    if (event.target.dataset.action !== 'delete') return;

    const parenNode = event.target.closest('.list_group_item');
    parenNode.remove();

    if (tasksList.children.length === 1) {
        emptyList.classList.remove('none');
    }
}

function doneTask(event) {
    if (event.target.dataset.action !== 'done') return;

    const parentNode = event.target.closest('.list_group_item');
    const taskTitle = parentNode.querySelector('.task-title');
    taskTitle.classList.toggle('done');
}