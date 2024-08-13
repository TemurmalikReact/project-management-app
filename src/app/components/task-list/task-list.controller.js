import { TaskListView } from './task-list.view';
import { TaskListModel } from './task-list.model';
import { TaskController } from '../task/task.controller';
import { eventBus } from '../../../utils/event-bus';
import { TaskManagerService } from '../../services/task-manager.service';

export class TaskListController {

  view = new TaskListView();
  model = new TaskListModel();

  taskManager = new TaskManagerService();

  constructor() {
    this.taskManager.getTasks().then(tasks => {
      tasks.forEach(task => {
        new TaskController(task);
      })
    });

    eventBus.subscribe('create-task', task => {
      this.taskManager.createTask(task)
        .then(res => {
          if (res?.status === 200) {
            res.json().then(remoteTask => {
              new TaskController(remoteTask);
            });
          }
        })
    });
  }
}
