import React, { memo } from 'react';
import cns from 'classnames';

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  color: string;
}

export const Divider = memo<DividerProps>(
  ({ color = 'red-500', className, ...props }) => {
    return (
      <hr
        {...props}
        className={cns(
          'block',
          'w-full',
          'h-[1px]',
          'border-none',
          `bg-${color}`,
          className
        )}
      />
    );
  }
);

Divider.displayName = 'Divider';
