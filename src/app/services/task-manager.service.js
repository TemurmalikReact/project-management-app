import { TASK_SERVICE_ORIGIN } from '../constants';

export class TaskManagerService {
  constructor() {}

  async getTasks() {
    try {
      const response = await fetch(`${TASK_SERVICE_ORIGIN}/task`);
      return await response.json();
    } catch (e) {
      return console.error(e);
    }
  }

  async createTask(task) {
    try {
      return await fetch(`${TASK_SERVICE_ORIGIN}/task`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      });
    } catch (e) {
      return console.error(e);
    }
  }

  async updateTask(task) {
    try {
      return await fetch(`${TASK_SERVICE_ORIGIN}/task/${task.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      });
    } catch (e) {
      return console.error(e);
    }
  }

  async deleteTask(id) {
    try {
      return await fetch(`${TASK_SERVICE_ORIGIN}/task/${id}`, {
        method: 'DELETE',
      });
    } catch (e) {
      return console.error(e);
    }
  }
}
