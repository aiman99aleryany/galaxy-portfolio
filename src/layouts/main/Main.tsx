import Handler from 'handlers/Handler';
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

function Main({ children }: IProps) {
  return <main>{children}</main>;
}

const mod = {
  f: Main,
  fn: 'Main',
  handler: Handler.Type.Default.log,
};

export default new Handler.Wrapper(mod).sync.wrap();
