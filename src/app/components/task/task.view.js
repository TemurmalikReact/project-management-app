import './task.scss';
import { formatDate, getPriority, getStatus } from '../../../utils';

export class TaskView {
  selector = 'task';

  constructor() {}

  render({
    content,
    creationDate,
    dueDate,
    id,
    priority,
    status,
    title,
  },
  taskClickHandler) {
    const task = document.createElement('tr');
    task.classList.add(this.selector, 'task-list--row');
    task.setAttribute('task-id', id);
    task.innerHTML = `
      <td class="task-column">
        <span>${title}</span>
        <i class="task-column--icon fa-solid fa-up-right-and-down-left-from-center"></i>
      </td>
      <td class="description-column">${content}</td>
      <td class="creation-date-column">${formatDate(creationDate)}</td>
      <td class="due-date-column">${formatDate(dueDate)}</td>
      <td class="priority-column"></td>
      <td class="status-column"></td>
    `;

    task.querySelector('.priority-column').appendChild(getPriority(priority));
    task.querySelector('.status-column').appendChild(getStatus(status));
    task.addEventListener('click', () => {
      taskClickHandler();
    });

    document.querySelector('.task-list tbody').appendChild(task);
  }

  rerender(task) {
    debugger;
    const taskEl = document.querySelector(`[task-id="${task.id}"]`);
    taskEl.querySelector('.task-column span').textContent = task.title;
    taskEl.querySelector('.description-column').textContent = task.content;
    taskEl.querySelector('.creation-date-column').valueAsDate = task.creationDate;
    taskEl.querySelector('.due-date-column').textContent = formatDate(new Date(task.dueDate));

    const priorityCol = taskEl.querySelector('.priority-column')
    priorityCol.removeChild(priorityCol.firstChild);
    priorityCol.appendChild(getPriority(task.priority));

    const statusCol = taskEl.querySelector('.status-column')
    statusCol.removeChild(statusCol.firstChild);
    statusCol.appendChild(getStatus(task.status));
  }

  deleteTask(id) {
    document.querySelector('.task-list tbody').removeChild(document.querySelector(`[task-id="${id}"]`));
  }
}
