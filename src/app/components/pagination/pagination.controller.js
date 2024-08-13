import { PaginationView } from './pagination.view';
import { PaginationModel } from './pagination.model';

export class PaginationController {
  view = new PaginationView();
  model = new PaginationModel();

  constructor() {}
}
