// HeaderView.js
import './header.scss';
import logo from '../../../assets/imgs/logo.png';

export class HeaderView {
  selector = 'header-container';

  constructor() {
    this.render();
    this.addBurgerToggle();
  }

  addBurgerToggle() {
    const burgerButton = document.getElementById('burger-button');
    const sidebar = document.getElementById('sidebar');

    burgerButton.addEventListener('click', () => {
      sidebar.classList.toggle('show');
      burgerButton.classList.toggle('open');
    });
  }

  render() {
    document.getElementById(this.selector).innerHTML = `
      <header class="header">
        <div class="nav">
          <div class="nav__logo">
            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0.5H19L5.5 6L0 19.5V0.5Z" fill="#5847F1"/>
              <path d="M7 7.5H19L10.4737 10.9737L7 19.5V7.5Z" fill="white"/>
            </svg>

            <span>TaskTrack</h1>    
          </div>   
          <div class="nav__toggle">
            <button id="burger-button">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div class="nav__logout">
            <button>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.02747 21.0273H5.98047C4.32347 21.0273 2.98047 19.6843 2.98047 18.0273L2.98047 5.36133C2.98047 3.70433 4.32347 2.36133 5.98047 2.36133L9.02747 2.36133M15.3045 6.01633L21.0175 11.7293L15.3045 17.4423M7.70447 11.7293L21.0015 11.7293" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        
        <div class="banner">
          <div class="banner__content">
            <div class="banner__title">
              <span>Welcome Jane!</span>
              <div class="tag">Editor</div>
            </div>
            <p class="banner__subtext">What is on due today?</p>
          </div>
          <div class="banner__phone">
            <p>User phone number:</p>
            <span>+9998 99 212 12 12</span>
          </div>
        </div>
      </header>
    `;
  }
}
