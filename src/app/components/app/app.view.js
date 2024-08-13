// AppView.js
import { HeaderView } from '../header/header.view';
import { SidebarView } from '../Sidebar/sidebar.view';

import './app.scss';

export class AppView {
  selector = 'app';

  constructor() {
    this.render();
    this.initHeaderView();
    this.initSidebarView();
  }

  render() {
    document.getElementById(this.selector).innerHTML = `
      <div id="header-container">
      </div>
      <div id="sidebar-container">
      </div>
      <main id="main">
        <div id="pagination-container"></div>
        <div id="task-list"></div>
      </main>
    `;
  }

  initHeaderView() {
    new HeaderView();  
  }

  initSidebarView() { 
    new SidebarView();  
  }
}
