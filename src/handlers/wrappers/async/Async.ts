import { AsyncNanoFun, NanoFun } from 'types/shared/shared';
import { AsyncIMod } from 'types/error/error';

class Async {
  private f: AsyncNanoFun;
  private fn: string;
  private handler: NanoFun;

  constructor({ f, fn, handler }: AsyncIMod) {
    this.f = f;
    this.fn = fn;
    this.handler = handler;
  }

  wrap() {
    return async (...args: any) => {
      try {
        return await this.f(...args);
      } catch (err) {
        return this.handler(this.fn, err);
      }
    };
  }
}

export default Async;
