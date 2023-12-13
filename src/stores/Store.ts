// Static Store only
import shared from './shared/shared';
import lang from './lang/lang';

class Store {
  public readonly shared;
  public readonly lang;

  constructor() {
    this.shared = shared;
    this.lang = lang;
  }
}

export default Store;
