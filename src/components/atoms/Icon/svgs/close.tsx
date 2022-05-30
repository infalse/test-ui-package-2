import React, { memo } from 'react';
import { SvgProps } from '..';

const Close = memo<any>((props: SvgProps) => {
  return (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g transform="matrix(1 0 0 1 -1877 -24 )">
        <path
          d="M 20 1.416015625  L 11.416015625 10  L 20 18.583984375  L 18.583984375 20  L 10 11.416015625  L 1.416015625 20  L 0 18.583984375  L 8.583984375 10  L 0 1.416015625  L 1.416015625 0  L 10 8.583984375  L 18.583984375 0  L 20 1.416015625  Z "
          fillRule="nonzero"
          fill="currentColor"
          stroke="none"
          transform="matrix(1 0 0 1 1877 24 )"
        />
      </g>
    </svg>
  );
});

Close.displayName = 'Close';

export default Close;
