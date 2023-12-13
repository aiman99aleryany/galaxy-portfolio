import { equals } from 'ramda';

/* eslint-disable @typescript-eslint/no-inferrable-types */

export interface IShared {
  title: string;
  setTitle: (title: string | null) => void;
}

class Shared implements IShared {
  public title: string;

  constructor() {
    this.title = '';
  }

  public setTitle(title: string | null) {
    this.title = equals(title, null) ? '' : (title as string);
  }
}

export default Shared;
