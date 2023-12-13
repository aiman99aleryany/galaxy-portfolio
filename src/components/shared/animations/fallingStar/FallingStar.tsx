import { nanoid } from 'nanoid';
import Handler from 'handlers/Handler';

import Style from './FallingStar.module.scss';

function FallingStar() {
  return (
    <div className={Style.galaxy}>
      {[...Array(4)].map((e, i) => (
        <div key={nanoid()} className={Style[`star-${i}`]} />
      ))}
    </div>
  );
}

const mod = {
  f: FallingStar,
  fn: 'FallingStar',
  handler: Handler.Type.Default.log,
};

export default new Handler.Wrapper(mod).sync.wrap();
