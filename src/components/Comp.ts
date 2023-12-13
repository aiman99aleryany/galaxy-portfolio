import Shared from './shared/Shared';
// static only
class Comp {
  public readonly shared: Shared;

  constructor() {
    this.shared = new Shared();
  }
}

export default Comp;
