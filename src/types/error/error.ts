import { AsyncNanoFun, NanoFun } from '../shared/shared';

export interface SyncIMod {
  f: NanoFun;
  fn: string;
  handler: NanoFun;
}

export interface AsyncIMod {
  f: AsyncNanoFun;
  fn: string;
  handler: NanoFun;
}
