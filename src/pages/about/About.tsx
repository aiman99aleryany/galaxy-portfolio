import Handler from 'handlers/Handler';

function PageContent() {
  return <h1>About page</h1>;
}

function About() {
  return <PageContent />;
}

const mod = {
  f: About,
  fn: 'About',
  handler: Handler.Type.Default.log,
};

export default new Handler.Wrapper(mod).sync.wrap();
