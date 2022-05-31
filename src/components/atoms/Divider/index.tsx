import React, { memo } from 'react';
import cns from 'classnames';

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  /**
   * Divider color
   * @default #b00b00
   */
  color?: string;
}

/**
 * Use Divider to separate sections
 */
export const Divider = memo<DividerProps>(({ color = '#b00b00', className, ...props }) => {
  return (
    <hr
      {...props}
      className={cns('block', 'w-full', 'h-[1px]', 'border-none', className)}
      style={{ backgroundColor: color }}
    />
  );
});

Divider.displayName = 'Divider';
