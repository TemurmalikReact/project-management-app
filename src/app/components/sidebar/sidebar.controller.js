import { SidebarView } from './sidebar.view';
import { SidebarModel } from './sidebar.model';

export class SidebarController {

  view = new SidebarView();
  model = new SidebarModel();

  constructor() {
    console.log('SidebarController initialized');
  }
}
