import Comp from 'components/Comp';
import Handler from 'handlers/Handler';

import Style from './Test.module.scss';

function Test() {
  // components
  const { Div } = new Comp().shared.wrapper;

  return (
    <>
      <Div className={Style.wrapper} />
      <Div className={Style.wrapper2} />
      <Div className={Style.wrapper3} />
    </>
  );
}

const mod = {
  f: Test,
  fn: 'Test',
  handler: Handler.Type.Default.log,
};

export default new Handler.Wrapper(mod).sync.wrap();
