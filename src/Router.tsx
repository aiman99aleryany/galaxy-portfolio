import Config from 'config/Config';
import { createBrowserRouter } from 'react-router-dom';
import Page from 'pages/Page';
import Const from 'constants/Const';
import Structure from 'Structure';

const Router = createBrowserRouter([
  {
    path: new Const().path.index,
    element: <Structure />,
    children: new Page(new Config().defaultLang).pagesAsArray,
  },
]);

export default Router;
