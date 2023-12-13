import { isNil, is } from 'ramda';

class Unix {
  private now: number;
  private unixTime: number;
  private date: Date;

  constructor() {
    this.now = Date.now();
    this.unixTime = this.init();
    this.date = new Date();
  }

  public sync(): void {
    this.now = Date.now();
  }

  public syncDate(unixTime: number): void {
    this.date = new Date(unixTime);
  }

  public init(): number {
    this.sync();
    return this.now;
  }

  public fromDate(date: null | string | Date): number {
    this.unixTime = Date.parse(String(date));
    return this.unixTime;
  }

  public toDate(unixTime: null | number): Date | null {
    if (isNil(unixTime) || !is(Number, unixTime)) return null;
    this.syncDate(unixTime);
    return this.date;
  }
}

export default Unix;
