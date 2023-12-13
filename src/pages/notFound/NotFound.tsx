import Handler from 'handlers/Handler';

function PageContent() {
  return <h1>Page not found</h1>;
}

function NotFound() {
  return <PageContent />;
}

const mod = {
  f: NotFound,
  fn: 'NotFound',
  handler: Handler.Type.Default.log,
};

export default new Handler.Wrapper(mod).sync.wrap();
