import React, { memo } from 'react';
import cns from 'classnames';

import ChevronLeft from './chevron_left';
import { SvgProps } from '..';

const ChevronRight = memo<any>(({ className, ...props }: SvgProps) => {
  return <ChevronLeft className={cns('rotate-180', className)} {...props} />;
});

ChevronRight.displayName = 'ChevronRight';

export default ChevronRight;
