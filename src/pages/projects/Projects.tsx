import Handler from 'handlers/Handler';

function PageContent() {
  return null;
}

function Projects() {
  return <PageContent />;
}

const mod = {
  f: Projects,
  fn: 'Projects',
  handler: Handler.Type.Default.log,
};

export default new Handler.Wrapper(mod).sync.wrap();
