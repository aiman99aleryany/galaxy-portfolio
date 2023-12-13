import { equals } from 'ramda';
import { ElementType, useState } from 'react';
import Handler from 'handlers/Handler';

import Style from './Regular.module.scss';

interface IProps {
  type: 'default' | 'fantastic' | 'bombastic';
  Icon?: ElementType;
  content: string;
  onClick: () => void;
}

function Regular({ Icon, content, type, onClick }: IProps) {
  const [styleDefault] = useState(`${equals(type, 'default') ? Style.default : ''}`);
  const [styleFantastic] = useState(`${equals(type, 'fantastic') ? Style.fantastic : ''}`);
  const [styleBombastic] = useState(`${equals(type, 'bombastic') ? Style.bombastic : ''}`);

  return (
    <button
      type="button"
      className={`${styleDefault} ${styleFantastic} ${styleBombastic}`}
      onClick={onClick}
    >
      {Icon && (
        <div className={Style.icon}>
          <Icon />
        </div>
      )}
      <div className={Style.content}>{content}</div>
    </button>
  );
}

Regular.defaultProps = {
  Icon: null,
};

const mod = {
  f: Regular,
  fn: 'Regular',
  handler: Handler.Type.Default.log,
};

export default new Handler.Wrapper(mod).sync.wrap();
