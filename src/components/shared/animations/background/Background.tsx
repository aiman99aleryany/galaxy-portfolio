import Handler from 'handlers/Handler';

import Style from './Background.module.scss';

function Background() {
  return <div className={Style.background} />;
}

const mod = {
  f: Background,
  fn: 'Background',
  handler: Handler.Type.Default.log,
};

export default new Handler.Wrapper(mod).sync.wrap();
