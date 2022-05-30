import * as React from 'react';
import { SvgProps } from '..';

export default function TakedaRightArrow(props: SvgProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={props.className}
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {' '}
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
}
