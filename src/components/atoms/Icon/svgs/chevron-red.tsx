import React, { memo } from 'react';
import { SvgProps } from '..';

export const ChevronRedIcon = memo((props: SvgProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <g>
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="m255.789062 512 256-256-.027343-.03125-255.972657-255.96875-70.328124 70.328125 185.640624 185.640625.027344.03125-185.667968 185.671875zm0 0"
          fill="#e1242a"
          data-original="#4ed8df"
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="m70.828125 512 256-256-.027344-.03125-255.972656-255.96875-70.328125 70.328125 185.671875 185.671875-185.671875 185.671875zm0 0"
          fill="#e1242a"
          data-original="#4ed8df"
        />
        <g xmlns="http://www.w3.org/2000/svg" fill="#11a9c6">
          <path
            d="m185.460938 441.671875 70.328124 70.328125 256-256-.027343-.03125h-140.660157l.027344.03125zm0 0"
            fill="#bd120a"
            data-original="#11a9c6"
          />
          <path
            d="m326.828125 256-.027344-.03125h-140.660156l.03125.03125-185.671875 185.671875 70.328125 70.328125zm0 0"
            fill="#bd120a"
            data-original="#11a9c6"
          />
        </g>
      </g>
    </svg>
  );
});

ChevronRedIcon.displayName = 'ChevronRed';
