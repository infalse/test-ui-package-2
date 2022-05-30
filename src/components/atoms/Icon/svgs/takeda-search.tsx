import * as React from 'react';
import { SvgProps } from '..';

export default function TakedaSearch(props: SvgProps) {
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
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );
}
