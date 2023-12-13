import Ar from './ar/Ar';
import En from './en/En';

class Translator {
  public readonly ar: Ar;
  public readonly en: En;

  constructor() {
    this.ar = new Ar();
    this.en = new En();
  }
}

export default Translator;
