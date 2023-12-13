import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { equals } from 'ramda';
import Lib from 'lib/Lib';
import Page from 'pages/Page';
import Store from 'stores/Store';
import Handler from 'handlers/Handler';

function useTitle() {
  const { pathname } = useLocation();
  const model = new Store().lang((state) => state.model);
  const setTitle = new Store().shared((state) => state.setTitle);
  useEffect(() => {
    new Page(model.lang).pagesAsArray.map((page) =>
      equals(pathname, page.path) ? setTitle(new Lib.Str(page.title).getCap()) : null
    );
  }, [setTitle, pathname, model.lang]);

  return null;
}

const mod = {
  f: useTitle,
  fn: 'useTitle',
  handler: Handler.Type.Default.log,
};

export default new Handler.Wrapper(mod).sync.wrap();
