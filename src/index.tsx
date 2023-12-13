import { Root, createRoot } from 'react-dom/client';
import { isNil } from 'ramda';
import App from 'App';
import Config from 'config/Config';
import Handler from 'handlers/Handler';

function index() {
  const container: Element | null = document.querySelector(new Config().appTag);
  if (isNil(container)) throw new Error('App Node not found in DOM');
  const root: Root = createRoot(container);
  const app = <App />;
  return { root, app };
}

const mod = {
  f: index,
  fn: 'index',
  handler: Handler.Type.Default.log,
};

export default new Handler.Wrapper(mod).sync.wrap();
