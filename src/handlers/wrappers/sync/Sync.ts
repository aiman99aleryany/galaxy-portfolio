import { SyncIMod } from 'types/error/error';
import { NanoFun } from 'types/shared/shared';

class Sync {
  private f: NanoFun;
  private fn: string;
  private handler: NanoFun;

  constructor({ f, fn, handler }: SyncIMod) {
    this.f = f;
    this.fn = fn;
    this.handler = handler;
  }

  public wrap() {
    return (...args: any) => {
      try {
        return this.f(...args);
      } catch (err) {
        return this.handler(this.fn, err);
      }
    };
  }
}

export default Sync;
