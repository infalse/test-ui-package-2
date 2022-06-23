import classNames from 'classnames';
import * as React from 'react';
import { SvgProps } from '..';
import { ChevronLeftIcon } from './chevron-left';

export const ChevronRightIcon = ({ className, ...props }: SvgProps) => {
  return <ChevronLeftIcon className={classNames('rotate-180', className)} {...props} />;
};
