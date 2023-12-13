import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import Comp from 'components/Comp';
import Layout from 'layouts/Layout';
import Store from 'stores/Store';
import Handler from 'handlers/Handler';
import Hook from 'hooks/Hook';

function Structure() {
  const title = new Store().shared((state) => state.title);
  const model = new Store().lang((state) => state.model);

  // Layouts
  const { Header, Main, Footer } = new Layout();

  // components
  const { Background, Stars } = new Comp().shared.animation;

  // hooks
  new Hook().applyTitles();
  new Hook().applyScrolling();

  return (
    <HelmetProvider>
      <Helmet>
        <html dir={model.dir} lang={model.lang} />
        <title>{title}</title>
      </Helmet>
      <Background />
      <Stars />
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </HelmetProvider>
  );
}

const mod = {
  f: Structure,
  fn: 'Structure',
  handler: Handler.Type.Default.log,
};

export default new Handler.Wrapper(mod).sync.wrap();
