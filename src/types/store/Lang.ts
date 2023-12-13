import Ar from 'constants/translator/ar/Ar';
import En from 'constants/translator/en/En';
import { equals } from 'ramda';

export interface ILang {
  ar: Ar;
  en: En;
  model: Ar | En;
  setModel: (model: null | 'ar' | 'en') => void;
}

class Lang implements ILang {
  public readonly ar: Ar;
  public readonly en: En;
  public model: Ar | En;

  constructor() {
    this.ar = new Ar();
    this.en = new En();
    this.model = new En();
  }

  setModel(model: null | 'ar' | 'en') {
    this.model = equals(model, 'en') || equals(model, null) ? this.en : this.ar;
  }
}

export default Lang;
