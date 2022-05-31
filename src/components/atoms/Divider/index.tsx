import React, { memo } from 'react';
import cns from 'classnames';

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  /**
   * Divider color
   * @default #bada55
   */
  color?: string;
}

/**
 * Use Divider to separate sections
 */
export const Divider = memo<DividerProps>(({ color = '#bada55', className, ...props }) => {
  return (
    <hr
      {...props}
      className={cns('block', 'w-full', 'h-[1px]', 'border-none', className)}
      style={{ backgroundColor: color }}
    />
  );
});

Divider.displayName = 'Divider';
