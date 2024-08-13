import { AppView } from './app.view';
import { AppModel } from './app.model';

import { HeaderController } from '../header/header.controller';
import { PaginationController } from '../pagination/pagination.controller';
import { TaskListController } from '../task-list/task-list.controller';
import { TaskModalController } from '../task-modal/task-modal.controller';

export class AppController {
  view = new AppView();
  model = new AppModel();

  header = new HeaderController();
  pagination = new PaginationController();
  taskList = new TaskListController();
  taskModal = new TaskModalController();

  constructor() {}
}
