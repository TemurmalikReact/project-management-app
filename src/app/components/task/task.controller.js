import { TaskView } from './task.view';
import { TaskModel } from './task.model';
import { eventBus } from '../../../utils/event-bus';
import { TaskManagerService } from '../../services/task-manager.service';

export class TaskController {

  view = new TaskView();
  model = new TaskModel();

  taskManager= new TaskManagerService();

  constructor(task) {
    this.model.setTaskInfo(task);

    this.view.render(this.model.getTaskInfo(), () => {
      eventBus.publish('open-modal', this.model.getTaskInfo());
    });

    eventBus.subscribe(`update-task-${task.id}`, (task) => {
      this.taskManager.updateTask(task).then((res) => {
        if(res?.status === 200) {
          this.model.setTaskInfo(task);

          this.view.rerender(task);
        }
      });
    });

    eventBus.subscribe(`delete-task-${task.id}`, () => {
      this.taskManager.deleteTask(task.id).then((res) => {
        if(res?.status === 200) {
          this.model.deleteTaskInfo();
          this.view.deleteTask(task.id);
        }
      });
    });
  }
}
