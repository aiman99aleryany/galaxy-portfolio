import { useState, ElementType } from 'react';
import { equals } from 'ramda';
import Handler from 'handlers/Handler';

import Style from './Swipe.module.scss';

interface IProps {
  type: 'default' | 'fantastic' | 'bombastic';
  Icon: ElementType;
  option1: string;
  option2: string;
}

function Swipe({ type, Icon, option1, option2 }: IProps) {
  const [styleDefault] = useState(`${equals(type, 'default') ? Style.default : ''}`);
  const [styleFantastic] = useState(`${equals(type, 'fantastic') ? Style.fantastic : ''}`);
  const [styleBombastic] = useState(`${equals(type, 'bombastic') ? Style.bombastic : ''}`);

  return (
    <button type="button" className={`${styleDefault}${styleFantastic}${styleBombastic}`}>
      <div className={Style.iconWrapper}>
        <Icon className={Style.icon} />
      </div>
      <div className={Style.option1Wrapper}>
        <span className={Style.option1}>{option1}</span>
      </div>
      <div className={Style.option2Wrapper}>
        <span className={Style.option2}>{option2}</span>
      </div>
    </button>
  );
}

const mod = {
  f: Swipe,
  fn: 'Swipe',
  handler: Handler.Type.Default.log,
};

export default new Handler.Wrapper(mod).sync.wrap();
