import Handler from 'handlers/Handler';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useScroll() {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => window.scrollTo(0, 0), 200);
  }, [pathname]);

  return null;
}

const mod = {
  f: useScroll,
  fn: 'useScroll',
  handler: Handler.Type.Default.log,
};

export default new Handler.Wrapper(mod).sync.wrap();
