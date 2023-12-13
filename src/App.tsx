import 'styles/resets.scss';
import { StrictMode } from 'react';
import Router from 'Router';
import { RouterProvider } from 'react-router-dom';
import Handler from 'handlers/Handler';

function App() {
  return (
    <StrictMode>
      <RouterProvider router={Router} />
    </StrictMode>
  );
}

const mod = {
  f: App,
  fn: 'App',
  handler: Handler.Type.Default.log,
};

export default new Handler.Wrapper(mod).sync.wrap();
