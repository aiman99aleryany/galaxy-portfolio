import Handler from 'handlers/Handler';

function PageContent() {
  return null;
}

function Cv() {
  return <PageContent />;
}

const mod = {
  f: Cv,
  fn: 'Cv',
  handler: Handler.Type.Default.log,
};

export default new Handler.Wrapper(mod).sync.wrap();
