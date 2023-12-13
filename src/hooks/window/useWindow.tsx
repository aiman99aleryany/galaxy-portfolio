import Handler from 'handlers/Handler';
import { useEffect, useState } from 'react';

function useWindow() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const applyWindowSize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', applyWindowSize);
    return () => window.removeEventListener('resize', applyWindowSize);
  }, []);

  return [windowWidth];
}

const mod = {
  f: useWindow,
  fn: 'useWindow',
  handler: Handler.Type.Default.log,
};

export default new Handler.Wrapper(mod).sync.wrap();
