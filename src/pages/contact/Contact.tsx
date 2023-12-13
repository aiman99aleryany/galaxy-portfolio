import Handler from 'handlers/Handler';

function PageContent() {
  return <h1>Contact page</h1>;
}

function Contact() {
  return <PageContent />;
}

const mod = {
  f: Contact,
  fn: 'Contact',
  handler: Handler.Type.Default.log,
};

export default new Handler.Wrapper(mod).sync.wrap();
