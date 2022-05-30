import * as React from 'react';
import { SvgProps } from '..';

export default function TakedaDoubleArrowDown(props: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
      className={props.className}
    >
      <g>
        <path
          className="brightness-[.85]"
          d="M0.6,255.6l256,256l0,0l256-256l-70.3-70.3L256.7,371l0,0L71,185.3L0.6,255.6z"
        />
        <path
          className="brightness-[.85]"
          d="M0.6,70.7l256,256l0,0l256-256L442.3,0.4L256.6,186L71,0.4L0.6,70.7z"
        />
        <g>
          <path d="M71,185.3L0.6,255.6l256,256l0,0V371l0,0L71,185.3z" />
          <path d="M256.6,326.7L256.6,326.7l0-140.7l0,0L71,0.4L0.6,70.7L256.6,326.7z" />
        </g>
      </g>
    </svg>
  );
}
