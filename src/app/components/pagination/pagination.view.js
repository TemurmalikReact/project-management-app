import './pagination.scss';

export class PaginationView {
  selector = 'pagination-container';

  constructor() {
    this.render();
  }

  render() {
    document.getElementById(this.selector).innerHTML = `
      <nav class="pagination">
        <a class="pagination__item pagination__item--active" href="#"> Table view</a>
        <a class="pagination__item" href="#"> Board view</a>
      </nav>
    `;
  }
}
