import { ReactNode } from 'react';
import Handler from 'handlers/Handler';

import Style from './Section.module.scss';

interface IProps {
  className: any;
  children: ReactNode;
}

function Section({ className, children }: IProps) {
  return <section className={`${Style.section}${className ? className : ''}`}>{children}</section>;
}

const mod = {
  f: Section,
  fn: 'Section',
  handler: Handler.Type.Default.log,
};

export default new Handler.Wrapper(mod).sync.wrap();
