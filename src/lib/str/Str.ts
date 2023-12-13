import { is, tail, trim } from 'ramda';

class Str {
  private stringified: string;
  private parsed: any;
  private capitalized: string;

  constructor(value: any) {
    this.stringified = !is(String, value) ? JSON.stringify(value) : value;
    this.parsed = is(String, value) ? JSON.parse(JSON.stringify(trim(value))) : value;
    this.capitalized = trim(this.stringified)
      .split(' ')
      .map((w: string) => w.charAt(0).toUpperCase() + tail(w))
      .join();
  }

  public getStringified() {
    return this.stringified;
  }

  public getParsed() {
    return this.parsed;
  }

  public getCap() {
    return this.capitalized;
  }
}

export default Str;
