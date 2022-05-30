import * as React from 'react';
import { SvgProps } from '..';

export default function TakedaDoubleArrowUp(props: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 512 512"
      className={props.className}
    >
      <g>
        <path
          className="brightness-[.85]"
          d="M512.6,256.4l-256-256l0,0l-256,256L71,326.7L256.6,141l0,0l185.7,185.7L512.6,256.4z"
        />
        <path
          className="brightness-[.85]"
          d="M512.6,441.3l-256-256l0,0l-256,256L71,511.6L256.6,326l185.7,185.7L512.6,441.3z"
        />
        <g>
          <path d="M442.3,326.7l70.3-70.3l-256-256l0,0V141l0,0L442.3,326.7z" />
          <path d="M256.6,185.3L256.6,185.3l0,140.7l0,0l185.7,185.7l70.3-70.3L256.6,185.3z" />
        </g>
      </g>
    </svg>
  );
}
