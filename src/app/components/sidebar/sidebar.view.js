// sidebarView.js
import './sidebar.scss';

export class SidebarView {
  selector = 'sidebar-container';

  constructor() {
    this.render();
  }

  render() {
    document.getElementById(this.selector).innerHTML = `
      <aside id="sidebar" class="sidebar">
          <div class="banner">
            <div class="banner__content">
              <div class="banner__title">
                <span>Jane Cooper!</span>
                <div class="tag">Editor</div>
              </div>
              <p class="banner__subtext">+9998 99 212 12 12</p>
            </div>
          </div>

          <div class="sidebar__logout">
            <button>
              <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.2706 15.7705L4.98535 15.7705C3.7426 15.7705 2.73535 14.7632 2.73535 13.5205L2.73535 4.021C2.73535 2.77825 3.7426 1.771 4.98535 1.771L7.2706 1.771M11.9784 4.51225L16.2631 8.797L11.9784 13.0817M6.27835 8.797L16.2511 8.797" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Logout</span>
            </button>
          </div>
        </aside>
      `
    ;
  }
}
