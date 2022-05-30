import * as React from 'react';

interface Props {
    width?: number | string;
    height?: number | string;
    className?: string;
}

export default function TakedaLink({ className, ...rest}: Props) {
    return (<svg className={className} {...rest} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8 17v-7.586l8.293 8.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-8.293-8.293h7.586c0.552 0 1-0.448 1-1s-0.448-1-1-1h-10c-0.552 0-1 0.448-1 1v10c0 0.552 0.448 1 1 1s1-0.448 1-1z"/>
    </svg>)
}