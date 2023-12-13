import { create } from 'zustand';
import { equals } from 'ramda';
import { ILang } from 'types/store/Lang';
import Const from 'constants/Const';

const lang = create<ILang>((set) => ({
  en: new Const().translator.en,
  ar: new Const().translator.ar,

  model: new Const().translator.en,
  setModel: (model: null | 'ar' | 'en') =>
    set((state: ILang) => ({
      model: equals(model, 'en') || equals(model, null) ? state.en : state.ar,
    })),
}));

export default lang;
