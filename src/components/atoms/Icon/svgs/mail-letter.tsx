import React, { memo } from 'react';
import { SvgProps } from '..';

const MailLetter = memo<any>(({ className }: SvgProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 53 37"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="matrix(1 0 0 1 -721 -194 )">
        <path
          d="M 0 2  L 53 2  L 53 35  L 0 35  L 0 2  Z M 49.29931640625 6  L 3.70068359375 6  L 26.5 16.667550223214285  L 49.29931640625 6  Z M 4 31  L 49 31  L 49 8.795758928571429  L 26.5 20.33244977678571  L 4 8.795758928571429  L 4 31  Z "
          fillRule="nonzero"
          fill="currentColor"
          stroke="none"
          transform="matrix(1 0 0 1 721 194 )"
        />
      </g>
    </svg>
  );
});

MailLetter.displayName = 'MailLetter';

export default MailLetter;
