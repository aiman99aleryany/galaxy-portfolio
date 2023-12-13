import Handler from 'handlers/Handler';
import Style from './Index.module.scss';

function PageContent() {
  return null;
}

function Index() {
  return <PageContent />;
}

const mod = {
  f: Index,
  fn: 'Index',
  handler: Handler.Type.Default.log,
};

export default new Handler.Wrapper(mod).sync.wrap();
