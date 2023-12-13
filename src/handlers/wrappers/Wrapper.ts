import { AsyncIMod, SyncIMod } from 'types/error/error';
import Async from './async/Async';
import Sync from './sync/Sync';

class Wrapper {
  public readonly async: Async;
  public readonly sync: Sync;

  constructor({ f, fn, handler }: AsyncIMod | SyncIMod) {
    this.async = new Async({ f, fn, handler });
    this.sync = new Sync({ f, fn, handler });
  }
}

export default Wrapper;
