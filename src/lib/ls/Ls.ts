import { equals, isNil } from 'ramda';
import Str from 'lib/str/Str';

class Ls {
  private key = '';
  private value: any = '';
  private valueReady = '';

  constructor(key: string | null, value: any) {
    if (isNil(key) || isNil(value)) return;
    this.key = key;
    this.value = value;
    this.valueReady = new Str(this.value).getStringified();
  }

  public get(): any {
    return this.value;
  }

  public getReady(): string {
    return this.valueReady;
  }

  public getKey(): string {
    return this.key;
  }

  public write(): boolean {
    localStorage.setItem(this.key, this.valueReady);
    return true;
  }

  public verify(): boolean {
    const ls = localStorage.getItem(this.key);
    if (equals(this.valueReady, ls)) return true;
    return false;
  }
}

export default Ls;
