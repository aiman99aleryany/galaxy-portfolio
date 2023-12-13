import { nanoid } from 'nanoid';
import Handler from 'handlers/Handler';

import Style from './Stars.module.scss';

function Stars() {
  return (
    <div className={Style.galaxy}>
      {[...Array(61)].map((e, i) => (
        <div key={nanoid()} className={Style[`star-${i}`]} />
      ))}
    </div>
  );
}

const mod = {
  f: Stars,
  fn: 'Stars',
  handler: Handler.Type.Default.log,
};

export default new Handler.Wrapper(mod).sync.wrap();
