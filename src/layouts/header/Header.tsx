import { Link } from 'react-router-dom';
import Store from 'stores/Store';
import Comp from 'components/Comp';
import Lib from 'lib/Lib';
import Const from 'constants/Const';
import Handler from 'handlers/Handler';

import Style from './Header.module.scss';

function Header() {
  // Store
  const model = new Store().lang((state) => state.model);

  // components
  const { Div } = new Comp().shared.wrapper;
  const { Regular } = new Comp().shared.button;

  return (
    <header>
      <nav>
        <Div className={Style.wrapper}>
          <ul className={Style.listWrapper}>
            <li className={Style.logo}>
              <img src="" alt="" />
            </li>
            <li className={Style.list}>
              <ul className={Style.innerlistWrapper}>
                <li>
                  <Link to={new Const().path.projects}>
                    {new Lib.Str(model.title.projects).getCap()}
                  </Link>
                </li>
                <li className={Style.item}>
                  <Link to={new Const().path.contact}>
                    <Regular type="default" content={new Lib.Str(model.title.contact).getCap()} />
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </Div>
      </nav>
    </header>
  );
}

const mod = {
  f: Header,
  fn: 'Header',
  handler: Handler.Type.Default.log,
};

export default new Handler.Wrapper(mod).sync.wrap();
