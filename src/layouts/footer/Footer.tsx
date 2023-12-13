import Handler from 'handlers/Handler';
import Comp from 'components/Comp';

import Style from './Footer.module.scss';

function Footer() {
  // Components
  const { Div } = new Comp().shared.wrapper;

  return (
    <footer>
      <Div className={Style.wrapper}>
        <p>Footer</p>
      </Div>
    </footer>
  );
}

const mod = {
  f: Footer,
  fn: 'Footer',
  handler: Handler.Type.Default.log,
};

export default new Handler.Wrapper(mod).sync.wrap();
