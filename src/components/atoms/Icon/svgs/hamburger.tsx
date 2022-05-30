import React, { memo } from 'react';
import { SvgProps } from '..';

const Hamburger = memo<any>((props: SvgProps) => {
  return (
    <svg viewBox="0 0 28 22" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g transform="matrix(1 0 0 1 -1198 -27 )">
        <path
          d="M 28 3.1250000000000004  L 0 3.1250000000000004  L 0 1  L 28 1  L 28 3.1250000000000004  Z M 28 12  L 0 12  L 0 10  L 28 10  L 28 12  Z M 28 21  L 0 21  L 0 18.875  L 28 18.875  L 28 21  Z "
          fillRule="nonzero"
          fill="currentColor"
          stroke="none"
          transform="matrix(1 0 0 1 1198 27 )"
        />
      </g>
    </svg>
  );
});

Hamburger.displayName = 'Hamburger';

export default Hamburger;
