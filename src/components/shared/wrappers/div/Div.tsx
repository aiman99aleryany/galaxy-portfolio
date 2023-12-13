/* eslint-disable no-unneeded-ternary */
import { trim } from 'ramda';
import { ReactNode } from 'react';
import Handler from 'handlers/Handler';

import Style from './Div.module.scss';

interface IProps {
  className: any;
  children: ReactNode;
}

function Div({ className, children }: IProps) {
  return <div className={trim(`${Style.div} ${className ? className : ''}`)}>{children}</div>;
}
const mod = {
  f: Div,
  fn: 'Div',
  handler: Handler.Type.Default.log,
};

export default new Handler.Wrapper(mod).sync.wrap();
